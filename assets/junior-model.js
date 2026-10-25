/* Pure P3 models. Quantities on screen are models, never physical measurements. */
(function(root){'use strict';
 const integer=(n,min=0,max=100000)=>{if(!Number.isInteger(n)||n<min||n>max)throw new RangeError('整數超出模型範圍');return n;};
 const multiply=(a,b)=>{integer(a);integer(b);let carry=0;const columns=String(a).split('').reverse().map((v,i)=>{const raw=+v*b+carry,incoming=carry;carry=Math.floor(raw/10);return {place:10**i,digit:+v,incoming,raw,result:raw%10,carry};});return {product:a*b,columns,finalCarry:carry};};
 const divide=(n,d)=>{integer(n);integer(d,1);return {q:Math.floor(n/d),r:n%d,ceil:Math.ceil(n/d)};};
 function longDivide(n,d){integer(n);integer(d,1,9);let remainder=0;const digits=String(n);return [...digits].map((digit,i)=>{const incoming=remainder,available=10*incoming+Number(digit),q=Math.floor(available/d);remainder=available%d;return {place:10**(digits.length-i-1),digit:Number(digit),incoming,available,q,remainder};});}
 function payments(target,denoms=[10,20,50]){integer(target);const out=[];function go(i,rest,counts){if(i===denoms.length){if(!rest)out.push(counts.slice());return;}for(let n=0;n*denoms[i]<=rest;n++)go(i+1,rest-n*denoms[i],[...counts,n]);}go(0,target,[]);return out;}
 function perimeter(cells){const set=new Set(cells.map(p=>p.join(',')));let p=0;for(const [x,y]of cells)for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1]])if(!set.has([x+dx,y+dy].join(',')))p++;return p;}
 function rectangles(p){integer(p,4,200);const out=[];for(let w=1;w<=p/4;w++){const l=p/2-w;if(Number.isInteger(l))out.push({l,w,p:2*(l+w),area:l*w});}return out;}
 const time=n=>{integer(n,0,10000);const days=Math.floor(n/1440),m=n%1440;return {days,hour:Math.floor(m/60),minute:m%60,label:(days?'翌日＋'+(days-1)+'天 ':'')+String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0')};};
 const fractionCompare=(a,b,c,d)=>{integer(a);integer(b,1);integer(c);integer(d,1);return Math.sign(a*d-c*b);};
 const views=heights=>({front:[0,1].map(x=>Math.max(heights[x],heights[x+2])),side:[0,1].map(y=>Math.max(heights[y*2],heights[y*2+1])),top:heights.map(n=>n>0?1:0),total:heights.reduce((a,b)=>a+b,0)});
 const sample=(red,blue,u)=>{integer(red);integer(blue);if(red+blue===0||u<0||u>=1)throw new RangeError('抽樣條件錯誤');return u*(red+blue)<red?'紅':'藍';};
 const api={multiply,divide,longDivide,payments,perimeter,rectangles,time,fractionCompare,views,sample};
 if(typeof module==='object'&&module.exports)module.exports=api;else root.JuniorModel=api;
})(typeof window==='object'?window:globalThis);
