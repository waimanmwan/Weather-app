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


// convert temperature


// search city location


function temp(response) {
console.log(response.data);
document.querySelector("#searchLocation").innerHTML = response.data.name;
document.querySelector(".currentDegree").innerHTML = Math.round(
response.data.main.temp);
document.querySelector(".windSpeed").innerHTML= Math.round(response.data.wind.speed);
document.querySelector(".humidity").innerHTML= response.data.main.humidity;
}
        

function searchCity (city){
  let unit = "metric";
  let apiKey = "c3d2257e9dc82191e8d794596274f050";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(temp);
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
}

function showCityPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);

}

let form = document.querySelector("#your-city");
form.addEventListener("submit", searchCitySubmit);


let currentButton = document.querySelector("#currentButton");
currentButton.addEventListener("click", showCityPosition);

