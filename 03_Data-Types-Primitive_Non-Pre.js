//  nn bb ss u --> 7 primitive datatypes

//  1. null => //This data type can hold only one possible value that is null.
// null means that the variable is currently empty. It is used to indicate the absence of a meaningful value.
let a = null;
// typeof null is =>  object

//  2. Number => //Number data type can be used to hold decimal values as well as values without decimals.
let b = 897;
let m = 45.7;

//  3. Boolean => //The boolean data type can accept only two values i.e. true and false.
let c = true;

// 4. BigInt  =>
//JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
// To create a BigInt, append n to the end of an integer or call BigInt():
let d = BigInt("586985676");

// 5. String =>  //sequence of characters that are surrounded by single or double quotes.
let e = "sanket";

//  6. Symbol => This data type is used to create objects which will always be unique. these objects can be created using Symbol constructor.
let f = Symbol("I am symbol");
//  typeof symbol() => symbol

// 7. Undefine => //The meaning of undefined is ‘value is not assigned’.
let g = undefined;

console.log(a, b, c, d, e, f, g);

// Non primitive datatype =>  The data types that are derived from primitive data types are known as non-primitive data types.

// Objects and Array in Javascript =>

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
// a1 = 77; // not allow to change const value.

a1["sanket"] = "hey";
console.log(a1);

// *** default values of primitive data types are  **********=>>>>>>>>>>>>>>>>>>>

// null => null   // This represents the intentional absence of any object value.
// number => 0
// boolean => false
// BigInt => 0n.
// String => ""
// Symbol => Symbol()
// Undefined => Undef
