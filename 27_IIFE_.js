// Immediately Invoke function => //  use for async-await function
let a = () => {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      resolve(456);
    }, 4000);
  });
};

(async () => {
  let b = await a();
  console.log(b);
  let c = await a();
  console.log(c);
  let d = await a();
  console.log(d);
})();

//  *************** Destructuring ======>

let arr = [2, 3, 4, 6, 8, 9, 5, 8];
let [x, , , ...rest] = arr;
console.log(x, rest);

//

let { p, q } = { p: 1, q: 2 };
console.log(p, q);

// ********** Spred Operator => convert array into object ************

let arr1 = [3, 5, 9, 5, 7, 9, 3, 23, 56];
let obj1 = { ...arr1 };
console.log(obj1);

function sum(v1, v2, v3) {
  return v1 + v2 + v3;
}
console.log(sum(...arr1));

//  ******* Hoisting => *******************

console.log(m); // Undefine
greet();
function greet() {
  console.log("Good Morning");
}
var m = 7; // Declaration hoisted to the top but initialization is not
//  let m = 3 ===> cannot access before initialization.
console.log(m);

//  using var function expression not hoisted

var af = function () {}; // cannot access before initialization

//  ****** Closures =>>>>>>>>>
// closure gives you access to an outer function's scope from an inner function.

function Hello1() {
  let message = "Good morning";
  console.log("Hello 1 : " + message);
  let c = function Hell2() {
    console.log("I am c " + message);
  };
  return c;
}
c = Hello1();
c();

//  Arrow Function =>>>>>>>>>>>>>

const z = {
  name: "sanket",
  Role: "JS_Developer",
  Exp: "2",
  show: function () {
    setTimeout(() => {
      console.log(`the name is ${name}\n The role is ${Role}`);
    }, 2000);
  },
};
z.show();
