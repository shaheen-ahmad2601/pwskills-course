// Q3. Differentiate between unary, binary, and ternary operators in JavaScript. Give examples of each.
// Unary Operators: Operate on a single operand.
let num = 5;
let negNum = -num; // Unary negation

// Binary Operators: Operate on two operands.
let a = 5;
let b = 2;
let sum = a + b; // Binary addition

// Ternary Operator: Takes three operands and is often used for conditional 
let result = (a > b) ? "Greater" : "Lesser"; // Ternary conditional


// Q4. Discuss the precedence and associativity of operators in JavaScript. Why is understanding these concepts important?
// Precedence: Determines the order of evaluation when multiple operators are used in an expression. Operators with higher precedence are evaluated first. For example, multiplication has higher precedence than addition.

// Associativity: Defines the order in which operators of the same precedence are evaluated. It can be left-to-right (e.g., addition) or right-to-left (e.g., assignment).
// Understanding these concepts is crucial for writing code that behaves as intended, avoiding unexpected results due to incorrect evaluation order.

// Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest = (principal * rate * time) / 100.
let principal = 1000;
let rate = 5;
let time = 2;

let simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest:", simpleInterest);



// Q6. Write a JavaScript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg) / height * height.
let weight = 70;
let height = 1.75;

let bmi = weight / (height * height);
console.log("BMI:", bmi);


// Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate arithmetic operators.
let radius = 10;
let area = Math.PI * Math.pow(radius, 2);
console.log("Area of the circle:", area);
