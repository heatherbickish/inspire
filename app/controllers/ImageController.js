import { AppState } from "../AppState.js"
import { imageService } from "../services/ImageService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class ImageController {
  constructor() {
    console.log('🖼️🎮')
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
  }

  // FIXME img repeat


}