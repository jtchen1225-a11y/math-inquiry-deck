/* Teacher-only display control; the teacher flag is a UI choice, not an identity check. */
(function(){'use strict';
 const query=new URLSearchParams(location.search);if(query.get('teacher')!=='1'||query.get('entry')!==window.CLASSROOM_ENTRY)return;
 const button=document.createElement('button');button.className='ghost-btn';button.type='button';button.textContent='本週二維碼';button.id='showWeeklyQR';document.querySelector('.top-actions').prepend(button);
 const dialog=document.createElement('dialog');dialog.className='j-share-dialog';const title=document.createElement('h2');title.textContent=document.title;
 const canvas=document.createElement('canvas');canvas.className='j-qr';canvas.setAttribute('role','img');canvas.setAttribute('aria-label','本週學生入口二維碼');
 const hint=document.createElement('p');hint.textContent='請核對工作紙週次與標題。此碼只進入本課，學生端沒有跨週選單。';const close=document.createElement('button');close.type='button';close.textContent='收起二維碼';close.onclick=()=>dialog.close();dialog.append(title,canvas,hint,close);document.body.append(dialog);
 button.onclick=()=>{const url=new URL(location.href);url.searchParams.delete('teacher');url.hash='present';const qr=qrcode(0,'M');qr.addData(url.href);qr.make();const n=qr.getModuleCount(),scale=6;canvas.width=canvas.height=(n+8)*scale;const ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#000';for(let y=0;y<n;y++)for(let x=0;x<n;x++)if(qr.isDark(y,x))ctx.fillRect((x+4)*scale,(y+4)*scale,scale,scale);dialog.showModal();};
})();
