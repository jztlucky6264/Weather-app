const api = {
  key: "dc62d4546785d5c9f59a6ec5f3682b5a",

  base: "https://api.openweathermap.org/data/2.5/",
};
const searchinputbox = document.querySelector(".input-box");

searchinputbox.addEventListener("keypress", setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    console.log(searchinputbox.value);
    getWeatherReport(searchinputbox.value);
  }
}

function getWeatherReport(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}

function showWeatherReport(weather) {
  console.log(weather);
  let city = document.querySelector(".city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temperature = document.querySelector(".temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let minMaxtemp = document.querySelector(".min-max");
  minMaxtemp.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C(max)`;
  let WeatherType = document.querySelector(".Weather");
  WeatherType.innerText = `${weather.weather[0].main}`;

  let now = new Date();
  let date = document.querySelector(".date");
  date.innerText = dateupdate(now);

  if (WeatherType.textContent == "Smoke") {
    document.body.style.backgroundImage =
      "url('C:/Users/lucky yadav/ Pictures/guitar.jpg')";
  }
}

function dateupdate(d) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let year = d.getFullYear();
  let month = months[d.getMonth()];
  let date = d.getDate();
  let day = days[d.getDay()];

  return `${date} ${month} (${day}) , ${year}`;
}
