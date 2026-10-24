/* Thirty source-aligned P1 lessons. Ephemeral manipulatives; paper remains the answer sheet. */
(function(){'use strict';
 const M=window.PrimaryModel, memory=new Map();
 const E=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const colors=['#d96329','#16887a','#8456b5','#ce4f79','#2a79ae','#8b7717','#5b8d31'];
 const B=(text,op,arg='',extra='')=>`<button type="button" data-op="${op}" data-arg="${arg}" ${extra}>${text}</button>`;
 const R=(label,key,v,min,max,step=1)=>`<label class="p-range">${label} <output data-label="${key}">${key==='minutes'?'慢慢撥動':v}</output><input type="range" aria-label="${label}" data-param="${key}" min="${min}" max="${max}" step="${step}" value="${v}"></label>`;
 const dots=(n,color=0,op='',start=0)=>`<div class="p-dots">${Array.from({length:Math.max(0,n)},(_,i)=>op?B(`<span class="p-dot" style="--dot:${colors[color]}"></span>`,op,i+start,`aria-label="移動第${i+1}個"`):`<span class="p-dot" style="--dot:${colors[color]}"></span>`).join('')}</div>`;
 const svg=(inner,vb='0 0 640 300')=>`<svg class="p-svg" viewBox="${vb}" role="img" aria-label="可操作的數學圖解">${inner}</svg>`;
 const tx=(x,y,t,size=20)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" fill="#24354a">${E(t)}</text>`;
 const panel=(title,inside)=>`<section class="p-panel"><h3>${title}</h3>${inside}</section>`;
 const ftime=n=>`${Math.floor(n/60)%12||12}:${String(n%60).padStart(2,'0')}`;
 function initial(app){return {a:3,b:2,n:7,left:3,target:9,x:0,take:2,taken:[],offset:0,shape:'cube',facing:false,proof:false,hidden:false,size:2,bundles:0,removed:0,pick:4,reverse:false,prefix:false,minutes:180,start:540,end:630,progress:0,day:3,jump:7,unit:3,length:12,angle:0,selected:0,selectedCell:2,help:false,closed:false,walk:false,push:false,mode:'',coins:[],price:60,guessCircle:0,guessSquare:0,assign:{},bin:0,chart:[0,0,0,0],votes:[0,0],grid:M.sudoku.slice(),positions:[],...JSON.parse(JSON.stringify(app))};}
 function frame(n,capacity=10,click=false,color=0){return `<div class="p-tenframe ${capacity===20?'double':''}">${Array.from({length:capacity},(_,i)=>`<button type="button" class="p-cell ${i<n?'filled':''}" ${click?`data-op="frame" data-arg="${i}"`:'disabled'} aria-label="第${i+1}格${i<n?'有圓片':'空白'}">${i<n?`<span class="p-dot" style="--dot:${colors[color]}"></span>`:''}</button>`).join('')}</div>`;}
 function handClock(minutes){const t=M.clock(minutes);return svg(`<circle cx="200" cy="145" r="118" fill="#fffaf0" stroke="#526e82" stroke-width="4"/>${Array.from({length:12},(_,i)=>{const a=(i+1)*Math.PI/6;return tx(200+95*Math.sin(a),152-95*Math.cos(a),i+1,18);}).join('')}<line x1="200" y1="145" x2="200" y2="80" stroke="#cd4c4c" stroke-width="9" stroke-linecap="round" transform="rotate(${t.hourAngle} 200 145)"/><line x1="200" y1="145" x2="200" y2="45" stroke="#277aaa" stroke-width="5" stroke-linecap="round" transform="rotate(${t.minuteAngle} 200 145)"/><circle cx="200" cy="145" r="8" fill="#23374d"/>${tx(480,110,'紅色短針：時針',20)}${tx(480,155,'藍色長針：分針',20)}${tx(480,210,'兩支針會一起走',17)}`);}
 function view(d,s){let controls='',scene='',data='',note='先操作、說一說，再把發現畫或寫在工作紙。';
 switch(d.type){
 case 'space':{
  controls=B('同向站','facing',0)+B('面對面','facing',1);const redX=d.facing?230:370,blueX=d.facing?370:230;
  scene=svg(`<circle cx="300" cy="65" r="28" fill="#ffdba9"/><path d="M300 95V220M${blueX} 130H${redX}M300 220L260 270M300 220L340 270" stroke="#526e82" stroke-width="17" fill="none" stroke-linecap="round"/><circle cx="${redX}" cy="130" r="17" fill="#dc4c4c"/><circle cx="${blueX}" cy="130" r="17" fill="#297bba"/>${tx(90,85,'觀察者的左',18)}${tx(550,85,'觀察者的右',18)}${tx(300,30,d.facing?'同伴面向你':'同伴與你看同一方向',18)}`);
  data=`紅環始終戴在同伴自己的右手。${d.proof?`現在從你的視角看，紅環在畫面的${d.facing?'左':'右'}邊。`:'先指位置，再打開觀察說明。'}`;note='請兩位同學真的站一站；圖的左右是觀察者看到的畫面，不要混淆「誰的右手」。';break;}
 case 'length':{
  controls=R('黃棒長度','a',d.a,2,10)+R('綠棒起點','offset',d.offset,0,5)+B('一端對齊','align')+B(d.bent?'把繩拉直':'把繩彎起','bend');
  const x=65+d.offset*30;scene=svg(`<line x1="65" x2="65" y1="45" y2="270" stroke="#9eaebd" stroke-dasharray="6 4"/><rect x="65" y="65" width="${d.a*40}" height="36" rx="9" fill="#ecb636"/><path d="${d.bent?`M${x},185 l${Math.sqrt((d.b*20)**2-40**2)},-40 l${Math.sqrt((d.b*20)**2-40**2)},40`:`M${x},185 h${d.b*40}`}" stroke="#228b70" stroke-width="15" fill="none"/>${tx(310,250,'移動起點和改變長度，是不同的操作',18)}`);
  data=d.proof?`黃棒${d.a}格，綠棒${d.b}格；要對齊起點，彎曲物件還要拉直後用同一單位量。`:'起點沒有對齊時，你的眼睛會被甚麼誤導？';
  if(d.bent)note='彎繩圖只顯示擺法，不用畫面端點跨度作長度。請用同一條實物繩拉直核對。';break;}
 case 'frame':controls=R('圓片數','n',d.n,0,10)+B(d.hidden?'揭開圓片':'遮住再說','hide')+B('閃看一下','flash');scene=d.hidden?'<div class="p-cover">先在腦中看一整排與空格，再說出數量。</div>':frame(d.n,10,true);data=d.proof?`${d.n}＝${Math.min(5,d.n)}＋${Math.max(0,d.n-5)}；還有${10-d.n}格空白。`:'你看的是一整排、另一排，還是空格？';break;
 case 'pairs':case 'group':{
  controls=R('物件數','n',d.n,1,d.type==='pairs'?10:40)+(d.type==='pairs'?[2]:[...new Set([2,5,10,d.size])]).map(v=>B(`每${v}個一組`,'size',v)).join('')+(d.type==='group'?B(d.hidden?'打開豆袋':'先蓋起來','hide'):'');
  if(d.type==='group'&&d.hidden)controls=B('打開豆袋','hide');
  const g=M.groups(d.n,d.size);scene=d.hidden?'<div class="p-cover">先估大約有多少，把猜想寫在紙上，再打開豆袋。</div>':`<div class="p-groups">${Array.from({length:g.full},()=>`<div class="p-group">${dots(d.size,1)}</div>`).join('')}${g.rest?`<div class="p-group leftover">${dots(g.rest,3)}</div>`:''}</div>`;
  data=d.proof?`${g.full}個完整組，每組${d.size}個，剩${g.rest}個。${g.full*d.size}＋${g.rest}＝${d.n}。`:'數完整組時，也要檢查圈外有沒有剩下的。';break;}
 case 'split':controls=R('總數','n',d.n,1,10)+B('移一個到左盤','left')+B('移一個到右盤','right')+B('交換兩盤','swap-split');d.left=Math.min(d.left,d.n);scene=`<div class="p-two">${panel('左盤',dots(d.left,0,'right'))}${panel('右盤',dots(d.n-d.left,1,'left'))}</div>`;data=d.proof?`${d.left}＋${d.n-d.left}＝${d.n}；兩盤合起來的總數沒有改變。`:'點圓片或按按鈕移動，每次只移一個。也可以有一盤是0。';break;
 case 'add':controls=R('原有紅圓片','a',d.a,0,9)+R('加入黃圓片','b',d.b,0,9)+B('交換兩群位置','swap-add');scene=`<div class="p-two">${panel('紅色一群',dots(d.a,0))}${panel('黃色一群',dots(d.b,4))}</div>`;data=d.proof?`${d.a}＋${d.b}＝${d.a+d.b}；${d.b}＋${d.a}＝${d.b+d.a}。`:'交換的是位置。請檢查是否真的加入或拿走了圓片。';break;
 case 'subtract':{
  controls=B('拿走一個','take')+B('全部拿走','take-all')+B('放回全部','restore-taken');
  if(d.compare){scene=`<div class="p-two">${panel('第一群',dots(d.n,0))}${panel('第二群',dots(d.other,1))}</div>`;data=d.proof?`${d.n}−${d.other}＝${d.n-d.other}，比較的是多出的部分。`:'一一配對，指出不能配成一對的部分。';controls='';}
  else {scene=`<div class="p-dots">${Array.from({length:d.n},(_,i)=>B(`<span class="p-dot ${i<d.removed?'removed':''}" style="--dot:${colors[1]}"></span>`,'take',i,`aria-label="圓片${i+1}"`)).join('')}</div>`;data=d.proof?`原有${d.n}，拿走${d.removed}，剩${d.n-d.removed}；${d.n}−${d.removed}＝${d.n-d.removed}。`:`任務：拿走${d.take}個。先動手，不急著看算式。`;}
  break;}
 case 'balance':{const left=d.a+d.x,tilt=Math.max(-12,Math.min(12,(left-d.target)*2));controls=B('盒裡加一塊','x-plus')+B('盒裡少一塊','x-minus')+B('換一題','balance-next');scene=svg(`<path d="M320 110L280 260H360Z" fill="#d8e4ec"/><g transform="rotate(${-tilt} 320 110)"><line x1="100" y1="110" x2="540" y2="110" stroke="#446b87" stroke-width="10"/><rect x="80" y="115" width="160" height="55" rx="10" fill="#ffe1ab"/><rect x="400" y="115" width="160" height="55" rx="10" fill="#c9efe0"/>${tx(160,150,`${d.a}＋盒子(${d.x})`)}${tx(480,150,d.target)}</g>${tx(320,290,'這是數量平衡示意，不是物件重量實驗',17)}`);data=d.proof?`${d.a}＋${d.x}＝${left}；另一邊${d.target}。${left===d.target?'兩邊一樣多，放回算式核對。':'還沒有一樣多，繼續調整。'}`:'用盒裡的圓片數讓兩邊一樣多；不只看等號後面。';break;}
 case 'solid':{
  controls=['cube','cuboid','cylinder','sphere'].map((v,i)=>B(['正方體','長方體','圓柱','球體'][i],'shape',v)).join('')+B('改變放法','rotate-solid')+B('輕推示意','push');
  const shape=d.shape==='sphere'?'<circle cx="320" cy="150" r="80" fill="#d9e8ff" stroke="#3d72a2" stroke-width="3"/><ellipse cx="320" cy="150" rx="30" ry="80" fill="none" stroke="#88a6cb"/>':d.shape==='cylinder'?'<rect x="250" y="80" width="140" height="150" fill="#ffe4b8" stroke="#b27624"/><ellipse cx="320" cy="80" rx="70" ry="26" fill="#fff1d6" stroke="#b27624"/><path d="M250 230a70 26 0 0 0 140 0" fill="#ffe4b8" stroke="#b27624"/>':`<path d="M220 90l${d.shape==='cuboid'?160:120} 0 50 -30 -${d.shape==='cuboid'?160:120} 0Z" fill="#e0f3e5"/><rect x="220" y="90" width="${d.shape==='cuboid'?160:120}" height="120" fill="#c7e8da" stroke="#4c8c76"/><path d="M${d.shape==='cuboid'?380:340} 90l50 -30v120l-50 30Z" fill="#8cc8b1" stroke="#4c8c76"/>`;
  const lift=d.shape==='sphere'?30:d.shape==='cylinder'?(d.angle?40:4):d.angle?(d.shape==='cube'?40:0):50;
  scene=svg(`<line x1="80" x2="560" y1="260" y2="260" stroke="#516a7f" stroke-width="6"/><g transform="translate(0 ${lift})"><g class="${d.push?'p-push':''}" transform="rotate(${d.angle} 320 150)">${shape}</g></g>`);data=d.proof?`${d.shape==='sphere'?'球體有曲面，容易滾動。':d.shape==='cylinder'?(d.angle?'圓柱橫放可滾動。':'圓柱立放的底面平，輕推通常滑動。'):'平面可作支承；仍要檢查底座大小與擺法。'}`:'選形狀、改放法，再用桌上的實物輕推核對。';note='數位圖是性質示意，不能代替真實物件的穩定性實驗。';break;}
 case 'bundle':case 'break10':{
  if(!d.prepared){d.loose=d.n;d.prepared=true;if(d.type==='break10'){d.bundles=Math.floor(d.n/10);d.loose=d.n%10;}}
  controls=B('十根捆一捆','bundle')+B('拆開一捆','unbundle')+(d.type==='break10'?B('拿走一根','remove-stick') : B('加一根','add-stick')+B('取走一根','remove-stick'));
  scene=`<div class="p-two">${panel('每捆10根',`<div class="p-bundles">${Array.from({length:d.bundles},()=>'<div class="p-bundle">||||||||||<b>10</b></div>').join('')||'<span>暫無整捆</span>'}</div>`)}${panel('散棒',`<div class="p-sticks">${Array.from({length:d.loose},()=>'<i></i>').join('')}</div>`)}</div>`;
  data=d.proof?`${d.bundles}個十和${d.loose}個一，共${d.bundles*10+d.loose}根。${d.type==='break10'?`已取走${d.removed}根；可用加法把它們加回核對。`:''}`:d.type==='break10'?`任務：原有${d.n}根，要取走${d.take}根；散棒不夠時，想想怎樣拆。`:'捆與拆不改變總數；加一根或取走一根才會改變總數。';break;}
 case 'ordinal':{
  controls=R('隊伍總數','n',d.n,4,9)+R('選第幾個','pick',d.pick,1,d.n)+B('調換隊頭方向','reverse')+B(d.prefix?'只指第幾個':'指出前面幾個','prefix');
  const animals=['貓','兔','狗','熊','鳥','鹿','虎','羊','象'];scene=`<p class="p-direction">${d.reverse?'← 隊頭在右邊':'隊頭在左邊 →'}</p><div class="p-lineup">${Array.from({length:d.n},(_,i)=>{const rank=d.reverse?d.n-i:i+1;return `<button type="button" data-op="pick" data-arg="${rank}" class="${(d.prefix?rank<=d.pick:rank===d.pick)?'picked':''}"><b>${animals[i]}</b><small>位置${i+1}</small></button>`;}).join('')}</div>`;
  data=d.proof?`所選動物：從前第${d.pick}，從後第${d.n-d.pick+1}；${d.pick}＋${d.n-d.pick+1}−1＝${d.n}。`:'「第幾個」指一個位置；「前面幾個」可能指一群。先確定隊頭。';break;}
 case 'make10':{
  if(d.moved===undefined)d.moved=0;const left=d.a+d.moved,right=d.b-d.moved;
  controls=B('移一個到第一盤','move-ten','',left>=10||right<=0?'disabled':'')+B('移回一個','undo-ten','',d.moved<=0?'disabled':'')+(d.sendTen?B('送出滿十的一盤','send-ten','',left!==10?'disabled':''):'');
  scene=`<div class="p-two">${panel(d.sent?'第一盤已送出':'第一盤',frame(d.sent?0:left,10,false,0))}${panel('第二盤',frame(right,10,false,1))}</div>`;
  data=d.proof?`${d.a}＋${d.b}＝${d.a+d.b}；移了${d.moved}個，成為${left}和${right}。${d.sent?`送出10個後剩${right}。`:''}`:'每次只搬一個，先觀察哪一盤能湊滿十。';break;}
 case 'path':{
  controls=B('比較直路和彎路','path-length')+B(d.closed?'把圍欄開缺口':'把圍欄封起來','close')+B('小蟻試進圍欄','walk');const h=Math.sqrt((d.detour/2)**2-(d.base/2)**2)*12;
  scene=svg(`<path d="M80 225H${80+d.base*12}" stroke="#238b78" stroke-width="9"/><path d="M80 225L${80+d.base*6} ${225-h}L${80+d.base*12} 225" stroke="#d6742f" stroke-width="7" fill="none"/>${tx(80,265,'家',18)}${tx(80+d.base*12,265,'糖粒',18)}<path d="M470 80H600V210H470V${d.closed?80:150}" stroke="#7d55a2" stroke-width="7" fill="none"/>${tx(535,150,d.walk?(d.closed?'不能穿牆':'可從缺口進'):'圍欄',16)}`);
  data=d.proof?`直路${d.base}個單位，彎路${d.detour}個單位，多走${d.detour-d.base}個單位。${d.closed?'圍欄沒有缺口。':'圍欄有缺口。'}`:'先確認兩條路有相同起點與終點，再用同一單位比較。';note='這是路線示意；實際操作請用軟繩沿紙上的路貼好，再拉直比較。';break;}
 case 'hundred':{
  controls=B('← 左','neighbor','left')+B('右 →','neighbor','right')+B('↑ 上','neighbor','up')+B('↓ 下','neighbor','down')+B(d.mask?'揭開鄰格':'遮住鄰格','mask');const ne=M.neighbors(d.n);
  scene=`<div class="p-hundred">${Array.from({length:100},(_,i)=>{const n=i+1;return B(d.mask&&Object.values(ne).includes(n)?'?':n,'hundred',n,`class="${n===d.n?'picked':Object.values(ne).includes(n)?'neighbor':''}" aria-label="百數表${n}"`);}).join('')}</div>`;
  data=d.proof?`中心${d.n}：左${ne.left??'無格'}、右${ne.right??'無格'}、上${ne.up??'無格'}、下${ne.down??'無格'}。`:'看一看數字的十位與個位怎樣改變。表邊不能跨到另一行。';break;}
 case 'clock':controls=R('慢慢撥動長針','minutes',d.minutes,0,720,5)+B('再走半小時','clock-add',30)+B('再走一小時','clock-add',60)+B('回到3時整','clock-set',180);scene=handClock(d.minutes);data=d.proof?`時刻 ${ftime(d.minutes)}。長針走30分鐘，短針走半格；長針一圈60分鐘，短針走一大格。`:'先看長針，再看短針在兩個數字之間的哪裡；圖上的針會聯動。';break;
 case 'timeline':{
  controls=B('前進半小時','progress',30)+B('退回半小時','progress',-30);const total=d.end-d.start;d.progress=Math.max(0,Math.min(total,d.progress));const count=Math.ceil(total/30);
  scene=handClock(d.start+d.progress)+`<div class="p-timeline">${Array.from({length:count+1},(_,i)=>`<span class="${i*30<=d.progress?'visited':''}">${ftime(d.start+i*30)}</span>`).join('')}</div>`;
  data=d.proof?`由${ftime(d.start)}到${ftime(d.end)}，共${total}分鐘（${Math.floor(total/60)}小時${total%60}分鐘）。現在已走${d.progress}分鐘。`:'每個半小時段都要數，不能只減鐘面的兩個小時數。';break;}
 case 'calendar':{
  const days=['一','二','三','四','五','六','日'];
  if(d.cycle){controls=B('走一天','cycle',1)+B('走七天','cycle',7)+B('重新走','cycle-reset');scene=`<div class="p-weekcycle">${days.map((n,i)=>`<div class="${i===((d.day-1+d.progress)%7)?'picked':''}">星期${n}</div>`).join('')}</div>`;data=d.proof?`由星期${days[d.day-1]}出發，已走${d.progress}天；現在是星期${days[(d.day-1+d.progress)%7]}。`:`任務：走${d.jump}天，注意7天一圈。`;}
  else{controls=B('前一週','calendar',-7,d.day-7<3?'disabled':'')+B('後一週','calendar',7,d.day+7>23?'disabled':'');scene=`<p>練習月曆：某月3日是星期一，並非今年真實月份。</p><div class="p-calendar">${days.map(n=>`<b>${n}</b>`).join('')}${Array.from({length:21},(_,i)=>B(i+3,'day',i+3,`class="${i+3===d.day?'picked':''}"`)).join('')}</div>`;data=d.proof?`${d.day}日是星期${days[M.weekday(d.day)]}。同一列每隔7天，星期相同。`:'點一個日期，再按前／後一週；到邊界請換一個日期。';}break;}
 case 'columns':{
  controls=B('合併整十與散數','combine')+B('重新分開','uncombine');const ns=d.numbers;
  scene=`<div class="p-columns">${(d.combined?[ns.reduce((a,b)=>a+b,0)]:ns).map(n=>panel(`${d.combined?'合起來':'一群'}：${n}`,`<div class="p-place"><div>${Array.from({length:Math.floor(n/10)},()=>'<div class="p-bundle">||||||||||<b>10</b></div>').join('')}</div><div>${dots(n%10,1)}</div></div>`)).join('')}</div>`;
  data=d.proof?`${ns.join('＋')}＝${ns.reduce((a,b)=>a+b,0)}。先合十，再合一；十位與十位對齊。`:'先估範圍，再用捆和散棒核對。';break;}
 case 'reverse':{
  controls=d.mode==='share'?R('由哥哥移給弟弟','x',d.x,0,6):B(d.mode==='restore'?'把送出的加回去':'一端對齊比較','reverse-check');
  const a=d.mode==='restore'?(d.restored?d.a+d.b:d.a):d.a-d.x,b=d.mode==='share'?d.b+d.x:d.b;
  scene=d.mode==='difference'?svg(`${[a,b].map((count,row)=>Array.from({length:count},(_,i)=>`<rect x="${60+i*12}" y="${65+row*95}" width="11" height="42" fill="${row?'#228b7a':i<b?'#eaa56b':'#c75039'}" stroke="#fff"/>`).join('')).join('')}<line x1="60" y1="40" x2="60" y2="230" stroke="#6d8294" stroke-dasharray="6 5"/>${tx(320,270,'相同單位、起點對齊，指出多出的部分',18)}`):`<div class="p-two">${panel(d.mode==='restore'?'剩下／還原':'第一方',dots(a,0))}${panel(d.mode==='restore'?'送出過的':'第二方',dots(b,1))}</div>`;
  data=d.proof?(d.mode==='restore'?`剩${d.a}，送出${d.b}；原有${d.a+d.b}，再用${d.a+d.b}−${d.b}＝${d.a}查。`:d.mode==='share'?`哥哥${a}、弟弟${b}，相差${Math.abs(a-b)}。給1支，一邊少1、另一邊多1。`:`${d.a}−${d.b}＝${d.a-d.b}。`):'先辨認要找的是「相差」「剩下」還是「原有」，不要只找關鍵字。';break;}
 case 'coins':case 'shop':{
  if(d.budget){controls=d.items.map((v,i)=>B(`買${i?'牛奶':'麵包'} ${v/10}圓`,'basket',i)).join('')+B('清空購物籃','clear-coins');const total=d.coins.reduce((a,b)=>a+b,0);scene=`<div class="p-shop"><h3>預算 ${d.budget/10} 圓</h3>${d.coins.map(v=>`<span class="p-coin">${v/10}圓商品</span>`).join('')||'<p>先討論要買甚麼，再加入購物籃。</p>'}</div>`;data=d.proof?`已選${total/10}圓。${total<=d.budget?`還剩${(d.budget-total)/10}圓。`:`超出${(total-d.budget)/10}圓，需要調整選擇。`}`:'先估夠不夠錢，再用金額核對。';break;}
  const vals=d.type==='shop'||d.wholeOnly?[10,20,50]:[1,5,10,20,50,100];controls=vals.map(v=>B(`${v<10?v:v/10}${v<10?'毫':'圓'}`,'coin',v)).join('')+B('拿回最後一枚','coin-undo')+B('重新配錢','clear-coins')+(d.type==='shop'?B('改付10圓','pay-ten'):'');
  const total=d.coins.reduce((a,b)=>a+b,0),goal=d.type==='shop'?d.price:d.target;scene=`<div class="p-shop"><h3>${d.type==='shop'?'商品價格':'要湊的金額'} ${goal%10?goal+'毫':goal/10+'圓'}</h3><div class="p-money">${d.coins.map(v=>`<span class="p-coin">${v<10?v:v/10}<small>${v<10?'毫':'圓'}</small></span>`).join('')||'<p>點上方的面值卡，擺出你的付法。</p>'}</div></div>`;
  data=d.proof?`共${total}毫＝${Math.floor(total/10)}圓${total%10}毫，${d.coins.length}枚。${total===goal?'剛好一樣多。':total>goal?`多${total-goal}毫${d.type==='shop'?'要找續':''}。`:`還差${goal-total}毫。`}${d.type==='shop'?`只用1、2、5圓剛好付${goal/10}圓，最少${M.minCoins(goal/10)}枚。`:''}`:'先比較錢的面值與單位，不用枚數代替總額。';note='使用面值教學卡，不仿製真實硬幣；本課1圓＝10毫，金額均以整數毫運算。';break;}
 case 'units':{
  controls=[1,3,4].map(v=>B(v===1?'相同厘米單位':`每單位${v}厘米`,'unit',v)).join('')+B(d.gaps?'首尾相接':'故意留空','gap');
  const count=Math.floor(d.length/d.unit),w=d.unit*30;scene=svg(`<rect x="60" y="50" width="${d.length*30}" height="55" fill="#f2c858" rx="8"/>${Array.from({length:count},(_,i)=>`<rect x="${60+i*(w+(d.gaps?12:0))}" y="150" width="${w}" height="45" fill="${i%2?'#c1e9dc':'#dce9ff'}" stroke="#326b8a"/>`).join('')}${tx(320,260,'單位要同樣長、首尾相接、不重疊',19)}`);
  data=d.proof?`${d.length}厘米的模型，用每份${d.unit}厘米，需要${count}份${d.length%d.unit?'再加不足一份的部分':''}。${d.gaps?'現在留了空，不能當作正確量度。':''}`:'換單位大小，物件本身有沒有變？';note='螢幕上的「厘米」是模型刻度，不是iPad實際厘米；真實長度要用實物尺量。';break;}
 case 'ruler':{
  controls=R('物件起點','start',d.start,0,10)+R('物件長度','length',d.length,1,8)+B(d.mask?'露出0刻度':'遮住0至2','mask');const end=d.start+d.length;
  scene=svg(`<rect x="30" y="145" width="580" height="70" fill="#fff0b9" stroke="#c69a37"/>${Array.from({length:21},(_,i)=>`<line x1="${30+i*28}" y1="145" x2="${30+i*28}" y2="${i%5?162:174}" stroke="#374c62"/>${tx(30+i*28,197,d.mask&&i<3?'?':i,15)}`).join('')}<rect x="${30+d.start*28}" y="80" width="${d.length*28}" height="45" rx="6" fill="#2d9381"/>${Array.from({length:d.length},(_,i)=>`<path d="M${30+(d.start+i)*28} 235q14 20 28 0" stroke="#c96b35" fill="none" stroke-width="3"/>`).join('')}`);
  data=d.proof?`終點${end}−起點${d.start}＝${d.length}厘米。數的是間隔，不是終點數字。`:'把起點移到別的刻度，長度會改變嗎？';note='畫面為量尺模型，請用工作紙的尺或真實厘米尺再次驗證。';break;}
 case 'shape':{
  controls=['square','rectangle','triangle','circle','rhombus'].map((v,i)=>B(['正方形','長方形','三角形','圓形','菱形'][i],'shape',v)).join('')+B('旋轉45度','rotate-shape');
  const pts=d.shape==='square'?'230,70 410,70 410,250 230,250':d.shape==='rectangle'?'190,100 450,100 450,220 190,220':d.shape==='rhombus'?'190,160 320,85 450,160 320,235':'320,45 190,250 450,250';
  const fig=d.shape==='circle'?'<circle cx="320" cy="160" r="100" fill="#e2f4e9" stroke="#3a8b73" stroke-width="4"/>':`<polygon points="${pts}" fill="#eee2fb" stroke="#7c4dae" stroke-width="4"/>${d.diagonal&&d.shape==='square'?'<path d="M230 70L410 250" stroke="#d06331" stroke-width="4" stroke-dasharray="8 5"/>':''}`;
  scene=svg(`<g transform="rotate(${d.angle} 320 160)">${fig}</g>`,'0 0 640 330');
  data=d.proof?`${d.shape==='circle'?'圓形沒有直邊與角。':d.shape==='triangle'?'三角形有3條直邊、3個角。':d.shape==='rhombus'?'此菱形有4條等長邊，但角不是紙角；不是正方形。':d.shape==='square'?'正方形4邊等長、4個角都是紙角。':'長方形的4個角都是紙角，相對的邊等長。'}旋轉不改變這些性質。${d.diagonal?'沿對角線分成兩個三角形，各3個角，合共6個角。':''}`:'只看「有4個角」夠不夠？旋轉前後，哪些性質沒有變？';break;}
 case 'tangram':{
  const polys=d.twoOnly?Array.from({length:2},()=>[[0,0],[70,0],[0,70]]):M.tangram.map(p=>p.map(([x,y])=>[x*45,y*45]));
  if(!d.positions.length)d.positions=polys.map((_,i)=>({x:d.twoOnly?200+i*140:160+(i%3)*40,y:d.twoOnly?90:40+Math.floor(i/3)*35,angle:0}));
  controls=B('所選板轉45°','turn-piece')+B('換一個拼法','arrange')+B('回到起初','reset-pieces');
  scene=svg(polys.map((p,i)=>`<g data-piece="${i}" transform="translate(${d.positions[i].x} ${d.positions[i].y}) rotate(${d.positions[i].angle})"><polygon points="${p.map(a=>a.join(',')).join(' ')}" fill="${colors[i]}" fill-opacity=".8" stroke="${i===d.selected?'#102d49':'#fff'}" stroke-width="${i===d.selected?4:2}"/><text x="${p.reduce((a,b)=>a+b[0],0)/p.length}" y="${p.reduce((a,b)=>a+b[1],0)/p.length}" fill="#fff" font-size="17">${i+1}</text></g>`).join(''),'0 0 640 350');
  data=d.proof?`板塊數與總大小不因移動或旋轉而改變。${d.twoOnly?'檢查兩塊都用到、沒有重疊。':'全副7塊：5個三角形、1個正方形、1個平行四邊形。'}`:'用手指拖動板塊；點選一片，再按轉45°。別忘了檢查重疊和漏用。';note='自由拼圖不自動宣稱已完成；請與實物七巧板或紙上描出的外框對照。';break;}
 case 'stats':{
  const names=['蘋果','香蕉','草莓','橙子'],icons=['🍎','🍌','🍓','🍊'],counts=[6,8,5,6],fruit=[];counts.forEach((n,k)=>{for(let j=0;j<n;j++)fruit.push(k);});const mixed=fruit.map((_,i)=>fruit[(i*7)%25]);
  if(d.mode==='survey'){controls=names.slice(0,2).map((n,i)=>B(`${n}加1票`,'vote',i)).join('')+B('重新調查','reset-votes');scene=`<div class="p-chart">${d.votes.map((n,i)=>`<div><div class="p-bar">${Array.from({length:n},()=>`<i>${icons[i]}</i>`).join('')}</div><b>${names[i]}</b></div>`).join('')}</div>`;data=d.proof?`蘋果${d.votes[0]}票、香蕉${d.votes[1]}票；共${d.votes[0]+d.votes[1]}票。每人只能選一項，檢查有沒有重複。`:'一人只選一項，記錄員在工作紙畫一格；畫面可用來對照。';break;}
  controls=names.map((n,i)=>B(`選${n}${d.mode==='sort'?'籃':'欄'}`,'bin',i,`aria-pressed="${d.bin===i}"`)).join('')+B(d.mode==='sort'?'自己畫統計圖':'回到分類台','stats-mode')+(d.mode==='chart'?B('這一類加一格','chart-add')+B('這一類少一格','chart-minus'):'');
  if(d.mode==='sort')scene=`<div class="p-fruits">${mixed.map((k,i)=>B(`${icons[k]}<small>${names[k]}</small>`,'fruit',i,`class="${d.assign[i]!==undefined?'sorted':''}" aria-label="第${i+1}張${names[k]}"`)).join('')}</div><div class="p-bins">${names.map((n,i)=>panel(n,`${Object.values(d.assign).filter(v=>v===i).length}張卡已放入`)).join('')}</div>`;
  else scene=`<div class="p-chart">${d.chart.map((n,i)=>`<div><div class="p-bar">${Array.from({length:n},()=>`<i>${icons[i]}</i>`).join('')}</div><b>${names[i]}</b>${d.proof?`<strong>${n}</strong>`:''}</div>`).join('')}</div>`;
  const wrong=Object.entries(d.assign).filter(([i,bin])=>mixed[+i]!==bin).length;
  data=d.proof?`原有蘋果6、香蕉8、草莓5、橙子6。${d.mode==='sort'?`已分類${Object.keys(d.assign).length}張，${wrong?'還有分類需要重新檢查。':'目前放入的分類正確。'}`:`${counts.every((n,i)=>n===d.chart[i])?'你的圖與卡片相符。':'請把你畫的格數與卡片逐類核對。'}香蕉最多、草莓最少，相差3個；蘋果與橙子一樣多。`}`:d.mode==='chart'?'先選水果欄，再按加一格，自己把數據畫出來。每格代表1個，從同一底線排。':'先選籃子再點水果卡；同一卡只放一籃，再點可移出。';break;}
 case 'sudoku':{
  if(d.logic){controls=R('圓形代表幾','guessCircle',d.guessCircle,0,5)+R('方形代表幾','guessSquare',d.guessSquare,0,5);scene=`<div class="p-logic"><p>○ ＋ ○ ＝ 4</p><p>□ ＋ ○ ＝ 5</p>${dots(d.guessCircle*2,1)}${dots(d.guessSquare+d.guessCircle,0)}</div>`;data=d.proof?`代入：${d.guessCircle}＋${d.guessCircle}＝${d.guessCircle*2}；${d.guessSquare}＋${d.guessCircle}＝${d.guessSquare+d.guessCircle}。${d.guessCircle===2&&d.guessSquare===3?'兩個條件都成立。':'必須同時符合兩個條件。'}`:'先用實物或圖檢查第一個條件，再把發現放進第二個。';break;}
  const sym=['','○','□','△','☆'];controls=[1,2,3,4].map(v=>B(sym[v],'sudoku-value',v)).join('')+B('清除此空格','sudoku-value',0)+B('看看候選','candidates');
  scene=`<div class="p-sudoku">${d.grid.map((v,i)=>B(sym[v]||'·','sudoku-select',i,`class="${M.sudoku[i]?'clue':''} ${i===d.selectedCell?'picked':''}" aria-label="第${Math.floor(i/4)+1}行第${i%4+1}列${v?sym[v]:'空格'}"`)).join('')}</div><p>${d.help?`所選空格候選：${M.candidates(d.grid,d.selectedCell).map(v=>sym[v]).join('、')||'沒有，請檢查先前填入的格。'}`:'每行、每列、每個粗框2×2小宮四種各一。'}</p>`;
  const bad=d.grid.map((v,i)=>v&&!M.candidates(d.grid,i).includes(v)?i:-1).filter(i=>i>=0);data=d.proof?(bad.length?`第${Math.floor(bad[0]/4)+1}行第${bad[0]%4+1}列有衝突；不能只查一行。`:d.grid.every(Boolean)?'整盤行、列、宮都符合規則。請選一格解釋排除了甚麼。':'目前沒有衝突，但仍有空格；先說明理由再填。'):'先點空格，再選圖形；原題的提示格不能更改。';break;}
 }
 return {controls,scene,data,note};}
 function bind(host,s){const root=host.querySelector('[data-primary]');if(!root)return;let d=memory.get(s.id);if(!d){d=initial(s.app);memory.set(s.id,d);}let timer=null;
  root.innerHTML='<div class="p-controls"></div><div class="p-scene"></div><div class="p-readout" aria-live="polite"></div><p class="p-note"></p><div class="p-check"></div>';
  function draw(full=true){const v=view(d,s);if(full)root.querySelector('.p-controls').innerHTML=v.controls;root.querySelector('.p-scene').innerHTML=v.scene;root.querySelector('.p-readout').textContent=v.data;root.querySelector('.p-note').textContent=v.note;root.querySelector('.p-check').innerHTML=B(d.proof?'收起核對':'看看數據與核對','proof')+B('重設這個教具','reset');root.querySelectorAll('[data-label]').forEach(e=>e.textContent=e.dataset.label==='minutes'?'慢慢撥動':d[e.dataset.label]);}
  root.oninput=e=>{const key=e.target.dataset.param;if(!key)return;d[key]=Number(e.target.value);if(key==='n'){d.left=Math.min(d.left,d.n);d.pick=Math.min(d.pick,d.n);}draw(false);const pick=root.querySelector('[data-param=pick]');if(pick){pick.max=d.n;pick.value=d.pick;}};
  root.onclick=e=>{const b=e.target.closest('[data-op]');if(!b||!root.contains(b))return;const op=b.dataset.op,a=b.dataset.arg,n=Number(a);
   switch(op){
    case 'proof':d.proof=!d.proof;break;case 'reset':d=initial(s.app);memory.set(s.id,d);break;
    case 'facing':d.facing=Boolean(n);break;case 'align':d.offset=0;break;case 'bend':d.bent=!d.bent;break;
    case 'hide':d.hidden=!d.hidden;break;case 'flash':d.hidden=false;draw();clearTimeout(timer);timer=setTimeout(()=>{d.hidden=true;draw();},1200);return;
    case 'frame':d.n=n<d.n?d.n-1:Math.min(10,d.n+1);break;case 'size':d.size=n;break;
    case 'left':d.left=Math.min(d.n,d.left+1);break;case 'right':d.left=Math.max(0,d.left-1);break;case 'swap-split':d.left=d.n-d.left;break;
    case 'swap-add':[d.a,d.b]=[d.b,d.a];break;case 'take':d.removed=Math.min(d.n,d.removed+1);break;case 'take-all':d.removed=d.n;break;case 'restore-taken':d.removed=0;break;
    case 'x-plus':d.x=Math.min(12,d.x+1);break;case 'x-minus':d.x=Math.max(0,d.x-1);break;case 'balance-next':[d.a,d.target]=d.a===4?[6,10]:[4,9];d.x=0;break;
    case 'shape':d.shape=a;d.angle=0;break;case 'rotate-solid':d.angle=d.angle?0:90;break;case 'push':d.push=!d.push;break;
    case 'bundle':if(d.loose>=10){d.loose-=10;d.bundles++;}break;case 'unbundle':if(d.bundles){d.bundles--;d.loose+=10;}break;
    case 'add-stick':if(d.loose+d.bundles*10<30)d.loose++;break;case 'remove-stick':if(d.loose>0){d.loose--;d.removed++;}break;
    case 'reverse':d.reverse=!d.reverse;break;case 'prefix':d.prefix=!d.prefix;break;case 'pick':d.pick=n;break;
    case 'move-ten':if(d.a+d.moved<10&&d.b>d.moved)d.moved++;break;case 'undo-ten':d.moved=Math.max(0,d.moved-1);d.sent=false;break;case 'send-ten':d.sent=true;break;
    case 'path-length':d.proof=true;break;case 'close':d.closed=!d.closed;break;case 'walk':d.walk=true;break;
    case 'neighbor':{const next=M.neighbors(d.n)[a];if(next)d.n=next;break;}case 'hundred':d.n=n;break;case 'mask':d.mask=!d.mask;break;
    case 'clock-add':d.minutes=(d.minutes+n)%720;break;case 'clock-set':d.minutes=n;break;case 'progress':d.progress+=n;break;
    case 'calendar':if(d.day+n>=3&&d.day+n<=23)d.day+=n;break;case 'day':d.day=n;break;case 'cycle':d.progress=Math.min(21,d.progress+n);break;case 'cycle-reset':d.progress=0;break;
    case 'combine':d.combined=true;break;case 'uncombine':d.combined=false;break;case 'reverse-check':d.restored=true;d.proof=true;break;
    case 'coin':d.coins.push(n);break;case 'coin-undo':d.coins.pop();break;case 'clear-coins':d.coins=[];break;case 'pay-ten':d.coins=[100];break;case 'basket':d.coins.push(d.items[n]);break;
    case 'unit':d.unit=n;break;case 'gap':d.gaps=!d.gaps;break;case 'rotate-shape':d.angle=(d.angle+45)%360;break;
    case 'turn-piece':d.positions[d.selected].angle=(d.positions[d.selected].angle+45)%360;break;case 'reset-pieces':d.positions=[];break;
    case 'arrange':if(d.twoOnly){d.arranged=!d.arranged;d.positions=d.arranged?[{x:270,y:130,angle:0},{x:340,y:200,angle:180}]:[{x:320,y:130,angle:0},{x:320,y:130,angle:90}];}else d.positions=M.tangram.map(()=>({x:220,y:60,angle:0}));break;
    case 'bin':d.bin=n;break;case 'fruit':if(d.assign[n]!==undefined)delete d.assign[n];else d.assign[n]=d.bin;break;case 'stats-mode':d.mode=d.mode==='sort'?'chart':'sort';break;case 'chart-add':d.chart[d.bin]=Math.min(12,d.chart[d.bin]+1);break;case 'chart-minus':d.chart[d.bin]=Math.max(0,d.chart[d.bin]-1);break;case 'vote':d.votes[n]++;break;case 'reset-votes':d.votes=[0,0];break;
    case 'sudoku-select':if(!M.sudoku[n])d.selectedCell=n;break;case 'sudoku-value':if(!M.sudoku[d.selectedCell])d.grid[d.selectedCell]=n;break;case 'candidates':d.help=!d.help;break;
   }draw();
  };
  let drag=null;root.onpointerdown=e=>{const piece=e.target.closest('[data-piece]');if(!piece)return;const i=+piece.dataset.piece,box=piece.ownerSVGElement.getBoundingClientRect();d.selected=i;drag={id:e.pointerId,i,x:e.clientX,y:e.clientY,start:{...d.positions[i]},scale:640/box.width};root.setPointerCapture(e.pointerId);e.preventDefault();};
  root.onpointermove=e=>{if(!drag||drag.id!==e.pointerId)return;e.preventDefault();const p=d.positions[drag.i];p.x=Math.max(30,Math.min(570,drag.start.x+(e.clientX-drag.x)*drag.scale));p.y=Math.max(25,Math.min(300,drag.start.y+(e.clientY-drag.y)*drag.scale));const g=root.querySelector(`[data-piece="${drag.i}"]`);if(g)g.setAttribute('transform',`translate(${p.x} ${p.y}) rotate(${p.angle})`);};
  const stop=e=>{if(drag&&e.pointerId===drag.id){drag=null;draw();}};root.onpointerup=stop;root.onpointercancel=stop;
  draw();return ()=>clearTimeout(timer);
 }
 window.Primary={view:s=>(s.instructions?'<div class="primary-instructions">'+s.instructions.map(t=>'<p>'+E(t)+'</p>').join('')+'</div>':'')+'<section class="primary-board" data-primary></section>',bind,reset:()=>memory.clear()};
})();
