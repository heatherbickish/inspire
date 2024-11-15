
export class Todo {
  forEach(arg0) {
    throw new Error("Method not implemented.")
  }
  push(createdTodo) {
    throw new Error("Method not implemented.")
  }
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this.creatorId = data.creatorId

  }


  get todoTemplate() {
    return `
  <div class="ms-3 selectable rounded">
    <input type="checkbox" name="" id="">
  </div>
  
  `
  }




}