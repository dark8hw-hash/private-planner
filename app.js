
const STORAGE_KEY = "planner_v1_state";
const SETTINGS_KEY = "planner_v1_settings";

const MAIN_ICONS = {"study": {"ru": "Учёба", "en": "Study", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"16\" y=\"12\" width=\"30\" height=\"40\" rx=\"8\" fill=\"#e5e7eb\"/>\n      <rect x=\"20\" y=\"16\" width=\"22\" height=\"32\" rx=\"6\" fill=\"#ffffff\"/>\n      <path d=\"M24 24h14M24 32h14M24 40h10\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n      <path d=\"M40 18l10 10-14 14-8 2 2-8 10-10z\" fill=\"#99f6e4\"/>\n    </svg>"}, "work": {"ru": "Работа", "en": "Work", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"14\" y=\"30\" width=\"36\" height=\"20\" rx=\"6\" fill=\"#fdba74\"/>\n      <path d=\"M18 30l10-6 10 6 10-6v26H18V30z\" fill=\"#fde68a\" opacity=\".9\"/>\n      <rect x=\"18\" y=\"18\" width=\"8\" height=\"32\" rx=\"4\" fill=\"#fda4af\"/>\n      <path d=\"M26 44h4M34 44h4M42 44h4\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".25\"/>\n    </svg>"}, "project": {"ru": "Проект", "en": "Project", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"16\" y=\"14\" width=\"32\" height=\"40\" rx=\"10\" fill=\"#a5b4fc\"/>\n      <rect x=\"20\" y=\"18\" width=\"24\" height=\"32\" rx=\"8\" fill=\"#ffffff\" opacity=\".95\"/>\n      <path d=\"M24 28l3 3 6-6\" stroke=\"#99f6e4\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      <path d=\"M24 40l3 3 6-6\" stroke=\"#99f6e4\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      <path d=\"M36 28h6M36 40h6\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    </svg>"}, "sport": {"ru": "Спорт", "en": "Sport", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"14\" y=\"28\" width=\"8\" height=\"16\" rx=\"4\" fill=\"#c4b5fd\"/>\n      <rect x=\"42\" y=\"28\" width=\"8\" height=\"16\" rx=\"4\" fill=\"#c4b5fd\"/>\n      <rect x=\"22\" y=\"32\" width=\"20\" height=\"8\" rx=\"4\" fill=\"#94a3b8\" opacity=\".65\"/>\n      <rect x=\"18\" y=\"30\" width=\"6\" height=\"12\" rx=\"3\" fill=\"#c4b5fd\" opacity=\".9\"/>\n      <rect x=\"40\" y=\"30\" width=\"6\" height=\"12\" rx=\"3\" fill=\"#c4b5fd\" opacity=\".9\"/>\n    </svg>"}, "read": {"ru": "Чтение", "en": "Reading", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <path d=\"M16 20c10-6 18-6 24 0v28c-6-6-14-6-24 0V20z\" fill=\"#93c5fd\"/>\n      <path d=\"M24 20c10-6 18-6 24 0v28c-6-6-14-6-24 0V20z\" fill=\"#99f6e4\"/>\n      <path d=\"M24 20v28\" stroke=\"#111827\" stroke-width=\"3\" opacity=\".18\"/>\n      <path d=\"M22 28h10M22 36h10\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".9\"/>\n    </svg>"}, "lang": {"ru": "Языки", "en": "Languages", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"14\" y=\"18\" width=\"36\" height=\"28\" rx=\"10\" fill=\"#e5e7eb\"/>\n      <rect x=\"18\" y=\"22\" width=\"28\" height=\"20\" rx=\"8\" fill=\"#ffffff\" opacity=\".95\"/>\n      <text x=\"23\" y=\"36\" font-size=\"10\" font-family=\"ui-sans-serif,system-ui\" fill=\"#111827\" opacity=\".75\">EN</text>\n      <text x=\"38\" y=\"36\" font-size=\"10\" font-family=\"ui-sans-serif,system-ui\" fill=\"#111827\" opacity=\".75\">RU</text>\n      <path d=\"M30 28h4\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".7\"/>\n    </svg>"}, "money": {"ru": "Деньги", "en": "Money", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <circle cx=\"32\" cy=\"32\" r=\"16\" fill=\"#fde68a\"/>\n      <circle cx=\"32\" cy=\"32\" r=\"11\" fill=\"#ffffff\" opacity=\".8\"/>\n      <path d=\"M28 34c1.2 2 6 2 7.5 0 1.6-2-1-3-3.6-3.6-2.8-.7-4.5-1.6-3.5-3.4 1-2 5.2-2 6.6 0\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".35\" fill=\"none\"/>\n    </svg>"}, "family": {"ru": "Семья", "en": "Family", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <circle cx=\"24\" cy=\"26\" r=\"7\" fill=\"#fda4af\"/>\n      <circle cx=\"40\" cy=\"26\" r=\"7\" fill=\"#93c5fd\"/>\n      <circle cx=\"32\" cy=\"34\" r=\"6\" fill=\"#fde68a\"/>\n      <path d=\"M18 48c1-7 6-12 14-12s13 5 14 12\" fill=\"#e5e7eb\" opacity=\".9\"/>\n    </svg>"}, "friends": {"ru": "Друзья", "en": "Friends", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"14\" y=\"18\" width=\"30\" height=\"26\" rx=\"10\" fill=\"#a5b4fc\"/>\n      <circle cx=\"48\" cy=\"26\" r=\"8\" fill=\"#c4b5fd\"/>\n      <circle cx=\"26\" cy=\"30\" r=\"8\" fill=\"#ffffff\"/>\n      <path d=\"M22 30h8\" stroke=\"#111827\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".22\"/>\n      <path d=\"M26 26v8\" stroke=\"#111827\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".22\"/>\n    </svg>"}, "health": {"ru": "Здоровье", "en": "Health", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"20\" y=\"22\" width=\"28\" height=\"8\" rx=\"4\" fill=\"#99f6e4\"/>\n      <rect x=\"40\" y=\"18\" width=\"10\" height=\"16\" rx=\"5\" fill=\"#93c5fd\"/>\n      <path d=\"M20 26h-6\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".7\"/>\n      <path d=\"M46 34l10 10\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".7\"/>\n      <path d=\"M52 40l-4 4\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".7\"/>\n    </svg>"}, "organize": {"ru": "Организация", "en": "Organize", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"18\" y=\"24\" width=\"28\" height=\"26\" rx=\"8\" fill=\"#fdba74\"/>\n      <rect x=\"26\" y=\"18\" width=\"12\" height=\"6\" rx=\"3\" fill=\"#94a3b8\" opacity=\".7\"/>\n      <path d=\"M18 34h28\" stroke=\"#111827\" stroke-width=\"3\" opacity=\".18\"/>\n      <rect x=\"22\" y=\"36\" width=\"20\" height=\"10\" rx=\"5\" fill=\"#ffffff\" opacity=\".6\"/>\n    </svg>"}, "sleep": {"ru": "Сон", "en": "Sleep", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"14\" y=\"34\" width=\"36\" height=\"12\" rx=\"6\" fill=\"#c4b5fd\"/>\n      <rect x=\"14\" y=\"28\" width=\"18\" height=\"8\" rx=\"4\" fill=\"#ffffff\" opacity=\".85\"/>\n      <rect x=\"36\" y=\"30\" width=\"14\" height=\"6\" rx=\"3\" fill=\"#a5b4fc\" opacity=\".8\"/>\n      <path d=\"M14 46v6M50 46v6\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".65\"/>\n    </svg>"}};
const SIDE_ICONS = {"hw": {"ru": "ДЗ", "en": "Homework", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"16\" y=\"14\" width=\"26\" height=\"36\" rx=\"10\" fill=\"#c4b5fd\"/>\n      <rect x=\"20\" y=\"18\" width=\"18\" height=\"28\" rx=\"7\" fill=\"#ffffff\" opacity=\".95\"/>\n      <path d=\"M40 18l10 10-12 12-8 2 2-8 8-8z\" fill=\"#99f6e4\"/>\n    </svg>"}, "selfstudy": {"ru": "Самоучка", "en": "Self study", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"14\" y=\"16\" width=\"28\" height=\"20\" rx=\"4\" fill=\"#93c5fd\"/>\n      <rect x=\"17\" y=\"19\" width=\"22\" height=\"14\" rx=\"3\" fill=\"#ffffff\" opacity=\".9\"/>\n      <rect x=\"12\" y=\"38\" width=\"32\" height=\"6\" rx=\"3\" fill=\"#94a3b8\" opacity=\".65\"/>\n      <rect x=\"42\" y=\"18\" width=\"10\" height=\"28\" rx=\"5\" fill=\"#fde68a\"/>\n      <rect x=\"44\" y=\"22\" width=\"6\" height=\"20\" rx=\"3\" fill=\"#ffffff\" opacity=\".75\"/>\n    </svg>"}, "stretch": {"ru": "Разминка", "en": "Stretch", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"14\" y=\"40\" width=\"36\" height=\"10\" rx=\"5\" fill=\"#99f6e4\"/>\n      <circle cx=\"40\" cy=\"30\" r=\"10\" fill=\"#c4b5fd\"/>\n      <path d=\"M28 34c4-6 10-8 16-6\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".9\"/>\n    </svg>"}, "water": {"ru": "Вода", "en": "Water", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"26\" y=\"16\" width=\"12\" height=\"34\" rx=\"6\" fill=\"#93c5fd\"/>\n      <rect x=\"28\" y=\"12\" width=\"8\" height=\"6\" rx=\"3\" fill=\"#94a3b8\" opacity=\".7\"/>\n      <rect x=\"28\" y=\"26\" width=\"8\" height=\"14\" rx=\"4\" fill=\"#ffffff\" opacity=\".7\"/>\n    </svg>"}, "hygiene": {"ru": "Гигиена", "en": "Hygiene", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"16\" y=\"18\" width=\"12\" height=\"10\" rx=\"5\" fill=\"#94a3b8\" opacity=\".7\"/>\n      <path d=\"M22 24c0 8 10 8 10 16\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".7\" fill=\"none\"/>\n      <path d=\"M36 34l-2 6M42 34l-2 6M48 34l-2 6\" stroke=\"#93c5fd\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".7\"/>\n    </svg>"}, "wardrobe": {"ru": "Гардероб", "en": "Wardrobe", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <path d=\"M22 20l10-6 10 6-6 6v26H28V26l-6-6z\" fill=\"#fdba74\"/>\n      <path d=\"M26 26h12\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".85\"/>\n    </svg>"}, "shop": {"ru": "Магазин", "en": "Shopping", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"18\" y=\"22\" width=\"28\" height=\"28\" rx=\"8\" fill=\"#99f6e4\"/>\n      <path d=\"M22 22c0-4 3-8 10-8s10 4 10 8\" stroke=\"#111827\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\" opacity=\".18\"/>\n      <rect x=\"22\" y=\"30\" width=\"20\" height=\"16\" rx=\"4\" fill=\"#ffffff\" opacity=\".7\"/>\n    </svg>"}, "home": {"ru": "Дом", "en": "Home", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <path d=\"M14 34l18-16 18 16\" stroke=\"#93c5fd\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n      <rect x=\"20\" y=\"34\" width=\"24\" height=\"18\" rx=\"6\" fill=\"#a5b4fc\"/>\n      <rect x=\"30\" y=\"40\" width=\"8\" height=\"12\" rx=\"3\" fill=\"#ffffff\" opacity=\".8\"/>\n    </svg>"}, "call": {"ru": "Звонок", "en": "Call", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"22\" y=\"14\" width=\"20\" height=\"36\" rx=\"8\" fill=\"#99f6e4\"/>\n      <rect x=\"26\" y=\"18\" width=\"12\" height=\"26\" rx=\"4\" fill=\"#ffffff\" opacity=\".75\"/>\n      <circle cx=\"32\" cy=\"46\" r=\"2\" fill=\"#111827\" opacity=\".25\"/>\n    </svg>"}, "docs": {"ru": "Документы", "en": "Documents", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"18\" y=\"14\" width=\"28\" height=\"40\" rx=\"10\" fill=\"#e5e7eb\"/>\n      <rect x=\"22\" y=\"18\" width=\"20\" height=\"32\" rx=\"8\" fill=\"#ffffff\" opacity=\".95\"/>\n      <path d=\"M26 28h12M26 36h12M26 44h8\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </svg>"}, "rest": {"ru": "Отдых", "en": "Rest", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <rect x=\"14\" y=\"34\" width=\"36\" height=\"12\" rx=\"6\" fill=\"#a5b4fc\"/>\n      <circle cx=\"24\" cy=\"28\" r=\"4\" fill=\"#fde68a\"/>\n      <path d=\"M20 34c2-10 10-12 14-6 2 3 6 4 8 2\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".18\" fill=\"none\"/>\n    </svg>"}, "hobby": {"ru": "Хобби", "en": "Hobby", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\">\n      <path d=\"M32 16c-10 0-18 8-18 18s8 18 18 18c6 0 6-6 2-6-3 0-5-2-5-5 0-4 4-6 8-6 6 0 13-4 13-11S42 16 32 16z\" fill=\"#fdba74\"/>\n      <circle cx=\"24\" cy=\"30\" r=\"3\" fill=\"#93c5fd\"/>\n      <circle cx=\"30\" cy=\"26\" r=\"3\" fill=\"#99f6e4\"/>\n      <circle cx=\"36\" cy=\"26\" r=\"3\" fill=\"#c4b5fd\"/>\n      <circle cx=\"40\" cy=\"30\" r=\"3\" fill=\"#fda4af\"/>\n    </svg>"}};

