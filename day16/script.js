const API_URL = 'https://localhost:3001/todos';

// Load todos
document.addEventListener('DOMContentLoaded', loadtodos);

// GET
function loadtodos() {
    fetch(API_URL)
    .then(response => response.json())
    .then(todos => displayTodos(todos))
    .catch(error => console.error('Error loading todos:', error));
}

function displayTodos(todos){
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todo.task;

        if (todo.completed) {
            span.style.textDecoration = 'line-through';
            span.style.color = 'gray';
        }

        span.onclick = () => toggleTodo(todo);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '11px';
        deleteBtn.onclick = () => deleteTodo(todo.id);

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
}) };