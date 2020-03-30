import List from "../Models/List.js";
import _store from "../store.js"
import Task from "../Models/Task.js";

//Public
//ANCHOR start here Sunday
class ListService {

  deleteTask(taskId, listId) {
    if (window.confirm("Are you sure you want to delete?")) {
      let myList = _store.State.lists.find(list => list.id == listId)
      let myTask = listId.tasks.findIndex(task => task.id == taskId)
      listId.task.splice(taskId, 1)
    }

    _store.saveState()
  }

  delete(listId) {
    if (window.confirm("Are you sure you want to delete?")) {
      let index = _store.State.lists.findIndex(list => list.id == listId)
      _store.State.lists.splice(index, 1)
    }


    _store.saveState()
  }

  addNewTask(newTaskData, ListId) {
    let newTask = new Task(newTaskData);
    let list = _store.State.lists.find(list => list.id == ListId)
    list.tasks.push(newTask)
    console.log(list)
    _store.saveState()
  }

  create(newListData) {
    let newList = new List(newListData)
    _store.State.lists.push(newListData)
    console.log(newListData)
    _store.saveState()
  }



}

const SERVICE = new ListService();
export default SERVICE;