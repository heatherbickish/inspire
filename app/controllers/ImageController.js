import { AppState } from "../AppState.js"
import { imageService } from "../services/ImageService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class ImageController {
  constructor() {
    this.fetchImage()
    AppState.on('account', this.drawImage)
  }


  async fetchImage() {
    try {
      await imageService.fetchImage()
    } catch (error) {
      console.error(error)
      Pop.toast('Could not fetch image', 'error')
    }
  }

  drawImage() {
    setHTML('image', AppState.images.ImageBg)
    document.body.style.backgroundImage = `url(${AppState.images.largeImgUrl})`
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = 'cover'
  }



}