const translations = {
    ru: { 
        w_h: "Инструменты", w_p: "Помощник инженера", 
        m1_t: "Макс. длина стринга", m1_d: "Расчет напряжения", 
        m2_t: "Распиновки BMS", m2_d: "Схемы CAN / RS485 / RJ45",
        m3_t: "Калькулятор диапазона", m3_d: "Количество модулей (Min/Max)",
        back: "← Назад", title_range: "Диапазон модулей (Min/Max)",
        l1: "Voc модуля (STC) (В)", l2: "Vmp модуля (STC) (В)",
        l3: "Температурный коэффициент Voc (%)",
        l4: "Мин. температура объекта (°C)", l5: "Макс. температура объекта (°C)",
        l6: "Макс. предел MPPT инвертора (В)", l7: "Мин. предел MPPT инвертора (В)",
        calc: "Рассчитать диапазон", empty: "⚠️ Заполните все поля",
        copyBtn: "📋 Скопировать отчет", copied: "✅ Скопировано!",
        res_min: "Минимум в стринге", res_max: "Максимум в стринге", pcs: "шт.",
        title_string: "Максимальная длина стринга",
        sl1: "Макс. напряжение DC инвертора (В)", sl2: "Напружение Voc модуля (В)",
        sl3: "Мин. температура воздуха (°C)", sl4: "Темп. коэффициент Voc (%/°C)",
        res_string: "Макс. модулей в стринге:", calcVoc: "Расчетный Voc при мин. темп.",
        v_unit: "В", hint: "Нажмите на схему для увеличения",
        straigth: "Прямая витая пара (T568B)", redDips: "Красные дипы"
    },
    ua: { 
        w_h: "Інструменти", w_p: "Помічник інженера", 
        m1_t: "Макс. довжина стринга", m1_d: "Розрахунок напруги", 
        m2_t: "Розпіновки BMS", m2_d: "Схеми підключення",
        m3_t: "Калькулятор діапазону", m3_d: "Кількість модулів (Min/Max)",
        back: "← Назад", title_range: "Діапазон модулів (Min/Max)",
        l1: "Voc модуля (STC) (В)", l2: "Vmp модуля (STC) (В)",
        l3: "Температурний коефіцієнт Voc (%)",
        l4: "Мін. температура об'єкта (°C)", l5: "Макс. температура об'єкта (°C)",
        l6: "Макс. межа MPPT інвертора (В)", l7: "Мін. межа MPPT інвертора (В)",
        calc: "Розрахувати діапазон", empty: "⚠️ Заповніть всі поля",
        copyBtn: "📋 Копіювати звіт", copied: "✅ Скопійовано!",
        res_min: "Мінімум у стрингу", res_max: "Максимум у стрингу", pcs: "шт.",
        title_string: "Максимальна довжина стринга",
        sl1: "Макс. напруга DC інвертора (В)", sl2: "Напруга Voc модуля (В)",
        sl3: "Мін. температура повітря (°C)", sl4: "Темп. коефіцієнт Voc (%/°C)",
        res_string: "Макс. модулів у ланцюгу:", calcVoc: "Розрахунковий Voc при мін. темп.",
        v_unit: "В", hint: "Натисніть на схему для збільшення",
        straigth: "Пряма вита пара (T568B)", redDips: "Червоні діпи"
    },
    pl: { 
        w_h: "Narzędzia", w_p: "Asystent inżyniera", 
        m1_t: "Długość stringu", m1_d: "Obliczanie napięcia", 
        m2_t: "Pinouty BMS", m2_d: "Schematy",
        m3_t: "Kalkulator zakresu", m3_d: "Liczba modułów (Min/Max)",
        back: "← Wstecz", title_range: "Zakres modułów (Min/Max)",
        l1: "Voc modułu (STC) (V)", l2: "Vmp modułu (STC) (V)",
        l3: "Współczynnik temp. Voc (%)",
        l4: "Min. temperatura otoczenia (°C)", l5: "Max. temperatura otoczenia (°C)",
        l6: "Max zakres MPPT falownika (V)", l7: "Min zakres MPPT falownika (V)",
        calc: "Oblicz zakres", empty: "⚠️ Uzupełnij pola",
        copyBtn: "📋 Skopiuj raport", copied: "✅ Skopiowano!",
        res_min: "Minimum w stringu", res_max: "Maksimum w stringu", pcs: "szt.",
        title_string: "Maksymalna długość stringu",
        sl1: "Max napięcie DC falownika (V)", sl2: "Napięcie Voc modułu (V)",
        sl3: "Min. temperatura otoczenia (°C)", sl4: "Współczynnik temp. Voc (%/°C)",
        res_string: "Maks. liczba modułów:", calcVoc: "Obliczone Voc w min. temp.",
        v_unit: "V", hint: "Kliknij schemat, aby powiększyć",
        straigth: "Klasyczna metoda (T568B)", redDips: "Czerwone przełączniki DIP"
    },
    en: { 
        w_h: "Toolkit", w_p: "Engineer Assistant", 
        m1_t: "Max String Length", m1_d: "Voltage calculation", 
        m2_t: "BMS Pinouts", m2_d: "Diagrams",
        m3_t: "String Range Calc", m3_d: "Module count (Min/Max)",
        back: "← Back", title_range: "Module Range (Min/Max)",
        l1: "Module Voc (STC) (V)", l2: "Module Vmp (STC) (V)",
        l3: "Temp. coefficient Voc (%)",
        l4: "Min ambient temperature (°C)", l5: "Max ambient temperature (°C)",
        l6: "Max MPPT voltage (V)", l7: "Min MPPT voltage (V)",
        calc: "Calculate Range", empty: "⚠️ Fill all fields",
        copyBtn: "📋 Copy report", copied: "✅ Copied!",
        res_min: "Min modules in string", res_max: "Max modules in string", pcs: "pcs.",
        title_string: "Maximum String Length",
        sl1: "Max DC Inverter Voltage (V)", sl2: "Module Voc (V)",
        sl3: "Min. Ambient Temperature (°C)", sl4: "Temp. Coefficient Voc (%/°C)",
        res_string: "Max modules per string:", calcVoc: "Calculated Voc at min temp",
        v_unit: "V", hint: "Tap on diagram to enlarge",
        straigth: "Straight-through (T568B)", redDips: "Red DIP switches"
    }
};

