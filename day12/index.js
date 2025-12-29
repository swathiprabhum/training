function a(){
    console.log("a");
}

function b(){
    a();
    console.log("b");
}

b();

function authenticate(){
    console.log("Authenticating user...");
}

function loadProfile(){
    console.log("Loading user profile...");
}

function login(){
    authenticate();
    loadProfile();
}

login();

// Hoisting Example

calculate(); // Calling before declaration
function calculate(){
    console.log("Calculation done.");
}

// Scope Example
// Three types of scope: Global, Function, Block (let, const)
let x = 10; // Global variable

function testScope(){
    let x = 21; // Local variable
    console.log(x); // 21 - local scope
}

testScope();
console.log(x); // 10 - global scope

// Closure Example
function outerFunction(){
    let x= 2;
    return function innerFunction(){
        console.log(x);
    }
}

let fn = outerFunction();
fn(); // Outputs: 2

function createCounter(){
    let count = 0;
    return function(){
        count++; 
        return count; // Closure remembers count variable
    }
}
let counter = createCounter();
console.log(counter());
console.log(counter());

// this Keyword Example
let person = {
    employee: "A",
    salary: 50000,
    details: function(){
        console.log(this.employee + " earns " + this.salary);
    }
};
person.details();

// Arrow Function Example
let add = (a, b) => a + b;
console.log(add(5, 3));

let counter1 = {
    count: 0,
    start(){
        setTimeout(() => {            
            this.count++;
            console.log(this.count);
        }, 2000);
    }
}

counter1.start();

// Destructuring Example
let person1 = {
    name: "Person1",
    age: 30,
    city: "New York"
};

let {name, age, city} = person1;
console.log(name, age, city); // Person1 30 New York

// Asynchronous JavaScript Example
console.log("Start");
setTimeout(() => {
    console.log("Delayed");
}, 1000);
console.log("End");

// Promise Example
// 1 - Pending
// 2 - Fulfilled
// 3 - Rejected
let promise = new Promise((resolve, reject) => {
    resolve("Success!");
});

promise.then((result) => {
    console.log(result);
})
