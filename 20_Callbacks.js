//  Asynchronous action are the action we initiate now and they finish later. --ex = setTimeout.
//  Synchronous action are initiate and finish one by one. -- ex = prompt(),alert,

//  Asynchronous Action =>

console.log("start");
setTimeout(function () {
  console.log("Hey I am good");
}, 5000);
console.log("End");

// ** Calbacks function =>  is a function passed into another function as an argument which is invoke inside the outer function to complete an action.

//  function
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

//  callback function
function callMe() {
  console.log("I am callback function");
}

//  passing function as an argument
greet("sanket", callMe);

// Example 2 =>...................................................................................

// function --
const calculate = (a, b, operation) => {
  return operation(a, b);
};

//  callback function --
function Addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

//  passing function as an argument
const result = calculate(10, 4, Addition);
console.log(result);


