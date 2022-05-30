const api = {
  key: "dc62d4546785d5c9f59a6ec5f3682b5a",
  base: "https://api.openweathermap.org/data/2.5/",
};
const searchinputbox = document.querySelector(".input-box");
if (searchinputbox.value == "") {
  getWeatherReport("delhi");
}
searchinputbox.addEventListener("keyup", setQuery);

function setQuery(event) {
  if (event) {
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

  if (WeatherType.textContent == "") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')";
  } else if (WeatherType.textContent == "Rain") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')";
  } else if (WeatherType.textContent == "Haze") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=742&q=80')";
  } else if (WeatherType.textContent == "Mist") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80')";
  } else if (WeatherType.textContent == "Clear") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1517574150334-6d3578f2cc5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80')";
  } else if (WeatherType.textContent == "Clouds") {
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1594156596782-656c93e4d504?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')";
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
