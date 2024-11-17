import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {
  async fetchWeather() {
    const response = await api.get('api/weather')
    let weather = new Weather(response.data)
    AppState.weathers = weather
  }

  // async fetchWeatherAgain() {
  //   let response = await api.get('api/weather')
  //   console.log(response.data)
  //   const weather = new Weather(response.data)
  //   console.log(weather)
  //   const fahrenheit = Math.floor((AppState.weathers.main - 273.15) * 9 / 5 + 32)
  //   AppState.weathers.main = fahrenheit
  // }

}
export const weatherService = new WeatherService()
