const button = document.querySelector('.js-search-button');
const input = document.querySelector('.js-input-city');

const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humidityStatus = document.getElementById('humidityStatus');
const windStatus = document.getElementById('windStatus');
const weatherCondition = document.querySelector('.weatherCondition');

async function getData(cityName){
    const promiseData = await fetch(`http://api.weatherapi.com/v1/current.json?key=97029b6b3334445ba7a100656231910&q=${cityName}&aqi=yes`);
    return await promiseData.json()
}

button.addEventListener('click', async () => {
    const data = input.value;
    const result = await getData(data);
    // console.log(result);
    city.innerText = `${result.location.name}`;
    temp.innerText = `${result.current.temp_c} °C`;
    humidityStatus.innerText = `${result.current.humidity} %`;
    windStatus.innerText = `${result.current.wind_kph} KM/H`;
    if(result.current.condition.text === "Mist"){
        weatherCondition.src = "./weather-app-img/mist.png"
    } else if(result.current.condition.text === "Clear" || result.current.condition.text === "Sunny"){
        weatherCondition.src = "./weather-app-img/clear.png"
    } else if(result.current.condition.text === "Partly cloudy" || result.current.condition.text === "Overcast"){
        weatherCondition.src = "./weather-app-img/clouds.png"
    } else if(result.current.condition.text === "Light rain"){
        weatherCondition.src = "./weather-app-img/rain.png"
    } else if(result.current.condition.text === "Snow"){
        weatherCondition.src = "./weather-app-img/snow.png"
    }
});