import {
    generateId
} from "../utils.js";

export default class Task {
    constructor(data) {
        this.title = data.title
        this.id = data.id || generateId()
    }

    getTemplate(listId) {
        return /*html*/ `
      <dd>
      <button type="button" class="close text-danger" onclick="app.listController.deleteTask('${listId}','${this.id}')">
      <span>&times;</span>
      </button>
      <h5>${this.title}</h5>
      </dd>
      `
    }

}