const form=document.getElementById('contactForm');
form.addEventListener('submit',event=>{
  event.preventDefault();
  const data=new FormData(form);
  const name=String(data.get('name')||'').trim();
  const email=String(data.get('email')||'').trim();
  const message=String(data.get('message')||'').trim();
  const subject=encodeURIComponent(`Portfolio message from ${name}`);
  const body=encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  document.getElementById('formNote').textContent='Opening your email app with the message ready to send.';
  window.location.href=`mailto:krsachin9876@gmail.com?subject=${subject}&body=${body}`;
});

const commands={
  stack:{command:'stack',output:'React · Node.js · MongoDB · GenAI'},
  focus:{command:'focus',output:'Useful products, dependable APIs.'},
  hello:{command:'hello',output:'Thanks for stopping by. Say hello below!'}
};
document.querySelectorAll('[data-command]').forEach(button=>button.addEventListener('click',()=>{
  const item=commands[button.dataset.command];
  document.getElementById('terminalCommand').textContent=item.command;
  document.getElementById('terminalOutput').textContent=item.output;
}));
const themeToggle=document.getElementById('themeToggle');
if(themeToggle){
  const savedTheme=localStorage.getItem('sachin-portfolio-theme');
  if(savedTheme==='dark') document.body.dataset.theme='dark';
  themeToggle.addEventListener('click',()=>{
    const next=document.body.dataset.theme==='dark'?'light':'dark';
    if(next==='light') delete document.body.dataset.theme;
    else document.body.dataset.theme=next;
    localStorage.setItem('sachin-portfolio-theme',next);
  });
}
const projectToggle=document.getElementById('projectToggle');
if(projectToggle) projectToggle.addEventListener('click',()=>{
  const details=document.getElementById('projectDetails');
  const expanded=projectToggle.getAttribute('aria-expanded')==='true';
  projectToggle.setAttribute('aria-expanded',String(!expanded));
  details.hidden=expanded;
  projectToggle.innerHTML=expanded?'How it works <span>＋</span>':'Hide details <span>−</span>';
});
