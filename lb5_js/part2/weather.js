document.getElementById('getWeatherBtn').addEventListener('click', function() { 
    const apiKey = '0c52793a853da06f75d5d09f784c8cfd ';  
    const cityName = 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=uk`;


    document.getElementById('weatherData').innerHTML = '<p>Завантаження...</p>';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Не вдалося отримати дані');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main?.temp || 'N/A'; 
            const humidity = data.main?.humidity || 'N/A'; 
            const windSpeed = data.wind?.speed || 'N/A';  
            const weatherInfo = `
                <p>Температура: ${temperature}°C</p>
                <p>Вологість: ${humidity}%</p>
                <p>Швидкість вітру: ${windSpeed} м/с</p>
            `;
            document.getElementById('weatherData').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherData').innerHTML = `<p>Сталася помилка: ${error.message}</p>`;
        });
});