const ROWS = 8;
const COLS = 3;
const TOTAL = ROWS * COLS;

const t = {
  en: {
    today: "TODAY",
    hint: "Tap + to add",
    pickerMain: "Main tasks",
    pickerSide: "Extra tasks",
    pickerMainHint: "Center column: choose a main task.",
    pickerSideHint: "Side columns: choose an extra task.",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    privacy: "Offline. No account. No ads.",
  },
  ru: {
    today: "НА СЕГОДНЯ",
    hint: "Нажми + чтобы добавить",
    pickerMain: "Основные задачи",
    pickerSide: "Доп. задачи",
    pickerMainHint: "Центр: выбери основную задачу.",
    pickerSideHint: "Боковые: выбери доп. задачу.",
    settings: "Настройки",
    language: "Язык",
    theme: "Тема",
    light: "Светлая",
    dark: "Тёмная",
    privacy: "Оффлайн. Без аккаунта. Без рекламы.",
  }
};

const gridEl = document.getElementById("grid");
const countEl = document.getElementById("countText");
const titleToday = document.getElementById("titleToday");
const subHint = document.getElementById("subHint");

const pickerEl = document.getElementById("picker");
const pickerClose = document.getElementById("pickerClose");
const pickerTitle = document.getElementById("pickerTitle");
const pickerHint = document.getElementById("pickerHint");
const iconGrid = document.getElementById("iconGrid");

