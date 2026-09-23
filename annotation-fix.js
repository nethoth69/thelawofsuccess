(function(){
  const STORAGE_KEY='master-key-annotations';
  let savedRange=null;
  let toolbar=null;
  let activePopup=null;

  const read=()=>{try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]')}catch{return[]}};
  const write=items=>localStorage.setItem(STORAGE_KEY,JSON.stringify(items.slice(0,300)));
  const esc=value=>String(value||'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));
  const selectedText=()=>window.getSelection()?.toString().trim()||'';
  const inReader=range=>!!range && !!range.commonAncestorContainer.parentElement?.closest('.book-modal');

  function hideToolbar(){if(toolbar)toolbar.hidden=true;}
  function saveSelection(){
    const selection=window.getSelection();
    if(!selection||selection.rangeCount===0||selection.isCollapsed)return false;
    const range=selection.getRangeAt(0);
    if(!inReader(range))return false;
    savedRange=range.cloneRange();
    return true;
  }
  function positionToolbar(){
    if(!toolbar||!savedRange)return;
    const rect=savedRange.getBoundingClientRect();
    toolbar.style.left=Math.max(10,Math.min(window.innerWidth-330,rect.left+rect.width/2-160))+'px';
    toolbar.style.top=Math.max(10,rect.top-58)+'px';
  }
  function addRecord(text,mark){
    const items=read();
    items.unshift({id:crypto.randomUUID?.()||String(Date.now()),text,mark,createdAt:new Date().toISOString()});
    write(items);
  }
  function applyMark(mark){
    if(!savedRange)return;
    const range=savedRange.cloneRange();
    if(range.collapsed)return;
    const tag=document.createElement('span');
    tag.className='study-mark study-'+mark;
    if(mark==='highlight')tag.style.backgroundColor='#f3d77b';
    if(mark==='underline')tag.style.textDecoration='underline';
    if(mark==='strike')tag.style.textDecoration='line-through';
    try{
      tag.appendChild(range.extractContents());
      range.insertNode(tag);
      addRecord(range.toString()||tag.textContent,mark);
      window.getSelection()?.removeAllRanges();
      hideToolbar();
    }catch(error){
      console.error('Annotation failed',error);
      hideToolbar();
      alert('This selection crosses multiple blocks. Please select a shorter passage and try again.');
    }
  }
  function closePopup(){if(activePopup){activePopup.remove();activePopup=null;}hideToolbar();}
  function openReflection(text){
    closePopup();
    const popup=document.createElement('div');
    popup.className='reflection-dialog';
    popup.innerHTML='<div class="reflection-card" role="dialog" aria-modal="true" aria-labelledby="annotationReflectionTitle"><button type="button" class="reflection-close" aria-label="Close reflection">×</button><p class="eyebrow">PRIVATE REFLECTION</p><h2 id="annotationReflectionTitle">What does this passage mean to you?</h2><blockquote>'+esc(text)+'</blockquote><textarea rows="5" placeholder="Write your reflection..."></textarea><div class="reflection-actions"><button type="button" data-cancel>Cancel</button><button type="button" class="save" data-save>Save reflection</button></div></div>';
    document.body.appendChild(popup);activePopup=popup;
    const close=()=>closePopup();
    popup.querySelector('.reflection-close').addEventListener('click',close);
    popup.querySelector('[data-cancel]').addEventListener('click',close);
    popup.addEventListener('click',event=>{if(event.target===popup)close();});
    popup.querySelector('[data-save]').addEventListener('click',()=>{
      const reflection=popup.querySelector('textarea').value.trim();
      if(!reflection){popup.querySelector('textarea').focus();return;}
      const items=read();items.unshift({id:crypto.randomUUID?.()||String(Date.now()),text,mark:'reflection',reflection,createdAt:new Date().toISOString()});write(items);close();
    });
    popup.querySelector('textarea').focus();
  }
  function makeToolbar(){
    toolbar=document.createElement('div');
    toolbar.className='selection-toolbar';toolbar.hidden=true;
    toolbar.innerHTML='<button type="button" data-mark="highlight">Highlight</button><button type="button" data-mark="strike">Strike</button><button type="button" data-mark="underline">Underline</button><button type="button" data-mark="reflect">Reflect</button>';
    document.body.appendChild(toolbar);
    toolbar.addEventListener('mousedown',event=>event.preventDefault());
    toolbar.addEventListener('click',event=>{
      const button=event.target.closest('button');if(!button)return;
      const text=savedRange?.toString().trim()||selectedText();if(!text){hideToolbar();return;}
      if(button.dataset.mark==='reflect')openReflection(text);else applyMark(button.dataset.mark);
    });
  }
  function inspectSelection(){
    if(saveSelection()){toolbar.hidden=false;positionToolbar();}else hideToolbar();
  }
  function openForSelection(){
    if(!saveSelection()){hideToolbar();alert('Select the passage you want to mark first.');return;}
    toolbar.hidden=false;positionToolbar();
  }
  function init(){
    makeToolbar();
    document.addEventListener('mouseup',()=>setTimeout(inspectSelection,0));
    document.addEventListener('keyup',()=>setTimeout(inspectSelection,0));
    document.addEventListener('scroll',hideToolbar,{passive:true});
    document.addEventListener('click',event=>{
      const button=event.target.closest('[data-highlight]');
      if(!button)return;
      event.preventDefault();event.stopImmediatePropagation();openForSelection();
    },true);
    document.addEventListener('keydown',event=>{if(event.key==='Escape'){closePopup();hideToolbar();}});
    window.addEventListener('resize',positionToolbar);
  }
  window.studyAnnotations=window.studyAnnotations||{};
  window.studyAnnotations.openForSelection=openForSelection;
  window.studyAnnotations.read=read;
  window.addEventListener('DOMContentLoaded',init);
})();