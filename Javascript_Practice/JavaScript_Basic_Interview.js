//  1
// let a = [];
// let b = [];
// console.log(a == b); // false => memory location is diff
// console.log(a === b); // false

//  2
// let a = [];
// let b = a;
// console.log(a == b); // true
// console.log(a === b); // true

// 3
// let a = [20];
// let b = [20];
// console.log(a[0] == b[0]); // true
// console.log(a[0] === b[0]); //true


// 4
// let c = [1, 2, 3, 4, 5];
// let a = { name: " sanket " };
// console.log(...c); //=> 1 2 3 4 5

// 5 //Not a Number
// console.log(typeof NaN); //  => Number

// 6
// let data = 10 - -10;
// console.log(data); //=>20

// 7
// const myset = new Set([1, 2, 1, 3, 4, 3, 4, 3, 5]);
// console.log(myset); //=> Set(5) { 1, 2, 3, 4, 5 }

// 8
// const data = { name: "sanket" };
// console.log(delete data.name); // true => data is deleted.
// console.log(data); // {}
// console.log(delete data); //false => we can not delete object directally

// 9
// const data = ["sanket", "prashant", "shubham"];
// const [x, y] = data;
// console.log(x, y); // sanket prashant

// 10   // how to get second value from array.
// const data = ["sanket", "prashant", "shubham"];
// const [, y] = data;
// console.log(y); // prashant

// 11   // how to get name from object without using . operator
// const data = { name: "sanket", age: "26", gender: "male" };
// const { name, age, gender } = data; // => using object destructuring
// console.log(gender); // => male

// 12   // merge two objects
// let data = { name: "sanket", age: "26", gender: "male" };
// let info = { city: "kolhapur", pincode: "416122" };
// data = { ...data, ...info };
// console.log(data);// {name: 'sanket',age: '26',gender: 'male',city: 'kolhapur',pincode: '416122'}

// 13
// let data = { name: "sanket", age: "26", gender: "male" };
// let info = { city: "kolhapur", pincode: "416122" };
// data = { data, ...info };
// console.log(data); // {data: { name: 'sanket', age: '26', gender: 'male' },city: 'kolhapur',pincode: '416122'}

// 14   // two keys are same - skill
// let data = { name: "sanket", age: "26", skill: "React js" };
// let info = { city: "kolhapur", pincode: "416122", skill: "Node js" };
// data = { ...data, ...info };
// console.log(data); //{name: 'sanket',age: '26',skill: 'node js',city: 'kolhapur',pincode: '416122'}

// 15
// const name = "sanket";
// console.log(name()); // Error => name is not a function

// 16
// const result = false || {} || null;
// console.log(result); //=>  {}

// 17
// const result = false || null || " ";
// console.log(result); // empty string

// 18
// const result = [] || 0 || true;
// console.log(result); // => []

// 19
// console.log(Promise.resolve(5)); //=> Promise { 5 }

// 20
// const myEmoji = "\u{1F604}";
// console.log("😄" === "😄"); // true // Unicode

// 21
// JSON.parse(); //=> parse JSON to javascript value.

// 22
// let name = "sanket";
// function getName() {
//   console.log(name);
//   let name = "prashant";
// }
// getName(); //error => Cannot access 'name' before initialization. => let can not support hoisting.

// 23
// let name = "sanket";
// function getName() {
//   console.log(name);
// }
// getName(); //=>sanket

// 24
// console.log(`${((x) => x)(" i love ")} to program`); // => I love to program

// 25   // out put should be 6
// function sumvalue(x, y, z) {
//   return x + y + z;
// }
// console.log(sumvalue(...[1, 2, 3]));

// 26
// const name = "code step by step";
// console.log(typeof name);
// console.log(!typeof name === "Object"); //false
// console.log(!typeof name == "String"); //false

// 27
// const name = "sumit";
// const age = 24;
// console.log(isNaN(name)); // true
// console.log(isNaN(age)); // false

//  28
// let person = { name: "sanket" };
// //  what can modify person object
// Object.seal(person); // => when we add Object.seal we can not add more property in object but only change existing properties.
// console.log(person);

// 29 => delete first elemet from array
// let data = [1, 3, 5, 9];
// data.shift();
// console.log(data);

// 30 => delete last elemet from array
// let data = [1, 2, 3, 4, 5, 6, 7, 89];
// data.pop();
// console.log(data);

// 31 =>//  check value is odd or even
// let a = 34;
// let b = a % 2;
// console.log(b);

// 32
// let data = { name: "sanket" };
// delete data.name;
// console.log(data); // => {}

// 33 // convert data to boolean false
// let data = "true";
// console.log(!data); //=> boolean =>  use nuggestion !.

