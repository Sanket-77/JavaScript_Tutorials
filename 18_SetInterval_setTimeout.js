// 
alert("Hello");

setTimeout(function () {
  alert("Its all right");
}, 5000);

//  setTimeout .........

let a = setTimeout(function () {
  alert("Its ok");
}, 4000);
let b = prompt("Do you want to run the setTimeout? y/n");
if (b == "n" ) {
  clearTimeout(a);
}
console.log(a);

// ...........................

const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c));
};

setTimeout(sum, 4000, 1, 2, 3);

// ............SetInterval ........work like while loop.....function execute after interval of time 

setInterval(function () {
  alert("SetInterval");
}, 3000);

