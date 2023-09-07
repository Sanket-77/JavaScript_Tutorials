//
//

// let pro = new Promise((resolve, reject) => {
//   console.log("promis is pending ");
//   setTimeout(() => {
//     console.log("I am promise and I am resolved");
//     resolve(true);
//   }, 3000);
// });

// let a = 3;
// let b = "3";

// c = a + b;

// console.log(c);
// console.log(typeof c);

//  how to use this key word =>

// const person2 = {
//   name: "prashant",
//   age: "28",
//   details: function () {
//     return console.log(
//       `my name is ${this.name} and age is ${this.age} year old`
//     );
//   },
// };

// console.log(person2.details());

// const namesArray = [
//   "Sanket",
//   "John",
//   "Jane",
//   "Sanket",
//   "Alice",
//   "Bob",
//   "Sanket",
//   "David",
//   "Alice",
// ];

// const namecounts = {};
// namesArray.map((name) => (namecounts[name] = (namecounts[name] || 0) + 1));
// const result = Object.entries(namecounts).map(
//   ([name, count]) => `${name} - ${count}`
// );
// console.log(result);

// let i, j, k;
// for (i = 5; i >= 1; i--) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write(" ");
//   }
//   for (k = 5; k >= i; k--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

const string = "Welcome to this Javascript Guide!";

const reverseString = (str) => {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

const revers = reverseString(string);
console.log(revers);