const settingsEl = document.getElementById("settings");
const settingsBtn = document.getElementById("settingsBtn");
const settingsClose = document.getElementById("settingsClose");
const settingsTitle = document.getElementById("settingsTitle");
const langLabel = document.getElementById("langLabel");
const themeLabel = document.getElementById("themeLabel");
const privacyNote = document.getElementById("privacyNote");
const langEN = document.getElementById("langEN");
const langRU = document.getElementById("langRU");
const themeLight = document.getElementById("themeLight");
const themeDark = document.getElementById("themeDark");

const lockBtn = document.getElementById("lockBtn");

let settings = loadSettings();
applySettingsUI();

let state = loadState();
let activeTileId = null;

renderGrid();
updateCounter();

settingsBtn.addEventListener("click", ()=> openSettings());
settingsClose.addEventListener("click", ()=> closeSettings());
settingsEl.addEventListener("click", (e)=> { if(e.target===settingsEl) closeSettings(); });

langEN.addEventListener("click", ()=> setLang("en"));
langRU.addEventListener("click", ()=> setLang("ru"));
themeLight.addEventListener("click", ()=> setTheme("light"));
themeDark.addEventListener("click", ()=> setTheme("dark"));

lockBtn.addEventListener("click", ()=>{
  settings.lock = !settings.lock;
  saveSettings();
  applySettingsUI();
});

