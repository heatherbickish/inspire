import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class WeatherController {
  constructor() {
    console.log('🌡️🎮')
    this.fetchWeather()
    AppState.on('account', this.drawWeather)
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
    console.log('🖋️🌡️')
    setHTML('weather', AppState.weathers.weatherTemplate)
    console.log(AppState.weathers)
  }


}