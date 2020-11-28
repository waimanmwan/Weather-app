// time
let now = new Date();
console.log(now);

let currentHours = now.getHours();
if (currentHours<10){
currentHours=`0${currentHours}`;
}


let currentMinutes = now.getMinutes();
if (currentMinutes<10){
currentMinutes=`0${currentMinutes}`;
}


let currentTime = `${currentHours} : ${currentMinutes}`;
let headingTime = document.querySelector("h2");
headingTime.innerHTML = currentTime;

// date

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days);

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

let currentDay = days[now.getDay()];
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();
let currentYear = now.getFullYear();

let nowDate = `${currentDay} ${currentDate} ${currentMonth} , ${currentYear}`;

let headingDate = document.querySelector("h3");
headingDate.innerHTML = nowDate;

function forecastHours(timestamp){
  let now = new Date(timestamp);
console.log(now);

let hours = now.getHours();
if (hours<10){
hours=`0${hours}`;
}


let minutes = now.getMinutes();
if (minutes<10){
minutes=`0${minutes}`;
}
  return `${hours}:${minutes}`;
}


// convert temperature

function showFahrenheit(event){
  event.preventDefault();
  let fahrenheitTemperature= document.querySelector("#currentDegree");
  celsiusClick.classList.remove("active");
  fahrenheitClick.classList.add("active");
  let fahrenheitShowTemp =(celsiusTemperature *9)/5+32;
  fahrenheitTemperature.innerHTML= Math.round(fahrenheitShowTemp);
}

function showCelsius(event){
  event.preventDefault();
  celsiusClick.classList.add("active");
  fahrenheitClick.classList.remove("active");
  let celsiusShowTemp= document.querySelector("#currentDegree");
  celsiusShowTemp.innerHTML= Math.round(celsiusTemperature);
}

let celsiusTemperature=null;


let fahrenheitClick= document.querySelector("#fahrenheit");
fahrenheitClick.addEventListener("click", showFahrenheit);

let celsiusClick= document.querySelector("#celsius");
celsiusClick.addEventListener("click", showCelsius);

// search city location

function temp(response) {
console.log(response.data);
document.querySelector("#searchLocation").innerHTML = response.data.name;
document.querySelector(".currentDegree").innerHTML = Math.round(
response.data.main.temp);
document.querySelector(".windSpeed").innerHTML= Math.round(response.data.wind.speed);
document.querySelector(".humidity").innerHTML= response.data.main.humidity;
celsiusTemperature= response.data.main.temp;
let iconElement=document.querySelector("#currentIcon")
iconElement.setAttribute("src",
`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}
        


function foreTemp(response1){
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML =null;
let forecast=null;


for (let index =0; index< 6 ; index++) {
forecast=response1.data.list[index];
  forecastElement.innerHTML +=`


<div class="col">
<div class="row" id="forecastHours">
${forecastHours(forecast.dt *1000)}
</div>
<div class="row">
<img id="forecastIcon" src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"/>
</div>
<div class="row" id="forecastTemp">
${Math.round(forecast.main.temp)}°C
</div>
</div>

`; 
}
}

function searchCity (city){
  let unit = "metric";
  let apiKey = "c3d2257e9dc82191e8d794596274f050";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(temp);
  let foreApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(foreApiUrl).then(foreTemp);
}

function searchCitySubmit(event){
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  searchCity (city);
}

function searchLocation (position){
let unit = "metric";
  let apiKey = "c3d2257e9dc82191e8d794596274f050";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(temp);
  let foreApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(foreApiUrl).then(foreTemp);
}

function showCityPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let form = document.querySelector("#your-city");
form.addEventListener("submit", searchCitySubmit);

let currentButton = document.querySelector("#currentButton");
currentButton.addEventListener("click", showCityPosition);

// city link response

function parisResponse(event){
  event.preventDefault();
  let unit = "metric";
  let apiKey = "c3d2257e9dc82191e8d794596274f050";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(temp);
  let foreApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=${apiKey}&units=${unit}`;
  axios.get(foreApiUrl).then(foreTemp);
}

function londonResponse(event){
  event.preventDefault();
  let unit = "metric";
  let apiKey = "c3d2257e9dc82191e8d794596274f050";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(temp);
  let foreApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=${apiKey}&units=${unit}`;
  axios.get(foreApiUrl).then(foreTemp);
}

function beijingResponse(event){
  event.preventDefault();
  let unit = "metric";
  let apiKey = "c3d2257e9dc82191e8d794596274f050";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=beijing&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(temp);
  let foreApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=beijing&appid=${apiKey}&units=${unit}`;
  axios.get(foreApiUrl).then(foreTemp);
}

function tokyoResponse(event){
  event.preventDefault();
  let unit = "metric";
  let apiKey = "c3d2257e9dc82191e8d794596274f050";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(temp);
  let foreApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=tokyo&appid=${apiKey}&units=${unit}`;
  axios.get(foreApiUrl).then(foreTemp);
}

let parisLink = document.querySelector("#paris");
parisLink.addEventListener("click", parisResponse);

let londonLink = document.querySelector("#london");
londonLink.addEventListener("click", londonResponse);

let beijingLink = document.querySelector("#beijing");
beijingLink.addEventListener("click", beijingResponse);

let tokyoLink = document.querySelector("#tokyo");
tokyoLink.addEventListener("click", tokyoResponse);


navigator.geolocation.getCurrentPosition(searchLocation);