const bookData={};
const grid=document.getElementById('partGrid');
const modal=document.getElementById('bookModal');
const modalContent=document.getElementById('modalContent');
const closeBook=document.getElementById('closeBook');
const storageKey='master-key-personal-data';
const personalData=JSON.parse(localStorage.getItem(storageKey)||'{}');
const saveData=()=>localStorage.setItem(storageKey,JSON.stringify(personalData));
const esc=value=>String(value||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function renderParts(){
  const book=bookData.masterkey;if(!book||!grid)return;
  grid.innerHTML=book.parts.map((part,i)=>`<article class="part-card" data-part="${i}" tabindex="0" role="button"><div class="part-no">${String(i+1).padStart(2,'0')} · ${part.name.toUpperCase()}</div><h3>${part.subtitle}</h3><p>${part.range}</p><small>${part.chapters.length} listed entries · OPEN SECTION →</small></article>`).join('');
  grid.querySelectorAll('.part-card').forEach(card=>{const open=()=>openPart(+card.dataset.part);card.addEventListener('click',open);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});
}

function openPart(index){
  const book=bookData.masterkey,part=book.parts[index];if(!part)return;
  modalContent.innerHTML=`<p class="eyebrow">${part.name.toUpperCase()} · ${part.range}</p><h2 id="modalTitle">${esc(part.subtitle)}</h2><p class="book-author">${esc(book.title)} · ${esc(book.author)}</p><p class="book-intro">${esc(book.intro)}</p><div class="lesson-list">${part.chapters.map((chapter,i)=>{
    const title=typeof chapter==='string'?chapter:chapter.name;const note=book.notes?.[title];const key=`${index}-${i}`;const saved=personalData[key]||{};
    return `<article class="lesson-entry"><span>${String(i+1).padStart(2,'0')}</span><div><h3>${esc(title)}</h3>${note?`<div class="note-block"><h4>NOTE</h4><p>${esc(note.summary)}</p></div><div class="note-block"><h4>KEY CONCEPTS</h4><ul>${note.keyConcepts.map(item=>`<li>${esc(item)}</li>`).join('')}</ul></div><div class="note-block practical"><h4>PRACTICAL OBSERVATION</h4><p>${esc(note.observation)}</p></div><div class="exercise-box"><h4>EXERCISE</h4><p>Read the original entry, sit quietly for five minutes, return your attention whenever it wanders, and record what you noticed.</p><label><input type="checkbox" data-exercise="${key}" ${saved.done?'checked':''}> Mark exercise complete</label></div>`:`<p class="reading-status">The source text for this entry has not yet been converted into notes. Read the original entry and add its key concepts, note, and practical observation here.</p>`}<div class="personal-tools"><button class="mini-btn" data-highlight>Highlight text & add reflection</button></div></div></article>`;
  }).join('')}</div><div class="apply-box"><p class="eyebrow">STUDY METHOD</p><p>${esc(book.apply)}</p></div>`;
  bindTools();modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');closeBook.focus();
}

function showReflectionPopup(selectedText){
  const existing=document.getElementById('reflectionPopup');if(existing)existing.remove();
  const popup=document.createElement('div');popup.id='reflectionPopup';popup.className='reflection-popup';
  popup.innerHTML=`<div class="reflection-backdrop" data-close-reflection></div><section class="reflection-card" role="dialog" aria-modal="true" aria-labelledby="reflectionTitle"><button class="reflection-close" data-close-reflection aria-label="Close reflection">×</button><p class="eyebrow">PRIVATE REFLECTION</p><h2 id="reflectionTitle">What does this passage mean to you?</h2><p class="reflection-quote">“${esc(selectedText)}”</p><textarea id="reflectionText" placeholder="Write your reflection..." rows="5"></textarea><div class="tool-row"><button class="button button-accent" id="saveReflection">Save reflection</button><button class="mini-btn" data-close-reflection>Cancel</button></div></section></div>`;
  document.body.appendChild(popup);
  const close=()=>popup.remove();popup.querySelectorAll('[data-close-reflection]').forEach(el=>el.addEventListener('click',close));
  popup.querySelector('#saveReflection').addEventListener('click',()=>{
    const text=popup.querySelector('#reflectionText').value.trim();if(!text)return;
    const reflections=JSON.parse(localStorage.getItem('master-key-reflections')||'[]');
    reflections.push({selectedText,reflection:text,createdAt:new Date().toISOString()});
    localStorage.setItem('master-key-reflections',JSON.stringify(reflections));close();
  });
  popup.querySelector('#reflectionText').focus();
}

function bindTools(){
  modalContent.querySelectorAll('input[data-exercise]').forEach(box=>box.addEventListener('change',()=>{const key=box.dataset.exercise;personalData[key]=personalData[key]||{};personalData[key].done=box.checked;saveData();}));
  modalContent.querySelectorAll('[data-highlight]').forEach(btn=>btn.addEventListener('click',()=>{
    const selection=window.getSelection();const selectedText=selection.toString().trim();
    if(!selectedText){alert('Select the passage you want to mark first.');return;}
    try{document.execCommand('backColor',false,'#f3d77b');}catch(error){}
    selection.removeAllRanges();showReflectionPopup(selectedText);
  }));
}

function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
closeBook.addEventListener('click',closeModal);modal.querySelector('[data-close-book]').addEventListener('click',closeModal);document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();});

function setupReminder(){let button=document.getElementById('reminderButton');if(!button){button=document.createElement('button');button.id='reminderButton';button.className='mini-btn';button.textContent='Set daily reminder';document.querySelector('.site-header nav')?.appendChild(button);}let time=localStorage.getItem('dailyReminderTime')||'07:00';button.textContent=`Daily reminder: ${time}`;button.addEventListener('click',async()=>{const selected=prompt('Set daily reminder time (24-hour HH:MM):',time);if(!selected||!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(selected))return;time=selected;localStorage.setItem('dailyReminderTime',time);button.textContent=`Daily reminder: ${time}`;if('Notification' in window&&Notification.permission==='default')await Notification.requestPermission();alert('Reminder saved. The page must be open for this simple browser check to run.');});setInterval(()=>{const now=new Date(),current=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0'),today=now.toISOString().slice(0,10);if(current===time&&localStorage.getItem('reminderSent')!==today){localStorage.setItem('reminderSent',today);if('Notification' in window&&Notification.permission==='granted')new Notification('The Master Key',{body:'Time for your daily reading and exercise.'});else alert('Daily reading reminder: The Master Key');}},30000);}

document.getElementById('year').textContent=new Date().getFullYear();window.addEventListener('DOMContentLoaded',()=>{renderParts();setupReminder();});