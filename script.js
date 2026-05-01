const number = document.querySelector("#number");
const inputArea = document.querySelector("#inputArea");
const city = document.querySelector(".city");
const state = document.querySelector(".state");
const tempState = document.querySelector("#tempState");
const minTemp = document.querySelector(".minTemp");
const maxTemp = document.querySelector(".maxTemp");
const dayTime = document.querySelector(".dayTime");
const monthTime = document.querySelector(".monthTime");
const yearTime = document.querySelector(".yearTime");
const apiKey = "07deca061755ae1efb07aa84311445cf";
const time = new Date();

dayTime.innerHTML = time.toLocaleDateString("pt-BR", { weekday: "long" })
monthTime.innerHTML = time.toLocaleDateString("pt-BR", { month: "long" })
yearTime.innerHTML = time.getFullYear();

function temp() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputArea.value}&appid=${apiKey}&units=metric&lang=pt_br`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        city.innerHTML = data.name + ",";
        state.innerHTML = data.sys.country;
        tempState.innerHTML = data.weather[0].description;
        minTemp.innerHTML = data.main.temp_min.toFixed(0) + "°C" + " " + "/";
        maxTemp.innerHTML = data.main.temp_max.toFixed(0) + "°C";
        number.innerHTML = data.main.temp.toFixed(0) + "°C";
    });
}

inputArea.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        temp();
    }
})