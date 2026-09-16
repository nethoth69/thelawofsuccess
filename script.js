const laws=[
['Govern Yourself','Own your response. Protect attention. Discipline outranks mood. Become difficult to destabilize.'],
['The Obstacle','Resistance can become training. Ask what is happening, what you control, and what action is available now.'],
['Strategy','Objective → Reality → Constraints → Resources → Strategy → Action → Feedback. Do not confuse motion with progress.'],
['Power','Power begins with self-command. Understand incentives, information, reputation, alliances, and consequences without exploiting people.'],
['Business','Create customer value sustainably. Know the problem, customer, differentiation, delivery system, and economics.'],
['Systems','If it repeats, document it. Measure it, automate it, delegate it, and improve it. Build a business that does not require your constant presence.'],
['Compounding','Compound knowledge, skills, relationships, reputation, capital, systems, health, discipline, and intellectual property.'],
['Mental Creation','Thought shapes interpretation; interpretation shapes emotion and decisions. Treat thoughts as inputs to test, not automatic truths.'],
['Polarity','Look for the useful opposite. Fear can reveal preparation gaps; criticism can contain information; failure can expose a broken assumption.'],
['Rhythm','Expect cycles. Build reserves in good periods and perspective in difficult ones. Avoid both arrogance and hopelessness.'],
['Cause & Effect','Results have causes. Search the system, not the scapegoat. Change causes when you want different effects.'],
['Information','Separate Fact → Interpretation → Hypothesis → Prediction. Verify assumptions and update beliefs when reality disagrees.'],
['Positioning','You do not need to defeat everyone. Occupy a position where your strengths matter: specific customer + specific value + credible differentiation.'],
['Reputation','Reputation is accumulated behavior. Promise less, keep more, deliver consistently, and correct mistakes quickly.'],
['Execution','Decision → Action → Measurement → Adjustment. Knowledge becomes useful when it enters a feedback loop.'],
['Capital','Money is a tool. Protect downside, maintain liquidity, understand unit economics and cash flow, and reinvest deliberately.'],
['People','Choose collaborators for character, competence, reliability, and alignment. Set clear expectations and address conflict directly.'],
['Learning','Remain a student. Improve thinking, building, selling, leading, negotiating, and executing every week.'],
['The Long Game','Do not trade durable freedom for temporary validation. Prefer ownership, mastery, reputation, and assets that compound.'],
['Daily Operating System','Morning: choose the key outcome. Evening: review results, failures, lessons, and tomorrow’s change.'],
['Decision Filter','Before acting, examine Reality, Control, Incentives, Risk, Opportunity, Reversibility, Compounding, Character, and Action.'],
["Five Questions",'What problem? Who has it? Why does it matter? What system solves it repeatedly? What asset remains valuable tomorrow?']
];

