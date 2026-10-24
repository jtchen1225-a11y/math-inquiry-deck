const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),cp=require('node:child_process');
const root=path.resolve(__dirname,'..');
test('示範課涵蓋五階段，頁面 id 唯一，提示分離',()=>{
  const ctx={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'examples/juice-lesson.js'),'utf8'),ctx);
  const slides=ctx.window.DECK[0].slides;
  assert.equal(slides.length,12);assert.equal(new Set(slides.map(s=>s.id)).size,12);
  assert.deepEqual([...new Set(slides.map(s=>s.phase))],[0,1,2,3,4]);
  assert.ok(slides[0].title.endsWith('？'));assert.equal(slides[0].reveals,undefined);
  for(const s of slides) assert.ok(s.prompt && s.sec && s.secName && s.kind);
});
test('完整示範課通過離線結構驗證，資產與來源一致',()=>{
  const result=cp.spawnSync(process.execPath,['scripts/verify_deck.js','demo/juice'],{cwd:root,encoding:'utf8'});
  assert.equal(result.status,0,result.stdout+result.stderr);
  for(const f of ['engine.js','style.css','svg.js','inquiry.js','inquiry-model.js','inquiry.css'])
    assert.equal(fs.readFileSync(path.join(root,'demo/juice',f),'utf8'),fs.readFileSync(path.join(root,'assets',f),'utf8'),`${f} demo 資產過期`);
  assert.equal(fs.readFileSync(path.join(root,'demo/juice/ch1.js'),'utf8'),fs.readFileSync(path.join(root,'examples/juice-lesson.js'),'utf8'));
});
