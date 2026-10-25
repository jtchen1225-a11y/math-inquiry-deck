/* Teacher-selected weekly QR. Generates locally, with no tracking or response storage. */
(function(){'use strict';
 const $=s=>document.querySelector(s),room=$('#classroom'),canvas=$('#joinQR');
 function open(week){const l=window.JUNIOR_LESSONS.find(l=>l.week===week);if(!l)return;
  const url=new URL(`week${String(week).padStart(2,'0')}/`,location.href);url.searchParams.set('entry',l.entry);url.hash='present';
  const qr=qrcode(0,'M');qr.addData(url.href);qr.make();const n=qr.getModuleCount(),scale=6,margin=4;
  canvas.width=canvas.height=(n+margin*2)*scale;const ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#000';
  for(let y=0;y<n;y++)for(let x=0;x<n;x++)if(qr.isDark(y,x))ctx.fillRect((x+margin)*scale,(y+margin)*scale,scale,scale);
  $('#classTitle').textContent=`第${String(week).padStart(2,'0')}週｜${l.title}`;$('#joinLink').textContent=url.href;const teacherURL=new URL(url);teacherURL.searchParams.set('teacher','1');$('#teacherDeck').href=teacherURL.href;$('#studentLink').href=url.href;
  canvas.setAttribute('aria-label',`第${week}週學生專屬進入二維碼`);room.hidden=false;room.dataset.week=week;
  history.replaceState(null,'',`#week${String(week).padStart(2,'0')}`);room.scrollIntoView({behavior:'smooth',block:'start'});$('#classTitle').focus({preventScroll:true});
 }
 document.querySelectorAll('[data-open-week]').forEach(b=>b.onclick=()=>open(+b.dataset.openWeek));
 $('#closeQR').onclick=()=>{room.hidden=true;canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);$('#joinLink').textContent='';$('#teacherDeck').removeAttribute('href');$('#studentLink').removeAttribute('href');history.replaceState(null,'',location.pathname);};
 $('#search').oninput=e=>{const q=e.target.value.trim();let n=0;document.querySelectorAll('[data-week-card]').forEach(c=>{c.hidden=!c.textContent.includes(q);if(!c.hidden)n++;});$('#count').textContent=n+'份課程';};
 // A week hash selects a teacher page; the QR remains hidden until an explicit open.
 const m=location.hash.match(/^#week(\d{2})$/);if(m){const card=document.querySelector(`[data-week-card="${+m[1]}"]`);if(card)card.scrollIntoView();}
})();
