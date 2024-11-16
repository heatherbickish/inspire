
export class Weather {
  constructor(data) {
    this.name = data.name
    this.main = data.main
    this.weather = data.weather
  }



  get weatherTemplate() {
    return `
   <h6 class="text-shadow selectable rounded mt-2 text-center text-white">
   ${this.main}${this.weather}
   </h6>
   <p>${this.name}</p>
  `
  }



}