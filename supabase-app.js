(function(){
  const load=()=>window.supabase.createClient(window.SUPABASE_URL,window.SUPABASE_PUBLISHABLE_KEY);
  let client;
  function panel(){
    if(document.getElementById('authPanel'))return;
    const el=document.createElement('section');el.id='authPanel';el.className='shell auth-panel';el.innerHTML=`<div><p class="eyebrow">PRIVATE STUDY SPACE</p><h2 id="authTitle">Sign in to save your progress</h2><p id="authStatus">Use email/password or Google. Your study data is private to your account.</p></div><form id="authForm"><input id="authEmail" type="email" placeholder="Email address" required><input id="authPassword" type="password" placeholder="Password" minlength="6" required><div class="tool-row"><button class="button button-accent" type="submit">Sign in</button><button class="mini-btn" type="button" id="signupBtn">Create account</button><button class="mini-btn" type="button" id="googleBtn">Continue with Google</button></div></form><button class="mini-btn" id="logoutBtn" hidden>Log out</button></section>`;
    document.querySelector('main').prepend(el);
    const status=el.querySelector('#authStatus');
    const refresh=async()=>{const {data}=await client.auth.getSession();const user=data.session?.user;el.querySelector('#authTitle').textContent=user?`Signed in: ${user.email}`:'Sign in to save your progress';el.querySelector('#authForm').hidden=!!user;el.querySelector('#logoutBtn').hidden=!user;if(user){status.textContent='Your account is active. Notes and progress can be synchronized to the cloud.';await syncLocal(user.id);}else status.textContent='Use email/password or Google. Your study data is private to your account.';};
    el.querySelector('#authForm').addEventListener('submit',async e=>{e.preventDefault();const email=el.querySelector('#authEmail').value,password=el.querySelector('#authPassword').value;const {error}=await client.auth.signInWithPassword({email,password});status.textContent=error?error.message:'Signed in.';await refresh();});
    el.querySelector('#signupBtn').addEventListener('click',async()=>{const email=el.querySelector('#authEmail').value,password=el.querySelector('#authPassword').value;const {error}=await client.auth.signUp({email,password});status.textContent=error?error.message:'Account created. Check your email if confirmation is enabled.';});
    el.querySelector('#googleBtn').addEventListener('click',async()=>{const {error}=await client.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.href}});if(error)status.textContent=error.message;});
    el.querySelector('#logoutBtn').addEventListener('click',async()=>{await client.auth.signOut();await refresh();});
    client.auth.onAuthStateChange(()=>refresh());refresh();
  }
  async function syncLocal(userId){const raw=JSON.parse(localStorage.getItem('master-key-personal-data')||'{}');for(const [key,value] of Object.entries(raw)){const [part,chapter]=key.split('-');const chapterId=`${part}-${chapter}`;if(value.note!==undefined)await client.from('personal_notes').upsert({user_id:userId,chapter_id:chapterId,note_content:value.note},{onConflict:'user_id,chapter_id'});if(value.done!==undefined)await client.from('exercise_completion').upsert({user_id:userId,chapter_id:chapterId,completed:!!value.done},{onConflict:'user_id,chapter_id'});}}
  function init(){if(!window.supabase||!window.SUPABASE_URL)return;client=load();panel();}
  window.addEventListener('DOMContentLoaded',init);
})();