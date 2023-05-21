// Run in Browser console

//  if condition .............
let a = prompt("Hey whats your age? ");
a = Number.parseInt(a);
if (a > 18) {
  alert("This is a valid age");
} else if (a < 18) {
  alert("You are not allow");
} else {
  alert("this is an invalid age");
}

//

let num = prompt("Enter num");
if (num % 2 == 0 && num % 3 == 0) {
  console.log("your num is divisible by 2 & 3");
} else {
  console.log("your num is not divisible by 2 & 3");
}

//  Ternary operators .......

console.log("you can", a < 18 ? "Not Drive" : "Drive");

let a2 = 20;
let n = a2 > 18 ? "you can drive" : "you can not drive";
console.log(n);

// switch case ...............

let a1 = prompt("whats your age");
a1 = Number.parseInt(a1);
switch (a1) {
  case 12:
    console.log("Your age is 12");
    break;
  case 13:
    console.log("Your age is 13");
    break;
  case 14:
    console.log("Your age is 14");
    break;
  default:
    console.log("Your age is not special");
    break;
}
