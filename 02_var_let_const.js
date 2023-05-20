//  var is function scoped
//  let is block scoped

console.log("var let const");

let a = 45;
let b = "sanket";
let c = null;
let d = undefined;
const author = "sanket";

{
  let b = 7737;
  console.log(b);
}
console.log(b);
