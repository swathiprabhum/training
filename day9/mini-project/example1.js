let age = 18;
let salary = 30000;
let creditScore = 690;

if (age > 21 && salary > 30000 && creditScore >= 700) {
    console.log("You are eligible for a loan.");
} else {
    console.log("You are not eligible for a loan.");
    if (age <= 21) {
        console.log("Age must be greater than 21.");
    }
    if (salary <= 30000) {
        console.log("Salary must be greater than 30000.");
    }
    if (creditScore < 700) {
        console.log("Credit score must be at least 700.");
    }
}