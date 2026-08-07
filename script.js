let studentName = "Samuel Emmanuel Thomas";
let age = 20;
let major = "Computer Engineering";

console.log("Student Name: " + studentName);
console.log("Age: " + age);
console.log("Major: " + major);

function greetStudent(name) {
    alert("Welcome, " + name + "!");
}

greetStudent(studentName);

function calculateSum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

let result = calculateSum(18, 27);
alert("Sum = " + result);

let input = Number(prompt("Enter a whole number"));

if (isNaN(input)) {
    alert("Invalid input. Please enter a number.");
} else if (input % 2 === 0) {
    alert(input + " is an even number.");
} else {
    alert(input + " is an odd number.");
}

let fruits = ["Apple", "Orange", "Mango", "Banana", "Grape"];

for (let fruit of fruits) {
    console.log(fruit);
}
