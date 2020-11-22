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



// search city location

function temp(response) {
console.log(response.data);
document.querySelector("#searchLocation").innerHTML = response.data.name;
document.querySelector(".currentDegree").innerHTML = Math.round(
response.data.main.temp);
document.querySelector(".windSpeed").innerHTML= Math.round(response.data.wind.speed);
document.querySelector(".humidity").innerHTML= response.data.main.humidity;
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

function parisReponse(response){
  let unit = "metric";
  let apiKey = "c3d2257e9dc82191e8d794596274f050";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=paris&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(temp);
  let foreApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=paris&appid=${apiKey}&units=${unit}`;
  axios.get(foreApiUrl).then(foreTemp);
}

function newYorkReponse(response){
  let unit = "metric";
  let apiKey = "c3d2257e9dc82191e8d794596274f050";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=newyork&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(temp);
  let foreApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=newyork&appid=${apiKey}&units=${unit}`;
  axios.get(foreApiUrl).then(foreTemp);
}

function beijingReponse(response){
  let unit = "metric";
  let apiKey = "c3d2257e9dc82191e8d794596274f050";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=beijing&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(temp);
  let foreApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=beijing&appid=${apiKey}&units=${unit}`;
  axios.get(foreApiUrl).then(foreTemp);
}

function tokyoReponse(response){
  let unit = "metric";
  let apiKey = "c3d2257e9dc82191e8d794596274f050";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=tokyo&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(temp);
  let foreApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=tokyo&appid=${apiKey}&units=${unit}`;
  axios.get(foreApiUrl).then(foreTemp);
}
let parisLink = document.querySelector("#paris");
parisLink.addEventListener("click", parisReponse);

let newYorkLink = document.querySelector("#newYork");
newYorkLink.addEventListener("click", newYorkReponse);

let beijingLink = document.querySelector("#beijing");
beijingLink.addEventListener("click", beijingReponse);

let tokyoLink = document.querySelector("#tokyo");
tokyoLink.addEventListener("click", tokyoReponse);
