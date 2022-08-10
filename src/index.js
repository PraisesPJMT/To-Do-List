const todayList = document.querySelector('.list');
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

const renderCatalogue = () => {
  listCatalogue.sort((a, b) => a.index - b.index);
  listCatalogue.forEach((item) => {
    todayList.innerHTML += `<li class="list-item">
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
renderCatalogue();