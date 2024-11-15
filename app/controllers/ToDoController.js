import { AppState } from "../AppState.js"
import { api } from "../services/AxiosService.js"
import { todoService } from "../services/ToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class TodoController {
  constructor() {
    console.log('✅🎮')
    AppState.on('account', this.fetchTodo)
  }


  async createTodo() {
    try {
      event.preventDefault()
      const formElm = event.target
      const formData = getFormData(formElm)
      console.log('creating✅', formData)
      await todoService.createTodo(formData)
      Pop.toast('todo created!', 'success', 'top')

    } catch (error) {
      console.error(error)
      Pop.toast('Uh oh! Could not create todo')
    }
  }

  async fetchTodo() {
    try {
      await todoService.fetchTodo()
      Pop.toast('Fetched!', 'success', 'top')
    } catch (error) {
      console.error(error)
      Pop.toast('Uh oh! Could not fetch todo')
    }
  }

  // drawCreatedTodo() {
  //   let createdTodoHTML = ''
  //   AppState.todos.forEach(todo => createdTodoHTML += todo.todoTemplate)
  //   setHTML('my-todos', createdTodoHTML)
  // }



}