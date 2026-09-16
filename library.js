const libraryEnhancements={
  power:{track:'Power & Character',stage:'01',principles:['Reputation','Incentives','Self-command'],exercises:['Before a difficult conversation, write the other person’s likely incentives.','After an interaction, record what you learned about the room and your own reactions.'],maps:['Power','Reputation','People','Information','Decision Filter']},
  war:{track:'Power & Character',stage:'02',principles:['Objectives','Positioning','Initiative'],exercises:['Write one objective with a deadline and measurable success condition.','List three fronts you could ignore so you can concentrate resources.'],maps:['Strategy','Positioning','Execution','Capital','Decision Filter']},
  obstacle:{track:'Power & Character',stage:'03',principles:['Perception','Action','Will'],exercises:['For one setback, separate facts from your interpretation.','Choose one controllable action and complete it before revisiting the larger problem.'],maps:['The Obstacle','Govern Yourself','Execution','Learning']},
  kybalion:{track:'Power & Character',stage:'04',principles:['Mental models','Polarity','Rhythm','Cause and effect'],exercises:['Choose one principle for a week and record what it helps you notice.','Write one belief and the evidence that could prove your interpretation wrong.'],maps:['Mental Creation','Polarity','Rhythm','Cause & Effect','Information']},
  emyth:{track:'Business & Systems',stage:'05',principles:['Systems','Standardization','Measurement','Ownership'],exercises:['Document one recurring task from trigger to finished result.','Choose one metric that tells you whether that process is actually working.'],maps:['Business','Systems','Capital','Execution','Long Game']},
  gentleman:{title:'The Modern Gentleman',author:'Phineas Mollod & Jason Tesauro',track:'Character & Conduct',stage:'06',intro:'A practical guide to modern manners, social confidence, hospitality, personal presentation, and considerate conduct. The goal here is not status performance but disciplined presence and respect for other people.',lessons:[
    ['Courtesy is strength','Good manners reduce friction and communicate respect. Treat staff, strangers, peers, and powerful people with consistent courtesy.'],
    ['Presentation is communication','Clothing, grooming, posture, and cleanliness communicate before words do. Aim for appropriate, deliberate presentation rather than display.'],
    ['Be a gracious host','Learn to make people comfortable: prepare, introduce people, notice needs, and remove avoidable friction.'],
    ['Master conversation','Ask thoughtful questions, listen without waiting to speak, and avoid turning every conversation into a performance.'],
    ['Know formal etiquette','Learn dining, introductions, invitations, correspondence, and event etiquette so you can focus on people rather than uncertainty.'],
    ['Keep your word','Reliability is a gentlemanly foundation. Arrive when promised, respond when appropriate, and communicate early when plans change.'],
    ['Practice discretion','Do not embarrass people publicly or turn private information into social currency. Confidentiality builds trust.'],
    ['Handle disagreement with composure','Firmness and courtesy can coexist. State your position clearly without humiliating the other person.'],
    ['Cultivate taste, not vanity','Learn about art, literature, architecture, food, music, and craft as ways of developing judgment and curiosity—not as props for superiority.'],
    ['Let character carry the image','Elegance without integrity is costume. The deeper standard is self-command, generosity, competence, and respect.']
  ],apply:'Choose one area—dress, conversation, dining, hosting, correspondence, or punctuality—and turn it into a weekly practice.' ,principles:['Courtesy','Composure','Taste','Discretion'],exercises:['Audit your wardrobe, grooming, punctuality, and communication for avoidable friction.','Host one meal or gathering with deliberate attention to introductions, comfort, and conversation.'],maps:['Govern Yourself','People','Reputation','Long Game']},
  bitcoin:{title:'Mastering Bitcoin',author:'Andreas M. Antonopoulos & David A. Harding',track:'Technology & Engineering',stage:'07',intro:'A technical introduction to Bitcoin’s architecture, transactions, wallets, cryptography, consensus, security, and network. The focus here is understanding the system rather than treating Bitcoin as a price prediction.',lessons:[
    ['Understand the problem','Start with the problem Bitcoin attempts to solve: transferring value on an open network without relying on a central clearing authority.'],
    ['Learn the transaction model','Understand inputs, outputs, transaction validation, fees, and how transactions become part of a shared ledger.'],
    ['Understand keys and signatures','Private keys authorize spending; signatures provide cryptographic proof. Treat key management as a security discipline.'],
    ['Understand wallets','A wallet manages keys and helps construct transactions. Learn the difference between holding keys and trusting a service to hold them.'],
    ['Understand the network','Bitcoin operates through a peer-to-peer network that propagates transactions and blocks between participants.'],
    ['Understand mining and proof of work','Mining orders transactions into blocks and uses proof of work as part of the consensus mechanism.'],
    ['Study security','Backups, recovery phrases, software integrity, phishing resistance, and operational discipline matter as much as theoretical understanding.'],
    ['Learn Bitcoin scripting','Bitcoin transactions use a constrained scripting system to express spending conditions. Understanding scripts clarifies what the protocol can and cannot do.'],
    ['Explore scaling layers','Study approaches such as SegWit, Taproot, and the Lightning Network as examples of how functionality and throughput can evolve around the base protocol.'],
    ['Separate protocol from speculation','Learn the technology, economics, risks, and competing arguments separately. Knowledge of the protocol does not guarantee an investment outcome.']
  ],apply:'Draw the lifecycle of a Bitcoin payment from wallet creation through signing, propagation, validation, mining, confirmation, and later spending.' ,principles:['Cryptography','Distributed networks','Consensus','Security'],exercises:['Trace one transaction conceptually from private key to confirmed block.','Create a personal security checklist covering backups, recovery, device security, and phishing resistance.'],maps:['Information','Capital','Systems','Learning','Decision Filter']},
  quantum:{title:'Quantum Computation and Quantum Information',author:'Michael A. Nielsen & Isaac L. Chuang',track:'Technology & Engineering',stage:'08',intro:'A rigorous foundation for quantum computing and quantum information. It connects quantum mechanics, linear algebra, algorithms, information theory, and error correction.',lessons:[
    ['Think in states','A qubit is represented by a state vector whose amplitudes encode probabilities of measurement outcomes. Linear algebra is the language of the model.'],
    ['Understand superposition','Superposition is not simply “being in two states at once”; it is a precise mathematical structure that enables interference.'],
    ['Learn measurement','Measurement maps quantum states to classical outcomes according to defined probabilities and changes the state being measured.'],
    ['Master quantum gates','Quantum gates are reversible transformations represented by unitary operations. Learn circuits as compositions of these transformations.'],
    ['Use interference','Quantum algorithms gain power by arranging amplitudes so useful outcomes reinforce while others cancel.'],
    ['Understand entanglement','Entangled systems exhibit correlations that cannot be represented as independent states of their parts.'],
    ['Study algorithms','Shor’s and Grover’s algorithms show different forms of quantum advantage and the importance of problem structure.'],
    ['Learn quantum information','Think about information, communication, and security using quantum states and channels rather than only classical bits.'],
    ['Understand error correction','Quantum states are fragile. Error-correcting codes and fault-tolerant architectures are essential for large-scale computation.'],
    ['Connect theory to hardware','Algorithms live on physical machines with noise, limited connectivity, control errors, and engineering constraints. Keep the abstract model connected to implementation.']
  ],apply:'Build a one-page map linking qubits → gates → circuits → measurement → algorithms → error correction → hardware constraints.' ,principles:['Linear algebra','Superposition','Interference','Information','Fault tolerance'],exercises:['Draw a one-qubit Bloch-sphere concept map and label measurement outcomes.','Explain one quantum algorithm in plain language and then in circuit-level terms.'],maps:['Learning','Information','Cause & Effect','Systems','Long Game']},
  engineering:{title:'Engineering Fundamentals: An Introduction to Engineering',author:'Saeed Moaveni',track:'Technology & Engineering',stage:'09',intro:'A broad engineering foundation connecting mathematics, physical principles, design, problem solving, communication, ethics, and professional practice. The latest edition also introduces Python and sustainability topics.',lessons:[
    ['Think like an engineer','Define the need, constraints, requirements, resources, risks, and acceptable performance before designing.'],
    ['Use mathematics as a tool','Equations are models of relationships. Learn to estimate, check units, and interpret results rather than treating formulas as isolated recipes.'],
    ['Understand physical principles','Mechanics, energy, electricity, materials, fluids, and other fundamentals become useful when connected to real systems.'],
    ['Design under constraints','Engineering is optimization under limits: cost, safety, time, materials, manufacturability, maintenance, and environmental impact.'],
    ['Prototype and test','A design becomes knowledge through testing. Measure performance against requirements and use failures to refine the model.'],
    ['Communicate precisely','Drawings, specifications, calculations, reports, and presentations transfer technical intent between people and disciplines.'],
    ['Manage risk','Identify failure modes, consequences, uncertainty, and safeguards before they become expensive or dangerous.'],
    ['Think in systems','Components interact. A local improvement can create a system-level problem, so examine interfaces and feedback loops.'],
    ['Use computation deliberately','Tools such as Python can automate calculations, explore scenarios, process data, and make engineering reasoning more reproducible.'],
    ['Practice professional responsibility','Safety, ethics, sustainability, reliability, and public impact are engineering requirements—not afterthoughts.']
  ],apply:'Take one real object or project and write its requirements, constraints, major components, failure risks, test plan, and success metrics.' ,principles:['Requirements','Design','Testing','Systems','Risk'],exercises:['Reverse-engineer a simple object and sketch its major components and constraints.','Create a small design problem with three requirements, three constraints, and a measurable test.'],maps:['Strategy','Business','Systems','Information','Execution']},
  architecture:{title:'Architectural Graphics',author:'Francis D. K. Ching',track:'Design & Built Environment',stage:'10',intro:'A visual foundation for architectural drawing: drafting conventions, multiview and paraline systems, perspective, sections, rendering, presentation, and sketching. The current seventh edition also addresses digital drawing and CAD workflows.',lessons:[
    ['Draw with purpose','Architectural drawing is communication. Every line should help describe form, space, material, construction, or intent.'],
    ['Master line quality','Line weight, hierarchy, consistency, and clarity help the viewer distinguish cut elements, surfaces, edges, and secondary information.'],
    ['Learn orthographic systems','Plans, elevations, and sections describe three-dimensional buildings through coordinated two-dimensional views.'],
    ['Understand scale','Scale connects drawing measurements to real dimensions. Choose and maintain scale deliberately.'],
    ['Use perspective','Perspective communicates how spaces appear from a viewpoint. Learn eye level, vanishing points, depth, and proportion.'],
    ['Study paraline drawings','Axonometric and oblique systems reveal three-dimensional relationships while preserving measurable structure.'],
    ['Draw sections','Sections explain vertical relationships, structure, circulation, openings, and material assemblies that plans alone cannot show.'],
    ['Render light and material','Tone, shadow, texture, and contrast can clarify depth and material while supporting—not obscuring—the design.'],
    ['Sketch to think','Fast sketches are not only presentation tools. They help generate, test, compare, and communicate ideas during design.'],
    ['Connect hand and digital drawing','The medium can change, but visual reasoning remains central. Use CAD and digital tools to extend precision and communication rather than replace thinking.']
  ],apply:'Choose one simple room or building and produce a sequence: freehand sketch → plan → elevation → section → perspective.' ,principles:['Visual communication','Projection','Perspective','Scale','Presentation'],exercises:['Draw the same room in plan, elevation, section, and one-point perspective.','Redraw a reference building using only three line weights and a consistent scale.'],maps:['Business','Systems','Learning','Execution','Long Game']}
};

