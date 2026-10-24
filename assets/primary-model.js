(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.PrimaryModel=factory();})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 function groups(n,size){if(!Number.isInteger(n)||n<0||!Number.isInteger(size)||size<1)throw new RangeError('數量與每組數須為非負／正整數');return {full:Math.floor(n/size),rest:n%size};}
 function neighbors(n){if(!Number.isInteger(n)||n<1||n>100)throw new RangeError('百數表範圍為1至100');return {left:(n-1)%10?n-1:null,right:n%10?n+1:null,up:n>10?n-10:null,down:n<=90?n+10:null};}
 function clock(minutes){return {hourAngle:(minutes%720)/2,minuteAngle:(minutes%60)*6,hour:Math.floor(minutes/60)%12||12,minute:minutes%60};}
 function weekday(day){return ((day-3)%7+7)%7;}
 function minCoins(total,coins=[1,2,5]){const d=Array(total+1).fill(Infinity);d[0]=0;for(let t=1;t<=total;t++)for(const c of coins)if(c<=t)d[t]=Math.min(d[t],d[t-c]+1);return d[total];}
 function candidates(grid,index){const r=Math.floor(index/4),c=index%4,used=new Set();for(let j=0;j<16;j++)if(j!==index&&(Math.floor(j/4)===r||j%4===c||(Math.floor(j/8)===Math.floor(r/2)&&Math.floor((j%4)/2)===Math.floor(c/2))))if(grid[j])used.add(grid[j]);return [1,2,3,4].filter(v=>!used.has(v));}
 function solutions(g,limit=2){const grid=g.slice();let count=0;function visit(){if(count>=limit)return;let at=-1,options=null;for(let i=0;i<16;i++)if(!grid[i]){const p=candidates(grid,i);if(!p.length)return;if(!options||p.length<options.length){at=i;options=p;}}if(at<0){if(grid.every((v,i)=>candidates(grid,i).includes(v)))count++;return;}for(const v of options){grid[at]=v;visit();grid[at]=0;}}visit();return count;}
 function polygonArea(points){return Math.abs(points.reduce((s,p,i)=>{const q=points[(i+1)%points.length];return s+p[0]*q[1]-q[0]*p[1];},0))/2;}
 const sudoku=[1,2,0,4,3,0,1,0,2,1,0,3,0,3,2,1];
 const tangram=[[[0,0],[4,0],[2,2]],[[0,0],[2,2],[0,4]],[[2,4],[4,2],[4,4]],[[1,3],[2,2],[3,3],[2,4]],[[4,0],[4,2],[3,3],[3,1]],[[2,2],[3,1],[3,3]],[[0,4],[1,3],[2,4]]];
 return {groups,neighbors,clock,weekday,minCoins,candidates,solutions,polygonArea,sudoku,tangram};
});
