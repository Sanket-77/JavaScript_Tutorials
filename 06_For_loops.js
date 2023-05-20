for (let i = 0; i <= 3; i++) {
  console.log(i);
}

// for loop....................

let sum = 0;
n = prompt("enter number");
n = Number.parseInt(n);
for (i = 0; i < n; i++) {
  sum += i + 1;
}
console.log("sum of first " + n + " natural number is " + sum);

//  for in loop........................

let obj = {
  sanket: "78",
  prashant: "98",
  shubham: "87",
};
for (key in obj) {
  console.log(`key is ${key} and value is ${obj[key]}`);
}

//  question 1 ..............................

let marks = {
  sanket: "98",
  Shubham: "99",
  prashant: "97",
};

// itterate Object using for loop .........Object.keys()

for (i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "the marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}

//  itterate object using for-in loop.........

for (let key in marks) {
  console.log("the marks of " + key + " are " + marks[key]);
}
