// Arrays ......................

let marks = [98, 86, 67, 59, 90];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);

///////////////////////  Array Methods  ////////////////////////////////////////////////////////////////

let num = [1, 2, 3, 4, 5];
console.log(num);
console.log(typeof num);
// (1)  toString
let b = num.toString();
console.log(b);
console.log(typeof b);
//  .Join()
let c = num.join("_");
console.log(c, typeof c);

num.pop(); //.pop() remove last num in array (2)
console.log(num);
num.push(7); //.push(x) add num in array (3)
console.log(num);
num.shift(); // .shift() remove num from begining of array (4)
console.log(num);
num.unshift(10); // .unshift() add new num in begining of array (5)
console.log(num);

const names = ["sanket", "prashant", "shubham", "sumit", "pratik", "shubham"];
// console.log(names);

// {6} .IndexOf()
// console.log(names.indexOf("shubham",5));

//  {7} .lastIndexOf(
// console.log(names.lastIndexOf("shubham",4));

//  {8} .includes()
console.log(names.includes("sumit"));

//  (9) .concate Arrays .......... Dose not change existing Array.

num1 = [1, 2, 3, 4, 5];
num2 = [7, 8, 9, 10];
num3 = [11, 12, 13, 14, 15];

let newArray = num1.concat(num2, num3);
console.log(newArray);
console.log(num1);

//*******/  Delete array element  /**********//

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
delete n[5];
console.log(n); //[ 1, 2, 3, 4, 5, <1 empty item>, 7, 8, 9 ] --> it can not change array length.

//  sort Array .......... change original array **** interview Qestion.  $$$$$

let numb = [1, 14, 26, 34, 69, 45, 58, 89, 19];
numb.sort();
console.log(numb); // [1, 14, 26, 268, 34,369, 45,  5, 589,  9] ---> sorting alphabetically not in like 1,2,3

// sort in --> assending or desending order  ==> use compare function for sorting in ascending or descending.

let compare = (a, b) => {
  return a - b;
};
numb.sort(compare);
console.log(numb);

// reverse ......................

numb.reverse();
console.log(numb);

//  splice()  ............. ********** $$$$$$(start index, delete elemets, add elements)

let narr = [23, 345, 67, 98, 345, 768, 123, 654];
narr.splice(2, 3, 1022, 1023, 1024, 1025); // Splice =>
console.log(narr); // [23, 345, 1022, 1023, 1024, 1025, 768, 123, 654]

// slice.... create new array ...........

let newArr = narr.slice(2, 6);
console.log(newArr);

//  Array.from.....................

let name = "sanket";
let arrr = Array.from(name);
console.log(arrr);

//  .find()  **********

const channels = [
  { name: "sanket", salary: 30000 },
  { name: "prashant", salary: 60000 },
  { name: "shubham", salary: 50000 },
];

// console.log(
//   channels.find((Element) => {
//     return Element.salary === 50000;
//   })
// );

// Array map method ///////////////

let ar = [12, 46, 98, 43, 57];
ar.map((item) => {
  console.log(item);
  return item;
});

//  Array.filter .................

let ar2 = [12, 46, 98, 43, 57];
let a2 = ar2.filter((item) => {
  return item < 50;
});
console.log("filtered value less than 50 is = ", a2);

//  Array Reduce method...=> reduce method will be iterate every element from array. it will genrate result in single value.

let arrr3 = [1, 2, 3, 4, 5, 6];

let newarrr3 = arrr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(newarrr3); // => 21

///////////////////////  loops in array /////////////////////////////////////////////////

//  for loop ....................(Multiple execution done in single statment)

let x = [1, 3, 5, 7, 9];
for (i = 0; i < x.length; i++) {
  console.log(x[i]);
}

const names2 = ["sanket", "prashant", "shubham", "sumit", "pratik", "shubham"];

for (let i = 0; i < names2.length; i++) {
  console.log(names2[i]);
}

// for of loop

for (let key of names2) {
  console.log(key);
}

//  forEach loop ........ forEach is Array method. is only available for arrays in JavaScript
//  while the for loop can be used to iterate over various types of collections.

x.forEach((element) => {
  console.log(element * element);
});

/////////////////////  random number ////////////////////////////////////////////////////

function getRandom() {
  return Math.random() * 100 + 1;
}
getRandom();
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());

//  RandomNumber between 1-100

const randomNumber1 = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber1);

// Using Function =>

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

generateRandomNumber();
console.log(generateRandomNumber());

//  Generate random number between two given numbers

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

randomIntFromInterval(10, 25);
