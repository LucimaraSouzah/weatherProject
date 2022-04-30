let date = document.querySelector(".date")
let city = document.querySelector(".city")
let weatherCurrent = document.querySelector(".weather-current")
let time = document.querySelector(".time")
let temperature = document.querySelector(".temperature")
let humidity = document.querySelector(".humidity")
let wind = document.querySelector(".wind")

let search = document.querySelector(".input-search")
let btnSearch = document.querySelector(".icon-search")
let container = document.querySelector(".container")

search.addEventListener("keyup", async (e) => {
  if (e.code == "Enter") {
    api.city = search.value
    await api.info()
    getWeather()
    container.style.height = "50%"
  }
})

function getWeather() {
  date.innerHTML = newdate
  city.innerHTML = api.b.name + " - " + api.b.sys.country
  time.innerHTML =
    api.b.weather[0].description.charAt(0).toUpperCase() +
    api.b.weather[0].description.slice(1)
  weatherCurrent.src = `http://openweathermap.org/img/wn/${api.b.weather[0].icon}@2x.png`
  temperature.innerHTML = Math.round(api.b.main.temp) + "ºC"
  humidity.innerHTML = api.b.main.humidity + "%"
  wind.innerHTML = Math.round(api.b.wind.speed * 3.6) + " Km/h"
}

var dateObj = new Date()
var day = dateObj.getUTCDate()
var month = dateObj.getUTCMonth() + 1
var year = dateObj.getUTCFullYear()

newdate = day + "/" + month + "/" + year

btnSearch.addEventListener("click", async (e) => {
  api.city = search.value
  await api.info()
  getWeather()
  container.style.height = "50%"
})
