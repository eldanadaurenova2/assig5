document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');

    themeToggle.onclick = () => {
        themeToggle.textContent = "Загрузка...";

        setTimeout(() => {
            document.body.classList.toggle("day-theme");
            themeToggle.textContent = document.body.classList.contains("day-theme") ? "Ночная тема" : "Дневная тема";
        }, 3000);
    };
});
document.addEventListener('DOMContentLoaded', () => {
    const weatherData = document.getElementById('weatherData');
    const city = 'Astana';


    async function getWeather() {
        try {
            const response = await fetch(`https://wttr.in/${city}?format=%C+%t&lang=ru`);
            const data = await response.text();
            weatherData.textContent = `Погода в ${city}: ${data}`;
        } catch (error) {
            weatherData.textContent = 'Не удалось загрузить данные о погоде.';
        }
    }


    getWeather();
});
