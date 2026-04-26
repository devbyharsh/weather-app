let city = document.getElementById('input');
let searchBtn = document.getElementById('btn');
let cityName = document.getElementById('location');
let temp = document.getElementById('temp');
let time = document.getElementById('time');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let feels = document.getElementById('feels');



searchBtn.addEventListener('click', async function () {

    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=7e70bb7ea5b9828e0f77c350f0ed5ffe&units=metric`

        let response = await fetch(url);
        let data = await response.json();

        document.querySelector('.stats').style.display = 'flex';

        if (data.cod === "404") {
            cityName.textContent = "City not found";
            return
        }
        console.log(data);

        cityName.textContent = data.name;
        temp.textContent = Math.round(data.main.temp) + "°C";
        humidity.textContent = data.main.humidity;
        wind.textContent = Math.round(data.wind.speed) + " km/h";
        feels.textContent = Math.round(data.main.feels_like) + "°C";


        let now = new Date();
        let hours = now.getHours();
        let min = now.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }

        time.textContent = hours + ":" + min;


    } catch (error) {
        cityName.textContent = 'No internet connection !'
        console.log(error.message);

    };

})


