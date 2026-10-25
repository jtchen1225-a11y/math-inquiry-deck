/* Classroom routing only: published entry links are not authentication credentials. */
(function(){'use strict';
 const supplied=new URLSearchParams(location.search).get('entry');
 if(supplied===window.CLASSROOM_ENTRY)return;
 document.documentElement.classList.add('classroom-locked');
 const style=document.createElement('style');style.textContent='.classroom-locked body>*:not(.junior-gate){display:none!important}';document.head.append(style);
 document.addEventListener('DOMContentLoaded',()=>{
  const overlay=document.createElement('main');overlay.className='junior-gate';
  const box=document.createElement('section'),h=document.createElement('h1'),p=document.createElement('p'),hint=document.createElement('p');
  h.textContent='請掃老師本週的二維碼';p.textContent='這份簡報需要對應週次的掃碼連結。請返回相機，掃描老師現在顯示的二維碼。';hint.textContent='若週次不符，請勿自行改網址。請老師重新開啟正確課程。';
  box.append(h,p,hint);overlay.append(box);document.body.append(overlay);
 });
})();
