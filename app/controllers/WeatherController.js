import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class WeatherController {
  constructor() {
    console.log('🌡️🎮')
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
    console.log(fahrenheit)
    setHTML('weather-fah', `${fahrenheit} F`)
    const cancelFahrenheitElm = document.getElementById('weather-fah')
    cancelFahrenheitElm.classList.remove('d-none')
  }

  drawCelsius() {
    const celsius = Math.floor(AppState.weathers.main - 273.15)
    console.log(celsius)
    setHTML('weather-cel', `${celsius} C`)
  }

  clickCelsius() {
    const cancelFahrenheitElm = document.getElementById('weather-fah')
    cancelFahrenheitElm.classList.add('d-none')
  }
  clickFahrenheit() {
    const celsius = Math.floor(AppState.weathers.main - 273.15)
    AppState.weathers.main = celsius
    const cancelCelsiusElm = document.getElementById('weather-cel')
    cancelCelsiusElm.classList.remove('d-none')




  }
}