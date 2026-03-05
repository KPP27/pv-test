const translations = {
    ru: { 
        w_h: "Инструменты", w_p: "Помощник инженера", 
        m1_t: "Макс. длина стринга", m1_d: "Расчет напряжения", 
        m2_t: "Распиновки BMS", m2_d: "Схемы CAN / RS485 / RJ45",
        m3_t: "Калькулятор диапазона", m3_d: "Количество модулей (Min/Max)",
        back: "← Назад", hint: "Нажмите на схему для увеличения", 
        straight: "Прямая витая пара (T568B)", redDips: "Красные дипы"
    },
    ua: { 
        w_h: "Інструменти", w_p: "Помічник інженера", 
        m1_t: "Макс. довжина стринга", m1_d: "Розрахунок напруги", 
        m2_t: "Розпіновки BMS", m2_d: "Схеми CAN / RS485 / RJ45",
        m3_t: "Калькулятор діапазону", m3_d: "Кількість модулів (Min/Max)",
        back: "← Назад", hint: "Натисніть на схему для збільшення",
        straight: "Пряма вита пара (T568B)", redDips: "Червоні діпи"
    },
    // ... PL и EN добавляются аналогично с использованием коротким тире "-"
};

function setLang(lang) {
    localStorage.setItem('lang', lang);
    updateTexts();
    if (typeof initAccordion === 'function') initAccordion();
}

function updateTexts() {
    const lang = localStorage.getItem('lang') || 'ru';
    const t = translations[lang];
    
    // Обновляем все элементы с атрибутом data-t
    document.querySelectorAll('[data-t]').forEach(el => {
        if(t[el.dataset.t]) el.textContent = t[el.dataset.t];
    });

    // Обновляем кнопку назад, если она есть
    const backBtn = document.getElementById('backBtn');
    if(backBtn && t.back) backBtn.textContent = t.back;

    // Обновляем активные кнопки переключателя
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.l === lang);
    });
}

// Вспомогательная функция для отрисовки (если мы на странице распиновок)
function toggleAccordion(id) {
    const cont = document.getElementById(`c-${id}`);
    if(!cont) return;
    const item = cont.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
    if(!isOpen) { 
        item.classList.add('open'); 
        if (typeof drawPinout === 'function') drawPinout(id); 
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', updateTexts);
