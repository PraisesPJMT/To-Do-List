/**
 * @jest-environment jsdom
 */
const Task = require('../task_functions.js').default;
const { listCatalogue } = require('../local_storage');
const { addToDoItem } = require('../list_functions');
import 'jest-localstorage-mock';

describe('Test for Adding Tasks', () => {
  const taskList = new Task();
  it('Add task, array object is not null', () => {
    taskList.createTask('Morning task 1');
    const SIZE = listCatalogue.length;
    expect(SIZE).not.toBeNull();
  });

  it('Add task, complete flag is set to false by default', () => {
    taskList.createTask('Morning task 2');
    const SIZE = listCatalogue.length;
    expect(listCatalogue[SIZE - 1].complete).toBeFalsy();
  });

  it('Add task, new task index is the length of the array', () => {
    taskList.createTask('Morning task 3');
    const SIZE = listCatalogue.length;
    expect(listCatalogue[SIZE - 1].index).toBe(SIZE);
  });

  it('Add task, new task added to the DOM', () => {
    document.body.innerHTML = '<div>' + '<ul class="list"></ul>' + '</div>';
    addToDoItem('Morning task 4');
    const list = document.querySelectorAll('.list li');
    expect(list).toHaveLength(1);
  });

  it('Add task, new task in the DOM has a value of todo description', () => {
    document.body.innerHTML = '<div>' + '<ul class="list"></ul>' + '</div>';
    addToDoItem('Morning task 5');
    const list = document.querySelectorAll('.list li');
    expect(list[list.length - 1].querySelector('.task-item').value).toBe(
      'Morning task 5'
    );
  });
});
