/* Shared-tablet classroom activities. All interaction state is transient memory only. */
(function () {
  'use strict';
  const M = window.InquiryModel, cfg = window.DECK_CONFIG || {};
  const fresh = () => ({ choices:{}, notes:{}, sketches:{}, scratchOpen:{}, annotations:{}, reveal:{},
    cups:[{name:'A',juice:1,water:2},{name:'B',juice:1,water:4},{name:'C',juice:1,water:5},{name:'D',juice:1,water:1}],
    samples:[], selected:[], mode:'fixed', view:'parts', factor:1 });
  let state = fresh();
  const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pct = c => `${(c * 100).toFixed(1)}%`;
  const num = n => n === null ? '未定義（清水為 0）' : Number(n.toFixed(4)).toString();
  const button = (text, action, extra='') => `<button type="button" data-action="${action}" ${extra}>${text}</button>`;
  const themes = {
    citrus: {accent:'#a64708',soft:'#fff0ce',wash:'#fff8e9',ink:'#66320c',secondary:'#157a72'},
    ocean: {accent:'#126b9b',soft:'#dff4ff',wash:'#f0faff',ink:'#124861',secondary:'#7d43ad'},
    lime: {accent:'#3d7522',soft:'#edf6cd',wash:'#f7fbe9',ink:'#315317',secondary:'#c35b17'},
    coral: {accent:'#b1444d',soft:'#ffe7e3',wash:'#fff5f1',ink:'#74323c',secondary:'#267d82'},
    violet: {accent:'#7544aa',soft:'#eee5ff',wash:'#f8f4ff',ink:'#4e326e',secondary:'#247b71'},
    berry: {accent:'#a03779',soft:'#fbe1ef',wash:'#fff4fa',ink:'#672c50',secondary:'#46792c'},
    teal: {accent:'#08786f',soft:'#d7f4e9',wash:'#effbf6',ink:'#15534d',secondary:'#ab580a'}
  };
  const phaseThemes = ['citrus','ocean','teal','violet','coral','lime'];
  function palette(s) {
    const base = themes[typeof s.theme === 'string' ? s.theme : phaseThemes[s.phase]] || themes.citrus;
    const colors = {...base};
    if (s.theme && typeof s.theme === 'object') {
      for (const name of Object.keys(base)) if (/^#[\da-f]{6}$/i.test(s.theme[name] || '')) colors[name] = s.theme[name];
    }
    return colors;
  }
  function applyTheme(h,s) {
    const colors=palette(s);
    for (const [name,value] of Object.entries(colors)) document.body.style.setProperty(`--lesson-${name}`,value);
    h.dataset.theme = typeof s.theme === 'string' ? s.theme : phaseThemes[s.phase] || 'citrus';
  }
  function hints(s) {
    if (s.reveals) return s.reveals;
    if (s.kind !== 'algorithm') return [];
    const a=M.allocation(15000,1,4,800);
    return [`① 總份數：1＋4＝${a.parts} 份。`, `② 每份容量：15,000÷${a.parts}＝${a.perPart.toLocaleString('en-US')} mL。`,
      `③ 果汁：${a.perPart.toLocaleString('en-US')}×1＝${a.juiceMl.toLocaleString('en-US')} mL；清水：${a.perPart.toLocaleString('en-US')}×4＝${a.waterMl.toLocaleString('en-US')} mL。`,
      `④ ${a.juiceMl.toLocaleString('en-US')}÷800＝3.75 瓶，至少買 ${a.bottles} 瓶。共 3,200 mL，剩餘 ${a.leftover} mL 濃縮汁。請在工作紙解釋進位理由。`];
  }
  function reveal(s) {
    const list=hints(s); if (!list.length) return '';
    const count=Math.max(0,Math.min(list.length,state.reveal[s.id]||0));
    return `<div class="reveal-actions">${button(count?'揭示下一層':'需要提示','reveal',count===list.length?'disabled':'')}${count?button('收起提示','hide'):''}<span>${count} / ${list.length}</span></div><div class="reveals" aria-live="polite">${list.slice(0,count).map(t=>`<p>${esc(t)}</p>`).join('')}</div>`;
  }
  function paper(text) { return `<div class="paper-prompt"><span aria-hidden="true">✎</span><p>${esc(text)}</p><small>先小組討論，再寫在工作紙</small></div>`; }
  function labels() {
    return `<div class="product-labels">${[['A',2],['B',4],['C',5]].map(([n,w])=>`<div class="product product-${n}"><span>${n} 款</span><strong>1 : ${w}</strong><small>濃縮果汁 : 清水</small></div>`).join('')}</div>`;
  }
  function table(selectable=false) {
    if (!state.samples.length) return '<p class="empty">比較台還沒有配方。到實驗台按「加入比較」，再把數據寫在工作紙。</p>';
    return `<div class="table-wrap"><table><caption>本輪配方比較</caption><thead><tr>${selectable?'<th>引用</th>':''}<th>款式</th><th>果汁:水</th><th>比值</th><th>總份數</th><th>整體濃度</th></tr></thead><tbody>${state.samples.map(r=>{
      const m=M.mixture(r.juice,r.water);
      return `<tr>${selectable?`<td><input type="checkbox" aria-label="引用 ${r.name} ${r.juice}:${r.water}" data-evidence="${r.id}" ${state.selected.includes(r.id)?'checked':''}></td>`:''}<td><span class="sample-chip sample-${r.name}">${r.name}</span></td><td>${r.juice}:${r.water}</td><td>${num(m.ratio)}</td><td>${m.total}</td><td>${pct(m.concentration)}</td></tr>`;
    }).join('')}</tbody></table></div>`;
  }
  function cupsHTML() {
    return state.cups.map((c,i)=>`<section class="cup-card cup-${c.name}"><div class="cup-heading"><h3>${c.name} 杯</h3><strong data-cup-ratio="${i}"></strong></div><div class="vessel" role="img" aria-label="${c.name} 杯液量與濃度示意"><div class="liquid" data-liquid="${i}"></div><div class="ticks"></div><span data-total="${i}"></span></div><p class="cup-result" data-result="${i}" aria-live="polite"></p><label>果汁 <output data-value="j${i}"></output> 份<input type="range" min="1" max="5" step="1" value="${c.juice}" data-cup="${i}" data-component="juice" aria-label="${c.name} 杯果汁份數" ${state.mode==='fixed'?'disabled':''}></label><label>清水 <output data-value="w${i}"></output> 份<input type="range" min="0" max="10" step="1" value="${c.water}" data-cup="${i}" data-component="water" aria-label="${c.name} 杯清水份數"></label>${button('加入比較','compare',`data-index="${i}"`)}</section>`).join('');
  }
  function updateCups(h) {
    state.cups.forEach((c,i)=>{
      const m=M.mixture(c.juice,c.water), liquid=h.querySelector(`[data-liquid="${i}"]`);
      h.querySelector(`[data-cup-ratio="${i}"]`).textContent=`${c.juice}:${c.water}`;
      h.querySelector(`[data-value="j${i}"]`).textContent=c.juice;h.querySelector(`[data-value="w${i}"]`).textContent=c.water;
      liquid.style.height=`${m.total/15*100}%`;liquid.style.background=`hsl(${48-25*m.concentration} 90% ${91-53*m.concentration}%)`;
      h.querySelector(`[data-total="${i}"]`).textContent=`${m.total} / 15 份`;
      const detail=state.view==='ratio'?`果汁÷清水＝${num(m.ratio)}`:state.view==='concentration'?`果汁÷整杯＝${pct(m.concentration)}`:'先觀察，再揭示計算';
      h.querySelector(`[data-result="${i}"]`).textContent=detail;
      liquid.parentElement.setAttribute('aria-label',`${c.name} 杯，果汁 ${c.juice} 份，清水 ${c.water} 份，總量 ${m.total} 份。${detail}`);
    });
  }
  function activity(s) {
    switch(s.kind) {
      case 'primary': return window.Primary.view(s);
      case 'p1-talk': return '<div class="reflection-grid">' + ['我發現甚麼？','我的圖或實物在哪裡？','換一個例子還成立嗎？'].map(t=>'<section><b>'+t+'</b><p>指一指、擺一擺，或說給同伴聽。</p></section>').join('') + '</div>' + paper('可畫圖、圈畫或口述，不用抄寫長句。') + reveal(s);
      case 'question': return `${s.context?'<div class="primary-context"><span>'+esc(s.context.icon)+'</span><b>'+esc(s.context.label)+'</b></div>':''}${s.labels?labels():''}<fieldset class="choices"><legend>小組先選一個猜想</legend>${(s.choices||['我同意','我不同意','需要更多證據']).map(t=>`<label><input type="radio" name="prediction" value="${esc(t)}" data-choice="${s.id}" ${state.choices[s.id]===t?'checked':''}>${esc(t)}</label>`).join('')}</fieldset>${paper('把最初判斷與理由寫在工作紙，稍後用實驗證據檢查。')}`;
      case 'annotation': return `<div class="mode-buttons">${button('標註基準量','mark-base','aria-pressed="true"')}${button('標註核心變數','mark-variable','aria-pressed="false"')}</div><div class="annotation-line"><span data-mark="base">1 份濃縮果汁</span><b> : </b><span data-mark="variable">4 份清水</span></div><p>先選標註工具，再點選文字；也可直接在工作紙圈畫。</p>${paper('解釋 1:4 的兩個量，並說明整杯總量應如何計算。')}`;
      case 'lab': return `<div class="lab-toolbar"><div class="mode-buttons">${button('固定果汁＝1','fixed',`aria-pressed="${state.mode==='fixed'}"`)}${button('自由調配','free',`aria-pressed="${state.mode==='free'}"`)}${button('恢復標籤配方','restore')}</div><div class="mode-buttons">${['parts','ratio','concentration'].map((v,i)=>button(['只看份數','比值換算','整體濃度 %'][i],'view',`data-view="${v}" aria-pressed="${state.view===v}"`)).join('')}</div></div><div class="cups-grid">${cupsHTML()}</div><p class="model-note">相同刻度：15 份。液面表示總量；顏色只作濃度示意。清水為 0 時，比值未定義，整體濃度為 100%。</p><div class="status" aria-live="polite"></div>${paper('由記錄員把配比、比值、總份數、濃度與顏色觀察填入工作紙。')}`;
      case 'representation': return `<div class="part-grid"><div class="juice-part">果汁<br>1 份</div>${Array.from({length:4},()=>'<div>清水<br>1 份</div>').join('')}</div><div class="mode-buttons">${button('看總份數','part-total')}${button('看比值','part-ratio')}${button('看整體濃度','part-concentration')}</div><div class="representation-output" aria-live="polite">先數一數，整杯有幾份？</div>${paper('向組員解釋：0.25 和 20% 的分母有甚麼不同？')}`;
      case 'records': return `${table()}${paper('比較數據後，在工作紙完成表格與「規律發現」。')}`;
      case 'scale': return `<label class="scale-control">同時放大 <output data-factor>${state.factor}</output> 倍<input type="range" min="1" max="5" step="1" value="${state.factor}" data-scale aria-label="等比例放大倍數"></label><div class="scale-result" aria-live="polite"></div>${paper('總量和濃度，哪些改變了？請用一組配方解釋。')}`;
      case 'rule': case 'practice': return `${paper(s.kind==='rule'?'先在工作紙填寫規律，再按提示檢查。':'請在工作紙寫出計算過程與理由，再逐步核對。')}${reveal(s)}`;
      case 'argument': return `${cfg.experiment==='juice'?table(true):''}<div class="argument-grid">${[['claim','我的主張','你的明確結論是甚麼？'],['evidence','事實證據','哪兩筆數據最能支持結論？'],['reasoning','數學道理','證據為甚麼能支持主張？'],['rebuttal','擊破迷思','評測把哪一個量誤讀了？']].map(([id,label,prompt],i)=>`<section class="argument ${id}"><span class="argument-number">0${i+1}</span><h3>${label}</h3><p>${prompt}</p></section>`).join('')}</div>${paper('報告員用四步說明，小組成員把論證整理到工作紙的「數學小法庭」。')}${reveal(s)}`;
      case 'percent': return `<div class="hundred-grid" role="img" aria-label="100 格中 25 格是果汁，75 格是水">${Array.from({length:100},(_,i)=>`<span class="${i<25?'juice-cell':''}"></span>`).join('')}</div>${paper('把「果汁：清水」的最簡整數比與化簡過程寫在工作紙。')}${reveal(s)}`;
      case 'algorithm': return `<div class="algorithm-grid">${[['總份數','果汁與清水共有幾份？'],['每份容量','15,000 mL 應如何分配？'],['兩種用量','各需要多少毫升？'],['購買瓶數','不足一瓶時怎樣處理？']].map(([title,prompt],i)=>`<section><b>0${i+1}</b><h3>${title}</h3><p>${prompt}</p></section>`).join('')}</div>${paper('先把分步演算法與進位理由寫在工作紙，再逐步揭示核對。')}${reveal(s)}`;
      case 'reflection': return `<div class="reflection-grid"><section><b>回看猜想</b><p>對照工作紙最初的判斷，你保留或改變了甚麼？</p></section><section><b>提出證據</b><p>哪一個實驗數據改變了你的想法？</p></section><section><b>離堂挑戰</b><p>同樣 1 份果汁，配 3 份水或 6 份水，哪杯較濃？</p></section></div>${paper('完成工作紙自評，向組員說明一項今天修正的想法。')}`;
      default: return `${paper(s.paperPrompt||'把小組討論、觀察與發現寫在工作紙。')}${reveal(s)}`;
    }
  }
  function scale(h) {
    const k=state.factor,m=M.mixture(k,4*k);
    h.querySelector('.scale-result').innerHTML=`<strong>${k} : ${4*k}</strong><span>總量 ${m.total} 份</span><span>比值 ${num(m.ratio)}</span><span>整體濃度 ${pct(m.concentration)}</span>`;
  }
  function scratchpad(s) {
    if (cfg.scratchpad===false || s.scratchpad===false) return '';
    return `<details class="scratchpad" ${state.scratchOpen[s.id]?'open':''}><summary>展開臨時書寫區 <small>打字／手寫</small></summary><div class="scratch-inner"><p>供老師示範或小組草算；正式答案寫在工作紙。重新整理即清空。</p><label class="scratch-label">臨時文字<textarea data-note rows="2" placeholder="可在這裡草算、寫關鍵詞或整理說法……">${esc(state.notes[s.id]||'')}</textarea></label><div class="sketch-toolbar"><label>筆色<select data-pen-color aria-label="書寫筆色"><option value="#1d3557">深藍</option><option value="#b1444d">紅色</option><option value="#08786f">綠色</option><option value="#7544aa">紫色</option></select></label>${button('清空手寫','clear-sketch')}${button('清空文字','clear-note')}</div><canvas class="scratch-canvas" aria-label="臨時手寫畫布，可用手指或觸控筆書寫"></canvas></div></details>`;
  }
  function bindSketch(h,s) {
    const canvas=h.querySelector('.scratch-canvas');if(!canvas) return;
    const ctx=canvas.getContext('2d');let active=null;
    const strokes=()=>state.sketches[s.id]||(state.sketches[s.id]=[]);
    const draw=()=>{
      const rect=canvas.getBoundingClientRect();if(!rect.width) return;
      const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);
      ctx.lineWidth=3;ctx.lineCap='round';ctx.lineJoin='round';
      for(const stroke of strokes()) {ctx.strokeStyle=stroke.color;ctx.fillStyle=stroke.color;ctx.beginPath();stroke.points.forEach(([x,y],i)=>{if(i===0)ctx.moveTo(x*rect.width,y*rect.height);else ctx.lineTo(x*rect.width,y*rect.height);});if(stroke.points.length===1){const [x,y]=stroke.points[0];ctx.arc(x*rect.width,y*rect.height,1.5,0,Math.PI*2);ctx.fill();}else ctx.stroke();}
    };
    const point=e=>{const r=canvas.getBoundingClientRect();return [Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))];};
    canvas.onpointerdown=e=>{if(active!==null)return;e.preventDefault();active=e.pointerId;canvas.setPointerCapture(active);strokes().push({color:h.querySelector('[data-pen-color]').value,points:[point(e)]});draw();};
    canvas.onpointermove=e=>{if(active!==e.pointerId)return;e.preventDefault();strokes()[strokes().length-1].points.push(point(e));draw();};
    const end=e=>{if(active===e.pointerId){active=null;}};canvas.onpointerup=end;canvas.onpointercancel=end;canvas.onlostpointercapture=end;
    const details=h.querySelector('.scratchpad');details.ontoggle=()=>{state.scratchOpen[s.id]=details.open;if(details.open)requestAnimationFrame(draw);};
    h.querySelector('[data-action="clear-sketch"]').onclick=()=>{state.sketches[s.id]=[];draw();};
    h.querySelector('[data-action="clear-note"]').onclick=()=>{state.notes[s.id]='';h.querySelector('[data-note]').value='';};
    // Per-render observer is disconnected before the next render; hidden pads are sized when opened.
    const observer=new ResizeObserver(draw);observer.observe(canvas);return ()=>observer.disconnect();
  }
  let disposeSketch=null;
  function render(h,s) {
    if(disposeSketch){disposeSketch();disposeSketch=null;}
    applyTheme(h,s);h.className='slide inquiry-slide';
    h.innerHTML=`<div class="inquiry-page"><nav class="phase-strip" aria-label="探究流程">${(cfg.phases||[]).map((p,i)=>`<span class="phase-${i} ${i===s.phase?'active':''}" ${i===s.phase?'aria-current="step"':''}><b>${i+1}</b>${esc(p)}</span>`).join('')}</nav><header class="inquiry-heading"><p class="inquiry-eyebrow">課堂探究 <span>·</span> ${esc(s.secName||'')}</p><h2>${esc(s.title)}</h2><p>${esc(s.prompt||'')}</p></header><div class="worksheet-strip"><span>工作紙 ${esc(s.worksheet||'對應活動')}</span><small>${cfg.ageBand==='p1'?'輪流操作 · 指一指 · 說給同伴聽':'操作員 · 觀察員 · 紙本記錄員 · 報告員'}</small></div><div class="activity">${activity(s)}</div>${s.hint?`<aside class="inquiry-hint">${esc(s.hint)}</aside>`:''}${scratchpad(s)}<footer class="inquiry-footer"><span>一組一部 iPad · 操作與討論在畫面，作答在工作紙</span>${button('重新開始本課','reset')}</footer></div>`;
    const note=h.querySelector('[data-note]');if(note)note.oninput=()=>{state.notes[s.id]=note.value;};
    h.querySelectorAll('[data-choice]').forEach(el=>el.onchange=()=>{state.choices[el.dataset.choice]=el.value;});
    h.querySelectorAll('[data-evidence]').forEach(el=>el.onchange=()=>{state.selected=Array.from(h.querySelectorAll('[data-evidence]:checked')).map(e=>e.dataset.evidence);});
    h.querySelectorAll('[data-cup]').forEach(el=>el.oninput=()=>{state.cups[+el.dataset.cup][el.dataset.component]=+el.value;updateCups(h);});
    const sc=h.querySelector('[data-scale]');if(sc){sc.oninput=()=>{state.factor=+sc.value;h.querySelector('[data-factor]').textContent=sc.value;scale(h);};scale(h);}
    if(s.kind==='lab') updateCups(h);
    let markTool='base';
    h.querySelectorAll('[data-mark]').forEach(el=>{
      el.tabIndex=0;el.setAttribute('role','button');const id=el.dataset.mark;
      const paint=()=>{el.className=state.annotations[id]==='base'?'mark-base':state.annotations[id]==='variable'?'mark-variable':'';};
      const mark=()=>{state.annotations[id]=state.annotations[id]===markTool?'':markTool;paint();};el.onclick=mark;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();mark();}};paint();
    });
    h.querySelectorAll('[data-action]').forEach(el=>el.onclick=()=>{
      switch(el.dataset.action){
        case 'reveal':state.reveal[s.id]=Math.min(hints(s).length,(state.reveal[s.id]||0)+1);render(h,s);break;
        case 'hide':state.reveal[s.id]=0;render(h,s);break;
        case 'mark-base':case 'mark-variable':markTool=el.dataset.action==='mark-base'?'base':'variable';el.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===el)));break;
        case 'fixed':state.mode='fixed';state.cups.forEach(c=>c.juice=1);render(h,s);break;
        case 'free':state.mode='free';render(h,s);break;
        case 'restore':state.cups=fresh().cups;render(h,s);break;
        case 'view':state.view=el.dataset.view;render(h,s);break;
        case 'compare':{const c=state.cups[+el.dataset.index],id=`${c.name}-${c.juice}-${c.water}`;if(!state.samples.some(r=>r.id===id))state.samples.push({id,...c});h.querySelector('.status').textContent=`${c.name} 杯 ${c.juice}:${c.water} 已加入比較，共 ${state.samples.length} 組配方。請把需要的數據寫在工作紙。`;break;}
        case 'part-total':h.querySelector('.representation-output').textContent='1＋4＝5 份。整杯包含果汁與清水。';break;
        case 'part-ratio':h.querySelector('.representation-output').textContent='果汁 ÷ 清水＝1÷4＝0.25（部分比部分）。';break;
        case 'part-concentration':h.querySelector('.representation-output').textContent='果汁 ÷ 整杯＝1÷(1＋4)＝20%（部分比整體）。';break;
        case 'reset':if(window.confirm('重新開始這一課？目前的操作、比較配方和臨時書寫會清空。')){state=fresh();if(window.Primary)window.Primary.reset();render(h,s);}break;
      }
    });
    const sketchCleanup=bindSketch(h,s);
    const activityCleanup=window.Primary?window.Primary.bind(h,s):null;
    disposeSketch=()=>{if(sketchCleanup)sketchCleanup();if(activityCleanup)activityCleanup();};
  }
  window.Inquiry={render,palette};
})();
