const T = {
    ru: { back: "← Назад", title: "Распиновки BMS", hint: "Нажмите на схему для увеличения", straigth: "Прямая витая пара (T568B)", redDips: "Красные дипы" },
    ua: { back: "← Назад", title: "Розпіновки BMS", hint: "Натисніть на схему для збільшення", straigth: "Пряма вита пара (T568B)", redDips: "Червоні діпи" },
    pl: { back: "← Powrót", title: "Schematy BMS", hint: "Kliknij schemat, aby powiększyć", straigth: "Prosta skrętka (T568B)", redDips: "Czerwone przełączники DIP" },
    en: { back: "← Back", title: "BMS Pinouts", hint: "Tap on diagram to enlarge", straigth: "Straight-through (T568B)", redDips: "Red DIP switches" }
};

const getPinouts = (lang) => {
    const t = T[lang];
    return [
        { id: 1, title: t.straigth, m: "MASTER", s: "SLAVE", links: [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]] },
        // ... остальные данные из твоего списка (сократил для краткости, вставь свои объекты сюда)
        { id: 2, title: "LuxPower/Deye/Solis ↔ Dyness", m: "Inverter", s: "Dyness", links: [[1,1],[2,2],[3,3],[4,4,'CAN-H'],[5,5,'CAN-L'],[6,6],[7,7],[8,8]] }
    ];
};

const stdCols = ["", "#FF8C00", "#FF8C00", "#32CD32", "#0056b3", "#0056b3", "#32CD32", "#8B4513", "#8B4513"];
const stdStriped = [false, true, false, true, false, true, false, true, false];

function setLang(lang) {
    localStorage.setItem('pinout_lang', lang);
    const t = T[lang];
    const bBtn = document.getElementById('backBtn');
    if(bBtn) bBtn.innerText = t.back;
    const mTit = document.getElementById('mainTitle');
    if(mTit) mTit.innerText = t.title;
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.l === lang);
    });
    initAccordion();
}

function initAccordion() {
    const lang = localStorage.getItem('pinout_lang') || 'ru';
    const acc = document.getElementById('accordion');
    if(!acc) return;
    acc.innerHTML = "";
    
    getPinouts(lang).forEach(p => {
        const item = document.createElement('div');
        item.className = 'acc-item';
        item.innerHTML = `
            <div class="acc-header" onclick="toggle(${p.id})">${p.id}. ${p.title}</div>
            <div class="acc-content" id="c-${p.id}">
                <div class="svg-wrap" onclick="zoomIn(document.getElementById('img-${p.id}').src)">
                    <img class="img-overlay" id="img-${p.id}">
                    <div id="svg-${p.id}" style="display:none"></div>
                </div>
                <div class="hint-text">${T[lang].hint}</div>
            </div>`;
        acc.appendChild(item);
    });
}

function toggle(id) {
    const cont = document.getElementById(`c-${id}`);
    if(!cont) return;
    const item = cont.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
    if(!isOpen) { item.classList.add('open'); draw(id); }
}

function draw(id) {
    const lang = localStorage.getItem('pinout_lang') || 'ru';
    const data = getPinouts(lang).find(x => x.id === id);
    const target = document.getElementById(`svg-${id}`);
    if(!target || target.innerHTML !== "") return;
    
    const mP = data.m_pins || 8;
    const sP = data.s_pins || 8;
    const vH = 150 + (Math.max(mP, sP) * 36);

    target.innerHTML = `<svg id="raw-${id}" viewBox="0 0 800 ${vH}" xmlns="http://www.w3.org/2000/svg">
        <defs><clipPath id="cp-${id}"><rect width="110" height="26" rx="3"/></clipPath></defs>
        <rect width="800" height="${vH}" fill="white"/>
        <rect width="800" height="50" fill="#2a8cff"/>
        <text x="400" y="32" font-family="Arial" font-size="20" font-weight="bold" fill="white" text-anchor="middle">${data.title}</text>
        <text x="185" y="85" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#2a8cff">${data.m}</text>
        <text x="615" y="85" font-family="Arial" font-size="16" font-weight="bold" text-anchor="middle" fill="#2a8cff">${data.s}</text>
        <g id="lines-${id}"></g>
        <g transform="translate(130, 105)">${drawConn(id, 'm', data)}</g>
        <g transform="translate(550, 105)">${drawConn(id, 's', data)}</g>
    </svg>`;

    data.links.forEach(l => {
        const y1 = 126 + (l[0]-1)*36, y2 = 126 + (l[1]-1)*36;
        const color = (data.m_colors && data.m_colors[l[0]]) || stdCols[l[0]] || '#0056b3';
        const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
        p.setAttribute("d", `M 240 ${y1} C 390 ${y1}, 410 ${y2}, 550 ${y2}`);
        p.setAttribute("stroke", color); p.setAttribute("stroke-width", "6"); p.setAttribute("fill", "none");
        if(l[2]?.includes('CAN-L') || (l[2] === undefined && stdStriped[l[0]])) p.setAttribute("stroke-dasharray", "12,6");
        document.getElementById(`lines-${id}`).appendChild(p);
        if(l[2]) { 
            addLbl(id, l[0], l[2], 'm'); 
            addLbl(id, l[1], l[2], 's'); 
        }
    });
    render(id);
}

