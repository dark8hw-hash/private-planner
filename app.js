
const mainTasks = [["Учёба", "Study", "📘", "#3B82F6"], ["Питание", "Food", "🍽", "#F59E0B"], ["Работа", "Work", "🏢", "#10B981"], ["Компьютер", "Computer", "💻", "#6366F1"], ["Друзья", "Friends", "👥", "#EC4899"], ["Семья", "Family", "👨‍👩‍👧", "#F43F5E"], ["Покупки", "Shopping", "🛍", "#F97316"], ["Любовь", "Love", "❤️", "#EF4444"], ["Уборка", "Cleaning", "🧹", "#14B8A6"], ["Мероприятие", "Event", "📍", "#8B5CF6"], ["Здоровье", "Health", "➕", "#22C55E"], ["Спорт", "Sport", "🏋", "#06B6D4"], ["Чтение", "Reading", "📖", "#0EA5E9"], ["Языки", "Languages", "🌍", "#A855F7"], ["Заработок", "Income", "💰", "#16A34A"], ["Хобби", "Hobby", "🎨", "#F472B6"], ["Соцсети", "Social", "📱", "#0EA5E9"], ["Сон", "Sleep", "🛏", "#64748B"], ["Документы", "Docs", "📄", "#334155"], ["Организация", "Organize", "📋", "#475569"]];
const sideTasks = [["Домашнее задание", "Homework", "✏️", "#3B82F6"], ["Само обучение", "Self Study", "🧠", "#6366F1"], ["Проект", "Project", "📁", "#10B981"], ["Задачи", "Tasks", "📝", "#475569"], ["Прогулка", "Walk", "🚶", "#F59E0B"], ["Звонок", "Call", "📞", "#22C55E"], ["Игра", "Game", "🎮", "#A855F7"], ["Отдых", "Rest", "🧘", "#06B6D4"], ["Навестить", "Visit", "🏠", "#F97316"], ["Гардероб", "Wardrobe", "👕", "#EC4899"], ["Гигиена", "Hygiene", "🚿", "#14B8A6"], ["Лекарства", "Medicine", "💊", "#EF4444"], ["Урок", "Lesson", "📚", "#3B82F6"], ["Подарок", "Gift", "🎁", "#F43F5E"], ["Без гаджетов", "No Devices", "📵", "#64748B"], ["Разминка", "Warmup", "🤸", "#06B6D4"], ["Вода", "Water", "💧", "#0EA5E9"], ["Буфер", "Buffer", "⏳", "#8B5CF6"], ["Рефлексия", "Reflect", "🪞", "#334155"], ["Подготовка", "Prep", "🧳", "#16A34A"]];

const grid=document.getElementById("grid");
const counter=document.getElementById("counter");
const picker=document.getElementById("picker");
const taskList=document.getElementById("taskList");
const settings=document.getElementById("settings");

let state=JSON.parse(localStorage.getItem("planner_final"))||{};
let locked=false;
let currentIndex=null;
const total=36;

function save(){localStorage.setItem("planner_final",JSON.stringify(state));}

function updateStats(){
let done=Object.values(state).filter(v=>v.completed).length;
counter.textContent=done+"/"+total;
document.getElementById("avgBox").textContent=Math.round(done/total*100)+"%";
}

function buildGrid(){
grid.innerHTML="";
for(let i=0;i<36;i++){
let b=document.createElement("div");
b.className="block";
b.dataset.id=i;

if(state[i]){
b.style.background=state[i].color;
b.innerHTML=state[i].icon+"<small>"+state[i].label+"</small>";
if(state[i].completed)b.classList.add("completed");
} else {
b.style.background="#9ca3af";
b.innerHTML="+";
}

b.onclick=()=>{
if(state[i]){
state[i].completed=!state[i].completed;
save();updateStats();buildGrid();
} else {
if(locked)return;
currentIndex=i;
openPicker(i%3===1);
}
};

b.ondblclick=()=>{
if(locked)return;
delete state[i];
save();updateStats();buildGrid();
};

grid.appendChild(b);
}
}

function openPicker(center){
taskList.innerHTML="";
picker.classList.remove("hidden");
let tasks=center?mainTasks:sideTasks;
tasks.forEach(t=>{
let btn=document.createElement("button");
btn.className="taskBtn";
btn.style.background=t[3];
btn.innerHTML=t[2]+"<br><small>"+t[0]+"</small>";
btn.onclick=()=>{
state[currentIndex]={label:t[0],icon:t[2],color:t[3],completed:false};
save();updateStats();buildGrid();
picker.classList.add("hidden");
};
taskList.appendChild(btn);
});
}

document.getElementById("lockBtn").onclick=()=>{locked=!locked;document.getElementById("lockBtn").textContent=locked?"🔒":"🔓";};
document.getElementById("settingsBtn").onclick=()=>settings.classList.toggle("hidden");
document.getElementById("ruBtn").onclick=()=>document.getElementById("title").textContent="НА СЕГОДНЯ";
document.getElementById("enBtn").onclick=()=>document.getElementById("title").textContent="TODAY";
document.getElementById("lightBtn").onclick=()=>document.body.classList.remove("dark");
document.getElementById("darkBtn").onclick=()=>document.body.classList.add("dark");
picker.onclick=e=>{if(e.target===picker)picker.classList.add("hidden");};
settings.onclick=e=>{if(e.target===settings)settings.classList.add("hidden");};

buildGrid();updateStats();
