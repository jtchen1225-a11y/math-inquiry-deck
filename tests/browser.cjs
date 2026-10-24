/* Chromium/WebKit checks for paper-first shared-tablet lessons. */
const playwright=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');
(async()=>{
 const engine=process.env.TEST_ENGINE||'chromium';
 const browser=await playwright[engine].launch({headless:true,...(process.env.BROWSER_EXECUTABLE?{executablePath:process.env.BROWSER_EXECUTABLE}:{})});
 try {
  const context=await browser.newContext({viewport:{width:1440,height:1000},hasTouch:true});
  await context.addInitScript(()=>{
    localStorage.setItem('math-inquiry:juice-week01:v1',JSON.stringify({answers:{'claim-reason':'legacy answer'},cups:[{name:'A',juice:5,water:0}]}));
    window.__storageCalls=[];
    for(const method of ['getItem','setItem','removeItem','clear']){
      const original=Storage.prototype[method];Storage.prototype[method]=function(...args){window.__storageCalls.push(method);return original.apply(this,args);};
    }
  });
  const page=await context.newPage(),errors=[],downloads=[];
  page.on('pageerror',e=>errors.push(e.message));page.on('download',d=>downloads.push(d));
  const base=(process.env.BASE_URL||'http://127.0.0.1:8890').replace(/\/$/,'');
  await page.goto(base+'/demo/juice/');await page.getByRole('button',{name:'開始探究 →'}).click();
  const go=async n=>{
    if(await page.evaluate(()=>innerWidth<=1080) && !await page.locator('.toc').evaluate(el=>el.classList.contains('open'))) await page.locator('#tocToggle').click();
    await page.locator('.toc-item').nth(n).click();await page.locator('.inquiry-heading').waitFor();
    if(await page.evaluate(()=>innerWidth<=1080)) await page.waitForFunction(()=>document.querySelector('.toc').getBoundingClientRect().right<=0);
  };
  const colors=new Set();
  for(let n=0;n<12;n++){
    await go(n);assert.ok(await page.locator('.worksheet-strip').isVisible());
    colors.add(await page.evaluate(()=>getComputedStyle(document.body).getPropertyValue('--lesson-accent')));
    assert.equal(await page.locator('[data-action="export"], [data-answer]').count(),0);
    assert.equal(await page.locator('.scratchpad').getAttribute('open'),null);
  }
  assert.ok(colors.size>=6,'內容應呈現多種主題配色');
  await go(0);await page.getByLabel('C 款較濃',{exact:true}).check();
  await page.locator('.scratchpad summary').click();
  const note=page.locator('[data-note]');await note.fill('小組草算 <script>alert(1)</script>');await note.press('ArrowRight');assert.ok(await note.isVisible());
  const canvas=page.locator('.scratch-canvas');await canvas.scrollIntoViewIfNeeded();const box=await canvas.boundingBox();
  await page.mouse.move(box.x+30,box.y+30);await page.mouse.down();await page.mouse.move(box.x+120,box.y+90,{steps:8});await page.mouse.up();
  const hasInk=()=>canvas.evaluate(el=>{const data=el.getContext('2d').getImageData(0,0,el.width,el.height).data;return data.some((v,i)=>i%4===3&&v>0);});
  assert.equal(await hasInk(),true);
  await page.getByRole('button',{name:'清空手寫',exact:true}).click();assert.equal(await hasInk(),false);
  await go(1);await page.getByRole('button',{name:'標註基準量',exact:true}).click();await page.locator('[data-mark="base"]').click();assert.match(await page.locator('[data-mark="base"]').getAttribute('class'),/mark-base/);
  await go(0);assert.equal(await note.inputValue(),'小組草算 <script>alert(1)</script>');assert.equal(await page.locator('.scratchpad script').count(),0);
  await go(2);assert.equal(await page.locator('[data-cup="0"][data-component="juice"]').isDisabled(),true);
  for(let i=0;i<4;i++)await page.locator(`[data-action="compare"][data-index="${i}"]`).click();
  await page.getByRole('button',{name:'比值換算',exact:true}).click();assert.match(await page.locator('[data-result="0"]').textContent(),/0.5/);
  await page.getByRole('button',{name:'整體濃度 %',exact:true}).click();assert.match(await page.locator('[data-result="0"]').textContent(),/33.3%/);
  const water=page.locator('[data-cup="0"][data-component="water"]');await water.fill('7');await water.press('ArrowRight');assert.equal(await water.inputValue(),'8');
  await go(4);assert.match(await page.locator('tbody').textContent(),/1:2/);assert.doesNotMatch(await page.locator('tbody').textContent(),/1:8/);
  await go(7);await page.locator('[data-evidence]').first().check();assert.equal(await page.locator('.argument-grid textarea').count(),0);
  await go(5);await page.locator('[data-scale]').fill('5');assert.match(await page.locator('.scale-result').textContent(),/5 : 20/);assert.match(await page.locator('.scale-result').textContent(),/20.0%/);
  await go(6);assert.equal(await page.locator('.reveals p').count(),0);await page.getByRole('button',{name:'需要提示',exact:true}).click();assert.equal(await page.locator('.reveals p').count(),1);
  await go(9);assert.equal(await page.locator('.hundred-grid span').count(),100);assert.equal(await page.locator('.juice-cell').count(),25);
  await go(10);assert.equal(await page.locator('.algorithm-grid input').count(),0);
  for(let i=0;i<4;i++)await page.getByRole('button',{name:i?'揭示下一層':'需要提示',exact:true}).click();
  assert.match(await page.locator('.reveals').textContent(),/至少買 4 瓶/);assert.match(await page.locator('.reveals').textContent(),/200 mL/);
  if(process.env.SCREENSHOT_DIR){await go(2);await page.getByRole('button',{name:'恢復標籤配方',exact:true}).click();await page.screenshot({path:process.env.SCREENSHOT_DIR+'/v2-lab-desktop.png'});await go(7);await page.screenshot({path:process.env.SCREENSHOT_DIR+'/v2-argument-desktop.png'});}
  for(const [width,height] of [[1024,768],[768,1024],[390,844]]){
    await page.setViewportSize({width,height});await go(2);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    assert.equal(await page.locator('[data-action="compare"]').first().isVisible(),true);
    await page.locator('.scratchpad summary').click();await canvas.scrollIntoViewIfNeeded();
    const rect=await canvas.boundingBox();await page.touchscreen.tap(rect.x+25,rect.y+25);assert.equal(await hasInk(),true);
    await page.locator('[data-action="clear-sketch"]').click();
    if(process.env.SCREENSHOT_DIR&&width===1024){await page.locator('.scratchpad summary').click();await page.locator('.inquiry-slide').evaluate(el=>{el.scrollTop=0;});await page.screenshot({path:process.env.SCREENSHOT_DIR+'/v2-lab-ipad.png'});}
    // Close if still open so each viewport exercises expansion from a clean state.
    if(await page.locator('.scratchpad').getAttribute('open')!==null)await page.locator('.scratchpad summary').click();
  }
  await page.reload();await page.getByRole('button',{name:'開始探究 →'}).click();
  await page.locator('.scratchpad summary').click();assert.equal(await note.inputValue(),'');assert.equal(await page.locator('input[name="prediction"]:checked').count(),0);
  await go(4);assert.equal(await page.locator('tbody').count(),0);
  await go(2);assert.equal(await water.inputValue(),'2');
  page.on('dialog',d=>d.accept());await page.getByRole('button',{name:'重新開始本課',exact:true}).click();
  assert.deepEqual(await page.evaluate(()=>window.__storageCalls),[]);assert.deepEqual(downloads,[]);assert.deepEqual(errors,[]);
  console.log(`PASS (${engine}): 12 themed pages, worksheet flow, no storage/export, temporary typing/handwriting, comparison, maths, iPad portrait/landscape, refresh reset`);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
