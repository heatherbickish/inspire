import { AuthController } from './controllers/AuthController.js';
import { ImageController } from "./controllers/ImageController.js";
import { TodoController } from "./controllers/ToDoController.js";
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  TodoController = new TodoController()
  ImageController = new ImageController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