const bookData={
 power:{title:'The 48 Laws of Power',author:'Robert Greene',intro:'A study of power dynamics, reputation, social perception, incentives, and strategic behavior. The useful takeaway here is awareness: understand the social game without becoming dependent on manipulation.',lessons:[
 ['Protect your reputation','Your reputation changes how people interpret everything else you do. Build credibility through consistent behavior, keep promises, and repair mistakes quickly.'],
 ['Understand incentives','People respond to incentives, fears, ambitions, loyalties, and perceived costs. Before judging behavior, ask what reward or risk may be shaping it.'],
 ['Control your reactions','Emotional reactivity gives circumstances and other people unnecessary control over your decisions. Pause, observe, then choose your response.'],
 ['Do not reveal every intention','Strategic discretion can protect unfinished plans from interference. Share what others need to execute their role; avoid unnecessary disclosure.'],
 ['Read the room','Pay attention to status, relationships, alliances, expectations, and unspoken tensions. Social intelligence is information gathering.'],
 ['Make your value visible','Competence matters, but people also need to understand what you contribute. Communicate outcomes clearly without constant self-promotion.'],
 ['Avoid unnecessary battles','Not every insult, disagreement, or competitor deserves a response. Protect energy for conflicts that materially affect your objective.'],
 ['Use alliances carefully','Relationships can multiply capability, access, knowledge, and trust. Choose partners based on alignment and reliability rather than excitement alone.'],
 ['Stay adaptable','A strategy that worked in one environment may fail in another. Observe changing incentives and update your behavior instead of defending an obsolete plan.'],
 ['Power begins with self-command','The deepest practical lesson is internal: attention, emotion, reputation, information, and decisions are territories you must govern first.']
],apply:['Before an important interaction, identify the people involved, their likely incentives, your objective, the information you need, and the reputation you want to leave behind.']},
 war:{title:'The 33 Strategies of War',author:'Robert Greene',intro:'A framework for strategic thinking under competition and conflict. Its business value is not treating life as war, but learning to define objectives, position intelligently, conserve resources, and act deliberately.',lessons:[
 ['Define the objective','A vague goal creates scattered action. State the outcome, the deadline, and what success must look like.'],
 ['Know your situation','Separate facts from assumptions. Understand your resources, constraints, competitors, dependencies, and vulnerabilities before committing.'],
 ['Choose the battlefield','Positioning can matter more than raw effort. Compete where your strengths are relevant and where the customer values them.'],
 ['Do not fight on every front','Too many simultaneous priorities dilute attention and resources. Concentrate force on the few moves that matter most.'],
 ['Create a sequence','Strategy is not a single decision. Think in moves: what happens after this action, and what will you do if the response differs from expectations?'],
 ['Keep initiative','Do not wait passively for circumstances to dictate your agenda. Create useful experiments, conversations, launches, and tests that generate information.'],
 ['Use indirect approaches','The obvious route is not always the efficient route. Look for simpler paths, underserved niches, partnerships, distribution advantages, or asymmetric opportunities.'],
 ['Maintain morale and discipline','Long campaigns fail when people lose clarity or energy. Keep the mission visible and make execution sustainable.'],
 ['Turn setbacks into information','A failed move reveals something about the market, timing, offer, resources, or assumptions. Capture the lesson before making the next move.'],
 ['End conflicts intelligently','The goal is not endless struggle. Once the objective is secured or the economics no longer make sense, change strategy or disengage.']
],apply:['For any major business move, write: objective → current reality → constraints → resources → options → chosen strategy → next action → feedback signal.']},
 obstacle:{title:'The Obstacle Is the Way',author:'Ryan Holiday',intro:'A modern Stoic framework built around three disciplines: perception, action, and will. The central idea is to work with reality instead of wasting energy wishing it were different.',lessons:[
 ['Separate event from interpretation','An event is what happened; your interpretation is the story you attach to it. Create space between the two.'],
 ['Focus on what you control','You can usually control your judgment, preparation, effort, communication, and next action more than you can control outcomes.'],
 ['Turn problems into material','Ask what the difficulty can teach, strengthen, expose, or force you to improve. The obstacle can become part of the training.'],
 ['Act instead of ruminating','Analysis is useful until it becomes avoidance. Once the facts are sufficient, take the smallest meaningful action.'],
 ['Stay objective under pressure','Strong emotion can narrow attention. Slow down, identify the facts, and decide from the situation rather than from panic or ego.'],
 ['Use persistence intelligently','Persistence does not mean repeating the same failed action forever. Persist toward the objective while changing methods when evidence demands it.'],
 ['Accept reality without surrender','Acceptance means seeing conditions clearly. It does not mean approving them or abandoning ambition.'],
 ['Build resilience before you need it','Discipline, routines, preparation, and perspective are easier to rely on during crisis when they were practiced during calm periods.'],
 ['Convert adversity into character','Difficult experiences can strengthen patience, courage, judgment, and self-command when deliberately processed.'],
 ['Return to the next move','When circumstances become overwhelming, reduce the problem to the next controllable action and execute it.']
],apply:['When something goes wrong, write three lines: What happened? What is in my control? What is the next useful action?']},
 kybalion:{title:'The Kybalion',author:'Three Initiates',intro:'A Hermetic philosophical text organized around seven principles. Here they are treated as reflective tools for perception and self-management, not as scientifically established laws.',lessons:[
 ['Mentalism — examine the mind','Your interpretation influences your experience and choices. Notice the mental model you are using before treating it as reality.'],
 ['Correspondence — look for patterns','Patterns at one level can sometimes illuminate another. In practice, compare your habits, systems, relationships, and results for recurring structures.'],
 ['Vibration — recognize changing states','Mood, attention, energy, and behavior fluctuate. Build practices that help you shift state deliberately rather than being completely governed by it.'],
 ['Polarity — use opposites','Many situations contain a spectrum rather than two absolute states. Instead of asking only “good or bad?”, ask where you are on the spectrum and what movement is possible.'],
 ['Rhythm — expect cycles','Expansion and contraction are normal. Use strong periods to build reserves and difficult periods to preserve fundamentals and prepare for recovery.'],
 ['Cause and effect — trace the chain','Outcomes emerge from conditions and actions. Look backward through the chain of causes instead of relying only on blame or luck.'],
 ['Gender — balance complementary forces','The text uses masculine and feminine terminology for generative principles. A practical interpretation is to balance initiating energy with receptive, developing, and integrating work.'],
 ['Master perception before prediction','Philosophical models can be useful without being literal descriptions of nature. Use them to generate questions, then test practical beliefs against evidence.'],
 ['Turn philosophy into behavior','A principle matters only when it changes how you think, decide, communicate, or act. Translate every idea into a repeatable practice.'],
 ['Use the framework as a lens, not a prison','The value of a worldview is partly its ability to reveal possibilities. Keep what improves judgment and revise what conflicts with reality.']
],apply:['Choose one principle each week and ask: What does this lens help me notice? What behavior should change? What evidence would prove my interpretation wrong?']},
 emyth:{title:'The E-Myth Revisited',author:'Michael E. Gerber',intro:'A business-systems framework explaining why technical skill alone does not automatically produce a successful business. The practical focus is to work on the business as well as in it.',lessons:[
 ['The technician is not the whole entrepreneur','Being excellent at the craft does not automatically mean being good at marketing, management, finance, hiring, or strategy. Build those capabilities deliberately.'],
 ['Work on the business','Reserve time to design the business rather than spending every hour delivering its current service.'],
 ['Build systems','If a process repeats, document the desired result and the steps that produce it. A system turns personal know-how into organizational capability.'],
 ['Create a clear business model','Define the customer, promise, delivery process, standards, economics, and responsibilities. Clarity makes improvement possible.'],
 ['Standardize before scaling','Growth multiplies both good and bad processes. Make the core experience reliable before adding volume.'],
 ['Measure the important numbers','Track the indicators that reveal demand, conversion, delivery quality, costs, cash flow, retention, and capacity.'],
 ['Design roles, not heroes','A durable company should not depend on one person remembering everything. Define responsibilities and create training that makes performance repeatable.'],
 ['Improve through iteration','Treat the business as a prototype. Test a process, measure results, document what works, and update the system.'],
 ['Build an owner’s mindset','The goal is not simply to buy yourself a job. Build an asset whose value comes from its customers, systems, brand, processes, and economics.'],
 ['Make the business serve the life','Business design should support the life you intend to live. Growth that destroys health, freedom, or values may be strategically misaligned.']
],apply:['Pick one recurring task this week. Document the desired outcome, write the process, assign ownership, define the metric, and identify what can eventually be automated.']}
};

