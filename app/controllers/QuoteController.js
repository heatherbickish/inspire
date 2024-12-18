import { AppState } from "../AppState.js"
import { quoteService } from "../services/QuoteService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class QuoteController {
  constructor() {
    this.fetchQuote()
    AppState.on('account', this.drawQuote)
  }

  async fetchQuote() {
    try {
      await quoteService.fetchQuote()
    } catch (error) {
      console.error(error)
      Pop.toast('Could not fetch quote', 'error')
    }
  }

  drawQuote() {
    setHTML('quote', AppState.quotes.QuoteTemplate)

  }

}