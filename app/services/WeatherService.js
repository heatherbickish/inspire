import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {
  async fetchWeather() {
    const response = await api.get('api/weather')
    console.log(response.data)
    console.log(response.data.main.temp)
    console.log(response.data.name)
    const weather = new Weather(response.data)
    AppState.weathers = weather
    console.log(weather)
  }

}
export const weatherService = new WeatherService()