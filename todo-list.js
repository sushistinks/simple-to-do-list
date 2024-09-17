const todoList = [{
  name: 'wash dishes',
  dueDate: '2024-08-26'
}
];

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div class="js-task-container task-container">
        <input type="checkbox" class="js-checkbox checkbox" onclick="toggleColor(this);">
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">
        Delete</button>
      </div>
      `;
    todoListHTML += html;
  });

  const todoListElement = document.querySelector('.js-todo-list');
  if (todoListElement) {
    todoListElement.innerHTML = todoListHTML;
  }

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addToDo();
  })

function addToDo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}

function todoNameKeyDown(event) {
  if (event.key === 'Enter') {
    addToDo();
  }
}

function toggleColor(checkboxElement) {
  const taskContainer = checkboxElement.closest('.js-task-container');

  if (checkboxElement.checked) {
    taskContainer.classList.add('color-green');
  } else {
    taskContainer.classList.remove('color-green');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  renderTodoList();
});
