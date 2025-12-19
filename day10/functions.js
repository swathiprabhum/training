function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); // Output: 15

function factorial(n) {
 let f= 1;
    for (let i = 1; i <= n; i++) {  
        f *= i;
 }   
    return f;
}

console.log(factorial(5)); // Output: 120

function maxofThree(x, y, z) {
    if (x >= y && x >= z) {
        return x;
    } else if (y >= x && y >= z) {
        return y;no
    } else {
        return z;
    }
}

console.log(maxofThree(10, 21, 15)); // Output: 21  

// Arrays - Logic with loops
let numbers = [5, 12, 8, 21, 3];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of array elements:", sum); // Output: 49

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        console.log(max);
    }
}
console.log("Maximum element in array:", max); // Output: 21

function findElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return "Found"; 
        }
    }
    return "Not found"; 
}

console.log(findElement(numbers, 21)); // Output: Found
console.log(findElement(numbers, 6));  // Output: Not found

function findEven(arr) {
    let evens = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    return evens;
}

console.log(findEven(numbers)); // Output: [12, 8]

// Strings
 let str = "example";
 let rev = "";
 for (let i = 0; i< str.length; i++){
    rev = str[i] + rev;
 }
 console.log("Reversed string:", rev); // Output: elpmasex }

function isPalindrome(s) {
    let reversed = "";
    for (let i =s.length-1; i>=0; i--){
        reversed += s[i];
    }
    return s === reversed;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// Objects
let person = {
    name: "SP",
    age: 30,
    city: "New York"
};

person.grade = "A"; // Adding new property
console.log("Name:", person.name); // Output: SP
console.log("Age:", person.age);   // Output: 30
console.log("City:", person.city); // Output: New York

console.log(person);

for (let key in person) {
    console.log(key + " " + person[key]);
}

// Functions with objects
let product = {
    name: "Laptop",
    price: 8000,
    discount: function(){
        return this.price * 0.1;
    }
};

console.log("Discount:", product.discount()); // Output: 800
console.log("Final Price:", product.price - product.discount()); // Output: 7200

// Array within object
let users = [
    {name: "user1", age: "18"},
    {name: "user2", age: "21"},
    {name: "user3", age: "22"}
]

for (let i=0; i< users.length; i++){
    if (users[i].age >= 21){
        console.log(users[i].name); 
    }
}

function findUser(name) {
    for (let i=0; i< users.length; i++){
        if (users[i].name === name)  return users[i];
    }
        return null;    
}

console.log(findUser("user2")); // Output: {name: "user2", age: "21"}
console.log(findUser("user4")); // Output: null

// Combination of all concepts
function totalMarks(students) {
    let total = 0;
    for (let i = 0; i < students.length; i++) {
        total += students[i].marks;
    }
    return total;
}

let students = [
    {name: "A", marks: 86},
    {name: "B", marks: 90},
    {name: "C", marks: 74}
];
console.log("Total Marks:", totalMarks(students)); // Output: 250