import { AppState } from "../AppState.js"
import { Todo } from "../models/ToDo.js"
import { api } from "./AxiosService.js"

class TodoService {
  async createTodo(formData) {
    const response = await api.post('api/todos', formData)
    const createdTodo = new Todo(response.data)
    AppState.todos.push(createdTodo)
  }

  async fetchTodo() {
    const response = await api.get('api/todos')
    const todo = response.data.map(todoData => new Todo(todoData))
    AppState.todos = todo
  }

  async markedTodo(todoId) {
    const todoUpdate = AppState.todos.find(todo => todo.id == todoId)
    todoUpdate.completed = !todoUpdate.completed
    const response = await api.put(`api/todos/${todoId}`, todoUpdate)
    todoUpdate.completed = response.data.completed
    AppState.emit('todos')
  }

  async deleteTodo(todoId) {
    console.log('deleting todo', todoId)
    const response = await api.delete(`api/todos/${todoId}`)
    const indexToRemove = AppState.todos.findIndex(todo => todo.id == todoId)
    AppState.todos.splice(indexToRemove, 1)
  }















}

export const todoService = new TodoService()