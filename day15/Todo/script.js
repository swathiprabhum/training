let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    displayTasks();
}

function addTask() {
    let input = document.getElementById('taskInput');
    let taskText = input.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
   let task = {
        id: Date.now(),
        text: taskText,
        completed: false
   }

    tasks.push(task);
    saveTasks();
    displayTasks();   
    input.value = '';
}

function displayTasks() {
    let list = document.getElementById('taskList');
    list.innerHTML = "";
    tasks.map(task => {        
        let li = document.createElement('li');
        li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}" onClick="toggleTask(${task.id})">
        ${task.text}</span>     
        <button onClick="deleteTask(${task.id})">Delete</button>   
        `

        list.appendChild(li);   
    })
}

function deleteTask(id){
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    displayTasks();    
}

function toggleTask(id) {
    tasks = tasks.map(task => task.id === id ? {...task, completed: !task.completed}: task);
    saveTasks();
    displayTasks();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}