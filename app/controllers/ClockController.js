import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

export class ClockController {
  constructor() {
    setInterval(this.drawDisplayTime, 3000)
  }


  drawDisplayTime() {
    let time = new Date()
    let formatTime = time.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit' })
    const displayTimeElm = document.getElementById('time')
    displayTimeElm.innerText = formatTime.toString()
  }

}