// Variable is function-scoped and can be redeclared and updated
var age = 25;
age = 26;

let score = 100;
score = 150;

const city = "New York";
//city = "Los Angeles"; // This will cause an error

// console.log("Score:", score);
// console.log("City:", city);

{
    let newScore = 200;    
}

//console.log("New score:", newScore);

let count = 10; // Integer value
let name = "Swathi"; // String value
let isActive = true; // Boolean value
let items = [1, 2, 3, 4, 5]; // Array of numbers
let colors = ["red", "green", "blue"]; // Array of strings
let person = { firstName: "Swathi", lastName: "Prabhu" }; // Object with properties
let nothing = null; // Null value
let notDefined; // Undefined value

//console.log(colors[1]);  

// Arithmetic Operators
let a = 10, b = 4;
// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);

console.log('5' == 5)  // true - compares values irrespective of type
console.log('5' === 5)  // false - compares both value and type