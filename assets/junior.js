/* P3 shared-iPad manipulatives. All responses and experiments live only in memory. */
(function(){'use strict';
 const M=window.JuniorModel,memory=new Map();
 const E=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const B=(t,op,a='',extra='')=>`<button type="button" data-jop="${op}" data-arg="${E(a)}" ${extra}>${E(t)}</button>`;
 const R=(t,k,v,min,max,step=1)=>`<label>${E(t)}：${v}<input type="range" aria-label="${E(t)}" data-jparam="${k}" min="${min}" max="${max}" step="${step}" value="${v}"></label>`;
 const svg=inside=>`<svg class="j-svg" viewBox="0 0 660 300" role="img" aria-label="可操作的數學模型">${inside}</svg>`;
 const T=(x,y,t,size=19)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" fill="#23394d">${E(t)}</text>`;
 const panel=(t,h)=>`<section class="j-panel"><h3>${E(t)}</h3>${h}</section>`;
 const dots=n=>`<div class="j-dots">${Array.from({length:n},()=>'<span class="j-dot"></span>').join('')}</div>`;
 const table=(head,rows)=>`<table class="j-table"><thead><tr>${head.map(t=>`<th>${E(t)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(t=>`<td>${E(t)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
 const strip=(n,k,width=100,equal=true)=>`<div class="j-strip" style="width:${width}%">${Array.from({length:n},(_,i)=>`<div class="j-part ${i<k?'on':''}" style="flex:${equal?1:i===0?2:i===n-1?.5:1}">${i<k?'●':''}</div>`).join('')}</div>`;
 const state=a=>({a:24,b:3,c:2,n:24,d:4,target:80,start:565,minutes:40,width:4,length:6,rotation:0,shape:'iso',unit:1,step:0,proof:false,alternate:false,mode:0,counts:[0,0,0],cells:[],heights:[1,1,1,0],red:3,blue:1,history:[],chart:[0,0,0],selected:0,...structuredClone(a)});
 function view(d,s){let controls='',scene='',answer='',note='模型的圖形與刻度不代表螢幕上的實際厘米；正式紀錄與說理寫在工作紙。';
 switch(d.type){
 case 'shopping':{
  controls=R('簿的本數（每本12元）','a',d.a,1,4)+R('筆的支數（每支8元）','b',d.b,1,5)+B('交換一種買法','alternate');const cost=12*d.a+8*d.b;
  scene=`<div class="j-two">${panel('簿：'+d.a+'本',dots(d.a))}${panel('筆：'+d.b+'支',dots(d.b))}</div><p>預算50元，兩種都至少買1件；先估再算。</p>`;
  answer=`12×${d.a}＋8×${d.b}＝${cost}元。${cost<=50?'可行，餘'+(50-cost)+'元':'超預算'+(cost-50)+'元，需調整'}。${d.alternate?'例如1本3支用36元，2本2支用40元；兩種都符合至少各一件。':''}`;break;}
 case 'chain':{
  controls=R('原來總數','a',d.a,120,600,12)+R('先分幾組','b',d.b,2,12)+R('再分幾份','c',d.c,2,6)+B('比較兩種括號','alternate');
  scene=`<p class="j-big">(${d.a}÷${d.b})÷${d.c}</p><p>先平均分${d.b}組，每組再分${d.c}份；總共有多少小份？</p>`+(d.alternate?`<p class="j-big">${d.a}÷(${d.b}×${d.c})<br>${d.a}÷(${d.b}÷${d.c})</p>`:'');
  answer=`依序連除＝${Number((d.a/d.b/d.c).toFixed(4))}；除以${d.b}×${d.c}也得${Number((d.a/(d.b*d.c)).toFixed(4))}。除以(${d.b}÷${d.c})卻得${Number((d.a/(d.b/d.c)).toFixed(4))}；分組意義不同。`;break;}
 case 'time-unit':{
  controls=R('秒數','n',d.n,15,240,15)+B('把60秒換成1分鐘','alternate');const q=M.divide(d.n,60);
  scene=`<div class="j-progress">${Array.from({length:Math.floor(d.n/15)},(_,i)=>`<span class="${d.alternate&&i<q.q*4?'active':''}">15秒</span>`).join('')}</div><p>四段15秒是60秒；請圈成一組一分鐘。</p>`;answer=`${d.n}秒＝${q.q}分${q.r}秒；${q.q}×60＋${q.r}＝${d.n}秒。`;break;}
 case 'wall':{
  controls=B('改長邊／短邊靠牆','alternate');const saved=d.alternate?d.width:d.length,p=2*(d.length+d.width);
  scene=svg(`<rect x="130" y="70" width="360" height="180" fill="#d5edca" stroke="#258275" stroke-width="4"/><line x1="${d.alternate?130:130}" x2="${d.alternate?130:490}" y1="70" y2="${d.alternate?250:70}" stroke="#6a7080" stroke-width="13"/>${T(310,45,'長12米')}${T(560,170,'闊8米')}${T(310,285,'粗灰線是已有且足夠長的牆',16)}`);answer=`完整周界${p}米，靠牆邊${saved}米不用欄，需${p-saved}米圍欄。長邊靠牆需28米，短邊靠牆需32米；先說清楚靠哪一邊。`;break;}
 case 'grouping':{
  controls=R('盒數','c',d.c,1,12)+R('每盒袋數','b',d.b,1,6)+R('每袋件數','a',d.a,1,25)+B('切換先數盒或先數袋','alternate');
  scene=`<div class="j-two">${panel('同一批物件',Array.from({length:d.c},(_,i)=>`<div class="j-panel">第${i+1}盒${Array.from({length:d.b},()=>`<span class="j-group">${dots(d.a)}</span>`).join('')}</div>`).join(''))}${panel(d.alternate?'先算每盒件數':'先算袋的總數',`<p class="j-big">${d.alternate?`${d.c}×(${d.b}×${d.a})`:`(${d.c}×${d.b})×${d.a}`}</p><p>每一個圓點都要在兩條路線中找到位置。</p>`)}</div>`;
  answer=`(${d.c}×${d.b})×${d.a}＝${d.c}×(${d.b}×${d.a})＝${d.c*d.b*d.a}件。改變括號沒有增減物件。`;break;}
 case 'multiply':{
  const m=M.multiply(d.a,d.b);controls=R('被乘數','a',d.a,10,999)+R('乘幾份','b',d.b,2,9)+B('交換滿十，走下一位','step')+B('重看個位','rewind');
  scene=`<div class="j-progress">${m.columns.map((c,i)=>`<span class="${i===d.step?'active':''}">${['個','十','百'][i]}位</span>`).join('')}</div>`+table(['數位','本位原有的量','從低位換來','合計與交換'],m.columns.filter((_,i)=>i<=d.step).map(c=>[c.place,c.digit+'×'+d.b,c.incoming,`${c.raw}個${c.place}＝${c.carry}個${c.place*10}＋${c.result}個${c.place}`]));
  answer=`${d.a}×${d.b}＝${m.product}。${m.columns.map(c=>`在${c.place}位進${c.carry}，代表${c.carry*c.place*10}`).join('；')}。中間的0不會阻止低位進來。`;break;}
 case 'estimate':{
  controls=R('每份容量或單價','a',d.a,10,60)+R('份數','b',d.b,1,10)+R('需要量或預算','target',d.target,100,300)+B('比較估算與精算','alternate');const est=Math.round(d.a/10)*10*d.b,actual=d.a*d.b,max=Math.max(est,actual,d.target)*1.1;
  scene=svg([['估算',est,'#d9a629'],['精算',actual,'#258b82'],['需要量／預算',d.target,'#8662a7']].map(([t,n,c],i)=>`<rect x="140" y="${35+i*80}" width="${n/max*460}" height="40" fill="${c}"/>${T(65,62+i*80,t,16)}${T(140+n/max*460,93+i*80,d.alternate?n:'？',16)}`).join(''));
  answer=`估算${est}，實際${actual}，相差${Math.abs(est-actual)}。實際量${actual>=d.target?'不少於':'少於'}${d.target}，相差${Math.abs(actual-d.target)}。先說這是容量還是費用，才能判斷「足夠」。`;break;}
 case 'length-unit':{
  controls=R('整千米','a',d.a,0,5)+R('另有米數','b',d.b,0,950,50)+B('以相同單位比較','alternate');
  scene=`<div class="j-progress">${Array.from({length:d.a},()=>'<span>1千米＝1000米</span>').join('')}<span>另有${d.b}米</span></div>`;answer=`${d.a}千米${d.b}米＝${d.a*1000+d.b}米。1千米＝1000米；先統一單位，再比較路程。`;break;}
 case 'ruler':{
  controls=R('起點毫米','start',d.start,0,50)+R('長度毫米','length',d.length,10,55)+B('移至0刻度','zero')+B('起點移後10毫米','shift');const end=d.start+d.length;
  scene=svg(`<rect x="35" y="140" width="590" height="70" fill="#ffe6a5"/>${Array.from({length:111},(_,i)=>`<line x1="${35+i*5.2}" x2="${35+i*5.2}" y1="140" y2="${i%10?155:175}" stroke="#374e63"/>${i%10?'':T(35+i*5.2,200,i,13)}`).join('')}<line x1="${35+d.start*5.2}" x2="${35+end*5.2}" y1="105" y2="105" stroke="#1b877a" stroke-width="16"/>${T(330,45,'讀兩端位置；移動起點，物件長度不變')}`);
  answer=`${end}−${d.start}＝${d.length}毫米。10毫米＝1厘米；1000米＝1千米。3厘米8毫米＝38毫米，2千米400米＝2400米。`;break;}
 case 'money':{
  controls=[10,20,50].map((v,i)=>d.noFifty&&i===2?'':B('加一張'+v+'元','note',i)).join('')+B('退回一張','undo-note')+B('清空鈔票','clear-notes')+B('有次序列出全部付法','alternate');const sum=d.counts.reduce((n,c,i)=>n+c*[10,20,50][i],0),all=M.payments(d.target).filter(a=>!d.noFifty||a[2]===0),min=Math.min(...all.map(a=>a.reduce((x,y)=>x+y,0)));
  scene=`<p>任務：剛好付${d.target}元，10／20／50元模型鈔票供應不限，交換次序不另算。</p><div class="j-cards">${d.counts.flatMap((n,i)=>Array.from({length:n},()=>`<span>${[10,20,50][i]}元</span>`)).join('')}</div><p class="j-big">已湊 ${sum} 元</p>`+(d.alternate?table(['10元張數','20元張數','50元張數'],all):'');
  answer=`你的組合共${sum}元、${d.counts.reduce((a,b)=>a+b,0)}張，與目標相差${Math.abs(d.target-sum)}元。剛好付${d.target}元有${all.length}種付法；最少${min}張。`;break;}
 case 'division':case 'zero-division':case 'remainder':{
  const q=M.divide(d.n,d.d);controls=R('總數','n',d.n,1,d.type==='zero-division'?900:Math.max(80,d.n))+R('人數或每組量','d',d.d,2,Math.max(9,d.d))+B('切換平均分／每幾個一組','alternate');
  if(d.type==='zero-division'){const steps=M.longDivide(d.n,d.d);controls+=B('下一位：分配並交換餘下的量','step')+B('從最高位再做','rewind');scene=table(['位值','可分的本位量','平均分後每組','餘下，換到下一位'],steps.slice(0,d.step+1).map(t=>[t.place,t.incoming?`${t.incoming}個上位換${t.incoming*10}個本位，再加${t.digit}`:t.digit,t.q+'個'+t.place,t.remainder+'個'+t.place]))+`<p class="j-big">${d.n} ÷ ${d.d} ＝ ${steps.map((t,i)=>i<=d.step?t.q:'□').join('')}</p><p>沒有分到這個數位的量，仍須保留商的0。${d.alternate?`乘回去：${q.q}×${d.d}＋${q.r}＝${d.n}`:''}</p>`;}
  else if(d.type==='remainder'){controls+=B('切換乘客／買文具／截繩','mode');scene=`<p class="j-big">${['乘客要全部上車','文具要整件購買','繩子每段要剛好長'][d.mode%3]}</p>`+Array.from({length:q.q},()=>`<span class="j-group">${dots(d.d)}</span>`).join('')+(q.r?`<span class="j-group">餘下${dots(q.r)}</span>`:'');}
  else{scene=`<p>${d.alternate?`每${d.d}個一組，數有幾組`:`平均分${d.d}組，數每組幾個`}</p>`+Array.from({length:d.alternate?q.q:d.d},()=>`<span class="j-group">${dots(d.alternate?d.d:q.q)}</span>`).join('')+(q.r?`<p>尚餘${q.r}個，不能默默省去。</p>`:'');}
  answer=`${d.n}÷${d.d}＝${q.q}餘${q.r}；${q.q}×${d.d}＋${q.r}＝${d.n}。`+(d.type==='remainder'?`全部載走要${q.ceil}組；只能買完整件是${q.q}件，餘${q.r}元；截得${q.q}整段、餘${q.r}米。`:d.type==='zero-division'?`商${q.q}乘回去，另加餘數，才回到原數。`:d.alternate?`完整組數是${q.q}組。`:`每組${q.q}個。`);break;}
 case 'triangle':case 'quad':{
  controls=B('轉動45度','rotate')+B('換一張紙卡','shape')+B(d.alternate?'收起邊角證據':'檢查邊角證據','alternate');let pts,desc,marks='';
  if(d.type==='triangle'){
   const types=[['iso','230,205 430,205 330,71.666667','等腰：兩腰同長（5、5、6的比例草圖）'],['right','230,70 230,220 430,220','直角：兩邊互相垂直'],['both','230,70 230,220 380,220','等腰直角：兩條直角邊同長']];const item=types[d.mode%3];pts=item[1];desc=item[2];
   if(d.mode%3!==0)marks='<path d="M230 200h20v20" fill="none" stroke="#b04435" stroke-width="3"/>';else marks=T(255,130,'5')+T(405,130,'5')+T(330,230,'6');
  }else{const types=[['200,100 440,100 440,220 200,220','長方形：對邊相等、四個直角'],['240,70 400,70 400,230 240,230','正方形：四邊相等、四個直角'],['320,45 440,150 320,255 200,150','菱形反例：四邊同長，四角不都是直角']];[pts,desc]=types[d.mode%3];if(d.mode%3<2)marks='<path d="M'+(d.mode%3?'240 90h20v-20':'200 120h20v-20')+'" fill="none" stroke="#b04435" stroke-width="3"/>';}
  scene=svg(`<g transform="rotate(${d.rotation} 330 150)"><polygon points="${pts}" fill="#f8ce7b" stroke="#236779" stroke-width="4"/>${d.alternate?marks:''}</g>`)+(d.alternate?`<p>${desc}</p>`:'<p>先分類，再用紙角及邊長證據檢查。圖形轉動的中心是畫面中心。</p>');answer=desc+'。轉動不改變邊長或角的大小；分類看特徵，不看朝向。';break;}
 case 'boundary':{
  controls=B('加入一張正方形','add-square')+B('換成一排／2×2','alternate')+B('描出外圈，找共用邊','trace');const cells=d.alternate&&d.n===4?[[0,0],[1,0],[0,1],[1,1]]:Array.from({length:d.n},(_,i)=>[i,0]);const set=new Set(cells.map(c=>c.join(',')));let lines='';
  for(const[x,y]of cells){const xx=80+x*100,yy=50+y*100;lines+=`<rect x="${xx}" y="${yy}" width="100" height="100" fill="#f9d58a" stroke="#9faeaf" stroke-dasharray="5 4"/>`;if(d.step)for(const[dx,dy,x1,y1,x2,y2]of [[0,-1,xx,yy,xx+100,yy],[1,0,xx+100,yy,xx+100,yy+100],[0,1,xx,yy+100,xx+100,yy+100],[-1,0,xx,yy,xx,yy+100]])if(!set.has([x+dx,y+dy].join(',')))lines+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#167a72" stroke-width="7"/>`;}
  scene=svg(lines);answer=`每小正方形邊長${d.length}厘米；外圈有${M.perimeter(cells)}段，周界${M.perimeter(cells)*d.length}厘米。原周界總和${d.n*4*d.length}厘米，共用邊各被計入兩次。`;break;}
 case 'rectangle':case 'area-compare':{
  const pairs=M.rectangles(d.target);d.selected%=pairs.length;const p=pairs[d.selected];controls=B('下一個整數邊長方案','next-rect')+B('描周界／看單位面積','alternate')+B('有次序列全部方案','list');
  scene=svg(`<rect x="90" y="40" width="${p.l*35}" height="${p.w*35}" fill="#c6e9dd" stroke="#176b70" stroke-width="5"/>${d.alternate?Array.from({length:p.l*p.w},(_,i)=>`<rect x="${90+i%p.l*35}" y="${40+Math.floor(i/p.l)*35}" width="35" height="35" fill="none" stroke="#7ba9a2"/>`).join(''):''}${T(90+p.l*17.5,30,'長 '+p.l)}${T(48,70,'闊 '+p.w)}`)+(d.list?table(['長','闊','周界','面積'],pairs.map(v=>[v.l,v.w,v.p,v.area])):'');
  answer=`長${p.l}、闊${p.w}；周界${p.p}長度單位，面積${p.area}平方單位。長闊交換只算同一個方案。`+(d.type==='area-compare'?'相同周界不能推出面積相同；比較表內所有整數方案才能判斷最大。':'四邊總和＝(長＋闊)×2。');break;}
 case 'time':case 'daytime':{
  controls=R('起點：午夜後分鐘','start',d.start,0,1380,5)+R('經過分鐘','minutes',d.minutes,5,180,5)+B('先走到下一個整點','to-hour')+B('走完餘下時間','finish')+B('分段重新走','rewind');const end=d.start+d.minutes,now=d.start+Math.min(d.step,d.minutes),next=(Math.floor(d.start/60)+1)*60;
  scene=svg(`<line x1="70" x2="590" y1="130" y2="130" stroke="#397c8f" stroke-width="5"/>${[d.start,next,end].map((v,i)=>`<line x1="${70+(v-d.start)/Math.max(d.minutes,60)*500}" x2="${70+(v-d.start)/Math.max(d.minutes,60)*500}" y1="115" y2="145" stroke="#397c8f"/>${T(Math.min(610,70+(v-d.start)/Math.max(d.minutes,60)*500),175+i%2*28,M.time(v).label,16)}`).join('')}<circle cx="${70+(now-d.start)/Math.max(d.minutes,60)*500}" cy="130" r="12" fill="#c96926"/>${T(330,60,'目前走到 '+M.time(now).label)}`);
  answer=`${M.time(d.start).label} 後${d.minutes}分鐘是${M.time(end).label}。1小時＝60分鐘，1分鐘＝60秒。`+(d.type==='daytime'?`起點也可說${d.start%1440<720?'上午':'下午'}${Math.floor(d.start/60)%12||12}時${d.start%60}分；時刻是位置，時長是兩位置的間隔。`:'不要把超過59的分鐘直接當鐘面分鐘。');break;}
 case 'market':{
  controls=[4,6,8].map(n=>B('每'+n+'人一組','group-size',n)).join('')+R('每組物料包數','b',d.b,1,5)+R('每包單價','a',d.a,5,20)+B('換一種計算次序','alternate');const g=48/d.d,cost=g*d.b*d.a;
  scene=`<div class="j-progress">${['48人','每'+d.d+'人一組',g+'組','每組'+d.b+'包',g*d.b+'包','每包'+d.a+'元'].map(t=>`<span>${t}</span>`).join('')}</div><p class="j-big">${d.alternate?`(48÷${d.d})×(${d.b}×${d.a})`:`48÷${d.d}×${d.b}×${d.a}`}</p>`;
  answer=`${g}組、${g*d.b}包、共${cost}元。預算200元${cost<=200?'足夠，餘'+(200-cost):'不足，欠'+(cost-200)}元。開始時刻本身不改變這些物料數量。`;break;}
 case 'area-multiply':{
  controls=R('每排數量','a',d.a,10,250)+R('排數','b',d.b,2,40)+B('換加法拆數／因數分組','alternate')+B('顯示兩部分完整數值','split');const across=d.b<10,split=across?d.a:d.b,other=across?d.b:d.a,tens=Math.floor(split/10)*10,ones=split%10;
  scene=svg(`<rect x="70" y="55" width="500" height="190" fill="#e2f0ff" stroke="#366b8c" stroke-width="3"/><rect x="70" y="55" width="${across?500*tens/split:500}" height="${across?190:190*tens/split}" fill="#a7d8ce" stroke="#366b8c" stroke-width="2"/>${T(320,35,'每排 '+d.a+(across?'＝'+tens+'＋'+ones:''))}${T(320,280,'排數 '+d.b+(!across?'＝'+tens+'＋'+ones:''))}${d.step?(across?T(230,150,tens+'×'+other+'＝'+other*tens)+T(500,150,ones+'×'+other+'＝'+other*ones):T(320,95,other+'×'+tens+'＝'+other*tens)+T(320,220,other+'×'+ones+'＝'+other*ones)):T(320,150,'把每一部分連到計算中的完整數值')}`)+(d.alternate?`<p>因數分組：${d.b%2===0?`${d.a}×(${d.b/2}×2)＝(${d.a}×${d.b/2})×2`:'這個排數不能平均分成兩份整數排；可選另一個因數。'}</p>`:'');
  answer=`${d.a}×${d.b}＝${other*tens}＋${other*ones}＝${d.a*d.b}。`+(!across?`第二層乘的是${tens}，不是${tens/10}。`:`把每排${d.a}拆成${tens}和${ones}，兩塊合回同一個總量。`)+(d.b===30?`和乘3比較，份數擴大10倍。`:'');break;}
 case 'mass':{
  controls=B('移去右邊一個砝碼','remove-weight')+B('把右邊砝碼補回','restore-weight')+B('切換外觀大小','alternate');const right=d.n,left=3,angle=(right-left)*6;
  scene=svg(`<path d="M330 100L290 260H370Z" fill="#9abcc7"/><g transform="rotate(${angle} 330 110)"><line x1="110" x2="550" y1="110" y2="110" stroke="#396775" stroke-width="9"/><rect x="90" y="135" width="140" height="${d.alternate?80:45}" fill="#f4bd76"/>${T(160,122,'簿：模型3單位',16)}${Array.from({length:right},(_,i)=>`<rect x="${420+i*30}" y="135" width="24" height="35" fill="#787e99"/>`).join('')}${T(490,122,'相同砝碼',16)}</g>`);
  answer=`模型左邊3重量單位，右邊${right}單位；${right<3?'左邊下降':right>3?'右邊下降':'兩邊平衡'}。改變圖示大小沒有改變模型重量。真實小物的重量請用天平或磅實量。`;note='這是說明天平關係的模型，沒有代替工作紙中三件自選小物的實測；不可把示意值抄成實測結果。';break;}
 case 'mass-unit':{
  controls=R(d.tons?'甲：千克（1000千克＝1噸）':'甲：千克','a',d.a,d.tons?1000:1,d.tons?3000:5,d.tons?100:1)+R(d.tons?'乙：千克':'乙：克','b',d.b,500,4000,50)+B('同一單位比較','alternate');scene=`<div class="j-two">${panel('甲',`<p class="j-big">${d.a} 千克</p>${d.alternate?'<p>'+d.a*1000+'克</p>':''}`)}${panel('乙',`<p class="j-big">${d.b} ${d.tons?'千克':'克'}</p>`)}</div>`;
  answer=`${d.a}千克＝${d.a*1000}克，甲${(d.tons?d.a:d.a*1000)>d.b?'較重':(d.tons?d.a:d.a*1000)<d.b?'較輕':'與乙相同'}。1千克＝1000克，1噸＝1000千克。3千克250克＝3250克；2噸＝2000千克。`;break;}
 case 'tiling':{
  controls=B('換小方片／2×2大方片','alternate')+B('點格鋪滿／自行點選','fill')+B('加入兩個半格','half');const u=d.alternate?2:1,cols=6/u,rows=4/u;
  scene=`<div class="j-grid" style="grid-template-columns:repeat(${cols},1fr);max-width:480px">${Array.from({length:cols*rows},(_,i)=>B(d.cells.includes(i)?'●':'＋','tile',i,`class="j-cell ${d.cells.includes(i)?'on':''}" aria-label="鋪第${i+1}格"`)).join('')}</div>`+(d.mode?'<p>兩個等大半格可拼回一個整格：◩ ＋ ◪</p>':'');answer=`同一塊6×4模型卡，${u===1?'24小方片':'6大片，每片包含4小格'}才能覆蓋。單位大小改變，卡片覆蓋範圍沒有改變。你目前鋪了${d.cells.length}片。`;break;}
 case 'fraction':case 'fraction-set':case 'fraction-compare':{
  controls=R('分母：平均分幾份','d',d.d,2,10)+R('分子：取幾份','n',d.n,0,d.d)+B('多取一份','take-part');
  if(d.type==='fraction'){controls+=B('切換平均分／不平均分','alternate');scene=strip(d.d,d.n,100,!d.alternate);answer=d.alternate?'現在分割大小不相同，不能只按塊數把塗色部分說成'+d.n+'/'+d.d+'。先檢查平均分條件。':`平均分${d.d}份，取${d.n}份，是${d.n}/${d.d}。分母說平均分幾份，分子說取幾份。`;}
  else if(d.type==='fraction-set'){controls+=R('整組物件數','a',d.a,d.d,36)+B('換12粒／15粒','set-total');const each=Math.floor(d.a/d.d),rem=d.a%d.d;scene=Array.from({length:d.d},(_,i)=>`<span class="j-group" style="background:${i<d.n?'#fbe1ad':'white'}">${dots(each)}</span>`).join('')+(rem?`<p>還餘${rem}粒，未能分成等大整粒組；先修正模型條件。</p>`:'');answer=rem?'目前不能把所有物件平均分成完整粒數的'+d.d+'份，請用可整除的總數。':`${d.a}÷${d.d}×${d.n}＝${each*d.n}。同一分數下，整組總數改變，所取粒數可能改變。`;}
  else{controls=R('甲分母','d',d.d,2,10)+R('甲分子','n',d.n,1,d.d)+R('乙分母','b',d.b,2,10)+R('乙分子','c',d.c,1,d.b)+B('改變乙的整體大小','alternate');scene=panel('甲的整體',strip(d.d,d.n))+panel('乙的整體',strip(d.b,d.c,d.alternate?60:100));const cmp=M.fractionCompare(d.n,d.d,d.c,d.b);answer=`數值上${d.n}/${d.d}${cmp>0?'＞':cmp<0?'＜':'＝'}${d.c}/${d.b}。`+(d.alternate?'但乙整體長度只及甲的60%，不能把分數數值比較直接當作實際用量比較。':'同樣大的整體才可直接用分數大小比較所取份量。');}
  break;}
 case 'decimal':{
  controls=R('十分之一的個數','n',d.n,0,20)+B('把10份交換成1個整體','alternate');scene=`<div class="j-two">${panel('第一個整體',strip(10,Math.min(10,d.n)))}${panel('第二個整體',strip(10,Math.max(0,d.n-10)))}</div>`+svg(`<line x1="45" x2="615" y1="130" y2="130" stroke="#357a8b" stroke-width="3"/>${Array.from({length:21},(_,i)=>`<line x1="${45+i*28.5}" x2="${45+i*28.5}" y1="120" y2="140" stroke="#357a8b"/>${i%2?'':T(45+i*28.5,170,(i/10).toFixed(1),14)}`).join('')}<circle cx="${45+d.n*28.5}" cy="130" r="10" fill="#c96720"/>`);answer=`${d.n}個十分之一＝${d.n}/10＝${(d.n/10).toFixed(1)}。`+(d.alternate?`${Math.floor(d.n/10)}個整體和${d.n%10}個十分之一。`:'小數點右邊第一位每1代表一個十分之一。');break;}
 case 'blocks':{
  controls=B('上面／前面／側面','mode')+B('復原原來3個積木','restore-blocks');const v=M.views(d.heights);scene='<p>位置：上排是後排，下排是前排；點＋疊一層，點−移去一層。</p><div class="j-two"><div><div class="j-grid" style="grid-template-columns:repeat(2,1fr);max-width:350px">'+[2,3,0,1].map(i=>`<section class="j-panel">${i<2?'前':'後'}${i%2?'右':'左'}：${d.heights[i]}層<br>${B('＋','block-add',i)}${B('−','block-remove',i)}</section>`).join('')+'</div></div><div>';
  const heights=d.mode%3===0?v.top:d.mode%3===1?v.front:v.side;scene+=`<h3>${['俯視：只看佔地','前視：前後疊影','側視：左右疊影'][d.mode%3]}</h3>`+svg(heights.map((h,i)=>Array.from({length:h},(_,k)=>`<rect x="${120+(d.mode%3===0?i%2:i)*90}" y="${d.mode%3===0?100+(i<2?90:0):230-k*60}" width="60" height="60" fill="#edbd7b" stroke="#426e8c" stroke-width="3"/>`).join('')).join(''))+'</div></div>';
  answer=`總積木${v.total}個。前面各列高${v.front.join('、')}；側面各列高${v.side.join('、')}。俯視只顯示哪個位置有積木，不顯示層數。`;break;}
 case 'transform':{
  controls=B('向右平移3格','translate')+B('L形旋轉半圈','rotate-half')+B('正方形對折軸','fold')+B('剪開拼成8×2／還原4×4','alternate');
  scene=svg(`<g transform="translate(${d.step?90:0} 0)"><rect x="60" y="70" width="${d.alternate?240:120}" height="${d.alternate?60:120}" fill="#b7e5d6" stroke="#32776f" stroke-width="3"/>${d.mode?'<line x1="120" x2="120" y1="70" y2="190" stroke="#c36525" stroke-dasharray="6 4"/>':''}</g><circle cx="470" cy="160" r="5" fill="#a34856"/><g transform="rotate(${d.rotation} 470 160)"><path d="M470 160v-90h30v60h60v30Z" fill="#eab45d" stroke="#6d659c" stroke-width="3"/></g>${T(480,250,'紅點是L形旋轉中心',16)}`);
  answer=`4×4正方形面積16平方格、周界16格；剪成兩塊4×2再拼8×2，面積仍16平方格，周界變20格。平移與旋轉保留原邊長、面積及周界，拼切只保證面積在無重疊無空隙下保留。`;break;}
 case 'chart':{
  controls=[5,10,15].map(n=>B('每格'+n+'個','scale',n)).join('')+B('圖中加入丁組45個','fourth')+B('畫棒／讀回數據','alternate');const values=d.mode?[40,70,90,45]:[40,70,90];
  scene=svg(`${Array.from({length:11},(_,i)=>`<line x1="65" x2="625" y1="${260-i*22}" y2="${260-i*22}" stroke="#bdcfd9"/>${T(38,265-i*22,i*d.unit,14)}`).join('')}${values.map((n,i)=>{const clipped=Math.min(10,n/d.unit);return `<rect x="${100+i*130}" y="${260-clipped*22}" width="60" height="${clipped*22}" fill="${['#2d8e82','#d0912f','#8261aa','#b65772'][i]}"/>${T(130+i*130,285,['甲','乙','丙','丁'][i],16)}${d.alternate?T(130+i*130,252-clipped*22,n,16):''}`;}).join('')}`)+`<p>回收鋁罐（個）；同一零底線，圖只容納10格高。${Math.max(...values)/d.unit>10?'⚠ 有數據超過圖高，棒被截斷，請換刻度。':''}</p>`;
  answer=`${values.map(n=>n+'個要'+Number((n/d.unit).toFixed(2))+'格').join('；')}。原來三組總數200個，最多和最少相差50個。刻度改變，資料沒有改變。`;break;}
 case 'chance':{
  controls=R('紅珠數','red',d.red,0,8)+R('藍珠數','blue',d.blue,0,8)+B('摸1次，再放回','draw')+B('連摸20次，每次放回','draw20')+B('清除本輪試驗','clear-draws');const r=d.history.filter(x=>x==='紅').length;
  scene=`<p>模型袋內：紅${d.red}粒、藍${d.blue}粒；珠子大小相同，每次摸後放回再搖勻。</p><div class="j-history">${d.history.map((c,i)=>`<span class="${c==='藍'?'blue':''}">${i+1} ${c}</span>`).join('')}</div><p>本輪${d.history.length}次；紅${r}次、藍${d.history.length-r}次。</p>`;
  answer=d.red+d.blue===0?'空袋不能摸珠，先放入至少一粒。':`袋內${d.red&&d.blue?'兩色都有，下一次紅藍都可能出現':d.red?'只有紅色，必然紅色':'只有藍色，必然藍色'}。綠色不可能。${d.red>d.blue&&d.blue?'紅色較容易，但不保證下一次一定紅色。':''}20次結果有隨機差異，不能倒推必然的珠數；不會預設或捏造紙本實驗結果。`;note='這是隨機模擬；工作紙要求的實物20次結果請另行操作並記在紙上。改變配方會清空本輪，以免混合不同條件。';break;}
 default:throw new Error('未知小三教具 '+d.type);
 }
 const presets=(s.app.cases||[]).map((c,i)=>B(c.label,'case',i,`aria-pressed="${d.caseIndex===i}"`)).join('');
 return `<div class="j-controls">${presets}</div><div class="j-controls">${controls}</div><div class="j-scene">${scene}</div><div class="j-controls">${B(d.proof?'收起數據與核對':'看看數據與核對','proof')}${B('重設這個模型','reset')}</div><div class="j-readout" aria-live="polite">${E(d.proof?answer:'先在紙本畫圖或列式，向同伴說出預測，再打開核對。')}</div><p class="j-note">${E(note)}</p>`;
 }
 function bind(h,s){if(s.kind!=='junior')return;const root=h.querySelector('[data-junior]');if(!memory.has(s.id))memory.set(s.id,state(s.app));let d=memory.get(s.id);const draw=()=>{root.innerHTML=view(d,s);};
  root.oninput=e=>{const key=e.target.dataset.jparam;if(!key)return;d[key]=+e.target.value;if(key==='d'&&d.type.startsWith('fraction'))d.n=Math.min(d.n,d.d);if(key==='b'&&d.type==='fraction-compare')d.c=Math.min(d.c,d.b);if(key==='red'||key==='blue')d.history=[];
   // Keep the native range element alive throughout a finger/pointer drag.
   const fresh=document.createElement('div');fresh.innerHTML=view(d,s);
   for(const selector of ['.j-scene','.j-readout'])root.querySelector(selector).replaceWith(fresh.querySelector(selector));
   fresh.querySelectorAll('[data-jparam]').forEach(next=>{const current=root.querySelector(`[data-jparam="${next.dataset.jparam}"]`);current.min=next.min;current.max=next.max;current.value=next.value;current.parentElement.firstChild.nodeValue=next.parentElement.firstChild.nodeValue;});
  };
  root.onclick=e=>{const b=e.target.closest('[data-jop]');if(!b)return;const a=+b.dataset.arg;switch(b.dataset.jop){
   case 'proof':d.proof=!d.proof;break;case 'reset':d=state(s.app);memory.set(s.id,d);break;
   case 'case':d={...state(s.app),...structuredClone(s.app.cases[a].values),caseIndex:a};memory.set(s.id,d);break;
   case 'alternate':d.alternate=!d.alternate;if(d.type==='tiling')d.cells=[];break;
   case 'step':d.step=Math.min(2,d.step+1);break;case 'rewind':d.step=0;break;
   case 'zero':d.start=0;break;case 'shift':d.start=(d.start+10)%51;break;
   case 'note':if(d.counts.reduce((x,y)=>x+y,0)<20)d.counts[a]++;break;case 'undo-note':{const i=d.counts.findLastIndex(n=>n>0);if(i>=0)d.counts[i]--;break;}case 'clear-notes':d.counts=[0,0,0];break;
   case 'mode':d.mode=(d.mode+1)%3;break;case 'rotate':d.rotation=(d.rotation+45)%360;break;case 'shape':d.mode=(d.mode+1)%3;break;
   case 'add-square':d.n=d.n%4+1;break;case 'trace':d.step=d.step?0:1;break;case 'next-rect':d.selected=(d.selected+1)%M.rectangles(d.target).length;break;case 'list':d.list=!d.list;break;
   case 'to-hour':d.step=Math.min(d.minutes,60-d.start%60);break;case 'finish':d.step=d.minutes;break;case 'group-size':d.d=a;break;case 'split':d.step=d.step?0:1;break;
   case 'remove-weight':d.n=Math.max(0,d.n-1);break;case 'restore-weight':d.n=3;break;
   case 'fill':d.cells=Array.from({length:d.alternate?6:24},(_,i)=>i);break;case 'tile':if(d.cells.includes(a))d.cells=d.cells.filter(i=>i!==a);else d.cells.push(a);break;case 'half':d.mode=d.mode?0:1;break;
   case 'take-part':d.n=Math.min(d.d,d.n+1);break;case 'set-total':d.a=d.a===12?15:12;break;
   case 'block-add':d.heights[a]=Math.min(3,d.heights[a]+1);break;case 'block-remove':d.heights[a]=Math.max(0,d.heights[a]-1);break;case 'restore-blocks':d.heights=[1,1,1,0];break;
   case 'translate':d.step=d.step?0:1;break;case 'rotate-half':d.rotation=d.rotation?0:180;break;case 'fold':d.mode=d.mode?0:1;d.alternate=false;break;case 'scale':d.unit=a;break;case 'fourth':d.mode=d.mode?0:1;break;
   case 'draw':case 'draw20':if(d.red+d.blue>0){const rng=new Uint32Array(b.dataset.jop==='draw'?1:20);crypto.getRandomValues(rng);for(const u of rng)if(d.history.length<200)d.history.push(M.sample(d.red,d.blue,u/4294967296));}break;case 'clear-draws':d.history=[];break;
  }draw();};draw();return ()=>{root.onclick=null;root.oninput=null;};
 }
 window.Junior={view:s=>`<div class="j-instructions">${(s.instructions||[]).map(t=>`<p>${E(t)}</p>`).join('')}</div><section class="junior-board" data-junior></section>`,bind,reset:()=>memory.clear()};
})();