const grid=document.getElementById('lawGrid');
laws.forEach((law,i)=>{const el=document.createElement('article');el.className='law';el.innerHTML=`<div class="law-number">LAW ${String(i+1).padStart(2,'0')}</div><h3>${law[0]}</h3><p>${law[1]}</p>`;grid.appendChild(el)});

document.querySelectorAll('.book-card').forEach(card=>{
  const open=()=>openBook(card.dataset.book);
  card.addEventListener('click',open);
  card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
});

const modal=document.getElementById('bookModal');
const modalContent=document.getElementById('modalContent');
const closeBook=document.getElementById('closeBook');
function openBook(key){
  const book=bookData[key];
  if(!book)return;
  modalContent.innerHTML=`<p class="eyebrow">BOOK ${key==='power'?'01':key==='war'?'02':key==='obstacle'?'03':key==='kybalion'?'04':'05'}</p><h2 id="modalTitle">${book.title}</h2><p class="book-author">${book.author}</p><p class="book-intro">${book.intro}</p><div class="lesson-list">${book.lessons.map((x,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div><div class="apply-box"><p class="eyebrow">PUT IT INTO PRACTICE</p><p>${book.apply}</p></div><p class="book-note">This lesson room is a practical, original synthesis. It is designed to help you remember and apply the book’s ideas, not replace reading the original work.</p>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  closeBook.focus();
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
closeBook.addEventListener('click',closeModal);
modal.querySelector('[data-close-book]').addEventListener('click',closeModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});

document.getElementById('year').textContent=new Date().getFullYear();
