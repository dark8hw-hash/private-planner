
const STORAGE_KEY = "planner_beta_v3";
const MAIN_ICONS = {"study": {"name": "Учёба", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"16\" y=\"10\" width=\"30\" height=\"44\" rx=\"8\" fill=\"#e5e7eb\"/>\n    <rect x=\"20\" y=\"14\" width=\"22\" height=\"36\" rx=\"6\" fill=\"#ffffff\"/>\n    <path d=\"M26 22h12M26 30h12M26 38h12\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path d=\"M40 18l10 10-14 14-8 2 2-8 10-10z\" fill=\"#22c55e\"/>\n    </svg>"}, "food": {"name": "Еда", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <circle cx=\"28\" cy=\"32\" r=\"18\" fill=\"#e5e7eb\"/>\n    <circle cx=\"28\" cy=\"32\" r=\"12\" fill=\"#ffffff\"/>\n    <rect x=\"44\" y=\"18\" width=\"4\" height=\"28\" rx=\"2\" fill=\"#9ca3af\"/>\n    <rect x=\"50\" y=\"18\" width=\"4\" height=\"28\" rx=\"2\" fill=\"#9ca3af\"/>\n    <path d=\"M50 18v10\" stroke=\"#f97316\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    <path d=\"M46 18v10\" stroke=\"#60a5fa\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </svg>"}, "computer": {"name": "Компьютер", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"18\" y=\"18\" width=\"30\" height=\"22\" rx=\"5\" fill=\"#38bdf8\"/>\n    <rect x=\"22\" y=\"22\" width=\"22\" height=\"14\" rx=\"3\" fill=\"#e6f7ff\"/>\n    <rect x=\"28\" y=\"41\" width=\"10\" height=\"4\" rx=\"2\" fill=\"#94a3b8\"/>\n    <rect x=\"10\" y=\"20\" width=\"6\" height=\"26\" rx=\"3\" fill=\"#22c55e\"/>\n    <circle cx=\"13\" cy=\"41\" r=\"1.5\" fill=\"#0f172a\" opacity=\".35\"/>\n    </svg>"}, "friends": {"name": "Друзья", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"14\" y=\"18\" width=\"30\" height=\"26\" rx=\"10\" fill=\"#6366f1\"/>\n    <circle cx=\"48\" cy=\"26\" r=\"8\" fill=\"#a5b4fc\"/>\n    <circle cx=\"26\" cy=\"30\" r=\"8\" fill=\"#e0e7ff\"/>\n    <path d=\"M22 30h8\" stroke=\"#6366f1\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <path d=\"M26 26v8\" stroke=\"#6366f1\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    </svg>"}, "family": {"name": "Семья", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <circle cx=\"24\" cy=\"26\" r=\"7\" fill=\"#fb7185\"/>\n    <circle cx=\"40\" cy=\"26\" r=\"7\" fill=\"#60a5fa\"/>\n    <circle cx=\"32\" cy=\"34\" r=\"6\" fill=\"#fbbf24\"/>\n    <path d=\"M18 48c1-7 6-12 14-12s13 5 14 12\" fill=\"#e5e7eb\" opacity=\".9\"/>\n    </svg>"}, "shop": {"name": "Магазин", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"18\" y=\"22\" width=\"28\" height=\"28\" rx=\"8\" fill=\"#22c55e\"/>\n    <path d=\"M22 22c0-4 3-8 10-8s10 4 10 8\" stroke=\"#14532d\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\" opacity=\".35\"/>\n    <rect x=\"22\" y=\"30\" width=\"20\" height=\"16\" rx=\"4\" fill=\"#dcfce7\"/>\n    <path d=\"M26 34h12\" stroke=\"#22c55e\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </svg>"}, "girl_blonde": {"name": "Девушка (блонд)", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <circle cx=\"32\" cy=\"28\" r=\"12\" fill=\"#fde68a\"/>\n    <path d=\"M20 28c0-10 6-16 12-16s12 6 12 16\" fill=\"#f2d27a\"/>\n    <path d=\"M24 30c2 4 4 6 8 6s6-2 8-6\" stroke=\"#0f172a\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".28\"/>\n    <rect x=\"20\" y=\"40\" width=\"24\" height=\"12\" rx=\"6\" fill=\"#fb7185\" opacity=\".9\"/>\n    </svg>"}, "girl_brunette": {"name": "Девушка (брюнет)", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <circle cx=\"32\" cy=\"28\" r=\"12\" fill=\"#fde68a\"/>\n    <path d=\"M20 28c0-10 6-16 12-16s12 6 12 16\" fill=\"#5a3a2b\"/>\n    <path d=\"M24 30c2 4 4 6 8 6s6-2 8-6\" stroke=\"#0f172a\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".28\"/>\n    <rect x=\"20\" y=\"40\" width=\"24\" height=\"12\" rx=\"6\" fill=\"#fb7185\" opacity=\".9\"/>\n    </svg>"}, "factory": {"name": "Работа (завод)", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"14\" y=\"26\" width=\"36\" height=\"24\" rx=\"6\" fill=\"#f97316\"/>\n    <rect x=\"18\" y=\"18\" width=\"8\" height=\"32\" rx=\"4\" fill=\"#fb7185\"/>\n    <path d=\"M18 30l10-6 10 6 10-6v26H18V30z\" fill=\"#fdba74\" opacity=\".9\"/>\n    <path d=\"M26 44h4M34 44h4M42 44h4\" stroke=\"#9a3412\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </svg>"}, "cleaning": {"name": "Уборка", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"22\" y=\"18\" width=\"20\" height=\"26\" rx=\"8\" fill=\"#14b8a6\"/>\n    <rect x=\"26\" y=\"22\" width=\"12\" height=\"10\" rx=\"4\" fill=\"#ccfbf1\"/>\n    <path d=\"M42 20l8-6\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <path d=\"M42 28l12 10\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <rect x=\"18\" y=\"44\" width=\"28\" height=\"6\" rx=\"3\" fill=\"#94a3b8\"/>\n    </svg>"}, "event": {"name": "Мероприятие", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <path d=\"M32 56s16-16 16-28a16 16 0 1 0-32 0c0 12 16 28 16 28z\" fill=\"#ef4444\"/>\n    <circle cx=\"32\" cy=\"28\" r=\"6\" fill=\"#fee2e2\"/>\n    </svg>"}};
const SIDE_ICONS = {"hw": {"name": "ДЗ", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"16\" y=\"14\" width=\"26\" height=\"36\" rx=\"10\" fill=\"#7c3aed\"/>\n    <rect x=\"20\" y=\"18\" width=\"18\" height=\"28\" rx=\"7\" fill=\"#f6efff\"/>\n    <path d=\"M40 18l10 10-12 12-8 2 2-8 8-8z\" fill=\"#22c55e\"/>\n    </svg>"}, "selfstudy": {"name": "Self study", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"14\" y=\"16\" width=\"28\" height=\"20\" rx=\"4\" fill=\"#0ea5e9\"/>\n    <rect x=\"17\" y=\"19\" width=\"22\" height=\"14\" rx=\"3\" fill=\"#e6f7ff\"/>\n    <rect x=\"12\" y=\"38\" width=\"32\" height=\"6\" rx=\"3\" fill=\"#94a3b8\"/>\n    <rect x=\"42\" y=\"18\" width=\"10\" height=\"28\" rx=\"5\" fill=\"#f59e0b\"/>\n    <rect x=\"44\" y=\"22\" width=\"6\" height=\"20\" rx=\"3\" fill=\"#fff2cc\" opacity=\".9\"/>\n    </svg>"}, "rest": {"name": "Отдых", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"14\" y=\"34\" width=\"36\" height=\"12\" rx=\"6\" fill=\"#a78bfa\"/>\n    <circle cx=\"24\" cy=\"28\" r=\"4\" fill=\"#fde68a\"/>\n    <path d=\"M20 34c2-10 10-12 14-6 2 3 6 4 8 2\" stroke=\"#0f172a\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".25\" fill=\"none\"/>\n    </svg>"}, "project": {"name": "Проект", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"16\" y=\"14\" width=\"32\" height=\"40\" rx=\"10\" fill=\"#94a3b8\"/>\n    <rect x=\"20\" y=\"18\" width=\"24\" height=\"32\" rx=\"8\" fill=\"#f3f4f6\" opacity=\".95\"/>\n    <path d=\"M24 26l3 3 6-6\" stroke=\"#22c55e\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M24 38l3 3 6-6\" stroke=\"#22c55e\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M36 27h6M36 39h6\" stroke=\"#64748b\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    </svg>"}, "work_wxcc": {"name": "Работа (WXCC)", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"18\" y=\"18\" width=\"28\" height=\"28\" rx=\"8\" fill=\"#0f172a\" opacity=\".15\"/>\n    <rect x=\"20\" y=\"20\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#ef4444\"/>\n    <rect x=\"32\" y=\"20\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#22c55e\"/>\n    <rect x=\"20\" y=\"32\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#3b82f6\"/>\n    <rect x=\"32\" y=\"32\" width=\"12\" height=\"12\" rx=\"3\" fill=\"#f59e0b\"/>\n    </svg>"}, "game": {"name": "Игра", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"14\" y=\"26\" width=\"36\" height=\"20\" rx=\"10\" fill=\"#22c55e\"/>\n    <path d=\"M24 36h8\" stroke=\"#14532d\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".35\"/>\n    <path d=\"M28 32v8\" stroke=\"#14532d\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".35\"/>\n    <circle cx=\"42\" cy=\"34\" r=\"3\" fill=\"#ef4444\"/>\n    <circle cx=\"46\" cy=\"38\" r=\"3\" fill=\"#3b82f6\"/>\n    </svg>"}, "walk": {"name": "Прогулка", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <path d=\"M16 38c8 0 10 10 24 10h12v6H14v-8c0-4 1-8 2-8z\" fill=\"#3b82f6\"/>\n    <path d=\"M22 34c6 2 8 8 14 10\" stroke=\"#e0f2fe\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    </svg>"}, "home": {"name": "Дом", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <path d=\"M14 34l18-16 18 16\" stroke=\"#0ea5e9\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n    <rect x=\"20\" y=\"34\" width=\"24\" height=\"18\" rx=\"6\" fill=\"#38bdf8\"/>\n    <rect x=\"30\" y=\"40\" width=\"8\" height=\"12\" rx=\"3\" fill=\"#e0f2fe\"/>\n    </svg>"}, "call": {"name": "Звонок", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"22\" y=\"14\" width=\"20\" height=\"36\" rx=\"8\" fill=\"#22c55e\"/>\n    <rect x=\"26\" y=\"18\" width=\"12\" height=\"26\" rx=\"4\" fill=\"#dcfce7\"/>\n    <circle cx=\"32\" cy=\"46\" r=\"2\" fill=\"#14532d\" opacity=\".5\"/>\n    </svg>"}, "guests": {"name": "Гости", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <path d=\"M18 32c0-10 8-16 14-16s14 6 14 16v16H18V32z\" fill=\"#f59e0b\"/>\n    <path d=\"M22 34h20\" stroke=\"#b45309\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".45\"/>\n    <path d=\"M22 42h20\" stroke=\"#b45309\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".45\"/>\n    </svg>"}, "bundle1": {"name": "Набор 1", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <path d=\"M18 34c0-10 8-16 14-16s14 6 14 16v14H18V34z\" fill=\"#f59e0b\"/>\n    <rect x=\"44\" y=\"20\" width=\"6\" height=\"28\" rx=\"3\" fill=\"#ef4444\"/>\n    <rect x=\"43\" y=\"18\" width=\"8\" height=\"4\" rx=\"2\" fill=\"#fb7185\"/>\n    </svg>"}, "bundle2": {"name": "Набор 2", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"18\" y=\"22\" width=\"28\" height=\"28\" rx=\"8\" fill=\"#22c55e\"/>\n    <circle cx=\"28\" cy=\"34\" r=\"6\" fill=\"#f97316\"/>\n    <circle cx=\"38\" cy=\"30\" r=\"5\" fill=\"#60a5fa\"/>\n    <rect x=\"30\" y=\"38\" width=\"12\" height=\"6\" rx=\"3\" fill=\"#fbbf24\"/>\n    </svg>"}, "ad": {"name": "Реклама", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"16\" y=\"16\" width=\"32\" height=\"32\" rx=\"10\" fill=\"#f43f5e\"/>\n    <rect x=\"20\" y=\"20\" width=\"24\" height=\"24\" rx=\"9\" fill=\"#fb7185\" opacity=\".65\"/>\n    <circle cx=\"32\" cy=\"32\" r=\"7\" fill=\"#fff1f2\"/>\n    <circle cx=\"42\" cy=\"22\" r=\"2.5\" fill=\"#fff1f2\"/>\n    </svg>"}, "video": {"name": "Видео", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n    <rect x=\"14\" y=\"22\" width=\"36\" height=\"24\" rx=\"10\" fill=\"#ef4444\"/>\n    <circle cx=\"32\" cy=\"34\" r=\"8\" fill=\"#fee2e2\"/>\n    <circle cx=\"32\" cy=\"34\" r=\"4\" fill=\"#0f172a\" opacity=\".35\"/>\n    <rect x=\"18\" y=\"18\" width=\"10\" height=\"6\" rx=\"3\" fill=\"#fb7185\"/>\n    </svg>"}};

