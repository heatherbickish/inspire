export class Clock {
  constructor(data) {
    this.time = data.time == undefined ? new Date() : new Date(data.time)
  }





  // get timeTemplate() {
  //   return `
  //   <h1>${this.FormatTime}</h1>

  //   `
  // }

  // get FormatTime() {
  //   return this.time.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit' })
  // }
}