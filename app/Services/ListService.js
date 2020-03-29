import List from "../Models/List.js";
import _store from "../store.js"
import Task from "../Models/Task.js";

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  //ANCHOR start here saturday
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