const ROWS = 8;
const COLS = 3;

const gridEl = document.getElementById("grid");
const progressEl = document.getElementById("progressText");
const pickerEl = document.getElementById("picker");
const pickerClose = document.getElementById("pickerClose");
const pickerTitle = document.getElementById("pickerTitle");
const pickerHint = document.getElementById("pickerHint");
const iconGrid = document.getElementById("iconGrid");

let state = loadState();
let activeTileId = null;

renderGrid();
updateProgress();

function renderGrid(){
  gridEl.innerHTML = "";
  for(let r=0; r<ROWS; r++){
    for(let c=0; c<COLS; c++){
      const id = `r${r}c${c}`;
      const tile = document.createElement("button");
      tile.type="button";
      tile.className = "tile" + (c===1 ? " center" : "");
      tile.dataset.id = id;
      tile.dataset.col = String(c);

      const data = state.tiles?.[id] || null;
      if(data && data.iconKey){
        const map = (c===1) ? MAIN_ICONS : SIDE_ICONS;
        const def = map[data.iconKey];
        if(def){
          const box = document.createElement("div");
          box.innerHTML = def.svg;
          tile.appendChild(box);
        } else {
          tile.appendChild(makePlus());
        }
        if(data.completed){
          tile.classList.add("completed");
          const check = document.createElement("div");
          check.className = "check";
          check.textContent = "✓";
          tile.appendChild(check);
        }
      } else {
        tile.appendChild(makePlus());
      }

      tile.addEventListener("contextmenu", (e)=>e.preventDefault());
      tile.addEventListener("dragstart", (e)=>e.preventDefault());

      attachTapHandlers(tile);

      gridEl.appendChild(tile);
    }
  }
}

