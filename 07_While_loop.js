// While loop ........

let i = 0;
let n = prompt("Enter Number");
n = Number.parseInt(n);
while (i <= n) {
  console.log(i);
  i++;
}

//  DO While loop .............

let j = 0;
let m = prompt("Enter Number");
m = Number.parseInt(m);
do {
  console.log(j);
  j++;
} while (j < m);

//  print try again until user enters the correct number.

let cn = 7;
let k;

while (k != cn) {
  k = prompt("Enter a number");
  console.log("try again");
}
console.log("You entered correct numbe " + cn);
