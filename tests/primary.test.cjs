const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),cp=require('node:child_process');
const crypto=require('node:crypto');
const M=require('../assets/primary-model.js'),root=path.resolve(__dirname,'..');
test('30份工作紙各有獨立10頁，完整六步、兩題原練習及適齡操作',()=>{
 const lessons=JSON.parse(fs.readFileSync(path.join(root,'lessons/primary/lessons.json'),'utf8'));
 const manifest=JSON.parse(fs.readFileSync(path.join(root,'primary/manifest.json'),'utf8'));
 const hash=crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'lessons/primary/lessons.json'),'utf8').replace(/\r\n/g,'\n'));
 for(const f of ['style.css','inquiry.css','primary.css','svg.js','inquiry-model.js','primary-model.js','primary.js','inquiry.js','engine.js'])hash.update(fs.readFileSync(path.join(root,'assets',f),'utf8').replace(/\r\n/g,'\n'));
 const version=hash.digest('hex').slice(0,12);
 assert.equal(lessons.length,30);assert.equal(manifest.length,30);
 assert.ok(new Set(lessons.map(l=>l.app.type)).size>=25);
 for(const [i,l] of lessons.entries()){
  assert.equal(l.week,i+1);assert.match(l.source,new RegExp('第'+String(i+1).padStart(2,'0')+'週'));
  const folder='primary/week'+String(i+1).padStart(2,'0'),ctx={window:{}};
  const html=fs.readFileSync(path.join(root,folder,'index.html'),'utf8');
  assert.ok([...html.matchAll(/\?v=([a-f0-9]+)/g)].every(m=>m[1]===version),'小一課程版本過期，請執行 build_primary.py');
  vm.runInNewContext(fs.readFileSync(path.join(root,folder,'ch1.js'),'utf8'),ctx);
  const slides=ctx.window.DECK[0].slides;
  assert.equal(ctx.window.DECK_CONFIG.phases.length,6);assert.equal(slides.length,10);
  assert.deepEqual([...new Set(slides.map(s=>s.phase))],[0,1,2,3,4,5]);
  assert.equal(new Set(slides.map(s=>s.id)).size,10);
  assert.equal(slides[5].prompt,l.basic[0]);assert.equal(slides[6].prompt,l.basic[1]);assert.equal(slides[8].prompt,l.apply);
  assert.equal(slides.filter(s=>s.kind==='primary').length,4);
  const out=cp.spawnSync(process.execPath,['scripts/verify_deck.js',folder,'--quiet'],{cwd:root,encoding:'utf8'});
  assert.equal(out.status,0,out.stdout+out.stderr);
 }
});
test('分組不漏餘數，百數表不跨行，聯動時針在半小時移半格',()=>{
 for(let n=0;n<=40;n++)for(const size of [2,5,10,12]){const g=M.groups(n,size);assert.equal(g.full*size+g.rest,n);assert.ok(g.rest<size);}
 assert.deepEqual(M.neighbors(35),{left:34,right:36,up:25,down:45});
 assert.equal(M.neighbors(10).right,null);assert.equal(M.neighbors(11).left,null);assert.equal(M.neighbors(100).down,null);
 assert.deepEqual(M.clock(210),{hourAngle:105,minuteAngle:180,hour:3,minute:30});
 assert.equal(M.clock(480).hourAngle,240);
});
test('練習月曆使用指定星期，硬幣最少枚數與單位沒有浮點誤差',()=>{
 assert.equal(M.weekday(3),0);assert.equal(M.weekday(10),0);assert.equal(M.weekday(8),5);assert.equal(M.weekday(15),5);
 assert.equal(M.minCoins(6),2);assert.equal(M.minCoins(7),2);assert.equal(M.minCoins(0),0);
});
test('紙本數獨格局有唯一解，候選同時檢查行列與2×2宮',()=>{
 assert.equal(M.solutions(M.sudoku),1);assert.deepEqual(M.candidates(M.sudoku,2),[3]);
 const bad=M.sudoku.slice();bad[2]=1;assert.equal(M.solutions(bad),0);
 assert.ok(!M.candidates(bad,2).includes(1));
});
test('七巧板由五三角形、一正方形、一平行四邊形組成，總面積守恆',()=>{
 assert.equal(M.tangram.length,7);assert.equal(M.tangram.filter(p=>p.length===3).length,5);
 const area=M.tangram.map(M.polygonArea);assert.deepEqual(area,[4,4,2,2,2,1,1]);assert.equal(area.reduce((a,b)=>a+b,0),16);
 const moved=M.tangram.map(p=>p.map(([x,y])=>[-y+7,x+9]));
 assert.deepEqual(moved.map(M.polygonArea),area);
});
test('小一教具沒有作答持久儲存或匯出接口',()=>{
 const source=fs.readFileSync(path.join(root,'assets/primary.js'),'utf8');assert.doesNotMatch(source,/localStorage|sessionStorage|indexedDB|createObjectURL|\.download\s*=/);
});
