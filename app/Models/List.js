import {
  generateId
} from "../utils.js";
import Task from "./Task.js"

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.id = data.id || generateId();
    /** @type {Task[]} */
    this.tasks = data.tasks || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return /*html*/ `
    <div class="col-3 border border-dark rounded shadow ml-3">
    <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
      <span>&times;</span>
      </button>
        <h3 class="text-center">${this.title}</h3>
        <form onsubmit="app.listController.addNewTask(event, '${this.id}')">
          <div class="input-group mb-3">
          <label for="taskName"></label>
  <input type="text" class="form-control" placeholder="Enter new task here..." name="taskName">
  <div class="input-group-append">
    <button class="btn btn-sm bg-primary text-white" type="submit" id="button-addon2">+</button>
  </div>
</div>
        </form>
        <dl>
        ${this.Tasks}
        </dl>
      </div>
    
    `

  }

  get Tasks() {
    let template = ""
    this.tasks.forEach(task => template += task.getTemplate(this.id))
    return template
  }

}