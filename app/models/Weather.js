
export class Weather {
  constructor(data) {
    this.name = data.name
    this.main = data.main ? data.main.temp :
      this.weather = data.weather ? data.weather[0].description : ''
  }



  // get FahrenheitTemplate() {
  //   return `
  //  <p>${this.name}</p>
  // `
  // }


  // get CelsiusTemplate() {
  //   return `
  // <p>${this.name}</p>
  // `
  // }


}