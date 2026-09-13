"""Daily public-data refresh. Standard library only; publish only a complete valid snapshot."""
import csv
import calendar
import io
import json
import math
import os
import subprocess
from concurrent.futures import ThreadPoolExecutor
from datetime import date, datetime, timedelta, timezone
from html.parser import HTMLParser
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
INDICES = [
    ('nasdaq', 'NASDAQCOM', 'Nasdaq Composite', '納斯達克綜合指數', '#3975ed'),
    ('sp500', 'SP500', 'S&P 500', '標普 500', '#a16ae8'),
    ('dow', 'DJIA', 'Dow Jones', '道瓊斯', '#d69635'),
]
STOCKS = [('AAPL','Apple','蘋果'),('MSFT','Microsoft','微軟'),('NVDA','NVIDIA','英偉達'),('GOOGL','Alphabet','Alphabet'),('AMZN','Amazon','亞馬遜'),('META','Meta','Meta'),('TSLA','Tesla','特斯拉'),('AVGO','Broadcom','博通'),('JPM','JPMorgan Chase','摩根大通'),('V','Visa','Visa'),('UNH','UnitedHealth','聯合健康'),('XOM','Exxon Mobil','埃克森美孚')]
AI_URL = 'https://stockanalysis.com/list/ai-stocks/'
AI_GROUPS = {
    'chips': 'NVDA TSM AVGO MU AMD ASML ARM KLAC MRVL CDNS SNPS TER NXPI ALAB',
    'platforms': 'GOOGL MSFT AMZN META ORCL IBM',
    'software': 'PLTR PANW SAP CRWD NOW SNOW ACN ADBE',
    'infrastructure': 'DELL ANET CRWV',
    'robotics': 'ISRG TSLA ROK',
}

def fetch(url):
    # Low-frequency public requests, no credentials or anti-bot workarounds.
    response=subprocess.run(['curl','--fail','--location','--silent','--show-error','--max-time','30','--retry','1','--retry-delay','2',url],check=True,capture_output=True)
    return response.stdout.decode('utf-8-sig')

class TableRows(HTMLParser):
    def __init__(self):
        super().__init__(); self.rows=[]; self.row=None; self.cell=None
    def handle_starttag(self, tag, attrs):
        if tag=='tr': self.row=[]
        elif tag in ('td','th') and self.row is not None: self.cell=[]
    def handle_data(self, data):
        if self.cell is not None: self.cell.append(data)
    def handle_endtag(self, tag):
        if tag in ('td','th') and self.cell is not None:
            self.row.append(''.join(self.cell).strip()); self.cell=None
        elif tag=='tr' and self.row is not None:
            self.rows.append(self.row); self.row=None

def stock_rows(html, cutoff):
    parser=TableRows(); parser.feed(html); result=[]; columns=None
    for row in parser.rows:
        if row and row[0]=='Date' and 'Close' in row: columns=row; continue
        if not columns or len(row)!=len(columns): continue
        try:
            day=datetime.strptime(row[0],'%b %d, %Y').date()
            value=float(row[columns.index('Close')].replace(',',''))
            if day<=cutoff and math.isfinite(value) and value>0: result.append({'date':day.isoformat(),'value':value})
        except (ValueError,IndexError): continue
    result=sorted({r['date']:r for r in result}.values(),key=lambda r:r['date'])
    if len(result)<20: raise ValueError('History table missing or too short; refusing a partial stock snapshot')
    return result

def ai_universe(html):
    parser=TableRows(); parser.feed(html); items=[]; columns=None
    for row in parser.rows:
        if 'Symbol' in row and 'Market Cap' in row: columns=row; continue
        if not columns or len(row)!=len(columns): continue
        try:
            symbol=row[columns.index('Symbol')]
            raw=row[columns.index('Market Cap')].replace(',','')
            cap=float(raw[:-1])*{'T':1e12,'B':1e9,'M':1e6}[raw[-1]]
            name=row[columns.index('Company Name')]
            if not symbol.isalpha() or not math.isfinite(cap) or cap<=0: continue
            group=next((key for key,tickers in AI_GROUPS.items() if symbol in tickers.split()),'other')
            items.append(dict(symbol=symbol,name=name,zh=name,marketCap=cap,group=group))
        except (ValueError,KeyError,IndexError): continue
    items=sorted({s['symbol']:s for s in items}.values(),key=lambda s:s['marketCap'],reverse=True)[:30]
    if len(items)!=30: raise ValueError('AI ranking missing; refusing an incomplete top 30')
    return items

