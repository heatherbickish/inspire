
export class Todo {


  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.creatorId = data.creatorId

  }


  get todoTemplate() {
    return `
  <div class="ms-3 selectable rounded">
  <input onchange="app.TodoController.markedTodo('${this.id}')" type="checkbox" name="" id="">
  <span class="p-3 mb-3">${this.description}</span>
  <span role="button" onclick="app.TodoController.deleteTodo('${this.id}')" ${this.isMarked}><i class="mdi mdi-trash-can-outline text-danger"></i></span>
  <hr>
  </div>
  
  `
  }



  get isMarked() {
    return
    if (this.completed) return 'checked'
    return ''
  }
}