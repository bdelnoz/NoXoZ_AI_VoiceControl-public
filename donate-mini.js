/* AI Voice Control - donate-mini.js - v8.11.07 - @NoXoZ.be
 * 2026-10-09: Version v8.11.07; runtime, styling and observer unchanged.
 * 2026-10-09: Export-style ivory pill, neon purple stroke and soft lavender pulse.
 * 2026-10-09: Exactly matches Export v7.0.0 p25 maxi height 22 px / 11 px font; purple stroke retained.
 * Donation URL, click behavior, observer and mode visibility retained.
 */
(function cgasDonateInit(){
  'use strict';
  const WIDGET_ID='cgas-mini-widget';
  const BUTTON_CLASS='cgas-donate-mini';
  const STYLE_ID='cgas-donate-mini-style';
  const DONATE_URL='https://donate.stripe.com/6oUdRbfsifpQ8DzbbWfQI00';
  const MINI_LABEL='♡ Support ♡';
  const MAXI_LABEL='♡ Click to Support This Project ♡';

  function ensureStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style=document.createElement('style');
    style.id=STYLE_ID;
    style.textContent=`
      #${WIDGET_ID} .${BUTTON_CLASS}{display:flex;align-items:center;justify-content:center;width:100%;max-width:100%;margin:6px 0 0;padding:0 8px;border:1.8px solid rgba(183,80,255,.97);border-radius:999px;background:#FFF5FD;color:#54257D;font-family:inherit;font-weight:900;text-align:center;text-decoration:none;white-space:nowrap;cursor:pointer;box-sizing:border-box;box-shadow:inset 0 0 0 1px rgba(255,255,255,.58),0 0 16px rgba(183,80,255,.23);animation:cgasDonatePulse 2.2s ease-in-out infinite}
      #${WIDGET_ID} .${BUTTON_CLASS}:hover{background:#FFFFFF;color:#67319F;border-color:rgba(183,80,255,1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.72),0 0 18px rgba(183,80,255,.37)}
      #${WIDGET_ID}.cgas-mode-mini .${BUTTON_CLASS}{margin:5px 0 0;height:17px;min-height:17px;line-height:15px;font-size:10px}
      #${WIDGET_ID}.cgas-mode-maxi .${BUTTON_CLASS}{display:flex!important;width:100%!important;max-width:100%!important;align-self:stretch;flex:0 0 auto;margin:7px 0 0;height:22px;min-height:22px;line-height:20px;font-size:11px;border-radius:8px;padding:0 10px}
      #${WIDGET_ID}.cgas-mode-button .${BUTTON_CLASS}{display:none!important}
      @keyframes cgasDonatePulse{0%,100%{box-shadow:inset 0 0 0 1px rgba(255,255,255,.40),0 0 7px rgba(183,80,255,.18)}50%{box-shadow:inset 0 0 0 1px rgba(255,255,255,.56),0 0 13px rgba(183,80,255,.34)}}
      @media (prefers-reduced-motion:reduce){#${WIDGET_ID} .${BUTTON_CLASS}{animation:none}}
    `;
    document.documentElement.appendChild(style);
  }

  function createButton(){
    const a=document.createElement('a');
    a.className=BUTTON_CLASS;
    a.href=DONATE_URL;
    a.target='_blank';
    a.rel='noopener noreferrer';
    a.addEventListener('pointerdown',e=>e.stopPropagation());
    return a;
  }

  function ensureButton(){
    const widget=document.getElementById(WIDGET_ID);
    if(!widget) return;
    let support=widget.querySelector('.'+BUTTON_CLASS);
    const isMini=widget.classList.contains('cgas-mode-mini');
    const isMaxi=widget.classList.contains('cgas-mode-maxi');
    if(!isMini&&!isMaxi){ if(support) support.remove(); return; }
    support=support||createButton();
    support.textContent=isMini?MINI_LABEL:MAXI_LABEL;
    support.title='Support this project via Stripe';
    const devBox=widget.querySelector('#cgas-dev-box');
    if(devBox&&devBox.parentElement){
      if(devBox.previousElementSibling!==support) devBox.insertAdjacentElement('beforebegin',support);
      return;
    }
    widget.appendChild(support);
  }

  let scheduled=false;
  function schedule(){
    if(scheduled) return;
    scheduled=true;
    requestAnimationFrame(()=>{scheduled=false;ensureStyle();ensureButton();});
  }
  const observer=new MutationObserver(schedule);
  observer.observe(document.documentElement,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
  ensureStyle();
  ensureButton();
}());
