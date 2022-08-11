const todayListBox = document.querySelector('.list');
const addList = document.querySelector('.fa-check-to-slot');
const listInput = document.querySelector('input[name="task-input"]');
const taskInput = document.querySelectorAll('input');
const listCatalogue = [
  {
    index: 4,
    complete: false,
    description: 'Task 4',
  },
  {
    index: 2,
    complete: false,
    description: 'Task 2',
  },
  {
    index: 3,
    complete: false,
    description: 'Task 3',
  },
  {
    index: 1,
    complete: false,
    description: 'Task 1',
  },
];

class Task {
  constructor(description) {
    this.description = description;
    this.complete = false;
    this.index = null;
  }

  createTask = (index, complete, description) => {
    listCatalogue.push({ index, complete, description });
  }

  removeTask = (item) => {
    const task = item.querySelector('input[type="text"]').value;
    const filt = listCatalogue.filter((listItem) => task === listItem.description);
    const filtTask = listCatalogue.indexOf(filt[0]);
    listCatalogue.splice(filtTask, 1);
  }
}

const todayList = new Task();

const renderCatalogue = () => {
  listCatalogue.sort((a, b) => a.index - b.index);
  listCatalogue.forEach((item) => {
    todayListBox.innerHTML += `<li class="list-item">
                    <div class="task-display">
                        <input type="checkbox" name="tasks" class="checkbox">
                        <input type="text" name="tasks-item" value="${item.description}" class="task-item" id="task-${item.index}" readonly>
                    </div>
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid func fa-ellipsis-vertical"></i>
                </li>`;
  });
};

const addToDoItem = (item) => {
  const complete = false;
  const index = listCatalogue.length + 1;
  todayList.createTask(index, complete, item);
  todayListBox.innerHTML += `<li class="list-item">
                    <div class="task-display">
                        <input type="checkbox" name="tasks" class="checkbox">
                        <input type="text" name="tasks-item" value="${item}" class="task-item" id="task-${index}" readonly>
                    </div>
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid func fa-ellipsis-vertical"></i>
                </li>`;
  document.querySelector('input[name="task-input"]').value = '';
};

const resetColors = () => {
  const listItems = document.querySelectorAll('li');
  const inputs = document.querySelectorAll('input');
  listItems.forEach((item) => {
    item.style.backgroundColor = '#fff';
  });
  inputs.forEach((input) => {
    input.style.backgroundColor = '#fff';
  });
};

const resetList = () => {
  todayListBox.querySelectorAll('.func').forEach((button) => {
    button.style.display = 'block';
  });
  todayListBox.querySelectorAll('.fa-trash-can').forEach((button) => {
    button.style.display = 'none';
  });
};

const taskFunction = (item) => {
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
  input.addEventListener('keydown', () => {
    listCatalogue.forEach((task) => {
      if (task.index === ident) {
        task.description = item.querySelector('input[name="tasks-item"]').value;
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
  if (event.target.classList.contains('func')) {
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
