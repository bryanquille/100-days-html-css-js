const city = document.querySelector('#place');
const iconWeather = document.querySelector('#icon-weather');
const temperature = document.querySelector('#temperature');
const weatherDescription = document.querySelector('#weather-description');
const windVelocity = document.querySelector('#wind-velocity');
const wmoCodes = {
    "0": "Clear sky",
    "1": "Mainly clear, partly cloudy, and overcast",
    "2": "Mainly clear, partly cloudy, and overcast",
    "3": "Mainly clear, partly cloudy, and overcast",
    "45": "Fog and depositing rime fog",
    "48": "Fog and depositing rime fog",
    "51": "Drizzle: Light, moderate, and dense intensity",
    "53": "Drizzle: Light, moderate, and dense intensity",
    "55": "Drizzle: Light, moderate, and dense intensity",
    "56": "Freezing Drizzle: Light and dense intensity",
    "57": "Freezing Drizzle: Light and dense intensity",
    "61": "Rain: Slight, moderate and heavy intensity",
    "63": "Rain: Slight, moderate and heavy intensity",
    "65": "Rain: Slight, moderate and heavy intensity",
    "66": "Freezing Rain: Light and heavy intensity",
    "67": "Freezing Rain: Light and heavy intensity",
    "71": "Snow fall: Slight, moderate, and heavy intensity",
    "73": "Snow fall: Slight, moderate, and heavy intensity",
    "75": "Snow fall: Slight, moderate, and heavy intensity",
    "77": "Snow grains",
    "80": "Rain showers: Slight, moderate, and violent",
    "81": "Rain showers: Slight, moderate, and violent",
    "82": "Rain showers: Slight, moderate, and violent",
    "85": "Snow showers slight and heavy",
    "86": "Snow showers slight and heavy",
    "95": "Thunderstorm: Slight or moderate",
    "96": "Thunderstorm with slight and heavy hail",
    "99": "Thunderstorm with slight and heavy hail"
}

window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lon = position.coords.longitude;
            const lat = position.coords.latitude;

            const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,is_day,weather_code,wind_speed_10m&wind_speed_unit=ms&timezone=auto`;

            fetch(weatherUrl)
                .then(response => response.json())
                .then(data => {
                    temperature.textContent = data.current.temperature_2m;
                    if (data.current.is_day === 1) {
                        iconWeather.textContent = 'sunny';
                        iconWeather.style = 'color: #fefa35;';
                    } else {
                        iconWeather.textContent = 'nightlight';
                        iconWeather.style = 'color: #163859;';
                    }
                    weatherDescription.textContent = wmoCodes[data.current.weather_code];
                    windVelocity.textContent = data.current.wind_speed_10m

                })
                .catch(error => {
                    alert('Something happened wrong, please try it later again.');
                    console.log(error);
                });

            const cityUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;

            fetch(cityUrl)
                .then(response => response.json())
                .then(data => {
                    city.textContent = data.city;
                })
                .catch(error => {
                    alert('Something happened wrong, please try it later again.');
                    console.log(error);
                });
        });
    }
});