const stdCols = ["", "#FF8C00", "#FF8C00", "#32CD32", "#0056b3", "#0056b3", "#32CD32", "#8B4513", "#8B4513"];
const stdStriped = [false, true, false, true, false, true, false, true, false];

// --- ДАННЫЕ РАСПИНОВОК ---
const getPinouts = (lang) => {
    const t = translations[lang] || translations.ru;
    return [
        { id: 1, title: t.straigth, m: "MASTER", s: "SLAVE", links: [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8]] },
        { id: 2, title: "LuxPower/Deye/Solis ↔ Dyness", m: "Inverter", s: "Dyness", links: [[1,1],[2,2],[3,3],[4,4,'CAN-H'],[5,5,'CAN-L'],[6,6],[7,7],[8,8]] },
        { id: 3, title: "LuxPower/Deye/Solis ↔ Pylontech NEW", m: "Inverter", s: "Pylontech", links: [[4,4,'CAN-H'],[5,5,'CAN-L'],[6,6],[7,7],[8,8]], s_null: [1,2,3] },
        { id: 4, title: "LuxPower/Deye/Solis ↔ Pylontech US2000/3000", m: "Inverter", s: "Pylontech", links: [[4,4,'CAN-H'],[5,5,'CAN-L']] },
        { id: 5, title: "Victron GX ↔ Pylontech NEW", m: "Victron GX", s: "Pylontech", links: [[3,6,'GND'],[7,4,'CAN-H'],[8,5,'CAN-L']], m_null:[1,2,4,5,6], s_null:[1,2,3], m_colors:{3:'#32CD32', 7:'#0056b3', 8:'#0056b3'}, s_colors:{6:'#32CD32', 4:'#0056b3', 5:'#0056b3'} },
        { id: 6, title: "Victron GX ↔ Pylontech US2000/3000", m: "Victron GX", s: "Pylontech", links: [[3,2,'GND'],[7,4,'CAN-H'],[8,5,'CAN-L']], m_null:[1,2,4,5,6], m_colors:{3:'#FF8C00', 7:'#0056b3', 8:'#0056b3'}, s_colors:{2:'#FF8C00', 4:'#0056b3', 5:'#0056b3'} },
        { id: 7, title: "Victron GX ↔ Dyness", m: "Victron GX", s: "Dyness", links: [[3,2,'GND'],[7,4,'CAN-H'],[8,5,'CAN-L']], m_null:[1,2,4,5,6], m_colors:{3:'#FF8C00', 7:'#0056b3', 8:'#0056b3'}, s_colors:{2:'#FF8C00', 4:'#0056b3', 5:'#0056b3'} },
        { id: 8, title: `LuxPower (${t.redDips}) ↔ Pylontech NEW`, m: "LuxPower", s: "Pylontech NEW", links: [[3,5,'CAN-L'],[4,4,'CAN-H']], m_null:[1,2,5,6,7,8], s_null:[1,2,3], m_colors:{3:'#0056b3', 4:'#0056b3'}, s_colors:{4:'#0056b3', 5:'#0056b3'} },
        { id: 9, title: `LuxPower (${t.redDips}) ↔ Pylontech US2000/3000`, m: "LuxPower", s: "Pylontech", links: [[3,5,'CAN-L'],[4,4,'CAN-H']], m_null:[1,2,5,6,7,8], m_colors:{3:'#0056b3', 4:'#0056b3'}, s_colors:{4:'#0056b3', 5:'#0056b3'} },
        { id: 10, title: `LuxPower (${t.redDips}) ↔ Dyness`, m: "LuxPower", s: "Dyness", links: [[3,5,'CAN-L'],[4,4,'CAN-H']], m_null:[1,2,5,6,7,8], m_colors:{3:'#0056b3', 4:'#0056b3'}, s_colors:{4:'#0056b3', 5:'#0056b3'} },
        { id: 11, title: "Sungrow (RJ45) ↔ Sungrow", m: "Sungrow Inv", s: "Sungrow Bat", links: [[4,4,'CAN-H'],[5,5,'CAN-L']], m_colors:{4:'#0056b3', 5:'#0056b3'}, s_colors:{4:'#0056b3', 5:'#0056b3'} },
        { id: 12, title: "Sungrow (COM Terminal) ↔ Sungrow", m: "Sungrow (10-pin)", s: "Sungrow (RJ45)", m_pins: 10, links: [[6,4,'CAN-H'],[7,5,'CAN-L']], m_null:[1,2,3,4,5,8,9,10], m_colors:{6:'#0056b3', 7:'#0056b3'} },
        { id: 13, title: "Sofar Inverter ↔ Sofar BTS Battery", m: "Sofar (16-pin)", s: "Sofar BTS (RJ45)", m_pins: 16, links: [[7,4,'CAN-H'],[8,5,'CAN-L']], m_null:[1,2,3,4,5,6,9,10,11,12,13,14,15,16], m_colors:{7:'#0056b3', 8:'#0056b3'} },
        { id: 14, title: "Sofar Inverter ↔ Pylontech", m: "Sofar (16-pin)", s: "Pylontech (RJ45)", m_pins: 16, links: [[7,4,'CAN-H'],[8,5,'CAN-L'],[9,6,'GND']], m_null:[1,2,3,4,5,6,10,11,12,13,14,15,16], s_null:[1,2,3], m_colors:{7:'#0056b3', 8:'#0056b3', 9:'#32CD32'}, s_colors:{4:'#0056b3', 5:'#0056b3', 6:'#32CD32'} }
    ];
};

