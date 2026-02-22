
const mainTasks = ["Учёба", "Питание", "Работа", "Компьютер", "Друзья", "Семья", "Покупки", "Любовь", "Уборка", "Мероприятие", "Здоровье", "Спорт", "Чтение", "Языки", "Заработок", "Хобби", "Социальные сети", "Сон", "Документы", "Организация"];
const sideTasks = ["Домашнее задание", "Само обучение", "Проект", "Задачи", "Прогулка", "Звонок", "Игра", "Отдых", "Навестить", "Гардероб", "Гигиена", "Лекарства", "Урок", "Подарок", "Без гаджетов", "Разминка", "Вода", "Буферная зона", "Рефлексия", "Подготовка"];

const grid = document.getElementById("grid");
const counter = document.getElementById("counter");
const lockBtn = document.getElementById("lockBtn");
const settingsBtn = document.getElementById("settingsBtn");
const picker = document.getElementById("picker");
const settings = document.getElementById("settings");
const taskList = document.getElementById("taskList");

let locked = false;
let state = JSON.parse(localStorage.getItem("planner_v_final")) || {};
const total = 36;
let currentBlock = null;

function save(){
localStorage.setItem("planner_v_final", JSON.stringify(state));
}

function updateCounter(){
let done = Object.values(state).filter(v => v.completed).length;
counter.textContent = done + "/" + total;
document.getElementById("avgBox").textContent = Math.round((done/total)*100) + "%";
}

function buildGrid(){
grid.innerHTML="";
for(let i=0;i<36;i++){
let block=document.createElement("div");
block.className="block";
block.dataset.id=i;

if(state[i]){
block.textContent = state[i].task.charAt(0);
if(state[i].completed) block.classList.add("completed");
} else {
block.textContent="+";
}

block.onclick=()=>{
if(state[i]){
state[i].completed = !state[i].completed;
save();updateCounter();buildGrid();
} else {
if(locked) return;
currentBlock=i;
openPicker(i%3==1);
}
};

block.ondblclick=()=>{
if(locked) return;
delete state[i];
save();updateCounter();buildGrid();
};

grid.appendChild(block);
}
}

function openPicker(isCenter){
picker.classList.remove("hidden");
taskList.innerHTML="";
let tasks = isCenter ? mainTasks : sideTasks;
tasks.forEach(t=>{
let btn=document.createElement("button");
btn.className="taskBtn";
btn.textContent=t;
btn.onclick=()=>{
state[currentBlock]={task:t,completed:false};
save();updateCounter();buildGrid();
picker.classList.add("hidden");
};
taskList.appendChild(btn);
});
}

lockBtn.onclick=()=>{
locked=!locked;
lockBtn.textContent=locked?"🔒":"🔓";
};

settingsBtn.onclick=()=>settings.classList.toggle("hidden");
document.getElementById("ruBtn").onclick=()=>document.getElementById("title").textContent="НА СЕГОДНЯ";
document.getElementById("enBtn").onclick=()=>document.getElementById("title").textContent="TODAY";
document.getElementById("lightBtn").onclick=()=>document.body.classList.remove("dark");
document.getElementById("darkBtn").onclick=()=>document.body.classList.add("dark");

buildGrid();updateCounter();
