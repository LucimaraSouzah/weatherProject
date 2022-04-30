const api = {
  key: "913d3c5c6c64b052a989832c27899079",
  base: "https://api.openweathermap.org/data/2.5/",
  lang: "pt_br",
  city: "Conselheiro Lafaiete",
  get link() {
    return `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      this.city
    )}&appid=${this.key}&lang=${this.lang}&units=metric`
  },
  async info() {
    this.a = await fetch(this.link)
    this.b = await this.a.json()
    return this.b
  },
}
