const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm'),cp=require('node:child_process');
const M=require('../assets/junior-model.js'),data=require('../lessons/junior/lessons.json');
test('30份各12頁，六步、兩道原題、原應用與週次入口一一對應',()=>{
 assert.equal(data.length,30);const manifest=require('../junior/manifest.json');assert.equal(manifest.reduce((n,l)=>n+l.pages,0),360);
 const tokens=new Set();
 for(const l of data){const folder='junior/week'+String(l.week).padStart(2,'0'),html=fs.readFileSync(folder+'/index.html','utf8'),ctx={window:{}};vm.runInNewContext(fs.readFileSync(folder+'/ch1.js','utf8'),ctx);const slides=ctx.window.DECK[0].slides;
  assert.equal(slides.length,12);assert.equal(new Set(slides.map(s=>s.id)).size,12);assert.deepEqual([...new Set(slides.map(s=>s.phase))],[0,1,2,3,4,5]);
  assert.equal(slides[0].prompt,l.life);assert.equal(slides[1].prompt,l.guess);assert.equal(slides[6].prompt,l.basic[0]);assert.equal(slides[7].prompt,l.basic[1]);assert.equal(slides[10].prompt,l.apply);assert.equal(slides[9].prompt,l.counter);
  assert.ok(slides[2].instructions.length===3);assert.ok(slides.filter(s=>s.kind==='junior').length===5);assert.doesNotMatch(html,/href="\.\.\/"/);
  const token=html.match(/window.CLASSROOM_ENTRY="([a-f0-9]+)"/)[1];tokens.add(token);
  const check=cp.spawnSync(process.execPath,['scripts/verify_deck.js',folder,'--quiet'],{encoding:'utf8'});assert.equal(check.status,0,check.stdout+check.stderr);
 }
 assert.equal(tokens.size,30);
});
test('連續進位保留位值、除法含商中零及餘數反查',()=>{
 for(const [a,b] of [[24,3],[206,4],[158,6],[306,5],[598,4]]){const m=M.multiply(a,b);assert.equal(m.product,a*b);assert.equal(m.columns.reduce((s,c)=>s+c.result*c.place,0)+m.finalCarry*10**m.columns.length,a*b);}
 assert.equal(M.multiply(306,5).columns[1].incoming,3);
 for(const [n,d,q,r]of [[306,3,102,0],[408,4,102,0],[420,4,105,0],[816,4,204,0],[43,6,7,1],[58,8,7,2]]){assert.deepEqual(M.divide(n,d),{q,r,ceil:q+(r?1:0)});assert.equal(q*d+r,n);}
 assert.deepEqual(M.longDivide(420,4).map(s=>s.q),[1,0,5]);assert.equal(M.longDivide(420,4)[2].incoming,2);assert.throws(()=>M.divide(10,0));
});
test('付款方案不重複，拼接扣共用邊，同周界逐一列全整數方案',()=>{
 const p=M.payments(80);assert.equal(p.length,7);assert.equal(Math.min(...p.map(a=>a.reduce((x,y)=>x+y))),3);for(const a of p)assert.equal(a[0]*10+a[1]*20+a[2]*50,80);
 assert.equal(M.perimeter([[0,0],[1,0]]),6);assert.equal(M.perimeter([[0,0],[1,0],[2,0],[3,0]]),10);assert.equal(M.perimeter([[0,0],[1,0],[0,1],[1,1]]),8);
 assert.deepEqual(M.rectangles(16).map(p=>[p.l,p.w,p.area]),[[7,1,7],[6,2,12],[5,3,15],[4,4,16]]);
});
test('時間以60進位，分數用整數交叉比較，視圖不能唯一決定總數',()=>{
 assert.equal(M.time(565+40).label,'10:05');assert.equal(M.time(890+35).label,'15:25');assert.equal(910-825,85);
 assert.equal(M.fractionCompare(4,7,4,9),1);assert.equal(M.fractionCompare(3,8,5,8),-1);assert.equal(M.fractionCompare(1,2,2,4),0);
 const a=M.views([1,1,0,0]),b=M.views([1,1,1,1]);assert.deepEqual(a.front,b.front);assert.notEqual(a.total,b.total);assert.deepEqual(M.views([1,1,2,0]).front,[2,1]);
});
test('摸珠保留不可能與可能，無作答儲存、上傳或匯出',()=>{
 assert.equal(M.sample(3,1,0),'紅');assert.equal(M.sample(3,1,.9),'藍');assert.equal(M.sample(0,8,0),'藍');assert.throws(()=>M.sample(0,0,.5));
 for(const f of ['junior.js','junior-access.js','junior-teacher.js','junior-share.js'])assert.doesNotMatch(fs.readFileSync('assets/'+f,'utf8'),/localStorage|sessionStorage|indexedDB|createObjectURL|\.download\s*=|fetch\(/);
});
