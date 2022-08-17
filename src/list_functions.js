import Task from './task_functions.js';
import { listCatalogue, updateCollection } from './local_storage.js';
import { resetColors, resetList } from './reset_functions.js';


export const todayList = new Task();

export const addToDoItem = (item) => {
  const todayListBox = document.querySelector('.list');
  const id = listCatalogue.length+1;
  todayList.createTask(item);
  todayListBox.innerHTML += `<li class="list-item" id="list-${id}">
                    <div class="task-display">
                        <input type="checkbox" name="tasks" class="checkbox">
                        <input type="text" name="tasks-item" value="${item}" class="task-item" id="task-${id}" readonly>
                    </div>
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid func fa-ellipsis-vertical"></i>
                </li>`;
};

export const removeToDoItem = (item) => {
  const todayListBox = document.querySelector('.list');
  const task = item.querySelector('input[type="text"]').value;
  todayList.removeTask(task);
  todayListBox.removeChild(item);
}

export const taskFunction = (item) => {
  if (item.classList.contains('task-display')) {
    item = item.parentElement;
  }
  const func = item.querySelector('.func');
  const del = item.querySelector('.fa-trash-can');
  const input = item.querySelector('input[name="tasks-item"]');
  const inputValue = input.value;
  let ident;
  item.style.backgroundColor = '#fcf299';
  input.style.backgroundColor = '#fcf299';
  func.style.display = 'none';
  del.style.display = 'block';
  input.removeAttribute('readonly');
  input.focus();
  listCatalogue.forEach((task) => {
    if (task.description === inputValue) {
      ident = task.index;
    }
  });
  input.addEventListener('keyup', () => {
    listCatalogue.forEach((task) => {
      if (task.index === ident) {
        task.description = item.querySelector('input[name="tasks-item"]').value;
        updateCollection();
      }
    });
  });
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      listCatalogue.forEach((task) => {
        if (task.index === ident) {
          task.description = item.querySelector('input[name="tasks-item"]').value;
          input.setAttribute('readonly', 'readonly');
          resetList();
          resetColors();
        }
      });
    }
  });
};