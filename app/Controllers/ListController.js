import ListService from "../Services/ListService.js";
import _store from "../store.js"
import LISTSERVICE from "../Services/ListService.js";

//TODO Don't forget to render to the screen after every data change.
//ANCHOR Come back and get an "id" for this
function _drawLists() {
  let template = ""
  let lists = _store.State.lists

  lists.forEach(list => template += list.Template)
  document.getElementById("")

}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  create(event) {
    event.preventDefault()
    let formData = event.target

    let newList = {
      title: formData.title.value
    }

    _listService.create(newList)
  }

}