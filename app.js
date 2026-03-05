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
        pcs: "шт."
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
        pcs: "шт."
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
        pcs: "szt."
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
        pcs: "pcs."
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
const pinoutData = [
    {
        id: 1,
        title: "Deye / LuxPower - Pylontech (CAN)",
        leftName: "Inverter",
        rightName: "Battery",
        links: [[4,4, "CAN-H"], [5,5, "CAN-L"]] // [пин слева, пин справа, подпись]
    },
    {
        id: 2,
        title: "Victron - Pylontech (CAN)",
        leftName: "Victron",
        rightName: "Pylontech",
        links: [[7,4, "CAN-H"], [8,5, "CAN-L"]]
    }
];

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

