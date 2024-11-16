import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuoteService {
  async fetchQuote() {
    const response = await api.get('api/quotes')
    console.log('💬📡', response.data)
    const quote = new Quote(response.data)
    AppState.quotes = quote
    console.log('✅💬📡', response.data)
  }



}
export const quoteService = new QuoteService()
