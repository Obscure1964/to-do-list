// Define vars
const form = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".btn-add");
const todoList = document.querySelector(".todo-list");

// function for all Events
loadAllListeners();

// Define loadAllListeners function
function loadAllListeners() {
  // Listener for DOM
  document.addEventListener("DOMContentLoaded", getTodosFromLS);
  // Listener for add Todo
  form.addEventListener("submit", addTodoToDOM);
  // Listener for remove todoItem
  todoList.addEventListener("click", removeTodoFromDOM);
}

// Define getTodosFromLS function
function getTodosFromLS() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    const todoListItem = document.createElement("li");
    // Add class to the element we created
    todoListItem.className = "todo-list-item";
    // create an 'a' tag for delete sign
    const link = document.createElement("a");
    // Add class to link
    link.className = "delete-item";
    // create text inside link
    link.appendChild(document.createTextNode("X"));
    // put link to todoListItem
    todoListItem.appendChild(link);
    // create text for the element we created
    todoListItem.appendChild(document.createTextNode(todo));
    // Append todoListItem to todoList
    todoList.appendChild(todoListItem);
  });
}

// Define addTodoToDOM function
function addTodoToDOM(e) {
  // Check empty list item doesn't add to DOM
  if (todoInput.value !== "") {
    // Create elements for Todo in DOM
    const todoListItem = document.createElement("li");
    // Add class to the element we created
    todoListItem.className = "todo-list-item";
    // create an 'a' tag for delete sign
    const link = document.createElement("a");
    // Add class to link
    link.className = "delete-item";
    // create text inside link
    link.appendChild(document.createTextNode("X"));
    // put link to todoListItem
    todoListItem.appendChild(link);
    // create text for the element we created
    todoListItem.appendChild(document.createTextNode(todoInput.value));
    // Append todoListItem to todoList
    todoList.appendChild(todoListItem);
    // store todos in LocalStorage
    storeTodosInLS(todoInput.value);
  } else {
    alert("CHECK YOU INPUT");
  }
  // Empty input after submit
  todoInput.value = "";

  e.preventDefault();
}

// Define storeTodosInLS function
function storeTodosInLS(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);

  localStorage.setItem("todos", JSON.stringify(todos));
}
// Define removeTodoFromDOM function
function removeTodoFromDOM(e) {
  // Check for class of target
  if (e.target.classList.contains("delete-item")) {
    e.target.parentElement.remove();

    // fucntion for remove todo from local storage
    removeTodosFromLS(e.target.parentElement);
  }

  e.preventDefault();
}

// Define removeTodosFromLS function
function removeTodosFromLS(todoItem) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  // todos.map((todo) => todo != todoItem);

  console.log(todos);
}
