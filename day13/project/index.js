let tasks = [];

// Closure for Id generation
const getTaskId = (function() {  
    let id = 1;
    return () => id++;
})();

// Usage of arrow function
const addTask = () => {
    const title = document.getElementById('title').value;
    const priority = document.getElementById('priority').value;

    if (title === '') {
        alert('Please enter a task title.');
        return;
    }

    const task = {
        id: getTaskId(),
        title: title,
        priority: priority,
        status: 'Pending'
    };

    tasks.push(task);
    displayTasks();
    clearInput();
}

// Arrow function and template literals
const displayTasks = () => {
    const table = document.getElementById('taskTable');
    table.innerHTML = "";

    for (let task of tasks) {
        // Object destructuring
        const {id, title, priority, status} = task;
        table.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${title}</td>
                <td class="${priority}">${priority}</td>
                <td>${status}</td>
            </tr>
        `;
    }
}

const clearInput = () => {
    document.getElementById('title').value = '';
}

// Promises
const saveTasksAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            
                resolve('Tasks saved successfully!');

        }, 1000);
    });
}

// Async/Await
const saveTasks = async () => {
        alert("Saving tasks...");
        const message = await saveTasksAsync(); 
        alert(message);
}
