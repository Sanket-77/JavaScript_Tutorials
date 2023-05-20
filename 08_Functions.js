function oneplusAvg(x, y) {
  return 1 + (x = y) / 2;
}

let a = 6;
let b = 7;
let c = 8;

console.log("1 + average a and b is ", oneplusAvg(a, b));
console.log("1 + average a and c is ", oneplusAvg(a, c));
console.log("1 + average c and b is ", oneplusAvg(c, b));

//  Arrow Function .......

const sum = (p, q) => {
  return p + q;
};

console.log(sum(8, 9));

// 2

const hello = () => {
  console.log("Hey how are you ");
  return "hi";
};
let v = hello();
console.log(v);


// write function for create mean 4 numbers

function mean(p, q, r, s) {
  return (p + q + r + s) / 4;
}

console.log(mean(4, 5, 6, 7));
