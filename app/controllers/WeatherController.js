import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"

export class WeatherController {
  constructor() {
    this.fetchWeather()
    AppState.on('account', this.drawFahrenheit)
    AppState.on('account', this.drawCelsius)

  }


  async fetchWeather() {
    try {
      await weatherService.fetchWeather()
    } catch (error) {
      console.error(error)
      Pop.toast('Could not fetch weather', 'error')
    }
  }


  drawFahrenheit() {
    const fahrenheit = Math.floor((AppState.weathers.main - 273.15) * 9 / 5 + 32)
    setHTML('weather-fah', `${fahrenheit} F`)
    const cancelFahrenheitElm = document.getElementById('weather-fah')
    cancelFahrenheitElm.classList.remove('d-none')
  }

  drawCelsius() {
    const celsius = Math.floor(AppState.weathers.main - 273.15)
    setText('weather-cel', `${celsius} C`)
  }

  clickFahrenheit() {
    const cancelCelsiusElm = document.getElementById('weather-cel')
    cancelCelsiusElm.classList.remove('d-none')
  }

  clickCelsius() {
    const cancelFahrenheitElm = document.getElementById('weather-fah')
    cancelFahrenheitElm.classList.add('d-none')
  }


}