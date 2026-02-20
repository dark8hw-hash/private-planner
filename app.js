
const STORAGE_KEY = "planner_v2";

const icons = ["📚","💻","🍽","🛒","🏠","🎮","❤️","📞","🏃","🧹"];

const layout = [
  {id:"t0"}, {id:"t1"}, {id:"t2"},
  {id:"t3"}, {id:"t4", big:true}, {id:"t5"},
  {id:"t6"}, {id:"t7"}, {id:"t8"},
  {id:"t9"}, {id:"t10"}, {id:"t11"}
];

let state = load();

const grid = document.getElementById("grid");
const progressText = document.getElementById("progressText");

render();

function render(){
  grid.innerHTML = "";
  layout.forEach(slot=>{
    const tile = document.createElement("div");
    tile.className = "tile" + (slot.big ? " big":"");
    tile.dataset.id = slot.id;

    const data = state[slot.id];

    if(data && data.icon){
      tile.textContent = data.icon;
      if(data.completed){
        tile.classList.add("completed");
        const check = document.createElement("div");
        check.className="check";
        check.textContent="✓";
        tile.appendChild(check);
      }
    }else{
      const plus = document.createElement("div");
      plus.className="plus";
      plus.textContent="+";
      tile.appendChild(plus);
    }

    let pressTimer;

    tile.addEventListener("mousedown", ()=>{
      pressTimer = setTimeout(()=>{
        if(confirm("Удалить задачу?")){
          delete state[slot.id];
          save();
          render();
        }
      },700);
    });

    tile.addEventListener("mouseup", ()=> clearTimeout(pressTimer));
    tile.addEventListener("mouseleave", ()=> clearTimeout(pressTimer));

    tile.addEventListener("click", ()=>{
      if(!state[slot.id]){
        const icon = icons[Math.floor(Math.random()*icons.length)];
        state[slot.id] = {icon:icon, completed:false};
      }else{
        state[slot.id].completed = !state[slot.id].completed;
      }
      save();
      render();
    });

    grid.appendChild(tile);
  });

  updateProgress();
}

function updateProgress(){
  const total = Object.keys(state).length;
  const done = Object.values(state).filter(v=>v.completed).length;
  const percent = total===0 ? 0 : Math.round((done/total)*100);
  progressText.textContent = percent + "%";
}

function save(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function load(){
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}
