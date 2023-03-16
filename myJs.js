//query Select
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let iTask = document.querySelector('#items');
let cTask = document.querySelector('.complete-list ul');

//functions

//creates a Task and return <li>
function createTask(task) {
  let listItem = document.createElement('li');
  let checkbox = document.createElement('input');
  let label = document.createElement('label');

  checkbox.type = 'checkbox';
  label.innerText = task;
  listItem.append(checkbox, label);

  return listItem;
}

function addTask(e) {
  e.preventDefault();
  let listItem = createTask(newTask.value);
  iTask.appendChild(listItem);
  newTask.value = '';

  //bind the new list item to the incomplete list
  bindInCompleteItems(listItem, completeTask);
}

function completeTask() {
  let listItem = this.parentNode;

  //create delete button
  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.className = 'delete';
  listItem.appendChild(deleteBtn);

  listItem.querySelector('input[type="checkbox"]').remove();
  cTask.appendChild(listItem);

  bindCompleteItems(listItem, deleteTask);
}

function deleteTask() {
  let listItem = this.parentNode;
  listItem.remove();
}

function bindInCompleteItems(taskItem, checkboxClick) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.addEventListener('click', checkboxClick);
}

function bindCompleteItems(taskItem, deleteButtonClick) {
  let deleteBtn = taskItem.querySelector('.delete');
  deleteBtn.addEventListener('click', deleteButtonClick);
}

//binding existing task
for (let i = 0; i < iTask.children.length; i++) {
  bindInCompleteItems(iTask.children[i], completeTask);
}
for (let i = 0; i < cTask.children.length; i++) {
  bindCompleteItems(cTask.children[i], deleteTask);
}

form.addEventListener('submit', addTask);
