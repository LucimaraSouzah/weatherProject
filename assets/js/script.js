const api = {
  key: "913d3c5c6c64b052a989832c27899079",
  base: "https://api.openweathermap.org/data/2.5/",
  units: "metric",
  lang: "pt-BR",
  city: "Conselheiro Lafaiete",
  get link() {
    return `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      this.city
    )}&appid=${this.key}`
  },
}

let date = document.querySelector(".date")
let city = document.querySelector(".city")
let weatherCurrent = document.querySelector(".weather-current")
let time = document.querySelector(".time")
let temperature = document.querySelector(".temperature")
let humidity = document.querySelector(".humidity")
let wind = document.querySelector(".wind")

let search = document.querySelector(".input-search")
let btnSearch = document.querySelector(".icon-search")

search.addEventListener("keyup", (e) => {
  if (e.code == "Enter") {
    api.city = search.value
    getWeather()
  }
})

function getWeather() {
  city.innerHTML = api.city
}
