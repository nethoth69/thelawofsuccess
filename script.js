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
const grid=document.getElementById('lawGrid');
laws.forEach((law,i)=>{const el=document.createElement('article');el.className='law';el.innerHTML=`<div class="law-number">LAW ${String(i+1).padStart(2,'0')}</div><h3>${law[0]}</h3><p>${law[1]}</p>`;grid.appendChild(el)});
document.getElementById('year').textContent=new Date().getFullYear();