Object.entries(libraryEnhancements).forEach(([key,extra])=>{
  if(!bookData[key]) bookData[key]=extra;
  else Object.assign(bookData[key],extra);
});

const originalOpenBook=openBook;
openBook=function(key){
  const book=bookData[key];
  if(!book){return originalOpenBook(key);}
  const number=book.stage||'00';
  const principles=(book.principles||[]).map(x=>`<span>${x}</span>`).join('');
  const exercises=(book.exercises||[]).map(x=>`<li>${x}</li>`).join('');
  const maps=(book.maps||[]).map(x=>`<span>${x}</span>`).join('');
  modalContent.innerHTML=`<p class="eyebrow">MODULE ${number} · ${book.track||'LIBRARY'}</p><h2 id="modalTitle">${book.title}</h2><p class="book-author">${book.author}</p><p class="book-intro">${book.intro}</p><section class="module-section"><p class="eyebrow">CORE PRINCIPLES</p><div class="tag-row">${principles}</div></section><section><p class="eyebrow">10 LESSONS</p><div class="lesson-list">${book.lessons.map((x,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div></section><div class="apply-box"><p class="eyebrow">PUT IT INTO PRACTICE</p><p>${book.apply}</p></div><section class="module-section exercise-section"><p class="eyebrow">EXERCISES</p><ol>${exercises}</ol></section><section class="module-section"><p class="eyebrow">CONNECTS TO THE 22 LAWS</p><div class="tag-row law-tags">${maps}</div></section><p class="book-note">This module is an original practical synthesis. It helps you study and apply ideas; it does not reproduce the source books.</p>`;
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');closeBook.focus();
};
