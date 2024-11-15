import { AppState } from "../AppState.js"
import { Image } from "../models/Image.js"
import { api } from "./AxiosService.js"

class ImageService {
  async fetchImage() {
    const response = await api.get('api/images')
    console.log('🖼️📡', response.data)
    const image = new Image(response.data)
    AppState.images = image
    console.log(image)
  }

}
export const imageService = new ImageService()