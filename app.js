
const STORAGE_KEY = "planner_v1_state";
const SETTINGS_KEY = "planner_v1_settings";

const MAIN_ICONS = {"study": {"ru": "Учёба", "en": "Study", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"14\" y=\"12\" width=\"32\" height=\"40\" rx=\"8\" fill=\"#e5e7eb\"/>
    <rect x=\"18\" y=\"16\" width=\"24\" height=\"32\" rx=\"6\" fill=\"#fff\"/>
    <path d=\"M22 24h16M22 30h16M22 36h12\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\"/>
    <path d=\"M40 18l10 10-14 14-8 2 2-8 10-10z\" fill=\"#22c55e\"/>
    <path d=\"M42 20l2 2\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>"}, "work": {"ru": "Работа", "en": "Work", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"14\" y=\"30\" width=\"36\" height=\"20\" rx=\"4\" fill=\"#60a5fa\"/>
    <path d=\"M14 30l10-8v8h-10z\" fill=\"#a78bfa\"/>
    <path d=\"M24 30l10-8v8H24z\" fill=\"#a78bfa\"/>
    <rect x=\"18\" y=\"36\" width=\"6\" height=\"6\" rx=\"2\" fill=\"#fff\" opacity=\".85\"/>
    <rect x=\"28\" y=\"36\" width=\"6\" height=\"6\" rx=\"2\" fill=\"#fff\" opacity=\".85\"/>
    <rect x=\"38\" y=\"36\" width=\"6\" height=\"6\" rx=\"2\" fill=\"#fff\" opacity=\".85\"/>
    <rect x=\"42\" y=\"18\" width=\"6\" height=\"12\" rx=\"3\" fill=\"#94a3b8\"/>
    <path d=\"M45 18c0-4 6-4 6 0v6c0 4-6 4-6 0\" fill=\"#f59e0b\" opacity=\".9\"/></svg>"}, "project": {"ru": "Проект", "en": "Project", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"16\" y=\"14\" width=\"32\" height=\"36\" rx=\"8\" fill=\"#e5e7eb\"/>
    <rect x=\"20\" y=\"18\" width=\"24\" height=\"28\" rx=\"6\" fill=\"#fff\"/>
    <circle cx=\"26\" cy=\"26\" r=\"3\" fill=\"#22c55e\"/>
    <path d=\"M25 26l1.5 1.5L29 24\" stroke=\"#fff\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>
    <path d=\"M32 26h8\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\"/>
    <circle cx=\"26\" cy=\"34\" r=\"3\" fill=\"#60a5fa\"/>
    <path d=\"M32 34h10\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\"/></svg>"}, "sport": {"ru": "Спорт", "en": "Sport", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"14\" y=\"27\" width=\"8\" height=\"10\" rx=\"2\" fill=\"#a78bfa\"/>
    <rect x=\"42\" y=\"27\" width=\"8\" height=\"10\" rx=\"2\" fill=\"#a78bfa\"/>
    <rect x=\"22\" y=\"30\" width=\"20\" height=\"4\" rx=\"2\" fill=\"#94a3b8\"/>
    <rect x=\"18\" y=\"25\" width=\"4\" height=\"14\" rx=\"2\" fill=\"#a78bfa\"/>
    <rect x=\"42\" y=\"25\" width=\"4\" height=\"14\" rx=\"2\" fill=\"#a78bfa\"/></svg>"}, "read": {"ru": "Чтение", "en": "Reading", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M18 18h18c4 0 6 2 6 6v24c-2-2-4-3-8-3H18c-2 0-4 2-4 4V24c0-4 2-6 4-6z\" fill=\"#60a5fa\"/>
    <path d=\"M46 18h-8c-4 0-6 2-6 6v24c2-2 4-3 8-3h12c2 0 4 2 4 4V24c0-4-2-6-4-6z\" fill=\"#34d399\"/>
    <path d=\"M22 26h14M22 32h12\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".9\"/></svg>"}, "lang": {"ru": "Языки", "en": "Languages", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"14\" y=\"18\" width=\"36\" height=\"28\" rx=\"10\" fill=\"#94a3b8\"/>
    <text x=\"19\" y=\"36\" font-size=\"12\" font-family=\"Arial\" fill=\"#fff\">EN</text>
    <text x=\"35\" y=\"36\" font-size=\"12\" font-family=\"Arial\" fill=\"#fff\">RU</text>
    <line x1=\"32\" y1=\"22\" x2=\"32\" y2=\"42\" stroke=\"#fff\" stroke-width=\"2\" opacity=\".6\"/></svg>"}, "money": {"ru": "Деньги", "en": "Money", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"32\" r=\"14\" fill=\"#f59e0b\"/>
    <circle cx=\"32\" cy=\"32\" r=\"10\" fill=\"#fff\" opacity=\".25\"/>
    <path d=\"M32 23v18\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\"/>
    <path d=\"M27 27c0-2 2-4 5-4s5 2 5 4-2 4-5 4-5 2-5 4 2 4 5 4 5-2 5-4\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/></svg>"}, "family": {"ru": "Семья", "en": "Family", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"24\" cy=\"26\" r=\"6\" fill=\"#34d399\"/>
    <circle cx=\"40\" cy=\"26\" r=\"6\" fill=\"#60a5fa\"/>
    <circle cx=\"32\" cy=\"22\" r=\"5\" fill=\"#fbbf24\"/>
    <path d=\"M16 46c1-8 6-12 14-12s13 4 14 12\" fill=\"#94a3b8\" opacity=\".35\"/>
    <path d=\"M20 46c.8-6 4-9 10-9s9 3 10 9\" fill=\"#94a3b8\" opacity=\".5\"/></svg>"}, "friends": {"ru": "Друзья", "en": "Friends", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"16\" y=\"18\" width=\"22\" height=\"18\" rx=\"6\" fill=\"#a78bfa\"/>
    <path d=\"M24 36l-4 6 8-4\" fill=\"#a78bfa\"/>
    <rect x=\"30\" y=\"26\" width=\"18\" height=\"16\" rx=\"6\" fill=\"#60a5fa\"/>
    <path d=\"M38 42l-3 5 7-3\" fill=\"#60a5fa\"/>
    <circle cx=\"24\" cy=\"27\" r=\"2\" fill=\"#fff\"/><circle cx=\"30\" cy=\"27\" r=\"2\" fill=\"#fff\"/>
    <circle cx=\"36\" cy=\"34\" r=\"2\" fill=\"#fff\"/><circle cx=\"42\" cy=\"34\" r=\"2\" fill=\"#fff\"/></svg>"}, "health": {"ru": "Здоровье", "en": "Health", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"18\" y=\"22\" width=\"28\" height=\"20\" rx=\"10\" fill=\"#fb7185\"/>
    <path d=\"M32 24v16M24 32h16\" stroke=\"#fff\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"}, "organize": {"ru": "Организация", "en": "Organize", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"16\" y=\"18\" width=\"32\" height=\"28\" rx=\"8\" fill=\"#e5e7eb\"/>
    <path d=\"M22 24h20M22 30h16M22 36h18\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\"/>
    <path d=\"M40 28l4 4 8-10\" stroke=\"#22c55e\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/></svg>"}, "sleep": {"ru": "Сон", "en": "Sleep", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"16\" y=\"34\" width=\"32\" height=\"10\" rx=\"4\" fill=\"#a78bfa\"/>
    <rect x=\"16\" y=\"28\" width=\"14\" height=\"8\" rx=\"4\" fill=\"#60a5fa\"/>
    <path d=\"M48 32c3 0 6 2 6 6 0 4-3 6-6 6\" stroke=\"#94a3b8\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\"/></svg>"}};
