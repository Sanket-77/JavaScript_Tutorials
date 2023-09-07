//  Array =>

// 1} reverse the array without using .reverse method *******

let arr = ["a", "b", "c", "d"];

function reverseArray(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
}

reverseArray(arr);
// console.log(arr);

// 2} write name and number of name-count from given array.

const namesArray = [
  "Sanket",
  "John",
  "Jane",
  "Sanket",
  "Alice",
  "Bob",
  "Sanket",
  "David",
  "Alice",
];

const nameCounts = {};
namesArray.map((name) => (nameCounts[name] = (nameCounts[name] || 0) + 1));

const output = Object.entries(nameCounts).map(
  ([name, count]) => `${name} ${count}`
);

console.log(output);

// 3 //  Write the name of oldest person =>

let array = [
  { name: "john", age: 35 },
  { name: "mike", age: 20 },
  { name: "jack", age: 45 },
];

let oldestPerson = array.reduce((oldest, current) => {
  return current.age > oldest.age ? current : oldest;
});

console.log("The name of the oldest person is: " + oldestPerson.name);

// 4 // Reverse the each word in string.

const string = "Welcome to this Javascript Guide!";

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

const reversedString = reverseWords(string);
console.log(reversedString);

// ////////////////////////////////////////////////////////////////////////////////////////////////

const characters = [
  { name: "sanket", height: "167", weight: 72, gender: "male" },
  { name: "prachi", height: "162", weight: 65, gender: "female" },
  { name: "prashant", height: "169", weight: 75, gender: "male" },
  { name: "sayli", height: "165", weight: 70, gender: "female" },
];
//  1 // get an array of all names

const names = characters.map((ch) => {
  return ch.name;
});
// console.log(names); // [ 'sanket', 'prashant', 'prachi', 'sayli' ]

// 2 //  Get an array of objects with just name and height property

const proch = characters.map((ch) => {
  return {
    name: ch.name,
    height: ch.height,
  };
});
// console.log(proch);

// 3 // Get total  height of all characters

const totalHeight = characters.reduce((pre, ch) => {
  return pre + Number(ch.height);
}, 0);

// console.log(totalHeight);

//  4 // Get character with weight grater than 70

const graterThan = characters.filter((ch) => {
  return ch.weight > 70;
});
// console.log(graterThan);

// 5 // Get all male characters

const maleCh = characters.filter((ch) => {
  return ch.gender === "male";
});

// console.log(maleCh);

// 6 sort by Gnder

const sortByGender = characters.sort((ch1, ch2) => {
  if (ch1.gender > ch2.gender) {
    return -1;
  }
  if (ch1.gender < ch2.gender) {
    return 1;
  }
  return 0;
});

// console.log(sortByGender);

// //////////////////////////////////////////////////////////////////////////////

// 1 > write a program to give output two diff array for odd and even number in javascript

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let oddNumbers = [];
// let evenNumbers = [];

// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//         evenNumbers.push(a[i]);
//     } else {
//         oddNumbers.push(a[i]);
//     }
// }

// console.log("Odd Numbers:", oddNumbers);
// console.log("Even Numbers:", evenNumbers);

// 2.find lowest and highest value from given array.

let a = [1, 2, 3, 4, 5, 6, 7];

// Find the lowest value
let lowest = a[0]; // Assume the first element is the lowest
for (let i = 1; i < a.length; i++) {
  if (a[i] < lowest) {
    lowest = a[i];
  }
}

// Find the highest value
let highest = a[0]; // Assume the first element is the highest
for (let i = 1; i < a.length; i++) {
  if (a[i] > highest) {
    highest = a[i];
  }
}

console.log("Lowest value:", lowest);
console.log("Highest value:", highest);

// 3.Check similar word from array and remove it

let arr2 = ["test1", "suhas", "test2", "test3", "suhas"];

function removeduplicate(a) {
  var result = [];
  a.forEach(function (item) {
    if (result.indexOf(item) < 0) {
      result.push(item);
    }
  });
  return result;
}
console.log(removeduplicate(arr2));

//4. Reverse the digit.

input: 123456
output: 654321

function inputNo(num){
    var convertStr = num.toString();
    var spltstr = convertStr.split("");
    var result = "";
    for(let i= spltstr.length -1 ; i >= 0 ; i--){
        result = result + spltstr[i];
    }
    return parseInt(result);
}
console.log(inputNo());
// 
