import {
  generateId
} from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.id = data.id || generateId();
    this.task = data.task
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  get Template() {
    return /*html*/ `
    <div class="col-4 border border-dark rounded shadow ml-3">
        <h3 class="text center">${this.title}</h3>
        <form onsubmit="app.listController.addList(event, '${this.id}')">
          <div class="form-group">
            <label for="taskName"></label>
            <input type="text" name="taskName" class="form-control" placeholder="Enter new task here...">
            <button class="btn btn-lg btn-primary"></button>
          </div>
        </form>
        <ul>
        <li>${this.task}</li>
        </ul>
      </div>
    
    `

  }

}