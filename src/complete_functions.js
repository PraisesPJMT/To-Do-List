export const checkFunction = (item, checkbox) => {
  const task = item.querySelector('.task-item');
  if (checkbox.checked) {
    task.style.fontStyle = 'italic';
    task.style.color = '#b0b0b0';
    task.style.textDecoration = 'line-through';
    item.querySelector('.fa-trash-can').style.display = 'block';
    item.querySelector('.func').style.display = 'none';
  } else {
    task.style.fontStyle = 'normal';
    task.style.color = '#000';
    task.style.textDecoration = 'none';
    item.querySelector('.fa-trash-can').style.display = 'none';
    item.querySelector('.func').style.display = 'block';
  }
};