// --- ЛОГИКА ИНТЕРФЕЙСА ---
function updateTexts() {
    const lang = localStorage.getItem('lang') || 'ru';
    const t = translations[lang];
    document.querySelectorAll('[data-t]').forEach(el => {
        if(t[el.dataset.t]) el.textContent = t[el.dataset.t];
    });
    const backBtn = document.getElementById('backBtn');
    if(backBtn) backBtn.textContent = t.back;
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.l === lang);
    });
}

function setLang(lang) {
    localStorage.setItem('lang', lang);
    updateTexts();
    if (document.getElementById('accordion')) renderAccordion();
}

// --- ОТРИСОВКА РАСПИНОВОК (SVG) ---
function renderAccordion() {
    const lang = localStorage.getItem('lang') || 'ru';
    const container = document.getElementById('accordion');
    if (!container) return;
    const pinouts = getPinouts(lang);
    container.innerHTML = pinouts.map(p => `
        <div class="acc-item" id="item-${p.id}">
            <div class="acc-header" onclick="togglePinout(${p.id})">${p.id}. ${p.title}</div>
            <div class="acc-content" id="c-${p.id}" style="display:none; padding:10px; text-align:center; border-top:1px solid #eee;">
                <div class="svg-wrap" onclick="zoomIn(document.getElementById('img-${p.id}').src)" style="cursor:zoom-in; border:1px solid #eee; border-radius:8px; overflow:hidden;">
                    <img class="img-overlay" id="img-${p.id}" style="width:100%; height:auto; display:block;">
                    <div id="svg-${p.id}" style="display:none"></div>
                </div>
                <p style="font-size:12px; color:#888; margin-top:8px;">${translations[lang].hint}</p>
            </div>
        </div>
    `).join('');
}

