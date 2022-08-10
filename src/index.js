const todayListBox = document.querySelector('.list');
const addList = document.querySelector('.fa-check-to-slot');
const listInput = document.querySelector('input[name="task-input"]');
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
}

const todayList = new Task();

const renderCatalogue = () => {
  listCatalogue.sort((a, b) => a.index - b.index);
  listCatalogue.forEach((item) => {
    todayListBox.innerHTML += `<li class="list-item">
                    <div class="task-display">
                        <input type="checkbox" name="tasks" class="checkbox">
                        <input type="text" name="tasks-item" value="${item.description}" class="task-item" id="Task ${item.index}">
                    </div>
                    <div class="task-control">
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
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
                        <input type="text" name="tasks-item" value="${item}" class="task-item" id="Task ${index}">
                    </div>
                    <div class="task-control">
                        <i class="fa-solid fa-trash-can"></i>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </li>`;
  document.querySelector('input[name="task-input"]').value = '';
};

addList.addEventListener('click', () => {
  const toDo = listInput.value;
  if (toDo.length > 0) {
    addToDoItem(toDo);
  }
});

listInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const toDo = listInput.value;
    if (toDo.length > 0) {
      addToDoItem(toDo);
    }
  }
});

renderCatalogue();
