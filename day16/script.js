const API_URL = 'http://localhost:3001/todos';

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

// POST
function addTodo(){
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if(task === ""){
        alert("Enter the task");
        return;
    }

    fetch(API_URL,{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            task: task,
            completed: false
        })
    })
    .then(() => {
        input.value = "";
        loadTodos();
    })
    .catch(error => console.error("error adding todo",error))
}


// PATCH/PUT

function toggleTodo(todo){
    fetch(`${API_URL}/${todo.id}`, {
        method : "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            completed: !todo.completed
        })
    })
    .then(loadTodos)
    .catch(error => console.error("Error updating todo:",error))
}

// Delete

function deleteTodo(id){
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    .then(loadTodos)
     .catch(error => console.error("Error Deleting todo:",error))
}