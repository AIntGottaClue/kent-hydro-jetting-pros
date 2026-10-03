(function(){
var css='.cfx{position:relative;overflow:hidden;isolation:isolate}.cfx-shine{position:absolute;inset:0;border-radius:inherit;background:linear-gradient(110deg,transparent 28%,rgba(255,255,255,.5) 50%,transparent 72%);transform:translateX(-140%);animation:cfxShine 2.4s ease-in-out infinite;pointer-events:none;z-index:1}@keyframes cfxShine{0%{transform:translateX(-140%)}55%{transform:translateX(140%)}100%{transform:translateX(140%)}}.cfx-ico{display:inline-flex;flex-shrink:0;animation:cfxRing 1.4s ease-in-out infinite;transform-origin:50% 50%}.cfx-ico svg{width:1.1em;height:1.1em}@keyframes cfxRing{0%,75%,100%{transform:rotate(0)}10%{transform:rotate(-12deg)}20%{transform:rotate(12deg)}30%{transform:rotate(-10deg)}40%{transform:rotate(10deg)}50%{transform:rotate(0)}}@media(prefers-reduced-motion:reduce){.cfx-shine{display:none}.cfx-ico{animation:none!important}}';
var phone='<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
function init(){
var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
var sel='a[href^="tel:"].btn,a[href^="tel:"][class*="bg-accent"],a[href^="tel:"][class*="bg-cta"],a[href^="tel:"][class*="border-primary"],a.satellite-call';
document.querySelectorAll(sel).forEach(function(a){
if(a.classList.contains('cfx')||a.classList.contains('fab-deal'))return;
if(a.querySelector('.fab-deal-ico'))return;
a.classList.add('cfx');
if(getComputedStyle(a).position==='static')a.style.position='relative';
var sv=a.querySelector('svg');
if(sv){var w=document.createElement('span');w.className='cfx-ico';sv.parentNode.insertBefore(w,sv);w.appendChild(sv);}
else{var i=document.createElement('span');i.className='cfx-ico';i.innerHTML=phone;a.insertBefore(i,a.firstChild);if(getComputedStyle(a).display.indexOf('flex')<0){a.style.display='inline-flex';a.style.alignItems='center';a.style.justifyContent='center';}a.style.gap='.5em';}
var sh=document.createElement('span');sh.className='cfx-shine';sh.setAttribute('aria-hidden','true');a.appendChild(sh);
});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
