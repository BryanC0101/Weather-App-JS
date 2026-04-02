// https://api.openweathermap.org/data/2.5/weather?q=London&appid=b8cf24dd62002aa2203abe81f1acd6cd&units=metric

const API_KEY = "b8cf24dd62002aa2203abe81f1acd6cd";
const input = document.getElementById("weather-input");
const button = document.getElementById("weather-button");
const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");
const cityDesc = document.getElementById("city-desc");


function addCity() {
    if (input.value == "") {
        alert("Você precisa digitar o nome de uma cidade para obter as informações do clima.");
    } else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric`)
        .then(resposta => resposta.json())
        .then(dados => {
            cityName.innerText = dados.name;
            cityTemp.innerText = `${dados.main.temp}°C`;
            cityDesc.innerText = dados.weather[0].description;
        })
        input.value = "";
    }
}
