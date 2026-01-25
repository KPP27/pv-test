// Проверка при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('js-status');
    if (status) {
        status.innerText = "✅ JS успешно подключен!";
        status.style.color = "green";
    }
});

function checkJS() {
    alert("Скрипт работает отлично!");
}
