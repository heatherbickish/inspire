import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class WeatherController {
  constructor() {
    console.log('🌡️🎮')
    this.fetchWeather()
    AppState.on('account', this.drawWeather)
    this.fetchWeatherAgain()
  }


  async fetchWeather() {
    try {
      await weatherService.fetchWeather()
    } catch (error) {
      console.error(error)
      Pop.toast('Could not fetch weather', 'error')
    }
  }

  drawWeather() {
    const fahrenheit = Math.floor((AppState.weathers.main - 273.15) * 9 / 5 + 32)
    AppState.weathers.main = fahrenheit
    console.log(fahrenheit)
    setHTML('weather', AppState.weathers.weatherTemplate)
  }

  async fetchWeatherAgain() {
    try {
      await weatherService.fetchWeatherAgain()
    } catch (error) {
      console.error(error)
      Pop.toast('Could not fetch weather again', 'error')
    }
  }

  // convertCelsius() {
  //   const celsius = Math.floor(AppState.weathers.main - 273.15)
  //   AppState.weathers.main = celsius


  //   console.log(celsius)


  // }
}