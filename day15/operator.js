// Spread operator example
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5, 6];
console.log(moreNumbers); // Output: [1, 2, 3, 4, 5, 6]

let student = {
    name: "SP",
    marks: 90
}

let updatedStudent = {
    ...student,
    percentage: 95
}

console.log(updatedStudent); // Output: {name: "SP", marks: 90, percentage: 95}

// Rest operator example
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// Promise example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(["A", "B", "C"]);
        }, 1000);
    });
}   
fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

// Global and local variables
var globalVar = "I am a global variable";

function checkScope() {
    var localVar = "I am a local variable";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

checkScope();
//console.log(localVar); // Unaccessible, will throw an error

// Inheritance example
class A {
    speak() {
        console.log("A speaks");
    }
}
class B extends A {
    speak() {
        super.speak();
        console.log("B speaks");
    }
}
let objB = new B();
objB.speak();
// Output:
// A speaks
// B speaks

class Employee{
    constructor(name){  
        this.name = name;
    }
}

class Manager extends Employee{
    getRole(){
        console.log("Manager");
    }
}

let mgr = new Manager("SP");
mgr.getRole();
console.log(mgr.name);
// Output:
// Manager
// SP

// Encapsulation example
class BankAccount {
    #balance; // private field  
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    getBalance() {
        return this.#balance;
    }
}
let account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
//console.log(account.#balance); // Unaccessible, will throw an error
