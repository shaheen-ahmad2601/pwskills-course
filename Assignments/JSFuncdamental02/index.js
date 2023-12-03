// Explain the usage of ternary operator with syntax and write a program to check whether the number is even or
// odd using the ternary operator.

// Solution
// Ternary operator is used to test the conditions similar to that of an if else block. It has three operands: condition,
// statement if condition is true and statement if condition will be false.

// condition ? value if true : value if false

// First we define the condition and if it's evaluated to be true then the statement after the question mark will be
// executed else the statement after the colon will be executed.

const number = 10;
const result = number % 2 === 0 ? "Even" : "Odd";
console.log("result", result);

// ---------------------------------------------

// problem 2
// Describe the usage of the comma operator in JavaScript and provide an example.
// Solution
// Comma operator allows us to evaluate multiple expressions in a single statement like declaring multiple
// variables in a single statement separating them with the comma operator.

const a = 10,
  b = 20,
  c = 30;
console.log(a, b, c);

// problem 3
// Use a nested ternary operator to check that a number is positive, negative or zero. You have to print “positive” if
// the number is positive and similarly for negative and zero also.

const num = 0;
num > 0
  ? console.log("positive")
  : num < 0
  ? console.log("nigative")
  : console.log("zero");



//   problem 4
// Use a ternary operator to check that a person is eligible to vote or not by checking his age. If the age of the
// person is less than 18 then “You cannot vote” should be logged else “You can vote” should be logged.

const age = 18;
age<18 ? console.log("you cannot vote") :  console.log("you cannot vote") ;