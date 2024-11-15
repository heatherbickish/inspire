import { AppState } from "../AppState.js"
import { Todo } from "../models/ToDo.js"
import { api } from "./AxiosService.js"

class TodoService {
  async fetchTodo() {
    const response = api.get('api/todos')
    const todo = response.data.map(todoData => new Todo(todoData))
    AppState.todos = todo
    console.log('fetched', todo)
  }
  async createTodo(formData) {
    const response = await api.post('api/todos', formData)
    console.log('created ✅📡', response.data)
    const createdTodo = new Todo(response.data)
    AppState.todos = createdTodo
    console.log(createdTodo)
  }

















}

export const todoService = new TodoService()