// 34 // convert data to boolean true
// let data = "true";
// console.log(!!data); //=> use double nuggestion !! before data.

// 35 //what is diff between map and forEach function
// => (forEach) dose not return anything. and (map) return new array, dose not change original array.

// 36 // delete element from array
// let data = ["sanket", "prashant", "shubham"];
// delete data[1];
// console.log(data); //=>[ 'sanket', <1 empty item>, 'shubham' ] => can not change the length of array.

// 37 // mearge two array
// let a = [1, 2, 3, 4];
// let b = [6, 7, 8, 9];
// let c = [...a, ...b];
// console.log(c);

// 38
// let a = [1, 2, 3, 4];
// let b = [4, 7, 8, 9];
// let c = [...a, ...b];
// console.log(c); //=> [1,2,3,4,4,7,8,9]

// 39
// let a = 3 ** 3;
// console.log(a); // square 3*3*3 = 27

// 40
// let a = 2;
// setTimeout(() => {
//   console.log(a); //=> 100
// }, 0);
// a = 100;

// 41
// let a = 20;
// let A = 30;
// console.log(A); //=> 30

// 42
// let A10 = "ok";
// let 10A = "not ok" // not start with number

// 43
// let a = "like";
// let b = `like`;
// console.log(a === b); // => true

// 44
// let a = 1;
// let c = 2;
// console.log(--c === a); //=> true => --c decrement

// 45
// let a = 1;
// let b = 1;
// let c = 2;
// console.log((a === b) === --c); //=> false

// 46
// console.log(3 * 3); //=> 9
// console.log(3 ** 3); //=> 27
// console.log(3***3); //=> error

// 47
// console.log(a); //=> undefined
// var a;

// 48
// console.log(b); //=> b is not defined

// 49
// console.log([[[[[]]]]]);

//  50
//  how to find os name
// console.log(navigator.platform); //=> win32s

//  51
// let for = 100 ; //=> error

//  52
// function fruit() {
//   console.log(name); //=> undefined
//   console.log(price); //=> error

//   var name = "Banana";
//   let price = 22;
// }
// fruit();

// 53
// for (var i = 0; i < 3; i++) {   // first for loop executed. var is global scop => then setTimeout executed
//   setTimeout(() => {
//     console.log(i), 1; //=> 3 3 3
//   });
// }

// 54
// for (let i = 0; i < 3; i++) { // let is block scoped
//   setTimeout(() => {
//     console.log(i), 1; //=> 0 1 2
//   });
// }

// 55
// console.log(+true); // => 1
// console.log(typeof +true); //=> number

// 56
// console.log(!"sanket"); // => false
// console.log(typeof "sanket"); // => string

// 57
// let data = "size";
// const bird = {
//   size: "small",
// };
// console.log(bird[data]); //=> small
// console.log(bird["size"]); //=> small
// console.log(bird.size); //=> small
// console.log(bird.data); //=> undefined

//  58
// let c = { name: "sanket" };
// let d;
// d = c;
// c.name = "Teknas";
// console.log(d.name); //=> Teknas

// // 59
// var x;
// var x = 10;
// console.log(x);

// 60
// var x;
// let x = 10;
// console.log(x); //=>Identifier 'x' has already been declared

// 61
// let a = 3;
// let b = new Number(3);
// console.log(a == b); //true
// console.log(a === b); // false => type of b is object
// console.log(typeof b);

// 62
// let name;
// nmae = {}; // typo
// console.log(name); //=> undefined

//  63
// function fruit() {
//   console.log("woof");
// }
// fruit.name = "banana";
// fruit(); //=> woof

// 64
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, "2")); //==> 12
// console.log(typeof sum); // function

// 65
// let number = 0;
// console.log(number++); //=> 0
// console.log(++number); //=> 2
// console.log(number); //=> 2

// 66
// function getage(...args) {
//   console.log(typeof args); //=> object
// }
// getage(21);

// 67
// function getage() {
//   "use strict";
//   age = 26;
//   console.log(age); //=> age is not defined
// }
// getage();

// 68
// const sum = eval("10*10+5"); //=> eval convert string into exprestion
// console.log(sum); //=> 105

// 69
// localStorage ==> stay as it is until we not clear
// sessionStorage ==> clear automatically when we close the tab.
// sessionStorage.setItem("rollNumber", 102);

// 70
// const obj = { 1: "a", 2: "b", 3: "c" };

// console.log(obj.hasOwnProperty(1)); //=> true
// console.log(obj.hasOwnProperty("1")); //=> true

// 71
// const obj = { a: "one", b: "two", a: "repeat" };
// console.log(obj); //=> { a: 'repeat', b: 'two' }

