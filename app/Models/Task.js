import {
    generateId
} from "../utils.js";

export default class Task {
    constructor(data) {
        this.title = data.title
        this.id = data.id || generateId()
    }
}