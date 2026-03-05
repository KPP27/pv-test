const translations = {
    ru: { 
        w_h: "Инструменты", w_p: "Помощник инженера", 
        m1_t: "Макс. длина стринга", m1_d: "Расчет напряжения", 
        m2_t: "Распиновки BMS", m2_d: "Схемы CAN / RS485 / RJ45",
        m3_t: "Калькулятор диапазона", m3_d: "Количество модулей (Min/Max)",
        back: "← Назад",
        title_range: "Диапазон модулей (Min/Max)",
        l1: "Voc модуля (STC) (В)",
        l2: "Vmp модуля (STC) (В)",
        l3: "Температурный коэффициент Voc (%)",
        l4: "Мин. температура объекта (°C)",
        l5: "Макс. температура объекта (°C)",
        l6: "Макс. предел MPPT инвертора (В)",
        l7: "Мин. предел MPPT инвертора (В)",
        calc: "Рассчитать диапазон",
        empty: "⚠️ Заполните все поля",
        copyBtn: "📋 Скопировать отчет",
        copied: "✅ Скопировано!",
        res_min: "Минимум в стринге",
        res_max: "Максимум в стринге",
        pcs: "шт.",
        translations.ru.title_string = "Максимальная длина стринга",
        translations.ru.sl1 = "Макс. напряжение DC инвертора (В)",
        translations.ru.sl2 = "Напряжение Voc модуля (В)",
        translations.ru.sl3 = "Мин. температура воздуха (°C)",
        translations.ru.sl4 = "Темп. коэффициент Voc (%/°C)",
        translations.ru.res_string = "Макс. модулей в стринге:",
        translations.ru.calcVoc = "Расчетный Voc при мин. темп.",
        translations.ru.v_unit = "В"
    },
    ua: { 
        w_h: "Інструменти", w_p: "Помічник інженера", 
        m1_t: "Макс. довжина стринга", m1_d: "Розрахунок напруги", 
        m2_t: "Розпіновки BMS", m2_d: "Схеми підключення",
        m3_t: "Калькулятор діапазону", m3_d: "Кількість модулів (Min/Max)",
        back: "← Назад",
        title_range: "Діапазон модулів (Min/Max)",
        l1: "Voc модуля (STC) (В)",
        l2: "Vmp модуля (STC) (В)",
        l3: "Температурний коефіцієнт Voc (%)",
        l4: "Мін. температура об'єкта (°C)",
        l5: "Макс. температура об'єкта (°C)",
        l6: "Макс. межа MPPT інвертора (В)",
        l7: "Мін. межа MPPT інвертора (В)",
        calc: "Розрахувати діапазон",
        empty: "⚠️ Заповніть всі поля",
        copyBtn: "📋 Копіювати звіт",
        copied: "✅ Скопійовано!",
        res_min: "Мінімум у стрингу",
        res_max: "Максимум у стрингу",
        pcs: "шт.",
        translations.ua.title_string = "Максимальна довжина стринга",
        translations.ua.sl1 = "Макс. напруга DC інвертора (В)",
        translations.ua.sl2 = "Напруга Voc модуля (В)",
        translations.ua.sl3 = "Мін. температура повітря (°C)",
        translations.ua.sl4 = "Темп. коефіцієнт Voc (%/°C)",
        translations.ua.res_string = "Макс. модулів у ланцюгу:",
        translations.ua.calcVoc = "Розрахунковий Voc при мін. темп.",
        translations.ua.v_unit = "В"
    },
    pl: { 
        w_h: "Narzędzia", w_p: "Asystent inżyniera", 
        m1_t: "Długość stringu", m1_d: "Obliczanie napięcia", 
        m2_t: "Pinouty BMS", m2_d: "Schematy",
        m3_t: "Kalkulator zakresu", m3_d: "Liczba modułów (Min/Max)",
        back: "← Wstecz",
        title_range: "Zakres modułów (Min/Max)",
        l1: "Voc modułu (STC) (V)",
        l2: "Vmp modułu (STC) (V)",
        l3: "Współczynnik temp. Voc (%)",
        l4: "Min. temperatura otoczenia (°C)",
        l5: "Max. temperatura otoczenia (°C)",
        l6: "Max zakres MPPT falownika (V)",
        l7: "Min zakres MPPT falownika (V)",
        calc: "Oblicz zakres",
        empty: "⚠️ Uzupełnij pola",
        copyBtn: "📋 Skopiuj raport",
        copied: "✅ Skopiowano!",
        res_min: "Minimum в stringu",
        res_max: "Maksimum в stringu",
        pcs: "szt.",
        translations.pl.title_string = "Maksymalna długość stringu",
        translations.pl.sl1 = "Max napięcie DC falownika (V)",
        translations.pl.sl2 = "Napięcie Voc modułu (V)",
        translations.pl.sl3 = "Min. temperatura otoczenia (°C)",
        translations.pl.sl4 = "Współczynnik temp. Voc (%/°C)",
        translations.pl.res_string = "Maks. liczba modułów:",
        translations.pl.calcVoc = "Obliczone Voc w min. temp.",
        translations.pl.v_unit = "V"
    },
    en: { 
        w_h: "Toolkit", w_p: "Engineer Assistant", 
        m1_t: "Max String Length", m1_d: "Voltage calculation", 
        m2_t: "BMS Pinouts", m2_d: "Diagrams",
        m3_t: "String Range Calc", m3_d: "Module count (Min/Max)",
        back: "← Back",
        title_range: "Module Range (Min/Max)",
        l1: "Module Voc (STC) (V)",
        l2: "Module Vmp (STC) (V)",
        l3: "Temp. coefficient Voc (%)",
        l4: "Min ambient temperature (°C)",
        l5: "Max ambient temperature (°C)",
        l6: "Max MPPT voltage (V)",
        l7: "Min MPPT voltage (V)",
        calc: "Calculate Range",
        empty: "⚠️ Fill all fields",
        copyBtn: "📋 Copy report",
        copied: "✅ Copied!",
        res_min: "Min modules in string",
        res_max: "Max modules in string",
        pcs: "pcs.",
        translations.en.title_string = "Maximum String Length",
        translations.en.sl1 = "Max DC Inverter Voltage (V)",
        translations.en.sl2 = "Module Voc (V)",
        translations.en.sl3 = "Min. Ambient Temperature (°C)",
        translations.en.sl4 = "Temp. Coefficient Voc (%/°C)",
        translations.en.res_string = "Max modules per string:",
        translations.en.calcVoc = "Calculated Voc at min temp",
        translations.en.v_unit = "V",
    }
};

