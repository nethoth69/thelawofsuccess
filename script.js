const bookData={};
const grid=document.getElementById('partGrid');
const modal=document.getElementById('bookModal');
const modalContent=document.getElementById('modalContent');
const closeBook=document.getElementById('closeBook');

function renderParts(){
  const book=bookData.masterkey;
  if(!book||!grid)return;
  grid.innerHTML=book.parts.map((part,i)=>`
    <article class="part-card" data-part="${i}" tabindex="0" role="button">
      <div class="part-no">${String(i+1).padStart(2,'0')} · ${part.name.toUpperCase()}</div>
      <h3>${part.subtitle}</h3>
      <p>${part.range}</p>
      <small>${part.chapters.length} listed entries · OPEN SECTION →</small>
    </article>`).join('');
  grid.querySelectorAll('.part-card').forEach(card=>{
    const open=()=>openPart(Number(card.dataset.part));
    card.addEventListener('click',open);
    card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
  });
}
function openPart(index){
  const book=bookData.masterkey;
  const part=book.parts[index];
  if(!part)return;
  modalContent.innerHTML=`
    <p class="eyebrow">${part.name.toUpperCase()} · ${part.range}</p>
    <h2 id="modalTitle">${part.subtitle}</h2>
    <p class="book-author">${book.title} · ${book.author}</p>
    <p class="book-intro">This section follows the sequence shown in the book's contents. Use each entry as a reading checkpoint.</p>
    <div class="lesson-list">${part.chapters.map((chapter,i)=>`
      <article><span>${String(i+1).padStart(2,'0')}</span><div><h3>${chapter}</h3><p>Read this entry in the original text, then write a short summary and one practical observation.</p></div></article>`).join('')}</div>
    <div class="apply-box"><p class="eyebrow">STUDY PROMPT</p><p>${book.apply}</p></div>
    <p class="book-note">This page is a navigation and reflection aid. It does not replace the original book.</p>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  closeBook.focus();
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
closeBook.addEventListener('click',closeModal);
modal.querySelector('[data-close-book]').addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal();});
document.getElementById('year').textContent=new Date().getFullYear();
window.addEventListener('DOMContentLoaded',renderParts);
