
export class Todo {


  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.creatorId = data.creatorId

  }


  get todoTemplate() {
    return `
  <div class="ms-3 selectable rounded d-flex justify-content-between pe-2">
    <div>
      <input onchange="app.TodoController.markedTodo('${this.id}')" ${this.isMarked} type="checkbox" name="" id="">
      <span class="p-3 mb-3">${this.description}</span>
    </div>
    <span role="button" onclick="app.TodoController.deleteTodo('${this.id}')" ><i class="mdi mdi-trash-can-outline text-danger fs-4 fw-bold"></i></span>
  </div>
  <hr>
  
  `
  }

  get isMarked() {
    if (this.completed) return 'checked'
    return ''
  }
}