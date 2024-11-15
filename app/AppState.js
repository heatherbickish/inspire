import { Image } from "./models/Image.js"
import { Todo } from "./models/ToDo.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  /** @type {Todo[]} */
  todos = []

  /** @type {Image} */
  images = null

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
}

export const AppState = createObservableProxy(new ObservableAppState())