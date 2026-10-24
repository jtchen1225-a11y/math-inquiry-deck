/* Browser-local inquiry activities; no student data is sent to a server. */
(function () {
  'use strict';
  const M = window.InquiryModel;
  const cfg = window.DECK_CONFIG || {};
  const key = `math-inquiry:${cfg.id || 'lesson'}:v${cfg.version || 1}`;
  const initial = () => ({ answers:{}, reveal:{}, cups:[{name:'A',juice:1,water:2},{name:'B',juice:1,water:4},
    {name:'C',juice:1,water:5},{name:'D',juice:1,water:1}], records:[], mode:'fixed', view:'parts', factor:1 });
  let state = initial();
  let memoryOnly = false;
  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
      if (saved.answers && typeof saved.answers === 'object') state.answers = saved.answers;
      if (saved.reveal && typeof saved.reveal === 'object') state.reveal = saved.reveal;
      if (Array.isArray(saved.cups) && saved.cups.length === 4 && saved.cups.every(c =>
        ['A','B','C','D'].includes(c.name) && Number.isInteger(c.juice) && c.juice >= 1 && c.juice <= 5 &&
        Number.isInteger(c.water) && c.water >= 0 && c.water <= 10)) state.cups = saved.cups;
      if (Array.isArray(saved.records)) state.records = saved.records.filter(r =>
        typeof r.id === 'string' && typeof r.name === 'string' && Number.isFinite(r.juice) && r.juice > 0 &&
        Number.isFinite(r.water) && r.water >= 0).slice(-100);
      if (['fixed','free'].includes(saved.mode)) state.mode = saved.mode;
      if (['parts','ratio','concentration'].includes(saved.view)) state.view = saved.view;
      if (Number.isInteger(saved.factor) && saved.factor >= 1 && saved.factor <= 5) state.factor = saved.factor;
    }
  } catch (_) { memoryOnly = true; }
  function save() { try { localStorage.setItem(key, JSON.stringify(state)); } catch (_) { memoryOnly = true; } }
  const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pct = c => `${(c * 100).toFixed(1)}%`;
  const num = n => n === null ? '未定義（清水為 0）' : Number(n.toFixed(4)).toString();
  const answer = id => typeof state.answers[id] === 'string' ? state.answers[id] : '';
  const button = (label, action, extra='') => `<button type="button" data-action="${action}" ${extra}>${label}</button>`;
  function field(id, label, placeholder='寫下你的想法……') {
    return `<label class="answer-label">${esc(label)}<textarea data-answer="${esc(id)}" rows="2" placeholder="${esc(placeholder)}">${esc(answer(id))}</textarea></label>`;
  }
  function reveal(s) {
    if (!s.reveals) return '';
    const count = Math.max(0, Math.min(s.reveals.length, Number(state.reveal[s.id]) || 0));
    return `<div class="reveal-actions">${button(count ? '揭示下一層' : '需要提示', 'reveal', count === s.reveals.length ? 'disabled' : '')}
      ${count ? button('收起提示', 'hide') : ''}<span>${count} / ${s.reveals.length}</span></div>
      <div class="reveals" aria-live="polite">${s.reveals.slice(0,count).map(t => `<p>${esc(t)}</p>`).join('')}</div>`;
  }
  function labels() {
    return `<div class="product-labels">${[['A',2],['B',4],['C',5]].map(([n,w]) =>
      `<div class="product"><span>${n} 款</span><strong>1 : ${w}</strong><small>濃縮果汁 : 清水</small></div>`).join('')}</div>`;
  }
  function table(selectable=false) {
    if (!state.records.length) return '<p class="empty">尚未記錄數據。請到「動手調配」按下「記錄這杯」。</p>';
    const chosen = answer('evidence-ids').split('|');
    return `<div class="table-wrap"><table><caption>實驗紀錄快照</caption><thead><tr>${selectable?'<th>引用</th>':''}<th>款式</th><th>果汁:水</th><th>比值</th><th>總份數</th><th>整體濃度</th></tr></thead><tbody>${state.records.map(r => {
      const m = M.mixture(r.juice,r.water);
      return `<tr>${selectable?`<td><input type="checkbox" aria-label="引用 ${esc(r.name)} ${r.juice}:${r.water}" data-evidence="${esc(r.id)}" ${chosen.includes(r.id)?'checked':''}></td>`:''}<td>${esc(r.name)}</td><td>${r.juice}:${r.water}</td><td>${num(m.ratio)}</td><td>${m.total}</td><td>${pct(m.concentration)}</td></tr>`;
    }).join('')}</tbody></table></div>`;
  }
  function cupsHTML() {
    return state.cups.map((c,i) => `<section class="cup-card"><div class="cup-heading"><h3>${c.name} 杯</h3><strong data-cup-ratio="${i}"></strong></div>
      <div class="vessel" role="img" aria-label="${c.name} 杯液量與濃度示意"><div class="liquid" data-liquid="${i}"></div><div class="ticks"></div><span data-total="${i}"></span></div>
      <p class="cup-result" data-result="${i}" aria-live="polite"></p>
      <label>果汁 <output data-value="j${i}"></output> 份<input type="range" min="1" max="5" step="1" value="${c.juice}" data-cup="${i}" data-component="juice" aria-label="${c.name} 杯果汁份數" ${state.mode==='fixed'?'disabled':''}></label>
      <label>清水 <output data-value="w${i}"></output> 份<input type="range" min="0" max="10" step="1" value="${c.water}" data-cup="${i}" data-component="water" aria-label="${c.name} 杯清水份數"></label>
      ${button('記錄這杯','record',`data-index="${i}"`)}</section>`).join('');
  }
  function updateCups(h) {
    state.cups.forEach((c,i) => {
      const m=M.mixture(c.juice,c.water);
      h.querySelector(`[data-cup-ratio="${i}"]`).textContent=`${c.juice}:${c.water}`;
      h.querySelector(`[data-value="j${i}"]`).textContent=c.juice;
      h.querySelector(`[data-value="w${i}"]`).textContent=c.water;
      const liquid=h.querySelector(`[data-liquid="${i}"]`);
      liquid.style.height=`${m.total/15*100}%`;
      liquid.style.background=`hsl(${48-25*m.concentration} 90% ${91-53*m.concentration}%)`;
      h.querySelector(`[data-total="${i}"]`).textContent=`${m.total} / 15 份`;
      const detail=state.view==='ratio'?`果汁÷清水＝${num(m.ratio)}`:state.view==='concentration'?`果汁÷整杯＝${pct(m.concentration)}`:'先觀察，再揭示計算';
      h.querySelector(`[data-result="${i}"]`).textContent=detail;
      h.querySelector(`[data-liquid="${i}"]`).parentElement.setAttribute('aria-label',`${c.name} 杯，果汁 ${c.juice} 份，清水 ${c.water} 份，總量 ${m.total} 份。${detail}`);
    });
  }
  function activity(s) {
    switch(s.kind) {
      case 'question': return `${s.labels?labels():''}<fieldset class="choices"><legend>我的初步判斷</legend>${(s.choices||['我同意','我不同意','需要更多證據']).map(t => `<label><input type="radio" name="prediction" value="${esc(t)}" data-choice="${s.id}" ${answer(s.id+'-choice')===t?'checked':''}>${esc(t)}</label>`).join('')}</fieldset>${field(s.id+'-reason','我的理由')}`;
      case 'annotation': return `<div class="mode-buttons">${button('標註基準量','mark-base')}${button('標註核心變數','mark-variable')}</div><div class="annotation-line"><span data-mark="base">1 份濃縮果汁</span><b> : </b><span data-mark="variable">4 份清水</span></div><p>先選標註工具，再點選上方文字。可再次點選取消。</p>${field('read-meaning','1:4 的意思是……')}`;
      case 'lab': return `<div class="lab-toolbar"><div class="mode-buttons">${button('固定果汁＝1','fixed',`aria-pressed="${state.mode==='fixed'}"`)}${button('自由調配','free',`aria-pressed="${state.mode==='free'}"`)}${button('恢復 A／B／C 標籤配方','restore')}</div><div class="mode-buttons">${['parts','ratio','concentration'].map((v,i)=>button(['只看份數','比值換算','整體濃度 %'][i],'view',`data-view="${v}" aria-pressed="${state.view===v}"`)).join('')}</div></div><div class="cups-grid">${cupsHTML()}</div><p class="model-note">相同容器刻度：15 份。液面表示總量；顏色只作濃度示意。清水為 0 時，比值未定義，整體濃度為 100%。</p><div class="status" aria-live="polite"></div>`;
      case 'representation': return `<div class="part-grid"><div class="juice-part">果汁<br>1 份</div>${Array.from({length:4},()=>'<div>清水<br>1 份</div>').join('')}</div><div class="mode-buttons">${button('看總份數','part-total')}${button('看比值','part-ratio')}${button('看整體濃度','part-concentration')}</div><div class="representation-output" aria-live="polite">先數一數，整杯有幾份？</div>${field('parts-explain','0.25 和 20% 的分母有甚麼不同？')}`;
      case 'records': return `${table()}${field('records-observe','我注意到的數據關係')}`;
      case 'scale': return `<label class="scale-control">同時放大 <output data-factor>${state.factor}</output> 倍<input type="range" min="1" max="5" step="1" value="${state.factor}" data-scale aria-label="等比例放大倍數"></label><div class="scale-result" aria-live="polite"></div>${field('scale-explain','總量與濃度，哪些改變了？')}`;
      case 'rule': case 'practice': return `${field(s.id+'-work',s.kind==='rule'?'我的規律':'計算與理由')}${reveal(s)}`;
      case 'argument': return `${cfg.experiment==='juice'?table(true)+'<p class="model-note">勾選要引用的實驗紀錄，再寫出它如何支持你的主張。</p>':''}<div class="argument-grid">${[['claim','🟢 我的主張'],['evidence','🟡 事實證據'],['reasoning','🔵 數學道理'],['rebuttal','🔴 擊破迷思']].map(([id,label])=>`<section class="argument ${id}">${field(s.id+'-'+id,label)}</section>`).join('')}</div>${reveal(s)}`;
      case 'percent': return `${field('percent-work','我的最簡整數比與理由')}<div class="hundred-grid" role="img" aria-label="100 格中 25 格是果汁，75 格是水">${Array.from({length:100},(_,i)=>`<span class="${i<25?'juice-cell':''}"></span>`).join('')}</div>${reveal(s)}`;
      case 'algorithm': return `<div class="algorithm-grid">${[['parts','① 總份數'],['unit','② 每份容量（mL）'],['juice','③ 果汁用量（mL）'],['water','④ 清水用量（mL）'],['bottles','⑤ 至少購買瓶數']].map(([id,label])=>`<label>${label}<input type="number" min="0" step="any" data-answer="party-${id}" value="${esc(answer('party-'+id))}"></label>`).join('')}</div>${field('party-reason','為何不能直接捨去小數？')}${button('核對這一步','check-party')}<div class="party-feedback" aria-live="polite"></div>`;
      case 'reflection': return `<div class="previous-claim"><h3>我最初的判斷</h3><p>${esc(answer('claim-choice')||'尚未選擇')}；${esc(answer('claim-reason')||'尚未填寫理由')}</p></div>${field('exit-answer','現在的判斷與理由')}${field('exit-ticket','離堂題答案與理由')}<fieldset class="self-rating"><legend>自我評估</legend>${['實驗操作','四步論證','生活應用'].map((label,i)=>`<label>${label}<select data-answer="self-${i}"><option value="">請選擇</option>${['能獨立完成','需要少量提示','仍需協助'].map(v=>`<option ${answer('self-'+i)===v?'selected':''}>${v}</option>`).join('')}</select></label>`).join('')}</fieldset>`;
      default: return `${field(s.id+'-work','我的探究紀錄')}${reveal(s)}`;
    }
  }
  function scale(h) {
    const k=state.factor, m=M.mixture(k,4*k);
    h.querySelector('.scale-result').innerHTML=`<strong>${k} : ${4*k}</strong><span>總量 ${m.total} 份</span><span>比值 ${num(m.ratio)}</span><span>整體濃度 ${pct(m.concentration)}</span>`;
  }
  function download() {
    const blob=new Blob([JSON.stringify({lesson:cfg.id, exportedAt:new Date().toISOString(), ...state},null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob), a=document.createElement('a'); a.href=url; a.download=`${cfg.id||'inquiry'}-records.json`; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  function render(h,s) {
    h.className='slide inquiry-slide';
    h.innerHTML=`<div class="inquiry-page"><nav class="phase-strip" aria-label="探究流程">${(cfg.phases||[]).map((p,i)=>`<span class="${i===s.phase?'active':''}" ${i===s.phase?'aria-current="step"':''}><b>${i+1}</b>${esc(p)}</span>`).join('')}</nav><header class="inquiry-heading"><p class="inquiry-eyebrow">課堂探究 · ${esc(s.secName||'')}</p><h2>${esc(s.title)}</h2><p>${esc(s.prompt||'')}</p></header><div class="activity">${activity(s)}</div>${s.hint?`<aside class="inquiry-hint">${esc(s.hint)}</aside>`:''}<footer class="inquiry-footer"><span class="storage-notice">${memoryOnly?'儲存不可用，目前僅暫存在此頁。請匯出紀錄。':'作答只存在這台裝置的瀏覽器；共用裝置請於下課匯出並清除。'}</span><div>${button('匯出課堂紀錄','export')}${button('重設本課','reset')}</div></footer></div>`;
    h.querySelectorAll('[data-answer]').forEach(el=>el.addEventListener('input',()=>{state.answers[el.dataset.answer]=el.value;save();}));
    h.querySelectorAll('[data-choice]').forEach(el=>el.addEventListener('change',()=>{state.answers[el.dataset.choice+'-choice']=el.value;save();}));
    h.querySelectorAll('[data-evidence]').forEach(el=>el.addEventListener('change',()=>{state.answers['evidence-ids']=Array.from(h.querySelectorAll('[data-evidence]:checked')).map(e=>e.dataset.evidence).join('|');save();}));
    h.querySelectorAll('[data-cup]').forEach(el=>el.addEventListener('input',()=>{state.cups[+el.dataset.cup][el.dataset.component]=+el.value;save();updateCups(h);}));
    const sc=h.querySelector('[data-scale]'); if(sc) { sc.oninput=()=>{state.factor=+sc.value;save();h.querySelector('[data-factor]').textContent=sc.value;scale(h);};scale(h); }
    if(s.kind==='lab') updateCups(h);
    let markTool='base';
    h.querySelectorAll('[data-mark]').forEach(el=>{
      el.tabIndex=0;el.setAttribute('role','button');
      const mark=()=>{ const id='mark-'+el.dataset.mark;state.answers[id]=answer(id)===markTool?'':markTool;save();paint(); };
      const paint=()=>{el.className=answer('mark-'+el.dataset.mark)==='base'?'mark-base':answer('mark-'+el.dataset.mark)==='variable'?'mark-variable':'';};
      el.onclick=mark;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();mark();}};paint();
    });
    h.querySelectorAll('[data-action]').forEach(el=>el.onclick=()=>{
      switch(el.dataset.action) {
        case 'reveal': state.reveal[s.id]=Math.min(s.reveals.length,(Number(state.reveal[s.id])||0)+1);save();render(h,s);break;
        case 'hide': state.reveal[s.id]=0;save();render(h,s);break;
        case 'mark-base': markTool='base';el.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===el)));break;
        case 'mark-variable': markTool='variable';el.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===el)));break;
        case 'fixed': state.mode='fixed';state.cups.forEach(c=>c.juice=1);save();render(h,s);break;
        case 'free': state.mode='free';save();render(h,s);break;
        case 'restore': state.cups=initial().cups;save();render(h,s);break;
        case 'view': state.view=el.dataset.view;save();render(h,s);break;
        case 'record': {
          const c=state.cups[+el.dataset.index], id=`${c.name}-${c.juice}-${c.water}`;
          const r={id,name:c.name,juice:c.juice,water:c.water}; const at=state.records.findIndex(x=>x.id===id);
          if(at<0) state.records.push(r);else state.records[at]=r;
          save();h.querySelector('.status').textContent=`已記錄 ${c.name} 杯 ${c.juice}:${c.water}，共 ${state.records.length} 筆快照。`;break;
        }
        case 'part-total': h.querySelector('.representation-output').textContent='1＋4＝5 份。整杯包含果汁與清水。';break;
        case 'part-ratio': h.querySelector('.representation-output').textContent='果汁 ÷ 清水＝1÷4＝0.25（部分比部分）。';break;
        case 'part-concentration': h.querySelector('.representation-output').textContent='果汁 ÷ 整杯＝1÷(1＋4)＝20%（部分比整體）。';break;
        case 'check-party': {
          const a=M.allocation(15000,1,4,800), expected=[a.parts,a.perPart,a.juiceMl,a.waterMl,a.bottles];
          const ids=['parts','unit','juice','water','bottles'], pos=ids.findIndex((id,i)=>answer('party-'+id).trim()===''||Number(answer('party-'+id))!==expected[i]);
          h.querySelector('.party-feedback').textContent=pos<0?`五步計算正確！購買 ${a.bottles} 瓶，共 3,200 mL，剩餘 ${a.leftover} mL；請再解釋進位理由。`:`請檢查第 ${pos+1} 步：${['總份數應把果汁與清水相加。','總容量除以總份數。','每份容量乘果汁份數。','每份容量乘清水份數。','不足一瓶仍須買一整瓶。'][pos]}`;break;
        }
        case 'export': download();break;
        case 'reset': if(window.confirm('清除這一課的猜想、實驗快照、作答與提示進度？請先匯出需要保留的紀錄。')) {state=initial();save();render(h,s);}break;
      }
    });
  }
  window.Inquiry={render};
})();
