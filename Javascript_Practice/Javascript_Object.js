//  Object ==>  is a collection of releted data or releted functionality.
//  Object store data in form of key and value.
//  In object we can store diff type of data. like => string, boolean, number.
//

let key = "Address";
let phoneNo = 9657265631;
let email = "sanketchavan4686@gmail.com";
//
let user = {
  name: "sanket",
  age: 26,
  isDeveloper: true,
  getData: function () {
    return `My name is ${this.name} and my age is ${this.age}`;
  },
  Inner: {
    name: "Inner Man",
    age: 18,
  },
  ["pin code"]: "416122",
  [key]: "Kolhapur, pune, Bharat",
  phoneNo, // shorthand property
  email, // Shorthand property
};

// console.log(user);
// console.log(user.getData());
// console.log(user.Inner.name);
// console.log(user["pin code"]);
// console.log(user[key]);

// loop in object..........

for (item in user) {
  //   console.log(item);
  //   console.log(user[item]);
  //   console.log(`key is ${item} and value is ${user[item]}`);
}

let emp = {
  peter: 100,
  bruce: 150,
  tonny: 250,
};

// // write total value in object using reduce

// console.log(Object.values(emp)); // object.values write array of value.

let total = Object.values(emp).reduce((acc, value) => {
  return acc + value;
}, 0);
// console.log(total);

// // write total using for loop

let salary = 0;

for (item in emp) {
  salary += emp[item];
}

// console.log(salary);

//  Patern making using for loop - write angle pattern  /////////////

// let i, j;
// for (i = 0; i <= 5; i++) {
//   for (j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// *
// **
// ***
// ****
// *****
// ******

///////////////////////////////////////////////

//  Mirror write angle pattern

let i, j, k;
for (i = 5; i >= 1; i--) {
  for (j = 1; j <= i; j++) {
    process.stdout.write(" ");
  }
  for (k = 5; k >= i; k--) {
    process.stdout.write("*");
  }
  console.log();
}
//      *
//     **
//    ***
//   ****
//  *****

///////////////////////////////////////////////////////
