const grid=document.getElementById('grid');
const counter=document.getElementById('counter');
const lockBtn=document.getElementById('lockBtn');
const settingsBtn=document.getElementById('settings');
const settings=document.getElementById('settings');
const ruBtn=document.getElementById('ruBtn');
const enBtn=document.getElementById('enBtn');
const lightBtn=document.getElementById('lightBtn');
const darkBtn=document.getElementById('darkBtn');

let locked=false;
let state=JSON.parse(localStorage.getItem('planner_v2'))||{};
const total=36;

function save(){localStorage.setItem('planner_v2',JSON.stringify(state));}

function update(){
let done=Object.values(state).filter(v=>v).length;
counter.textContent=done+'/'+total;
document.getElementById('avgBox').textContent='AVG: '+Math.round(done/total*100)+'%';
}

function build(){
grid.innerHTML='';
for(let i=0;i<36;i++){
let b=document.createElement('div');
b.className='block';
b.dataset.id=i;
b.textContent='⬤';
if(state[i])b.classList.add('completed');

b.onclick=()=>{
state[i]=!state[i];
b.classList.toggle('completed');
save();update();
};

b.ondblclick=()=>{
if(locked)return;
delete state[i];
b.classList.remove('completed');
save();update();
};

grid.appendChild(b);
}
}

lockBtn.onclick=()=>{
locked=!locked;
lockBtn.textContent=locked?'🔒':'🔓';
};

document.getElementById('settingsBtn').onclick=()=>{
settings.classList.toggle('hidden');
};

ruBtn.onclick=()=>document.getElementById('title').textContent='НА СЕГОДНЯ';
enBtn.onclick=()=>document.getElementById('title').textContent='TODAY';
lightBtn.onclick=()=>document.body.classList.remove('dark');
darkBtn.onclick=()=>document.body.classList.add('dark');

build();update();
