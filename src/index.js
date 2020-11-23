// time
let now = new Date();
console.log(now);

let currentHours = now.getHours();
let currentMinutes = now.getMinutes();

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

// forecast days
document.querySelector("#dayOne").innerHTML= days[1];
document.querySelector("#dayTwo").innerHTML= days[2];
document.querySelector("#dayThree").innerHTML= days[3];
document.querySelector("#dayFour").innerHTML= days[4];
document.querySelector("#dayFive").innerHTML= days[5];


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
}
        
function foreTemp(response1){
  console.log(response1.data.list[0]);
  document.querySelector("#oneTemp").innerHTML = Math.round(response1.data.list[0].main.temp);
  document.querySelector("#twoTemp").innerHTML = Math.round(response1.data.list[1].main.temp);
  document.querySelector("#threeTemp").innerHTML = Math.round(response1.data.list[2].main.temp);
  document.querySelector("#fourTemp").innerHTML = Math.round(response1.data.list[3].main.temp);
  document.querySelector("#fiveTemp").innerHTML = Math.round(response1.data.list[4].main.temp);
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

