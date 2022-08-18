import { listCatalogue, sortTasks, updateCollection } from './local_storage.js';

class Task {
  constructor(description) {
    this.description = description;
    this.complete = false;
    this.index = null;
  }

  createTask = (description, index = listCatalogue.length + 1, complete = this.complete) => {
    listCatalogue.push({ index, complete, description });
    updateCollection();
  }

  removeTask = (task) => {
    const filt = listCatalogue.filter((listItem) => task === listItem.description);
    const filtTask = listCatalogue.indexOf(filt[0]);
    if (filtTask !== -1) {
      listCatalogue.splice(filtTask, 1);
      updateCollection();
      sortTasks();
    }
  }

  editTask = (id, description) => {
    listCatalogue[id - 1].description = description;
    updateCollection();
  }

  clearAll = () => {
    const newlist = listCatalogue.filter(({ complete }) => complete);
    newlist.forEach(({ description: task }) => this.removeTask(task));
  }
}

export default Task;