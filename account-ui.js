(function(){
  function init(){
    const panel=document.getElementById('authPanel');
    if(!panel||document.getElementById('accountLauncher'))return;
    panel.style.display='none';
    panel.style.position='fixed';
    panel.style.right='22px';
    panel.style.bottom='78px';
    panel.style.zIndex='45';
    panel.style.width='min(420px,calc(100% - 32px))';
    panel.style.maxHeight='calc(100vh - 110px)';
    panel.style.overflow='auto';
    const button=document.createElement('button');
    button.id='accountLauncher';
    button.type='button';
    button.textContent='ACCOUNT';
    button.setAttribute('aria-expanded','false');
    Object.assign(button.style,{position:'fixed',right:'22px',bottom:'22px',zIndex:'46',border:'1px solid rgba(214,173,69,.55)',background:'#15120a',color:'#f0cb67',borderRadius:'999px',padding:'12px 16px',font:"600 11px 'DM Mono',monospace",cursor:'pointer',boxShadow:'0 10px 35px rgba(0,0,0,.25)'});
    document.body.appendChild(button);
    const close=document.createElement('button');
    close.type='button';close.textContent='×';close.setAttribute('aria-label','Close account panel');
    Object.assign(close.style,{float:'right',fontSize:'24px',border:'0',background:'transparent',cursor:'pointer'});
    panel.prepend(close);
    const toggle=()=>{const open=panel.style.display!=='none';panel.style.display=open?'none':'block';button.textContent=open?'ACCOUNT':'CLOSE ACCOUNT';button.setAttribute('aria-expanded',String(!open));};
    button.addEventListener('click',toggle);close.addEventListener('click',()=>{panel.style.display='none';button.textContent='ACCOUNT';button.setAttribute('aria-expanded','false');});
  }
  window.addEventListener('load',()=>setTimeout(init,150));
})();