import { sortTasks } from './local_storage.js';
import { resetList, resetColors } from './reset_functions.js';
import { todayList, taskFunction, addToDoItem } from './list_functions.js';
import renderCatalogue from './task_render.js';

const todayListBox = document.querySelector('.list');
const addList = document.querySelector('.fa-check-to-slot');
const listInput = document.querySelector('input[name="task-input"]');
const taskInput = document.querySelectorAll('input');

sortTasks();

addList.addEventListener('click', () => {
  const toDo = listInput.value;
  if (toDo.length > 0) {
    addToDoItem(toDo);
  }
});

listInput.addEventListener('keypress', (event) => {
  resetColors();
  if (event.key === 'Enter') {
    const toDo = listInput.value;
    if (toDo.length > 0) {
      addToDoItem(toDo);
    }
  }
});

listInput.addEventListener('click', () => {
  resetList();
  resetColors();
});

taskInput.forEach((input) => {
  input.addEventListener('click', () => {
    resetList();
    resetColors();
  });
});

todayListBox.addEventListener('click', (event) => {
  if (event.target.classList.contains('func') || event.target.classList.contains('task-item')) {
    const item = event.target.parentElement;
    resetList();
    resetColors();
    taskFunction(item);
  } else if (event.target.classList.contains('fa-trash-can')) {
    const item = event.target.parentElement;
    todayList.removeTask(item);
    todayListBox.removeChild(item);
  }
});

renderCatalogue();
