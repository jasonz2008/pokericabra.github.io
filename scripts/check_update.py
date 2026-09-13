"""One offline check for parsing, incomplete-session exclusion and atomic failure behavior."""
import importlib.util
import tempfile
from datetime import date
from pathlib import Path
spec=importlib.util.spec_from_file_location('update_market',Path(__file__).with_name('update_market.py')); module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
rows=''.join(f'<tr><td>Sep {day}, 2026</td><td>{100+day}</td></tr>' for day in range(1,26))
html='<table><tr><th>Date</th><th>Close</th></tr>'+rows+'</table>'
parsed=module.stock_rows(html,date(2026,9,24));assert len(parsed)==24;assert parsed[-1]=={'date':'2026-09-24','value':124}
try: module.stock_rows('<p>Unavailable</p>',date(2026,9,24));raise AssertionError('Invalid source accepted')
except ValueError: pass
with tempfile.TemporaryDirectory() as folder:
    module.ROOT=Path(folder); target=module.ROOT/'market-data.js';target.write_text('last valid snapshot')
    try: module.publish({'series':[],'stocks':[]});raise AssertionError('Invalid update accepted')
    except ValueError: pass
    assert target.read_text()=='last valid snapshot'
print('PASS: public table parser, current-session cutoff and invalid-update preservation.')

ranking='<table><tr><th>Symbol</th><th>Company Name</th><th>Market Cap</th></tr>'+''.join(f'<tr><td>A{chr(65+i)}</td><td>AI company {i}</td><td>{i+1}B</td></tr>' for i in range(26))+''.join(f'<tr><td>B{chr(65+i)}</td><td>AI company {26+i}</td><td>{27+i}B</td></tr>' for i in range(6))+'</table>'
universe=module.ai_universe(ranking);assert len(universe)==30;assert universe[0]['marketCap']==32e9;assert universe[-1]['marketCap']==3e9
try: module.ai_universe('<p>No data</p>');raise AssertionError('Incomplete ranking accepted')
except ValueError: pass
print('PASS: AI-list top 30 selection, descending market-cap order and incomplete-source rejection.')