// 72
// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i); //=> 1 2 4
// }

// 73
// const foo = () => {
//   console.log("first");
// };
// const bar = () =>
//   setTimeout(() => {
//     console.log("two");
//   });
// const baz = () => {
//   console.log("three");
// };

// bar();
// baz();
// foo();
// ===> three, one, two

// 74
{
  /* <div>
  <div onclick={console.log("first div")}>
    <div onclick={console.log("second div")}>
      <button onclick={console.log("button")}>Click</button>
    </div>
  </div>
</div>; */
} //==> when we click on button => click button then second div and first div

// 75
// const person = { name: "sanket" };

// function sayhi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayhi.call(person, 21)); //=> sanket is 21
// console.log(sayhi.bind(person, 21)); //=> [Function: bound sayhi]

// 76
// function sayhi() {
//   return (() => 0)();
// }
// console.log(typeof sayhi()); //=> number => return 0. typrof 0 is number.

// 77
// function sayhi() {
//   return () => 0;
// }
// console.log(typeof sayhi()); //=> function

// 78
// console.log(typeof typeof 1); //=> string

// 79
// const number = [1, 2, 3];
// number[6] = 11;
// console.log(number); //=>[ 1, 2, 3, <3 empty items>, 11 ]

// 80
// const number = [1, 2, 3];
// number[9] = number;
// console.log(number); //=>  [1, 2, 3, empty × 6, Array(10)] ==> infinite condition nested array.

// 81
// Everything in javascript is either => primitive or object.

// 82
// console.log(!!null); //=> false
// console.log(!!""); // => false
// console.log(!!1); //=> true

// 83
// console.log(setTimeout(()=>{console.log('Hi'),1000}));
// console.log(setTimeout(()=>{console.log('Hi'),1000}));
// console.log(setTimeout(()=>{console.log('Hi'),1000}));

// 84
// console.log(..."sanket"); //=> s a n k e t

// 85
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, "one");
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]).then((res) => console.log(res)); //=> two

// 86
// let persone = { name: "sanket" };
// const member = [persone];
// persone = null;
// console.log(member); //=>[ { name: 'sanket' } ]

// 87
// const person = { name: "sanket", age: 26 };
// for (const item in person) {
//   console.log(item); //=> name, age
// }

// 88
// let data = 3 + 4 + "5";
// console.log(data); //==> 75
// console.log(typeof data); //==> string

// 89
// console.log(typeof 3 + 4 + "5"); //===> number45

// 90
// console.log(typeof (3 + 4 + "5")); //==> string

// 91
// data = 3 + 4 + +"5";
// console.log(data); //=>12
// console.log(typeof data); //=>number

// 92
// console.log([] == []); //=> false
// console.log([] === []); //=> false

// 93
// let data = [1, 2, 3].map((num) => {
//   if (typeof num === "number");
//   return num * 2;
// });
// console.log(data); //=> [ 2, 4, 6 ]

// 94
// function getinfo(member) {
//   member.name = "sanket";
// }
// const person = { name: "Teknas" };

// getinfo(person);
// console.log(person); //=>{ name: 'sanket' }

// 95
// function car() {
//   this.make = "tata";
//   return { make: "kia" }; //=>if we return property then they overide old property
// }

// const mycar = new car();
// console.log(mycar.make); //=> kia

// 96
// (() => {
//   let x = (y = 10);
// })();
// console.log(typeof x); //=> undefine  ==> let is block scop. we console it outside of scop

//  97
// (() => {
//   let x = y = 10;
// })();
// console.log(typeof y); //=> number

// 98
// (() => {
//   let x = 10;
// })();
// (() => {
//   let x = 10;
// })();
// console.log(typeof x); //=> undefined

// 99
// (() => {
//   let x = (y = 10);
// })();
// (() => {
//   let x = (y = 20);
// })();
// console.log(y); //=> 20  //=> we only declair x with let but y is globale variable.

// 100
// let x = 100;
// (() => {
//   var x = 20;
// })();
// console.log(x); //=> 100

//  101
// console.log(!true - true); //==> -1 ==> true is 1, ! true is 0

//  102
// console.log(true + +"2"); //==> 3

//
// 1
// console.log(null == undefined); // ==> true

// 2
// let a;
// console.log(a); //=> Undefine
// console.log(b); // > error

// 3
// let a = null;
// a++;
// console.log(a); //=> 1

// 4
// const year = "2023";
// console.log(typeof +year); // => number

// 5
// let array1 = [3, 2, 3, 4, 3, 2];
// console.log([...new Set(array1)]); //=> [3,2,4]
