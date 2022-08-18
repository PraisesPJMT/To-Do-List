/**
 * @jest-environment jsdom
 */
const Task = require('../task_functions.js').default;
const { listCatalogue } = require('../local_storage.js');
const {
  editToDoItem,
  addToDoItem,
  removeCheckedItems,
} = require('../list_functions.js');
const { checkFunction } = require('../complete_functions.js');
const taskList = new Task();

//Test for editing a ToDo
describe('Test for Editing Tasks', () => {
  it('Edit Task, check task has been edited to "This task has been edited"', () => {
    taskList.createTask('Edit task 1');
    taskList.createTask('Edit task 2');
    taskList.createTask('Edit task 3');

    taskList.editTask(2, 'This task has been edited');
    const todoAfer = listCatalogue[1].description;
    expect(todoAfer).toMatch('This task has been edited');
  });

  it('Edit Task, check listCatalogue has the same length', () => {
    taskList.createTask('Edit task 4');
    const SIZE_a = listCatalogue.length;

    taskList.editTask(4, 'The list should have a size of 4');
    const SIZE_b = listCatalogue.length;
    expect(SIZE_a).toEqual(SIZE_b);
  });

  it('Edit Task, check localStorage is updated after edit', () => {
    taskList.createTask('Edit task 5');
    taskList.editTask(5, 'The localStorage is current');

    const savedTodosAfter = JSON.parse(localStorage.getItem('listCatalogue'));
    const SIZE = savedTodosAfter.length;
    const task5 = savedTodosAfter[SIZE-1].description;
    expect(task5).toMatch('The localStorage is current');
  });

  it('Edit Task, check DOM is updated after edit', () => {
    document.body.innerHTML = '<div><ul class="list"></ul></div>';
    addToDoItem('Edit task 6');
    addToDoItem('Edit task 7');
    addToDoItem('Edit task 8');
    addToDoItem('Edit task 9');

    const list = document.querySelectorAll('.list li');
    const SIZE = listCatalogue.length;

    const task7 = document.querySelector(`#list-${SIZE - 2}`);
    const task7Input = task7.querySelector('input[name="tasks-item"]');
    task7Input.value = 'DOM has been updated';
    editToDoItem(task7, 7);

    expect(list[list.length - 3].querySelector('.task-item').value).toMatch(
      'DOM has been updated'
    );
  });
});
