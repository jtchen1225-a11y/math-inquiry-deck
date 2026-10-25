const pw=require(process.env.PLAYWRIGHT_MODULE||'playwright'),assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{const engine=process.env.TEST_ENGINE||'chromium',browser=await pw[engine].launch({headless:true,...(process.env.BROWSER_EXECUTABLE?{executablePath:process.env.BROWSER_EXECUTABLE}:{})});
try{
 const page=await browser.newPage({viewport:{width:1280,height:1000},hasTouch:true}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const base=(process.env.BASE_URL||'http://127.0.0.1:8890').replace(/\/$/,'');
 await page.addInitScript(()=>{window.__storageCalls=[];for(const key of ['getItem','setItem']){const orig=Storage.prototype[key];Storage.prototype[key]=function(...args){window.__storageCalls.push(key);return orig.apply(this,args);};}});
 const go=async i=>{const mobile=await page.evaluate(()=>innerWidth<=1080);if(mobile&&!await page.locator('.toc').evaluate(e=>e.classList.contains('open')))await page.locator('#tocToggle').click();await page.locator('.toc-item').nth(i).click();if(mobile)await page.waitForFunction(()=>document.querySelector('.toc').getBoundingClientRect().right<=0);};
 const op=n=>page.locator(`[data-jop="${n}"]`),proof=async()=>{if(await op('proof').textContent()==='看看數據與核對')await op('proof').click();};
 await page.goto(base+'/junior/');assert.equal(await page.locator('[data-week-card]').count(),30);assert.equal(await page.locator('#classroom').isVisible(),false);
 const lessons=await page.evaluate(()=>window.JUNIOR_LESSONS);assert.equal(new Set(lessons.map(l=>l.entry)).size,30);
 for(const l of lessons){
  const w=String(l.week).padStart(2,'0');await page.goto(base+'/junior/#week'+w);assert.equal(await page.locator('#classroom').isVisible(),false);await page.locator(`[data-open-week="${l.week}"]`).click();assert.match(await page.locator('#classTitle').textContent(),new RegExp('第'+w+'週'));
  const link=await page.locator('#studentLink').getAttribute('href');assert.equal(new URL(link).pathname,new URL(base+'/junior/week'+w+'/').pathname);assert.equal(new URL(link).searchParams.get('entry'),l.entry);assert.equal(new URL(link).searchParams.has('teacher'),false);
  // Independent decoder consumes actual canvas pixels, not generator text.
  if(process.env.JSQR_MODULE){await page.addScriptTag({path:process.env.JSQR_MODULE});const decoded=await page.evaluate(()=>{const c=document.querySelector('#joinQR'),im=c.getContext('2d').getImageData(0,0,c.width,c.height);return jsQR(im.data,im.width,im.height)?.data;});assert.equal(decoded,link);}
  await page.locator('#closeQR').click();assert.equal(await page.locator('#classroom').isVisible(),false);
  await page.goto(base+'/junior/week'+w+'/#present');assert.equal(await page.locator('.junior-gate').isVisible(),true);
  await page.goto(base+'/junior/week'+w+'/?entry='+lessons[l.week%30].entry+'#present');assert.equal(await page.locator('.junior-gate').isVisible(),true);
  await page.goto(link);assert.equal(await page.locator('.junior-gate').count(),0);assert.equal(await page.locator('#showWeeklyQR').count(),0);assert.equal(await page.locator('.toc-item').count(),12);
  for(let i=0;i<12;i++){
   await go(i);assert.equal(await page.locator('.inquiry-heading h2').isVisible(),true);assert.equal(await page.locator('.phase-strip span').count(),6);assert.equal(await page.locator('[data-action="export"],[data-answer]').count(),0);
   if([2,3,4,5,10].includes(i)){
    assert.ok((await page.locator('.j-scene').innerHTML()).length>40);await proof();assert.doesNotMatch(await page.locator('.junior-board').textContent(),/undefined|NaN|Infinity/);
    const range=page.locator('[data-jparam]');for(let k=0;k<await range.count();k++){const x=range.nth(k),v=+await x.inputValue(),min=+await x.getAttribute('min'),max=+await x.getAttribute('max');assert.ok(v>=min&&v<=max,`${w}頁${i+1}滑桿範圍錯誤`);}
    if(await range.count()){await range.first().fill(await range.first().getAttribute('min'));await proof();assert.doesNotMatch(await page.locator('.j-readout').textContent(),/undefined|NaN|Infinity/);}
   }
  }
  await go(2);await op('reset').click();const caseCount=await op('case').count();for(let k=0;k<caseCount;k++){await op('case').nth(k).click();await proof();assert.doesNotMatch(await page.locator('.junior-board').textContent(),/undefined|NaN|Infinity/);}
  await op('reset').click();
  const meaningful={1:'alternate',2:'step',3:'alternate',4:'shift',5:'note',6:'alternate',7:'alternate',8:'mode',9:'rotate',10:'shape',11:'trace',12:'next-rect',13:'to-hour',14:'finish',15:'group-size',16:'split',17:'split',18:'alternate',19:'remove-weight',20:'alternate',21:'tile',22:'next-rect',23:'take-part',24:'take-part',25:'alternate',26:'alternate',27:'block-add',28:'rotate-half',29:'scale',30:'draw20'};
  await op(meaningful[l.week]).first().click();await proof();
  const txt=await page.locator('.j-readout').textContent();
  if(l.week===1)assert.match(txt,/24件/);if(l.week===2)assert.match(txt,/72/);if(l.week===3)assert.match(txt,/實際192/);if(l.week===4)assert.match(txt,/47毫米/);if(l.week===7)assert.match(txt,/102/);if(l.week===11)assert.match(txt,/16厘米/);if(l.week===13)assert.match(txt,/10:05/);if(l.week===17)assert.match(txt,/120/);if(l.week===19)assert.match(txt,/左邊下降/);if(l.week===30)assert.match(await page.locator('.j-scene').textContent(),/本輪20次/);
  if(l.week===26){const slider=page.locator('[data-jparam=n]');await slider.fill('0');await slider.scrollIntoViewIfNeeded();await slider.evaluate(el=>el.dataset.dragIdentity='kept');const box=await slider.boundingBox();await page.mouse.move(box.x+8,box.y+box.height/2);await page.mouse.down();await page.mouse.move(box.x+box.width*.85,box.y+box.height/2,{steps:10});await page.mouse.up();assert.equal(await slider.evaluate(el=>el.dataset.dragIdentity),'kept');assert.ok(+await slider.inputValue()>=10,'原生滑桿須能持續拖動');}
  if(process.env.SCREENSHOT_DIR){fs.mkdirSync(process.env.SCREENSHOT_DIR,{recursive:true});await page.locator('.junior-board').screenshot({path:process.env.SCREENSHOT_DIR+'/p3-week'+w+'.png'});}
  assert.deepEqual(await page.evaluate(()=>window.__storageCalls),[]);
  // Every weekly board also fits both shared-iPad orientations.
  for(const size of [{width:1024,height:768},{width:768,height:1024}]){await page.setViewportSize(size);await go(3);assert.equal(await page.locator('.junior-board').isVisible(),true);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));}
  await page.setViewportSize({width:1280,height:1000});
  // Teacher tool inside each independent deck produces the student-only URL.
  const teacherURL=new URL(link);teacherURL.searchParams.set('teacher','1');await page.goto(teacherURL.href);await page.locator('#showWeeklyQR').click();assert.equal(await page.locator('dialog').isVisible(),true);
  if(process.env.JSQR_MODULE){await page.addScriptTag({path:process.env.JSQR_MODULE});const decoded=await page.evaluate(()=>{const c=document.querySelector('dialog canvas'),im=c.getContext('2d').getImageData(0,0,c.width,c.height);return jsQR(im.data,im.width,im.height)?.data;});assert.equal(decoded,link);}
  await page.locator('dialog button').click();await page.reload();assert.equal(await page.locator('.junior-gate').count(),0);
 }
 assert.deepEqual(errors,[]);console.log(engine+': P3 30 decks / 360 pages, manipulatives, wrong-week gate, teacher+student QR, iPad and no-storage checks passed');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1);});
