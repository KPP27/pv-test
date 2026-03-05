const translations = {
    ru: { 
        w_h: "Инструменты", w_p: "Помощник инженера", 
        m1_t: "Макс. длина стринга", m1_d: "Расчет напряжения", 
        m2_t: "Распиновки BMS", m2_d: "Схемы CAN / RS485 / RJ45",
        m3_t: "Калькулятор диапазона", m3_d: "Количество модулей (Min/Max)",
        back: "← Назад"
    },
    ua: { 
        w_h: "Інструменти", w_p: "Помічник інженера", 
        m1_t: "Макс. довжина стринга", m1_d: "Розрахунок напруги", 
        m2_t: "Розпіновки BMS", m2_d: "Схеми підключення",
        m3_t: "Калькулятор діапазону", m3_d: "Кількість модулів (Min/Max)",
        back: "← Назад"
    },
    pl: { 
        w_h: "Narzędzia", w_p: "Asystent inżyniera", 
        m1_t: "Długość stringu", m1_d: "Obliczanie napięcia", 
        m2_t: "Pinouty BMS", m2_d: "Schematy",
        m3_t: "Kalkulator zakresu", m3_d: "Liczba modułów (Min/Max)",
        back: "← Wstecz"
    },
    en: { 
        w_h: "Toolkit", w_p: "Engineer Assistant", 
        m1_t: "Max String Length", m1_d: "Voltage calculation", 
        m2_t: "BMS Pinouts", m2_d: "Diagrams",
        m3_t: "String Range Calc", m3_d: "Module count (Min/Max)",
        back: "← Back"
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


