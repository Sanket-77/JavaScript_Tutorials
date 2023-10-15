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

input: 123456;
output: 654321;

function inputNo(num) {
  var convertStr = num.toString();
  var spltstr = convertStr.split("");
  var result = "";
  for (let i = spltstr.length - 1; i >= 0; i--) {
    result = result + spltstr[i];
  }
  return parseInt(result);
}
console.log(inputNo());

//
// **** FibonacciSeries ****=======>

function generateFibonacciSeries() {
  FibonacciSeries = [1, 2];

  for (i = 2; i <= n; i++) {
    FibonacciSeries[i] = FibonacciSeries[i - 1] + FibonacciSeries[i - 2];
  }
  return FibonacciSeries.slice(0, n + 1);
}
const n = 12;
// console.log(generateFibonacciSeries(n));

//  Filter Number from Array

arr = [2, 1, "3", "16", 123];

const filteredArr = arr.filter((x) => typeof x !== "string");
const filteredArr2 = arr.filter((x) => typeof x !== "number");

// console.log(filteredArr, filteredArr2);

// write Array of name list if the value is more than 60

const ob = { sanket: 60, prashant: 78, shubaham: 80, pratik: 47, sumit: 65 };

function compair(ob) {
  let result = [];
  for (let item in ob) {
    if (ob[item] > 60) {
      result.push(item);
    }
  }
  return result;
}
console.log(compair(ob));

// 7}  flattened nested array

ar = [1, 2, 3, [6, 7, [98, 90], 23, 4], 1];

const flattenedNestedArray = (array) => {
  let flattened = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      flattened = flattened.concat(flattenedNestedArray(element));
    } else {
      flattened.push(element);
    }
  });
};

console.log("flattenedNestedArray = ", flattenedNestedArray(ar));

//8} find highest value in nested array

const findHighestElement = (nestedArray) => {
  let highestEl = Number.NEGATIVE_INFINITY;

  nestedArray.forEach((subArray) => {
    if (Array.isArray(subArray)) {
      subArray.forEach((element) => {
        if (element > highestEl) {
          highestEl = element;
        }
      });
    } else {
      if (subArray > highestEl) {
        highestEl = subArray;
      }
    }
  });

  return highestEl;
};

a2 = [1, 2, 3, [6, 7, [98, 90], 23, 4], 1];
a3 = [
  [1, 2, 3],
  [78, 79, 80],
  [84, 88],
];

console.log("HighestElemetfromnestedarray = ", findHighestElement(a3));

//  9} find characte count from string

const countChar = (str) => {
  const charcount = {};
  let cleanedString = str.replace(/[^A-Za-z]/g, "").toLowerCase();
  for (let char of cleanedString) {
    charcount[char] = (charcount[char] || 0) + 1;
  }
  console.log(cleanedString);

  return charcount;
};
let sn = "SaNasana98";

console.log(countChar(sn)); //{ s: 2, a: 4, n: 2 }

// 10}  current Date

var CurrentDate = new Date();

let Date1 = CurrentDate.getDate();
let Month = CurrentDate.getMonth() + 1;
let Year = CurrentDate.getFullYear();

console.log("Date ", Date1);
console.log("Month", Month);
console.log("Year ", Year);

console.log(`${Date1} | ${Month} | ${Year}`);

let hours = CurrentDate.getHours();
let minutes = CurrentDate.getMinutes();
let seconds = CurrentDate.getSeconds();

console.log(`${hours}-${minutes}-${seconds}`);

console.log(Date());
console.log("CurrentDate ", CurrentDate);

//  11} Find Leap Year

const FindLeapYear = (startyear, endyear) => {
  let Leapyear = [];
  for (let year = startyear; year <= endyear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      Leapyear.push(year);
    }
  }
  return Leapyear;
};

let startyear = 2002;
let endyear = 2023;

let result = FindLeapYear(startyear, endyear);
console.log("Leap Year", result);

//  ////// interchange the value

let a1 = 4;
let b1 = 5;

[a1, b1] = [b1, a1];

console.log("a1 = ", a1);
console.log("b1 = ", b1);
