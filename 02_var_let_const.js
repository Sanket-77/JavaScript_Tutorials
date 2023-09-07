//  var is function scoped
//  let and const is block scoped

console.log("var let const");

let a = 45;
let b = "sanket";
let c = null;
let d = undefined;
const author = "sanket const";

{
  let b = 7737;
  const author = "Teknas const";
  console.log(b);
  console.log(author);
}
b = "switch";
console.log(b);

// Const => we can not redeclare const value.

// author = "snk"; can not redeclare

console.log(author);
