const pw=require(process.env.PLAYWRIGHT_MODULE||'playwright'),assert=require('node:assert/strict');
(async()=>{
 const engine=process.env.TEST_ENGINE||'chromium',browser=await pw[engine].launch({headless:true,...(process.env.BROWSER_EXECUTABLE?{executablePath:process.env.BROWSER_EXECUTABLE}:{})});
 try{
  const page=await browser.newPage({viewport:{width:1280,height:1000},hasTouch:true}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{window.__storageCalls=[];for(const key of ['getItem','setItem','removeItem','clear']){const orig=Storage.prototype[key];Storage.prototype[key]=function(...args){window.__storageCalls.push(key);return orig.apply(this,args);};}});
  const base=(process.env.BASE_URL||'http://127.0.0.1:8890').replace(/\/$/,'');
  const go=async i=>{if(await page.evaluate(()=>innerWidth<=1080)&&!await page.locator('.toc').evaluate(e=>e.classList.contains('open')))await page.locator('#tocToggle').click();await page.locator('.toc-item').nth(i).click();if(await page.evaluate(()=>innerWidth<=1080))await page.waitForFunction(()=>document.querySelector('.toc').getBoundingClientRect().right<=0);};
  const op=(name)=>page.locator(`[data-op="${name}"]`),proof=async()=>{if(await op('proof').textContent()==='看看數據與核對')await op('proof').click();};
  for(let week=1;week<=30;week++){
   const response=await page.goto(base+'/primary/week'+String(week).padStart(2,'0')+'/#present');assert.equal(response.status(),200);
   assert.equal(await page.locator('.toc-item').count(),10);assert.equal(await page.locator('.phase-strip span').count(),6);
   for(let i=0;i<10;i++){
    await go(i);assert.equal(await page.locator('.inquiry-heading h2').isVisible(),true);
    assert.equal(await page.locator('[data-action="export"], [data-answer]').count(),0);
    if([2,3,4,8].includes(i)){
     assert.ok((await page.locator('.p-scene').innerHTML()).length>30);await proof();
     assert.doesNotMatch(await page.locator('.primary-board').textContent(),/undefined|NaN|Infinity/);
     const sliders=page.locator('.p-controls input[type=range]');
     if(await sliders.count()){const slider=sliders.first(),v=await slider.getAttribute('min');await slider.fill(v);assert.doesNotMatch(await page.locator('.p-readout').textContent(),/NaN|undefined/);}
     const buttons=page.locator('.p-controls button:enabled');if(await buttons.count())await buttons.first().click();
    }
   }
   // Return to a fresh, source-aligned experiment for a representative interaction.
   await go(2);await op('reset').click();
   switch(week){
    case 1:await page.locator('[data-op=facing][data-arg="1"]').click();await proof();assert.match(await page.locator('.p-readout').textContent(),/左/);break;
    case 2:{const rope=page.locator('.p-scene path');const length=await rope.evaluate(e=>e.getTotalLength());await op('bend').click();assert.ok(Math.abs(await rope.evaluate(e=>e.getTotalLength())-length)<.1,'彎繩不應改變實際模型長度');break;}
    case 4:await page.locator('[data-param=n]').fill('7');await proof();assert.match(await page.locator('.p-readout').textContent(),/剩1個/);break;
    case 5:await op('right').first().click();await proof();assert.match(await page.locator('.p-readout').textContent(),/2＋5＝7/);break;
    case 8:for(let k=0;k<5;k++)await op('x-plus').click();await proof();assert.match(await page.locator('.p-readout').textContent(),/兩邊一樣多/);break;
    case 10:await op('bundle').click();await proof();assert.match(await page.locator('.p-readout').textContent(),/共13根/);await op('unbundle').click();assert.match(await page.locator('.p-readout').textContent(),/共13根/);break;
    case 13:await op('move-ten').click();await op('move-ten').click();await proof();assert.match(await page.locator('.p-readout').textContent(),/10和3/);await op('make-next').click();assert.match(await page.locator('.p-readout').textContent(),/9＋4＝13/);await op('make-next').click();assert.match(await page.locator('.p-readout').textContent(),/7＋6＝13/);break;
    case 14:await op('unbundle').click();for(let k=0;k<8;k++)await op('remove-stick').click();await proof();assert.match(await page.locator('.p-readout').textContent(),/共5根/);await op('break-next').click();assert.match(await page.locator('.p-readout').textContent(),/共15根/);await op('break-next').click();assert.match(await page.locator('.p-readout').textContent(),/共12根/);break;
    case 16:await page.locator('[data-op=hundred][data-arg="10"]').click();await page.locator('[data-op=neighbor][data-arg="right"]').click();await proof();assert.match(await page.locator('.p-readout').textContent(),/中心10/);break;
    case 17:assert.equal(await page.locator('[data-param=n]').count(),0);await op('hide').click();assert.equal(await page.locator('[data-param=n]').inputValue(),'20');break;
    case 18:await proof();assert.match(await page.locator('.p-readout').textContent(),/3:30/);break;
    case 19:await proof();assert.match(await page.locator('.p-readout').textContent(),/90分鐘/);await op('timeline-next').click();assert.match(await page.locator('.p-readout').textContent(),/30分鐘/);break;
    case 20:assert.equal(await page.locator('[data-op=calendar][data-arg="-7"]').isDisabled(),true);await page.locator('[data-op=calendar][data-arg="7"]').click();await proof();assert.match(await page.locator('.p-readout').textContent(),/10日是星期一/);break;
    case 22:await go(8);await page.locator('[data-param=x]').fill('3');await proof();assert.match(await page.locator('.p-readout').textContent(),/哥哥7、弟弟7/);await go(2);break;
    case 21:await op('columns-next').click();await proof();assert.match(await page.locator('.p-readout').textContent(),/32＋25＝57/);await op('columns-next').click();assert.match(await page.locator('.p-readout').textContent(),/40＋18＝58/);break;
    case 23:await page.locator('[data-op=coin][data-arg="50"]').click();await proof();assert.match(await page.locator('.p-readout').textContent(),/50毫＝5圓0毫/);await page.locator('[data-op=coin-target][data-arg="100"]').click();await page.locator('[data-op=coin][data-arg="50"]').click();await page.locator('[data-op=coin][data-arg="50"]').click();assert.match(await page.locator('.p-readout').textContent(),/100毫＝10圓0毫/);break;
    case 24:await op('pay-ten').click();await proof();assert.match(await page.locator('.p-readout').textContent(),/多40毫要找續/);break;
    case 26:await page.locator('[data-param=start]').fill('5');await proof();assert.match(await page.locator('.p-readout').textContent(),/10−起點5＝5厘米/);break;
    case 27:await page.locator('[data-op=shape][data-arg=rhombus]').click();await proof();assert.match(await page.locator('.p-readout').textContent(),/不是正方形/);break;
    case 28:{const piece=page.locator('[data-piece="0"] polygon');await piece.scrollIntoViewIfNeeded();const box=await piece.boundingBox();await page.mouse.move(box.x+15,box.y+15);await page.mouse.down();await page.mouse.move(box.x+65,box.y+35,{steps:4});await page.mouse.up();await op('turn-piece').click();assert.ok(await page.locator('[data-piece="0"]').getAttribute('transform'));break;}
    case 29:await op('stats-mode').click();for(const [bin,count]of [6,8,5,6].entries()){await page.locator(`[data-op=bin][data-arg="${bin}"]`).click();for(let k=0;k<count;k++)await op('chart-add').click();}await proof();assert.match(await page.locator('.p-readout').textContent(),/你的圖與卡片相符/);break;
    case 30:{const solution={2:3,5:4,7:2,10:4,12:4};for(const [i,v]of Object.entries(solution)){await page.locator(`[data-op=sudoku-select][data-arg="${i}"]`).click();await page.locator(`[data-op=sudoku-value][data-arg="${v}"]`).click();}await proof();assert.match(await page.locator('.p-readout').textContent(),/整盤行、列、宮都符合/);break;}
   }
   if(process.env.SCREENSHOT_DIR){await op('reset').click();await page.locator('.primary-board').screenshot({path:process.env.SCREENSHOT_DIR+'/p1-week'+String(week).padStart(2,'0')+'.png'});}
   assert.deepEqual(await page.evaluate(()=>window.__storageCalls),[]);console.log('Week '+week+': 10 pages and manipulative passed');
  }
  // Tablet portrait/landscape: exercise every family, no full-page horizontal overflow or tool overlap.
  for(const [width,height] of [[1024,768],[768,1024]]){
   await page.setViewportSize({width,height});
   for(let week=1;week<=30;week++){
    await page.goto(base+'/primary/week'+String(week).padStart(2,'0')+'/#p=2');await page.locator('.primary-board').waitFor();
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'horizontal overflow week '+week);
    assert.equal(await page.evaluate(()=>document.querySelector('.inquiry-slide').getBoundingClientRect().bottom<=document.querySelector('.dock').getBoundingClientRect().top),true);
   }
  }
  await page.goto(base+'/primary/');assert.equal(await page.locator('.lesson-card').count(),30);await page.locator('#search').fill('月曆');assert.equal(await page.locator('.lesson-card:visible').count(),1);
  assert.deepEqual(errors,[]);console.log(`PASS (${engine}): 30 source-aligned decks, 300 pages, all manipulatives, iPad portrait/landscape, catalog`);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
