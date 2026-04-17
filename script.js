let city = document.getElementById('input');
let searchBtn = document.getElementById('btn');
let loction = document.getElementById('loction');
let temp = document.getElementById('temp');
let time = document.getElementById('time');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let feels = document.getElementById('feels');



searchBtn.addEventListener('click', function () {
    console.log(city.value)

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
    fetch(url)
        
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            
            document.querySelector('.stats').style.display = 'flex';


            if(data.cod === "404"){
                loction.textContent = "City not found";
                return
            }
            console.log(data);

            loction.textContent = data.name;
            temp.textContent = Math.round(data.main.temp) + "°C";
            humidity.textContent = data.main.humidity;
            wind.textContent = Math.round(data.wind.speed) + " km/h";
            feels.textContent = Math.round(data.main.feels_like ) + "°C";
            

            let now = new Date();
            let hours = now.getHours();
            let min = now.getMinutes();
            if(min <  10){
                min = "0" + min;
            }

            time.textContent = hours + ":" + min;
        })



})


