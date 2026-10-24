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
  assert.ok(new Set(slides.map(s=>s.theme)).size>=6);
  for(const s of slides) assert.ok(s.worksheet);
});
test('框架不讀寫瀏覽器儲存，也不建立紀錄下載',()=>{
  const source=fs.readFileSync(path.join(root,'assets/inquiry.js'),'utf8');
  assert.doesNotMatch(source,/localStorage|sessionStorage|indexedDB|createObjectURL|\.download\s*=/);
});
test('預設主題字色對淺色底有足夠對比，並支援頁面自訂',()=>{
  const ctx={window:{DECK_CONFIG:{},InquiryModel:require('../assets/inquiry-model.js')}};
  vm.runInNewContext(fs.readFileSync(path.join(root,'assets/inquiry.js'),'utf8'),ctx);
  const luminance=hex=>{const rgb=hex.slice(1).match(/../g).map(c=>parseInt(c,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;};
  for(const theme of ['citrus','ocean','lime','coral','violet','berry','teal']){
    const p=ctx.window.Inquiry.palette({theme,phase:0});const values=[luminance(p.accent),luminance(p.soft)].sort((a,b)=>a-b);
    assert.ok((values[1]+.05)/(values[0]+.05)>=4.5,theme+' 字色對比不足');
  }
  assert.equal(ctx.window.Inquiry.palette({theme:{accent:'#123456'},phase:0}).accent,'#123456');
});
test('完整示範課通過離線結構驗證，資產與來源一致',()=>{
  const result=cp.spawnSync(process.execPath,['scripts/verify_deck.js','demo/juice'],{cwd:root,encoding:'utf8'});
  assert.equal(result.status,0,result.stdout+result.stderr);
  for(const f of ['engine.js','style.css','svg.js','inquiry.js','inquiry-model.js','inquiry.css'])
    assert.equal(fs.readFileSync(path.join(root,'demo/juice',f),'utf8'),fs.readFileSync(path.join(root,'assets',f),'utf8'),`${f} demo 資產過期`);
  assert.equal(fs.readFileSync(path.join(root,'demo/juice/ch1.js'),'utf8'),fs.readFileSync(path.join(root,'examples/juice-lesson.js'),'utf8'));
});
