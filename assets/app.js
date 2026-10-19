
(()=>{'use strict';const $=s=>document.querySelector(s);const header=$('.site-header'),back=$('.back-top'),toggle=$('.menu-toggle'),nav=$('.mobile-nav');
function closeMenu(focus=false){toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Mở menu');nav.classList.remove('open');if(focus)toggle.focus()}
toggle.hidden=false;toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Đóng menu':'Mở menu');nav.classList.toggle('open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();document.querySelectorAll('.nav-dropdown[open]').forEach(d=>{d.open=false;d.querySelector('summary').focus()})}});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));window.matchMedia('(min-width:901px)').addEventListener('change',()=>closeMenu());
const update=()=>{header.classList.toggle('scrolled',scrollY>12);back.classList.toggle('visible',scrollY>550)};window.addEventListener('scroll',update,{passive:true});update();
const tabs=[...document.querySelectorAll('.region-tab')],cards=[...document.querySelectorAll('.city-card')];const panel=$('#region-panel');
function activate(tab,focus=false){tabs.forEach(t=>{t.setAttribute('aria-selected',String(t===tab));t.tabIndex=t===tab?0:-1});cards.forEach(c=>c.hidden=tab.dataset.region!=='all'&&c.dataset.region!==tab.dataset.region);if(panel)panel.setAttribute('aria-labelledby',tab.id);const count=$('.region-count');if(count)count.textContent=cards.filter(c=>!c.hidden).length+' địa điểm · '+tab.textContent;if(focus)tab.focus()}
if(tabs.length){$('.region-tabs').hidden=false;tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activate(tab));tab.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();activate(tabs[n],true)}})})}
if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion:reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.08});document.documentElement.classList.add('motion-ready');document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el))}
document.querySelectorAll('img[data-fallback]').forEach(img=>{if(img.complete&&img.naturalWidth===0){img.onerror=null;img.src=img.dataset.fallback}});
})();
/* CareerViet v8 collapsible lists start */
(()=>{'use strict';
document.querySelectorAll('[data-collapsible-list]').forEach(list=>{
 const limit=Number.parseInt(list.dataset.visibleCount||'4',10);
 const items=[...list.children].filter(item=>item.hasAttribute('data-collapsible-item'));
 const button=document.querySelector('[data-expand-list="'+list.id+'"]');
 if(!button||items.length<=limit)return;
 const label=button.querySelector('.catalog-more-label');
 const render=expanded=>{
  items.forEach((item,index)=>item.hidden=!expanded&&index>=limit);
  button.hidden=false;
  button.setAttribute('aria-expanded',String(expanded));
  label.textContent=expanded?button.dataset.lessLabel:button.dataset.moreLabel;
 };
 button.addEventListener('click',()=>render(button.getAttribute('aria-expanded')!=='true'));
 render(false);
});
})();
/* CareerViet v8 collapsible lists end */
