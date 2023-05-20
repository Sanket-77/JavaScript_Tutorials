//  nn bb ss u --> 7 primitive datatypes

let a = null;
let b = 897;
let c = true;
let d = BigInt("578");
let e = "sanket";
let f = Symbol("I am symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);

// Non primitive datatype =>  Objects in Javascript

const item = {
  sanket: true,
  Prashant: false,
  shubham: 69,
  sumit: undefined,
};
console.log(item["shubham"]);

const a1 = {
  sanket: true,
  Prashant: false,
  shubham: 69,
  sumit: undefined,
};
a1 = 77;    // not allow to change const value.

a1["sanket"] = "hey";
console.log(a1);
