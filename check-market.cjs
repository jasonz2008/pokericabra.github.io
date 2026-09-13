const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const context={window:{}};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'market-data.js'),'utf8'),context);const data=context.window.MARKET_DATA,M=require('./market-model.js');
assert.equal(data.series.length,3);assert.equal(data.stocks.length,12);assert.equal(data.aiStocks.length,30);
assert.equal(new Set(data.aiStocks.map(s=>s.symbol)).size,30);
assert.ok(data.aiUniverseUrl.endsWith('/list/ai-stocks/'));
for(let i=0;i<30;i++){assert.ok(data.aiStocks[i].marketCap>0);if(i)assert.ok(data.aiStocks[i-1].marketCap>=data.aiStocks[i].marketCap);assert.equal(data.aiStocks[i].points.at(-1).date,data.aiAsOf);assert.equal(data.aiStocks[i].points.map(p=>p.date).join(','),data.aiStocks[0].points.map(p=>p.date).join(','));}
Object.assign(context,{MARKET_DATA:data,MarketMath:M});vm.runInNewContext(fs.readFileSync(path.join(__dirname,'ai-dashboard.js'),'utf8'),context);
const basket=context.window.AIDashboard.metrics(data.aiStocks,30);
assert.equal(basket.basket[0].value,100);assert.ok(basket.up+basket.down<=30);
assert.ok(Math.abs(basket.change-basket.rows.reduce((n,s)=>n+s.change,0)/30)<1e-9);
assert.ok(basket.basket.length>=15);assert.ok((Date.parse(data.aiAsOf)-Date.parse(basket.basket[0].date))/86400000<=29);
for(const[group,minimum,asOf]of[[data.series,100,data.asOf],[data.stocks,20,data.stocksAsOf]])for(const s of group){assert.ok(s.points.length>=minimum);assert.equal(s.points.at(-1).date,asOf);assert.equal(s.points.map(p=>p.date).join(','),group[0].points.map(p=>p.date).join(','));for(let i=0;i<s.points.length;i++){assert.ok(Number.isFinite(s.points[i].value)&&s.points[i].value>0);if(i)assert.ok(s.points[i].date>s.points[i-1].date);}for(const range of(group===data.series?[1,3,6]:[1])){const rows=M.period(s.points,range,asOf),st=M.stats(rows),weeks=M.weeks(rows);assert.ok(st.drawdown<=0&&st.low<=st.last.value&&st.high>=st.last.value);assert.ok(Math.abs((weeks.reduce((n,w)=>n*(1+w.value/100),1)-1)*100-st.change)<1e-9);if(range===1){const span=(Date.parse(asOf)-Date.parse(rows[0].date))/86400000;assert.ok(span<=29);assert.ok(rows.length>=15);}}}
const fixture=[100,120,90,99].map((value,i)=>({date:'2026-01-0'+(i+1),value}));assert.equal(M.stats(fixture).drawdown,-25);assert.ok(Math.abs(M.stats(fixture).change+1)<1e-10);
const boundary=['2026-01-30','2026-01-31','2026-02-01','2026-03-01'].map(date=>({date,value:100}));assert.equal(M.period(boundary,1,'2026-03-01')[0].date,'2026-01-31');
console.log('PASS: 3 indices, 12 overview stocks, 30 AI stocks, equal-weight basket, aligned dates, positive prices, rolling 30 calendar days, returns, weekly compounding and drawdown.');
