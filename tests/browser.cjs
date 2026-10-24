/* Optional: supply PLAYWRIGHT_MODULE / BROWSER_EXECUTABLE on managed desktops. */
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.BROWSER_EXECUTABLE?{executablePath:process.env.BROWSER_EXECUTABLE}:{})});
 try {
  const page=await browser.newPage({viewport:{width:1440,height:1000}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  const base=process.env.BASE_URL||'http://127.0.0.1:8890';
  await page.goto(base+'/demo/juice/');
  await page.evaluate(()=>localStorage.clear());await page.reload();
  await page.getByRole('button',{name:'開始探究 →'}).click();
  const go=async n=>{await page.locator('.toc-item').nth(n).click();await page.locator('.inquiry-heading').waitFor();};
  for(let n=0;n<12;n++) {await go(n);assert.equal(await page.locator('.inquiry-heading h2').isVisible(),true);}
  await go(1);await page.getByRole('button',{name:'標註基準量',exact:true}).click();await page.locator('[data-mark="base"]').click();assert.match(await page.locator('[data-mark="base"]').getAttribute('class'),/mark-base/);
  await go(3);await page.getByRole('button',{name:'看整體濃度',exact:true}).click();assert.match(await page.locator('.representation-output').textContent(),/20%/);
  await go(9);assert.equal(await page.locator('.hundred-grid span').count(),100);assert.equal(await page.locator('.juice-cell').count(),25);
  await go(0);
  assert.equal(await page.locator('.inquiry-heading h2').textContent(),'數字越大，果汁就越濃？');
  await page.getByLabel('C 款較濃',{exact:true}).check();
  const reason=page.locator('[data-answer="claim-reason"]');await reason.fill('先猜 C，再找證據');
  await reason.press('ArrowRight');assert.equal(await page.locator('[data-answer="claim-reason"]').count(),1);
  await go(2);
  assert.equal(await page.locator('[data-cup="0"][data-component="juice"]').isDisabled(),true);
  for(let i=0;i<4;i++) await page.locator(`[data-action="record"][data-index="${i}"]`).click();
  await page.getByRole('button',{name:'比值換算',exact:true}).click();
  assert.match(await page.locator('[data-result="0"]').textContent(),/0.5/);
  await page.getByRole('button',{name:'整體濃度 %',exact:true}).click();
  assert.match(await page.locator('[data-result="0"]').textContent(),/33.3%/);
  await page.locator('[data-cup="0"][data-component="water"]').fill('7');
  const water=page.locator('[data-cup="0"][data-component="water"]');await water.press('ArrowRight');
  assert.equal(await water.inputValue(),'8');
  await go(4);assert.match(await page.locator('tbody').textContent(),/1:2/);assert.doesNotMatch(await page.locator('tbody').textContent(),/1:8/);
  await go(2);assert.equal(await water.inputValue(),'8');
  await page.getByRole('button',{name:'自由調配',exact:true}).click();
  const juice=page.locator('[data-cup="0"][data-component="juice"]');assert.equal(await juice.isDisabled(),false);
  await juice.fill('3');await page.reload();await page.getByRole('button',{name:'開始探究 →'}).click();await go(2);assert.equal(await juice.inputValue(),'3');
  await go(5);await page.locator('[data-scale]').fill('5');assert.match(await page.locator('.scale-result').textContent(),/5 : 20/);assert.match(await page.locator('.scale-result').textContent(),/20.0%/);
  await go(6);assert.equal(await page.locator('.reveals p').count(),0);await page.getByRole('button',{name:'需要提示',exact:true}).click();assert.equal(await page.locator('.reveals p').count(),1);
  await go(7);await page.locator('[data-evidence]').first().check();await page.locator('[data-answer="argument-claim"]').fill('A 最濃 <script>alert(1)</script>');
  await go(0);assert.equal(await reason.inputValue(),'先猜 C，再找證據');await go(7);assert.equal(await page.locator('[data-evidence]').first().isChecked(),true);
  assert.equal(await page.locator('[data-answer="argument-claim"]').inputValue(),'A 最濃 <script>alert(1)</script>');
  await go(10);for(const [id,value] of Object.entries({parts:5,unit:3000,juice:3000,water:12000,bottles:3})) await page.locator(`[data-answer="party-${id}"]`).fill(String(value));
  await page.getByRole('button',{name:'核對這一步',exact:true}).click();assert.match(await page.locator('.party-feedback').textContent(),/第 5 步/);
  await page.locator('[data-answer="party-bottles"]').fill('4');await page.getByRole('button',{name:'核對這一步',exact:true}).click();assert.match(await page.locator('.party-feedback').textContent(),/200 mL/);
  const download=page.waitForEvent('download');await page.getByRole('button',{name:'匯出課堂紀錄',exact:true}).click();const file=await download;const data=JSON.parse(fs.readFileSync(await file.path(),'utf8'));assert.equal(data.records.length,4);assert.equal(data.answers['party-bottles'],'4');
  await go(11);assert.match(await page.locator('.previous-claim').textContent(),/C 款較濃/);
  if(process.env.SCREENSHOT_DIR) {await go(2);await page.screenshot({path:process.env.SCREENSHOT_DIR+'/lab-desktop.png',fullPage:true});await go(7);await page.locator('[data-answer="argument-claim"]').fill('A 款最濃，因為相同果汁量配的清水最少。');await page.screenshot({path:process.env.SCREENSHOT_DIR+'/argument-desktop.png',fullPage:true});}
  await page.setViewportSize({width:390,height:844});await page.getByRole('button',{name:'目錄',exact:false}).click();await go(2);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth),false);
  assert.ok(await page.locator('[data-action="record"]').first().isVisible());
  await page.waitForFunction(()=>document.querySelector('.toc').getBoundingClientRect().right<=0);
  if(process.env.SCREENSHOT_DIR) await page.screenshot({path:process.env.SCREENSHOT_DIR+'/lab-mobile.png',fullPage:true});
  page.on('dialog',d=>d.accept());await page.getByRole('button',{name:'重設本課',exact:true}).click();
  assert.equal(await page.locator('[data-cup="0"][data-component="water"]').inputValue(),'2');
  assert.deepEqual(errors,[]);console.log('PASS: prediction, keyboard, sliders, snapshots, persistence, reveal, evidence, algorithm, export, reset, mobile');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
