
const MAIN={"read": ["Чтение", "Reading", "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"14\" y=\"18\" width=\"36\" height=\"28\" rx=\"6\" fill=\"#60a5fa\"/>\n    <line x1=\"32\" y1=\"18\" x2=\"32\" y2=\"46\" stroke=\"#1f2937\" stroke-width=\"2\"/>\n    <line x1=\"20\" y1=\"26\" x2=\"28\" y2=\"26\" stroke=\"white\" stroke-width=\"2\"/>\n    </svg>"], "sport": ["Спорт", "Sport", "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"14\" y=\"28\" width=\"8\" height=\"8\" fill=\"#a78bfa\"/>\n    <rect x=\"42\" y=\"28\" width=\"8\" height=\"8\" fill=\"#a78bfa\"/>\n    <line x1=\"22\" y1=\"32\" x2=\"42\" y2=\"32\" stroke=\"#1f2937\" stroke-width=\"4\"/>\n    </svg>"], "money": ["Деньги", "Money", "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"32\" cy=\"32\" r=\"14\" fill=\"#f59e0b\"/>\n    <text x=\"26\" y=\"36\" font-size=\"14\" fill=\"white\">$</text>\n    </svg>"], "sleep": ["Сон", "Sleep", "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"14\" y=\"34\" width=\"36\" height=\"8\" fill=\"#a78bfa\"/>\n    <rect x=\"14\" y=\"26\" width=\"18\" height=\"8\" fill=\"#60a5fa\"/>\n    </svg>"]};
const SIDE={"walk": ["Прогулка", "Walk", "<svg class=\"icon\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"32\" cy=\"20\" r=\"6\" fill=\"#34d399\"/>\n    <line x1=\"32\" y1=\"26\" x2=\"32\" y2=\"40\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n    <line x1=\"32\" y1=\"32\" x2=\"22\" y2=\"36\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n    <line x1=\"32\" y1=\"32\" x2=\"42\" y2=\"36\" stroke=\"#1f2937\" stroke-width=\"3\"/>\n    </svg>"]};

const grid=document.getElementById("grid");
const body=document.body;
const counter=document.getElementById("counter");

let done=0;

function render(){
grid.innerHTML="";
Object.entries(MAIN).forEach(([k,v])=>{
let d=document.createElement("div");
d.className="tile";
d.innerHTML=v[2]+`<div>${v[0]}</div>`;
grid.appendChild(d);
});
Object.entries(SIDE).forEach(([k,v])=>{
let d=document.createElement("div");
d.className="tile";
d.innerHTML=v[2]+`<div>${v[0]}</div>`;
grid.appendChild(d);
});
counter.textContent=`${done}/24`;
}

render();

document.getElementById("lightBtn").onclick=()=>body.classList.remove("dark");
document.getElementById("darkBtn").onclick=()=>body.classList.add("dark");
