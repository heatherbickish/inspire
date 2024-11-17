
export class Weather {
  constructor(data) {
    this.name = data.name
    this.main = data.main ? data.main.temp :
      this.weather = data.weather ? data.weather[0].description : ''
  }



  get FahrenheitTemplate() {
    return `
   <h6 class="text-shadow selectable rounded mt-2 text-center text-white">
   ${this.main} F
   <p>${this.name}</p>
   </h6>
  `
  }


  get CelsiusTemplate() {
    return `
  <h6 class="text-shadow selectable rounded mt-2 text-center text-white">
  ${this.main} C
  <p>${this.name}</p>
  </h6>
  `
  }


}