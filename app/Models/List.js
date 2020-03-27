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
    <div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-header bg-dark text-white">
            <h3>${this.title}</h3>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.task}</li>
            <div class="input-group mb-3 mt-3">
            <label for="task"></label>
              <input type="text" name="task" class="form-control" placeholder="Add task...">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Add</button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    `

  }

}