function setLang(lang) {
    localStorage.setItem('lang', lang);
    updateTexts();
}

function updateTexts() {
    const lang = localStorage.getItem('lang') || 'ru';
    const t = translations[lang];

    document.querySelectorAll('[data-t]').forEach(el => {
        if(t[el.dataset.t]) el.textContent = t[el.dataset.t];
    });

    // Обновляем кнопку назад, если она есть на странице
    const backBtn = document.getElementById('backBtn');
    if(backBtn) backBtn.textContent = t.back;

    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.l === lang);
    });
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', updateTexts);

// Данные распиновок
const getPinouts = (lang) => {
    const t = translations[lang]; // Берем переводы из общего объекта
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

// Функция отрисовки аккордеона
function renderAccordion() {
    const container = document.getElementById('accordion');
    if (!container) return;
    
    container.innerHTML = pinoutData.map(item => `
        <div class="acc-item" id="item-${item.id}">
            <div class="acc-header" onclick="toggleItem(${item.id})">
                ${item.title}
            </div>
            <div class="acc-content">
                <div class="svg-container" onclick="openZoom(${item.id})">
                    <p style="font-size:12px; color:#70757a;">Нажмите, чтобы открыть схему</p>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleItem(id) {
    const el = document.getElementById(`item-${id}`);
    const wasOpen = el.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) el.classList.add('open');
}

// Вызываем отрисовку при загрузке
document.addEventListener('DOMContentLoaded', () => {
    updateTexts(); // ваша функция перевода
    renderAccordion();
});
let lastCalcData = null;

function getNum(id) {
    const el = document.getElementById(id);
    if (!el) return NaN;
    const val = el.value.replace(',', '.').trim();
    return val === "" ? NaN : parseFloat(val);
}

function calculateRange() {
    const lang = localStorage.getItem("lang") || "ru";
    const t = translations[lang];
    
    const v_voc = getNum('v_voc');
    const v_vmp = getNum('v_vmp');
    const kv = getNum('kv');
    const t_min = getNum('t_min');
    const t_max = getNum('t_max');
    const mppt_max = getNum('v_mppt_max');
    const mppt_min = getNum('v_mppt_min');

    const resDiv = document.getElementById('result');
    const copyBtn = document.getElementById('copyBtn');

    if ([v_voc, v_vmp, kv, t_min, t_max, mppt_max, mppt_min].some(isNaN)) {
        resDiv.innerHTML = `<span style="color:red; font-weight:bold;">${t.empty}</span>`;
        resDiv.style.display = "block";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }

    // Расчет коррекции напряжений по температуре
    const voc_min_t = v_voc * (1 + (t_min - 25) * (kv / 100));
    const vmp_max_t = v_vmp * (1 + (t_max - 25) * (kv / 100));

    const min_pcs = Math.ceil(mppt_min / vmp_max_t);
    const max_pcs = Math.floor(mppt_max / voc_min_t);

    lastCalcData = {
        title: t.title_range,
        result: `${t.res_min}: ${min_pcs} ${t.pcs} / ${t.res_max}: ${max_pcs} ${t.pcs}`
    };

    resDiv.innerHTML = `
        <div class="res-line">${t.res_min}: <span class="res-val">${min_pcs} ${t.pcs}</span></div>
        <div class="res-line">${t.res_max}: <span class="res-val">${max_pcs} ${t.pcs}</span></div>
    `;
    resDiv.style.display = "block";
    if (copyBtn) copyBtn.style.display = "block";
}

// Универсальный обработчик копирования с учетом кросс-платформенности
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'copyBtn') {
        if (!lastCalcData) return;
        const lang = localStorage.getItem("lang") || "ru";
        const t = translations[lang];
        
        const textToCopy = `⚡ ${lastCalcData.title}\n📊 РЕЗУЛЬТАТ: ${lastCalcData.result}`;

        // Метод navigator.clipboard надежен для Mini App
        navigator.clipboard.writeText(textToCopy).then(() => {
            const btn = e.target;
            const originalText = t.copyBtn;
            btn.textContent = t.copied;
            btn.classList.add("copied");
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove("copied");
            }, 2000);
        }).catch(err => {
            console.error('Ошибка копирования: ', err);
        });
    }
});

let lastStringCalc = null;

function calculateString() {
    const lang = localStorage.getItem("lang") || "ru";
    const t = translations[lang];
    
    const v_inv = getNum('v_inv');
    const v_voc = getNum('v_voc');
    const t_min = getNum('t_min');
    const t_coeff = getNum('t_coeff');
    
    const resDiv = document.getElementById('result');
    const copyBtn = document.getElementById('copyStringBtn');

    if ([v_inv, v_voc, t_min, t_coeff].some(isNaN)) {
        resDiv.innerHTML = `<span style="color:red; font-weight:bold;">${t.empty}</span>`;
        resDiv.style.display = "block";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }

    const vocCorr = v_voc * (1 + (t_min - 25) * (t_coeff / 100));
    const count = Math.floor(v_inv / vocCorr);

    lastStringCalc = {
        title: t.title_string,
        result: `${t.res_string} ${count} шт.`,
        detail: `${t.calcVoc}: ${vocCorr.toFixed(2)} ${t.v_unit}`,
        raw: { v_inv, v_voc, t_min, t_coeff }
    };

    resDiv.innerHTML = `
        <div class="res-line" style="font-size:18px; color:var(--accent);">${t.res_string} ${count}</div>
        <div class="res-sub" style="font-size:13px; color:var(--text-muted);">${t.calcVoc}: <b>${vocCorr.toFixed(2)} ${t.v_unit}</b></div>
    `;
    resDiv.style.display = "block";
    if (copyBtn) copyBtn.style.display = "block";
}

// Слушатель для кнопки копирования в string.html
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'copyStringBtn') {
        if (!lastStringCalc) return;
        const lang = localStorage.getItem("lang") || "ru";
        const t = translations[lang];
        
        let text = `- ${lastStringCalc.title} -\n`;
        text += `${t.sl1}: ${lastStringCalc.raw.v_inv} V\n`;
        text += `${t.sl2}: ${lastStringCalc.raw.v_voc} V\n`;
        text += `${t.sl3}: ${lastStringCalc.raw.t_min} °C\n`;
        text += `${t.sl4}: ${lastStringCalc.raw.t_coeff} %/°C\n`;
        text += `--------------------------\n`;
        text += `${lastStringCalc.detail}\n`;
        text += `${lastStringCalc.result}`;

        navigator.clipboard.writeText(text).then(() => {
            const btn = e.target;
            const originalText = t.copyBtn;
            btn.textContent = t.copied;
            btn.classList.add("copied");
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove("copied");
            }, 2000);
        });
    }
});
