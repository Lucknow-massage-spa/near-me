(() => {
  'use strict';
  const q=(s,c=document)=>c.querySelector(s), qa=(s,c=document)=>[...c.querySelectorAll(s)];
  const toggle=q('[data-nav-toggle]'), nav=q('[data-nav]');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  qa('[data-filter]').forEach(input=>input.addEventListener('input',()=>{const term=input.value.trim().toLowerCase();const target=input.getAttribute('data-filter');qa(`[data-filter-group="${target}"] [data-filter-item]`).forEach(el=>el.classList.toggle('hidden',!el.textContent.toLowerCase().includes(term)));}));
  const form=q('#booking-form');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(form);const fields=['name','phone','area','service','time','message'];const lines=['Hello, I want to ask about a professional home wellness session in Lucknow.'];for(const key of fields){const v=String(fd.get(key)||'').trim();if(v)lines.push(`${key.charAt(0).toUpperCase()+key.slice(1)}: ${v.replace(/[<>]/g,'')}`);}window.open(`https://wa.me/919795648156?text=${encodeURIComponent(lines.join('\n'))}`,'_blank','noopener,noreferrer');});}
})();