function openSettings(){ settingsEl.classList.remove("hidden"); }
function closeSettings(){ settingsEl.classList.add("hidden"); }

function setLang(lang){
  settings.lang = lang;
  saveSettings();
  applySettingsUI();
  renderGrid();
}
function setTheme(theme){
  settings.theme = theme;
  saveSettings();
  applySettingsUI();
}

function applySettingsUI(){
  document.documentElement.dataset.theme = settings.theme;
  const L = t[settings.lang];

  titleToday.textContent = L.today;
  subHint.textContent = settings.lock ? "" : L.hint;

  settingsTitle.textContent = L.settings;
  langLabel.textContent = L.language;
  themeLabel.textContent = L.theme;
  themeLight.textContent = L.light;
  themeDark.textContent = L.dark;
  privacyNote.textContent = L.privacy;

  langEN.classList.toggle("active", settings.lang==="en");
  langRU.classList.toggle("active", settings.lang==="ru");
  themeLight.classList.toggle("active", settings.theme==="light");
  themeDark.classList.toggle("active", settings.theme==="dark");

  lockBtn.textContent = settings.lock ? "🔒" : "🔓";
}

function loadSettings(){
  try{
    const raw = localStorage.getItem(SETTINGS_KEY);
    if(!raw) return { lang:"ru", theme:"light", lock:false };
    const s = JSON.parse(raw);
    return {
      lang: (s.lang==="en"?"en":"ru"),
      theme: (s.theme==="dark"?"dark":"light"),
      lock: !!s.lock
    };
  }catch{
    return { lang:"ru", theme:"light", lock:false };
  }
}
function saveSettings(){
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

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

          const lab = document.createElement("div");
          lab.className = "label";
          lab.textContent = def[settings.lang];
          tile.appendChild(lab);
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
      if(!settings.lock && hasIcon) clearTile(id);
      return;
    }

    if(singleTapTimer) clearTimeout(singleTapTimer);
    singleTapTimer = setTimeout(()=>{
      singleTapTimer=null;

      if(!hasIcon){
        if(settings.lock) return;
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
  updateCounter();
}

function clearTile(id){
  if(state.tiles) delete state.tiles[id];
  saveState();
  renderGrid();
  updateCounter();
}

pickerClose.addEventListener("click", closePicker);
pickerEl.addEventListener("click", (e)=> { if(e.target===pickerEl) closePicker(); });

function openPicker(col){
  const isCenter = (col===1);
  const L = t[settings.lang];
  pickerTitle.textContent = isCenter ? L.pickerMain : L.pickerSide;
  pickerHint.textContent = isCenter ? L.pickerMainHint : L.pickerSideHint;

  const map = isCenter ? MAIN_ICONS : SIDE_ICONS;
  iconGrid.innerHTML = "";
  Object.entries(map).forEach(([key, def])=>{
    const b = document.createElement("button");
    b.type="button";
    b.className = "pick";
    b.title = def[settings.lang];
    b.innerHTML = def.svg;
    b.addEventListener("click", ()=>{
      setTileIcon(activeTileId, key);
      closePicker();
    });
    iconGrid.appendChild(b);
  });

  pickerEl.classList.remove("hidden");
}

function closePicker(){ pickerEl.classList.add("hidden"); activeTileId = null; }

function setTileIcon(id, iconKey){
  if(!id) return;
  state.tiles = state.tiles || {};
  state.tiles[id] = { iconKey, completed:false };
  saveState();
  renderGrid();
  updateCounter();
}

function updateCounter(){
  const tiles = state.tiles || {};
  let done = 0;
  for(let r=0;r<ROWS;r++) for(let c=0;c<COLS;c++) {
    const id = `r${r}c${c}`;
    if(tiles[id]?.completed) done++;
  }
  countEl.textContent = `${done}/${TOTAL}`;
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return { tiles: {} };
    const s = JSON.parse(raw);
    if(!s || typeof s!=="object") return { tiles: {} };
    if(!s.tiles) s.tiles = {};
    return s;
  }catch{
    return { tiles: {} };
  }
}
function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
