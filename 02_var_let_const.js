//  var is function scoped
//  let is block scoped

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
console.log(b);
// const author = "shubham"  // // Const => we can not redeclare const value.

console.log(author);
