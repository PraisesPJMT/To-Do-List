import { listCatalogue, sortTasks } from './local_storage.js';

const todayListBox = document.querySelector('.list');
const renderCatalogue = () => {
  sortTasks();
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

export default renderCatalogue;