function makePlus(){
  const p = document.createElement("div");
  p.className = "plus";
  p.textContent = "+";
  return p;
}

function attachTapHandlers(tile){
  let lastTapAt = 0;
  let singleTapTimer = null;
  const DOUBLE_MS = 260;

  tile.addEventListener("pointerup", (e)=>{
    if(e.pointerType === "mouse" && e.button !== 0) return;

    const now = Date.now();
    const id = tile.dataset.id;
    const col = Number(tile.dataset.col);
    const hasIcon = !!state.tiles?.[id]?.iconKey;

    const dt = now - lastTapAt;
    lastTapAt = now;

    if(dt > 0 && dt < DOUBLE_MS){
      if(singleTapTimer) { clearTimeout(singleTapTimer); singleTapTimer=null; }
      if(hasIcon) clearTile(id);
      return;
    }

    if(singleTapTimer) clearTimeout(singleTapTimer);
    singleTapTimer = setTimeout(()=>{
      singleTapTimer=null;
      if(!hasIcon){
        activeTileId = id;
        openPicker(col);
      } else {
        toggleCompleted(id);
      }
    }, DOUBLE_MS);
  });
}

function toggleCompleted(id){
  if(!state.tiles?.[id]) return;
  state.tiles[id].completed = !state.tiles[id].completed;
  saveState();
  renderGrid();
  updateProgress();
}