const SIDE_ICONS = {"hw": {"ru": "ДЗ", "en": "Homework", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"18\" y=\"16\" width=\"28\" height=\"34\" rx=\"8\" fill=\"#e5e7eb\"/>
    <rect x=\"22\" y=\"20\" width=\"20\" height=\"26\" rx=\"6\" fill=\"#fff\"/>
    <path d=\"M26 28h12M26 34h10\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\"/>
    <path d=\"M40 20l8 8-10 10-6 2 2-6 6-6z\" fill=\"#f59e0b\"/></svg>"}, "selfstudy": {"ru": "Самоучка", "en": "Self study", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"16\" y=\"20\" width=\"32\" height=\"20\" rx=\"6\" fill=\"#60a5fa\"/>
    <rect x=\"20\" y=\"24\" width=\"18\" height=\"12\" rx=\"3\" fill=\"#fff\" opacity=\".9\"/>
    <rect x=\"36\" y=\"40\" width=\"12\" height=\"8\" rx=\"4\" fill=\"#22c55e\"/>
    <path d=\"M24 44h16\" stroke=\"#94a3b8\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"}, "stretch": {"ru": "Разминка", "en": "Stretch", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"14\" y=\"40\" width=\"36\" height=\"8\" rx=\"4\" fill=\"#34d399\"/>
    <circle cx=\"38\" cy=\"28\" r=\"5\" fill=\"#fbbf24\"/>
    <path d=\"M22 40c6-10 10-12 16-12\" stroke=\"#a78bfa\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\"/></svg>"}, "water": {"ru": "Вода", "en": "Water", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"26\" y=\"16\" width=\"12\" height=\"32\" rx=\"6\" fill=\"#60a5fa\"/>
    <rect x=\"28\" y=\"14\" width=\"8\" height=\"6\" rx=\"3\" fill=\"#94a3b8\"/>
    <path d=\"M28 30h8\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".7\"/></svg>"}, "hygiene": {"ru": "Гигиена", "en": "Hygiene", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M24 18h16v10c0 10-6 16-8 18-2-2-8-8-8-18V18z\" fill=\"#34d399\"/>
    <path d=\"M22 18c0-4 20-4 20 0\" stroke=\"#60a5fa\" stroke-width=\"3\" stroke-linecap=\"round\"/>
    <circle cx=\"28\" cy=\"30\" r=\"2\" fill=\"#fff\"/><circle cx=\"36\" cy=\"30\" r=\"2\" fill=\"#fff\"/></svg>"}, "wardrobe": {"ru": "Гардероб", "en": "Wardrobe", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M22 20l10-6 10 6-4 8H26l-4-8z\" fill=\"#a78bfa\"/>
    <path d=\"M26 28v20c0 2 12 2 12 0V28\" fill=\"#60a5fa\" opacity=\".9\"/>
    <path d=\"M32 30v18\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\" opacity=\".6\"/></svg>"}, "shop": {"ru": "Магазин", "en": "Shopping", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"20\" y=\"22\" width=\"24\" height=\"26\" rx=\"6\" fill=\"#22c55e\"/>
    <path d=\"M24 22c0-6 16-6 16 0\" stroke=\"#60a5fa\" stroke-width=\"4\" stroke-linecap=\"round\"/>
    <rect x=\"24\" y=\"30\" width=\"16\" height=\"10\" rx=\"3\" fill=\"#fff\" opacity=\".35\"/></svg>"}, "call": {"ru": "Звонок", "en": "Call", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><path d=\"M22 20c8 14 14 20 20 22l-4 6c-8-2-18-12-22-22l6-6z\" fill=\"#60a5fa\"/>
    <path d=\"M38 22c4 2 6 4 8 8\" stroke=\"#22c55e\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"}, "docs": {"ru": "Документы", "en": "Documents", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"18\" y=\"16\" width=\"28\" height=\"34\" rx=\"8\" fill=\"#e5e7eb\"/>
    <path d=\"M26 26h12M26 32h14M26 38h10\" stroke=\"#94a3b8\" stroke-width=\"3\" stroke-linecap=\"round\"/>
    <circle cx=\"42\" cy=\"40\" r=\"6\" fill=\"#22c55e\"/>
    <path d=\"M39 40l2 2 4-5\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>"}, "rest": {"ru": "Отдых", "en": "Rest", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><rect x=\"16\" y=\"36\" width=\"32\" height=\"10\" rx=\"5\" fill=\"#60a5fa\"/>
    <path d=\"M22 36c2-8 10-12 18-10\" stroke=\"#a78bfa\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>
    <circle cx=\"40\" cy=\"26\" r=\"4\" fill=\"#fbbf24\"/></svg>"}, "hobby": {"ru": "Хобби", "en": "Hobby", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"34\" cy=\"30\" r=\"12\" fill=\"#f59e0b\"/>
    <circle cx=\"26\" cy=\"34\" r=\"10\" fill=\"#a78bfa\" opacity=\".9\"/>
    <circle cx=\"38\" cy=\"38\" r=\"8\" fill=\"#60a5fa\" opacity=\".9\"/>
    <rect x=\"18\" y=\"42\" width=\"28\" height=\"6\" rx=\"3\" fill=\"#94a3b8\"/>
    <path d=\"M22 42l6-8\" stroke=\"#34d399\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"}, "walk": {"ru": "Прогулка", "en": "Walk", "svg": "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\"><circle cx=\"34\" cy=\"20\" r=\"5\" fill=\"#34d399\"/>
    <path d=\"M34 25l-4 10 8 6\" stroke=\"#111827\" stroke-width=\"3\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>
    <path d=\"M30 35l-8 8\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/>
    <path d=\"M38 41l-6 11\" stroke=\"#111827\" stroke-width=\"3\" stroke-linecap=\"round\"/>
    <path d=\"M18 46h12\" stroke=\"#22c55e\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".8\"/>
    <path d=\"M44 46h6\" stroke=\"#22c55e\" stroke-width=\"4\" stroke-linecap=\"round\" opacity=\".5\"/></svg>"}};

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

  lockBtn.innerHTML = settings.lock ? `<svg class="icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M22 30v-6c0-6 4-10 10-10s10 4 10 10v6" stroke="#6b7280" stroke-width="4" fill="none" stroke-linecap="round"/>
<rect x="20" y="30" width="24" height="20" rx="6" fill="#d1d5db" stroke="#6b7280" stroke-width="3"/>
<path d="M32 40v6" stroke="#6b7280" stroke-width="4" stroke-linecap="round"/></svg>` : `<svg class="icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M22 30v-6c0-6 4-10 10-10s10 4 10 10v6" stroke="#6b7280" stroke-width="4" fill="none" stroke-linecap="round"/>
<rect x="20" y="30" width="24" height="20" rx="6" fill="#e5e7eb" stroke="#6b7280" stroke-width="3"/>
<path d="M32 40v6" stroke="#6b7280" stroke-width="4" stroke-linecap="round"/></svg>`;
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