function togglePinout(id) {
    const content = document.getElementById(`c-${id}`);
    const item = document.getElementById(`item-${id}`);
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.acc-content').style.display = 'none';
    });
    if(!wasOpen) { 
        item.classList.add('open'); 
        content.style.display = 'block';
        drawSVG(id); 
    }
}

function drawSVG(id) {
    const lang = localStorage.getItem('lang') || 'ru';
    const data = getPinouts(lang).find(x => x.id === id);
    const target = document.getElementById(`svg-${id}`);
    if(target.innerHTML !== "") return;
    
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
        if(l[2]) { addLabel(id, l[0], l[2], 'm'); addLabel(id, l[1], l[2], 's'); }
    });
    renderToImg(id);
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

function addLabel(id, idx, txt, side) {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.setAttribute("x", side === 'm' ? 85 : 715); t.setAttribute("y", 126 + (idx-1)*36);
    t.setAttribute("font-family", "Arial"); t.setAttribute("font-size", "12"); t.setAttribute("font-weight", "bold");
    t.setAttribute("text-anchor", side === 'm' ? "end" : "start"); t.setAttribute("fill", "#d9534f");
    t.setAttribute("dominant-baseline", "middle"); t.textContent = txt;
    document.getElementById(`raw-${id}`).appendChild(t);
}

function renderToImg(id) {
    const svg = document.getElementById(`raw-${id}`);
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

// --- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ (КАЛЬКУЛЯТОРЫ) ---
function getNum(id) {
    const el = document.getElementById(id);
    return el ? parseFloat(el.value.replace(',', '.').trim()) : NaN;
}

// (Тут можно вставить функции calculateRange() и calculateString() из твоего кода без изменений)

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', () => {
    updateTexts();
    if (document.getElementById('accordion')) renderAccordion();

    // Исправленная функция обновления текстов
function updateTexts() {
    const lang = localStorage.getItem('lang') || 'ru';
    const t = translations[lang];

    // Обновляем все элементы с атрибутом data-t
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (t[key]) el.textContent = t[key];
    });

    // Обновляем кнопку назад (теперь она в стиле языковых кнопок)
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.textContent = t.back;
    }

    // Подсветка активной кнопки языка
    document.querySelectorAll('.lang-btn').forEach(b => {
        // Проверяем и атрибут onclick, и data-l для надежности
        const btnLang = b.getAttribute('data-l') || (b.getAttribute('onclick') || '').match(/'([^']+)'/)?.[1];
        b.classList.toggle('active', btnLang === lang);
    });
}

// Функция переключения
function setLang(lang) {
    localStorage.setItem('lang', lang);
    updateTexts();
    
    // Если мы на странице распиновок - перерисовываем их
    if (document.getElementById('accordion')) {
        renderAccordion();
    }
}
});