function clearTile(id){
  if(state.tiles) delete state.tiles[id];
  saveState();
  renderGrid();
  updateProgress();
}

function openPicker(col){
  const isCenter = (col===1);
  pickerTitle.textContent = isCenter ? "Основные задачи" : "Доп. задачи";
  pickerHint.textContent = isCenter
    ? "Центральная колонка: выберите основную задачу."
    : "Боковые колонки: выберите доп. задачу.";

  const map = isCenter ? MAIN_ICONS : SIDE_ICONS;
  iconGrid.innerHTML = "";
  Object.entries(map).forEach(([key, def])=>{
    const b = document.createElement("button");
    b.type="button";
    b.className = "pick";
    b.title = def.name;
    b.innerHTML = def.svg;
    b.addEventListener("click", ()=>{
      setTileIcon(activeTileId, key);
      closePicker();
    });
    iconGrid.appendChild(b);
  });

  pickerEl.classList.remove("hidden");
}

function closePicker(){
  pickerEl.classList.add("hidden");
  activeTileId = null;
}

pickerClose.addEventListener("click", closePicker);
pickerEl.addEventListener("click", (e)=>{
  if(e.target === pickerEl) closePicker();
});

function setTileIcon(id, iconKey){
  if(!id) return;
  state.tiles = state.tiles || {};
  state.tiles[id] = { iconKey, completed:false };
  saveState();
  renderGrid();
  updateProgress();
}

function updateProgress(){
  const tiles = state.tiles || {};
  const keys = Object.keys(tiles);
  const total = keys.length;
  const done = keys.filter(k => tiles[k]?.completed).length;
  const percent = total===0 ? 0 : Math.round((done/total)*100);
  progressEl.textContent = percent + "%";
}

function loadState(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return { tiles: {} };
    const s = JSON.parse(raw);
    if(!s || typeof s !== "object") return { tiles: {} };
    if(!s.tiles) s.tiles = {};
    return s;
  } catch {
    return { tiles: {} };
  }
}

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
