'use strict';
const MarketMath={
  period(points,months,asOf){const date=new Date(asOf+'T00:00:00Z');if(months===1){date.setUTCDate(date.getUTCDate()-29);}else{const day=date.getUTCDate();date.setUTCDate(1);date.setUTCMonth(date.getUTCMonth()-months);const last=new Date(Date.UTC(date.getUTCFullYear(),date.getUTCMonth()+1,0)).getUTCDate();date.setUTCDate(Math.min(day,last));}const start=date.toISOString().slice(0,10);return points.filter(p=>p.date>=start&&p.date<=asOf);},
  change(first,last){return(last/first-1)*100;},
  stats(points){let peak=points[0].value,drawdown=0,up=0;const daily=[];for(let i=0;i<points.length;i++){peak=Math.max(peak,points[i].value);drawdown=Math.min(drawdown,(points[i].value/peak-1)*100);if(i){const move=this.change(points[i-1].value,points[i].value);daily.push({date:points[i].date,value:move});if(move>0)up++;}}return{first:points[0],last:points.at(-1),change:this.change(points[0].value,points.at(-1).value),daily,up,drawdown,high:Math.max(...points.map(p=>p.value)),low:Math.min(...points.map(p=>p.value))};},
  weeks(points){const groups=new Map();for(const p of points){const d=new Date(p.date+'T00:00:00Z');d.setUTCDate(d.getUTCDate()-(d.getUTCDay()+6)%7);const key=d.toISOString().slice(0,10);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(p);}let prior=points[0].value;return [...groups.values()].map((g,i)=>{const end=g.at(-1),value=this.change(prior,end.value),start=g[0].date;prior=end.value;return{date:end.date,start,value,partial:i===0||g.length<5};});}
};
if(typeof window!=='undefined')window.MarketMath=MarketMath;
if(typeof module!=='undefined')module.exports=MarketMath;
