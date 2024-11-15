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
    AppState.on('todos', this.drawTodo)
  }


  async createTodo() {
    try {
      event.preventDefault()
      const formElm = event.target
      const formData = getFormData(formElm)
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
    } catch (error) {
      console.error(error)
      Pop.toast('Uh oh! Could not fetch todo')
    }
  }

  drawTodo() {
    console.log('🖋️✅')
    let createdTodoHTML = ''
    AppState.todos.forEach(todo => createdTodoHTML += todo.todoTemplate)
    setHTML('my-todos', createdTodoHTML)
  }

  async markedTodo(todoId) {
    try {
      console.log('✔️', todoId)
      await todoService.markedTodo(todoId)
    } catch (error) {
      console.error(error)
      Pop.toast('Uh oh! Could not mark todo')
    }
  }

  async deleteTodo(todoId) {
    try {
      event.stopPropagation()
      const confirmed = await Pop.confirm('Are you sure you want to delete this Todo?')
      if (!confirmed) return
      console.log('deleting todo', todoId)
      await todoService.deleteTodo(todoId)
    } catch (error) {
      console.error(error)
      Pop.toast('Uh oh! Could not delete todo')
    }
  }


}