def validate(snapshot):
    if len(snapshot['series'])!=3 or len(snapshot['stocks'])!=12 or len(snapshot.get('aiStocks',[]))!=30: raise ValueError('Incomplete universe')
    ai=snapshot['aiStocks']
    if len({s['symbol'] for s in ai})!=30 or any(not math.isfinite(s['marketCap']) or s['marketCap']<=0 for s in ai): raise ValueError('Invalid AI ranking')
    if any(ai[i]['marketCap']<ai[i+1]['marketCap'] for i in range(29)): raise ValueError('AI ranking is not ordered')
    for group, minimum in [(snapshot['series'],100),(snapshot['stocks'],20),(ai,20)]:
        reference=None
        for series in group:
            rows=series['points']; dates=[r['date'] for r in rows]
            if len(rows)<minimum or dates!=sorted(set(dates)): raise ValueError('Invalid dates')
            if any(not math.isfinite(r['value']) or r['value']<=0 for r in rows): raise ValueError('Invalid price')
            if reference is not None and dates!=reference: raise ValueError('Unaligned dates')
            reference=dates
    if any(s['points'][-1]['date']!=snapshot['asOf'] for s in snapshot['series']): raise ValueError('Index date mismatch')
    if any(s['points'][-1]['date']!=snapshot['stocksAsOf'] for s in snapshot['stocks']): raise ValueError('Stock date mismatch')
    if any(s['points'][-1]['date']!=snapshot['aiAsOf'] for s in ai): raise ValueError('AI stock date mismatch')

def align(items):
    dates=set.intersection(*[set(p['date'] for p in s['points']) for s in items])
    for s in items: s['points']=[p for p in s['points'] if p['date'] in dates]
    return max(dates)

def build(now=None):
    now=now or datetime.now(timezone.utc)
    # Always exclude the current New York date, including partial sessions and early closes.
    cutoff=now.astimezone(ZoneInfo('America/New_York')).date()-timedelta(days=1)
    year,month=divmod(cutoff.year*12+cutoff.month-1-6,12); month+=1
    start=date(year,month,min(cutoff.day,calendar.monthrange(year,month)[1]))
    def index_job(spec):
        ident,code,name,zh,color=spec
        url=f'https://fred.stlouisfed.org/graph/fredgraph.csv?cosd={start}&coed={cutoff}&id={code}'
        rows=[]
        for row in csv.DictReader(io.StringIO(fetch(url))):
            raw=row.get(code,''); day=row.get('observation_date',row.get('DATE',''))
            if raw in ('','.'): continue
            value=float(raw)
            if start.isoformat()<=day<=cutoff.isoformat(): rows.append({'date':day,'value':value})
        return dict(id=ident,code=code,name=name,zh=zh,color=color,url=f'https://fred.stlouisfed.org/series/{code}',points=rows)
    def stock_job(spec):
        symbol,name,zh=spec; url=f'https://stockanalysis.com/stocks/{symbol.lower()}/history/'
        return dict(symbol=symbol,name=name,zh=zh,url=url,points=stock_rows(fetch(url),cutoff))
    ranking=ai_universe(fetch(AI_URL))
    specs={s[0]:s for s in STOCKS}
    for s in ranking: specs.setdefault(s['symbol'],(s['symbol'],s['name'],s['zh']))
    with ThreadPoolExecutor(max_workers=3) as pool:
        series=list(pool.map(index_job,INDICES))
        histories={s['symbol']:s for s in pool.map(stock_job,specs.values())}
    stocks=[dict(histories[s[0]]) for s in STOCKS]
    ai_stocks=[dict(histories[s['symbol']],marketCap=s['marketCap'],group=s['group']) for s in ranking]
    as_of=align(series); stocks_as_of=align(stocks); ai_as_of=align(ai_stocks)
    # Holidays are taken from actual published observations, never generated weekday prices.
    for last in [as_of,stocks_as_of,ai_as_of]:
        if (cutoff-date.fromisoformat(last)).days>6: raise ValueError('Upstream data is stale; keeping the existing publication')
    snapshot=dict(retrieved=now.date().isoformat(),updatedAt=now.isoformat(),asOf=as_of,stocksAsOf=stocks_as_of,aiAsOf=ai_as_of,aiRankingAt=now.isoformat(),aiUniverseUrl=AI_URL,provider='FRED / Stock Analysis',stockProvider='Stock Analysis / S&P Global Market Intelligence',series=series,stocks=stocks,aiStocks=ai_stocks)
    validate(snapshot); return snapshot

def publish(snapshot):
    validate(snapshot)
    target=ROOT/'market-data.js'
    text='// Refreshed from public daily closes. Current New York session excluded.\nwindow.MARKET_DATA = '+json.dumps(snapshot,ensure_ascii=False,separators=(',',':'))+';\n'
    temporary=target.with_suffix('.tmp'); temporary.write_text(text,encoding='utf-8'); os.replace(temporary,target)

if __name__=='__main__':
    snapshot=build(); publish(snapshot)
    print(f"Updated: indices {snapshot['asOf']}; stocks {snapshot['stocksAsOf']}; AI {snapshot['aiAsOf']}; 12 overview stocks + 30 AI stocks.")
