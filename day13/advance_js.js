function greet(fn)
{
    fn();
}

greet(function() {
    console.log("Hello");
});


function calculator(operation){
    return function (a,b) {
        if(operation === "add") return a+b;
        if(operation === "sub") return a-b;
    }
}
let add = calculator("add");
console.log(add(10,5));

// Array methods

// .map
let nums = [1,2,3]
let squares = nums.map(n => n*n);
console.log(squares);

let students = [
    {name: "A", marks: 60},
    {name: "B", marks: 80}
]

let results = students.map(p => {
    return {
        name:p.name,
        status: p.marks >= 70 ? "Pass": "Fail"
    }
} )

console.log(results);


// .filter
let numbers = [10,20,30,40];
let big = numbers.filter(n => n > 20);
    console.log(big);

let employees = [
     {name: "A", salary: 30000},
    {name: "B", salary: 80000}
]
let highpaid = employees.filter(e => e.salary > 30000)
console.log(highpaid)

// .reduce

let numbers1 = [1,2,3];
let sum = numbers1.reduce((total,n) => total +n,0)
console.log(sum);

let orders = [
    {amount: 200},
    {amount: 300},
    {amount: 500}
];
let totalAmount = orders.reduce((sum,o) => {
    return sum + o.amount;
},0);

console.log(totalAmount);


