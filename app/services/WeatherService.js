import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {
  async fetchWeather() {
    const response = await api.get('api/weather')
    let weather = new Weather(response.data)
    AppState.weathers = weather
  }

  async fetchWeatherAgain() {
    let response = await api.get('api/weather')
    console.log(response.data)
  }

}
export const weatherService = new WeatherService()
