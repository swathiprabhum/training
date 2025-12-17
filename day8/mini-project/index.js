function register(){
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const type = document.getElementById('type').value;

    if(name === "" || course === "" || type === ""){
        alert("Please fill in all fields.");
        return;
    }

    let fee = 0;
    if(course === "frontend") fee = 15000; // course value should match the option values in HTML
    else if(course === "backend") fee = 16000;
    else if(course === "fullstack") fee = 30000;

    if(type === "student") fee = fee - 5000;

    document.getElementById('output').innerText = 
    `Welcome ${name}!\nYour course fee is ${fee}.`
}