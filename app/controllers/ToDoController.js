import { AppState } from "../AppState.js"
import { api } from "../services/AxiosService.js"
import { todoService } from "../services/ToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"

export class TodoController {
  constructor() {
    console.log('✅🎮')
    AppState.on('account', this.showTodo)
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
    let createdTodoHTML = ''
    AppState.todos.forEach(todo => createdTodoHTML += todo.todoTemplate)
    setHTML('my-todos', createdTodoHTML)
    const markedTodo = AppState.todos.filter(todo => todo.completed == false)
    setText('todo-count', `${markedTodo.length}`)
  }

  async markedTodo(todoId) {
    try {
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

  showTodo() {
    const todoFormElm = document.getElementById('todo-list')
    todoFormElm.classList.remove('d-none')
    console.log('showing')
  }


}