function drawConn(id, side, data) {
    const pins = (side === 'm' ? data.m_pins : data.s_pins) || 8;
    let h = `<rect width="130" height="${8 + pins*36}" fill="#f8f9fa" stroke="#ccc" rx="5"/>`;
    const nulls = (side === 'm' ? data.m_null : data.s_null) || [];
    const customs = (side === 'm' ? data.m_colors : data.s_colors) || {};
    for(let i=1; i<=pins; i++) {
        const y = 8 + (i-1)*36;
        const isL = data.links.find(l => (side === 'm' ? l[0] : l[1]) === i && l[2] === 'CAN-L');
        h += `<g transform="translate(10, ${y})">`;
        if(nulls.includes(i)) {
            h += `<rect width="110" height="26" fill="none" stroke="#ddd" stroke-dasharray="2,2" rx="3"/><text x="55" y="14" font-family="Arial" font-size="10" fill="#bbb" text-anchor="middle" dominant-baseline="middle">NULL</text>`;
        } else {
            h += `<rect width="110" height="26" fill="${customs[i] || stdCols[i] || '#eee'}" rx="3"/>`;
            if(isL || (customs[i] === undefined && stdStriped[i])) {
                h += `<g clip-path="url(#cp-${id})"><path d="M-10 30 L10 -10 M10 30 L30 -10 M30 30 L50 -10 M50 30 L70 -10 M70 30 L90 -10 M90 30 L110 -10 M110 30 L130 -10" stroke="white" stroke-width="6" opacity="0.7"/></g>`;
            }
        }
        h += `<text x="${side==='m'?-25:135}" y="14" font-family="Arial" font-size="12" font-weight="bold" fill="#666" text-anchor="middle" dominant-baseline="middle">${i}</text></g>`;
    }
    return h;
}

function addLbl(id, idx, txt, side) {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute("x", side === 'm' ? 85 : 715); t.setAttribute("y", 126 + (idx-1)*36);
    t.setAttribute("font-family", "Arial"); t.setAttribute("font-size", "12"); t.setAttribute("font-weight", "bold");
    t.setAttribute("text-anchor", side === 'm' ? "end" : "start"); t.setAttribute("fill", "#d9534f");
    t.setAttribute("dominant-baseline", "middle"); t.textContent = txt;
    document.getElementById(`raw-${id}`).appendChild(t);
}

function render(id) {
    const svg = document.getElementById(`raw-${id}`);
    if(!svg) return;
    const vBox = svg.viewBox.baseVal;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const xml = new XMLSerializer().serializeToString(svg);
    const url = URL.createObjectURL(new Blob([xml], {type:'image/svg+xml;charset=utf-8'}));
    const img = new Image();
    img.onload = function() {
        canvas.width = vBox.width; canvas.height = vBox.height;
        ctx.fillStyle = "white"; ctx.fillRect(0,0,vBox.width,vBox.height);
        ctx.drawImage(img, 0, 0);
        document.getElementById(`img-${id}`).src = canvas.toDataURL("image/png");
        URL.revokeObjectURL(url);
    };
    img.src = url;
}

// ZOOM
let scale = 1, moveX = 0, moveY = 0, lastDist = 0, lastX = 0, lastY = 0, isDragging = false;
const modalImg = document.getElementById('modalImg'), zoomModal = document.getElementById('zoomModal');

function zoomIn(src) {
    if(!modalImg || !zoomModal) return;
    modalImg.src = src; scale = 1; moveX = 0; moveY = 0;
    updateTransform(); zoomModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}
function closeModal() { if(zoomModal) zoomModal.style.display = 'none'; document.body.style.overflow = ''; }
function updateTransform() { if(modalImg) modalImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`; }

if(modalImg) {
    modalImg.addEventListener('touchstart', e => {
        if (e.touches.length === 1) { isDragging = true; lastX = e.touches[0].clientX - moveX; lastY = e.touches[0].clientY - moveY; }
        else if (e.touches.length === 2) lastDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    }, {passive: false});

    modalImg.addEventListener('touchmove', e => {
        e.preventDefault();
        if (e.touches.length === 1 && isDragging) { moveX = e.touches[0].clientX - lastX; moveY = e.touches[0].clientY - lastY; }
        else if (e.touches.length === 2) {
            const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
            scale = Math.min(Math.max(1, scale * (dist/lastDist)), 5); lastDist = dist;
        }
        updateTransform();
    }, {passive: false});
    modalImg.addEventListener('touchend', () => { isDragging = false; });
}

document.querySelectorAll('.lang-btn').forEach(btn => btn.onclick = () => setLang(btn.dataset.l));
setLang(localStorage.getItem('pinout_lang') || 'ru');
