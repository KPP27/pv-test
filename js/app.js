// Мультиязычный пакет
const T = {
    ru: {
        title: "📟 Калькулятор фотомодулей",
        l1: "Максимально допустимое напряжение DC на входе инвертора",
        l2: "Напряжение холостого хода модуля (STC)",
        l3: "Минимальная температура на объекте (°C)",
        l4: "Температурный коэффициент Voc (%)",
        ph1: "Например: 1100",
        ph2: "Например: 41.5",
        ph3: "Например: -25",
        ph4: "Например: -0.29",
        calc: "Рассчитать",
        empty: "⚠️ Заполните все поля",
        result: "🔋 Максимальное количество модулей: ",
        copyBtn: "📋 Скопировать результат",
        copied: "✅ Скопировано!",
        calculatedVoc: "📊 Расчетный Voc",
        explanation: "Напряжение при минимальной температуре"
    },
    ua: {
        title: "📟 Калькулятор фотомодулів",
        l1: "Максимальна напруга DC інвертора",
        l2: "Voc модуля (STC)",
        l3: "Мінімальна температура на об'єкті (°C)",
        l4: "Температурний коефіцієнт Voc (%)",
        ph1: "Наприклад: 1100",
        ph2: "Наприклад: 41.5",
        ph3: "Наприклад: -25",
        ph4: "Наприклад: -0.29",
        calc: "Розрахувати",
        empty: "⚠️ Заповніть всі поля",
        result: "🔋 Максимальна кількість модулів: ",
        copyBtn: "📋 Копіювати результат",
        copied: "✅ Скопійовано!",
        calculatedVoc: "📊 Розрахунковий Voc",
        explanation: "Напруга при мінімальній температурі"
    },
    en: {
        title: "📟 PV Module Calculator",
        l1: "Max DC input voltage of inverter",
        l2: "Module Voc (STC)",
        l3: "Minimum ambient temperature (°C)",
        l4: "Temperature coefficient Voc (%)",
        ph1: "Example: 1100",
        ph2: "Example: 41.5",
        ph3: "Example: -25",
        ph4: "Example: -0.29",
        calc: "Calculate",
        empty: "⚠️ Please fill all fields",
        result: "🔋 Maximum number of modules: ",
        copyBtn: "📋 Copy result",
        copied: "✅ Copied!",
        calculatedVoc: "📊 Calculated Voc",
        explanation: "Voltage at minimum temperature"
    },
    pl: {
        title: "📟 Kalkulator modułów PV",
        l1: "Maksymalne napięcie wejściowe DC falownika",
        l2: "Voc modułu (STC)",
        l3: "Minimalna temperatura otoczenia (°C)",
        l4: "Współczynnik temperaturowy Voc (%)",
        ph1: "Przykład: 1100",
        ph2: "Przykład: 41.5",
        ph3: "Przykład: -25",
        ph4: "Przykład: -0.29",
        calc: "Oblicz",
        empty: "⚠️ Uzupełnij wszystkie pola",
        result: "🔋 Maksymalna liczba modułów: ",
        copyBtn: "📋 Skopiuj wynik",
        copied: "✅ Skopiowano!",
        calculatedVoc: "📊 Obliczony Voc",
        explanation: "Napięcie przy minimalnej temperaturze"
    }
};

// Установка языка
function applyLang(lang) {
    localStorage.setItem("lang", lang);
    const t = T[lang];

    // Используем getElementById для надежности
    document.getElementById('title').textContent = t.title;
    document.getElementById('l1').textContent = t.l1;
    document.getElementById('l2').textContent = t.l2;
    document.getElementById('l3').textContent = t.l3;
    document.getElementById('l4').textContent = t.l4;

    document.getElementById('E13').placeholder = t.ph1;
    document.getElementById('E14').placeholder = t.ph2;
    document.getElementById('E15').placeholder = t.ph3;
    document.getElementById('E16').placeholder = t.ph4;

    document.getElementById('calcBtn').textContent = t.calc;
    document.getElementById('copyBtn').textContent = t.copyBtn;

    document.querySelectorAll(".lang-btn").forEach(btn =>
        btn.classList.toggle("active", btn.dataset.lang === lang)
    );
}

// Выбор языка вручную
document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.onclick = () => applyLang(btn.dataset.lang);
});

// Автоопределение Telegram или сохраненного языка
try {
    const tgLang = window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code?.slice(0,2);
    const savedLang = localStorage.getItem("lang");
    const finalLang = (T[tgLang] ? tgLang : (savedLang || "ru"));
    applyLang(finalLang);
} catch {
    applyLang(localStorage.getItem("lang") || "ru");
}

let lastResult = "";
let lastCalculationData = {};

function calculate() {
    let lang = localStorage.getItem("lang") || "ru";
    let t = T[lang];

    let E13v = +document.getElementById('E13').value;
    let E14v = +document.getElementById('E14').value;
    let E15v = +document.getElementById('E15').value;
    let E16v = +document.getElementById('E16').value;
    const resElem = document.getElementById('result');
    const copyBtn = document.getElementById('copyBtn');

    if (!E13v || !E14v || !E15v || !E16v) {
        resElem.textContent = t.empty;
        resElem.classList.add("show");
        copyBtn.style.display = "none";
        return;
    }

    // Формула Voc при мин. температуре
    let VocCorr = E14v * (1 + (E15v - 25) * (E16v / 100));
    let count = Math.floor(E13v / VocCorr);

    lastResult = t.result + count;
    
    lastCalculationData = {
        maxVoltage: E13v,
        moduleVoc: E14v,
        minTemp: E15v,
        tempCoefficient: E16v,
        calculatedVoc: VocCorr.toFixed(2),
        maxModules: count,
        lang: lang
    };

    resElem.textContent = lastResult;
    resElem.classList.remove("show");
    setTimeout(() => resElem.classList.add("show"), 20);

    copyBtn.style.display = "block";
    copyBtn.classList.remove("copied");
    copyBtn.textContent = t.copyBtn;
}

function copyToClipboard() {
    let lang = localStorage.getItem("lang") || "ru";
    let t = T[lang];
    const copyBtn = document.getElementById('copyBtn');
    
    let textToCopy = ` ${t.title}\n\n`;
    textToCopy += `✅ ${t.l1}: ${lastCalculationData.maxVoltage} V\n`;
    textToCopy += `✅ ${t.l2}: ${lastCalculationData.moduleVoc} V\n`;
    textToCopy += `✅ ${t.l3}: ${lastCalculationData.minTemp} °C\n`;
    textToCopy += `✅ ${t.l4}: ${lastCalculationData.tempCoefficient}%\n`;
    textToCopy += `${t.calculatedVoc}: ${lastCalculationData.calculatedVoc} V (${t.explanation})\n\n`;
    textToCopy += `📊 ${lastResult}`;
    
    navigator.clipboard.write
