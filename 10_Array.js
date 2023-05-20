// Arrays ......................

let marks = [98, 86, 67, 59, 90];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);

///////////////////////  Array Methods  ////////////////////////////////////////////////////////////////

let num = [1, 2, 3, 4, 5];
let b = num.toString(); //toString 
console.log(b);
console.log(typeof b);
let c = num.join("_");
console.log(c, typeof c);
num.pop(); //.pop() remove last num in array
console.log(num);
num.push(7); //.push(x) add num in array
console.log(num);
num.shift(); //remove num from begining of array
console.log(num);
num.unshift(10); // .unshift() add new num in begining of array
console.log(num);

//  concate Arrays ..........Dose not change existing Array.

num1 = [1, 2, 3, 4, 5];
num2 = [7, 8, 9, 10];
num3 = [11, 12, 13, 14, 15];

let newArray = num1.concat(num2, num3);
console.log(newArray);

//*******/  Delete array element  /**********//

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
delete n[5];
console.log(n); //[ 1, 2, 3, 4, 5, <1 empty item>, 7, 8, 9 ] --> it can not change array length.

//  sort Array .......... change original array **** interview Qestion

let numb = [1, 14, 26, 268, 34, 369, 45, 5, 589, 9];
numb.sort();
console.log(numb); // [1, 14, 26, 268, 34,369, 45,  5, 589,  9] ---> sorting alphabetically not in like 1,2,3

// sort in ---> assending or desending order  ==> use compare function for sorting in assending or desending.

let compare = (a, b) => {
  return a - b;
};
numb.sort(compare);
console.log(numb);

// reverse ......................

numb.reverse();
console.log(numb);

//  splice  & slice .............********** 

let narr = [23, 345, 67, 98, 345, 768, 123, 654];
narr.splice(2, 3, 1022, 1023, 1024, 1025);
console.log(narr);

// slice.... create new array.....

let newArr = narr.slice(2, 6);
console.log(newArr);

///////////////////////  loops in array ///////////////////////////////////////////////////////////

//  for loop .................

let x = [1, 3, 5, 7, 9];
for (i = 0; i < x.length; i++) {
  console.log(x[i]);
}
//  forEach loop ...............

x.forEach((element) => {
  console.log(element * element);
});

//  Array.from...................

let name = "sanket";
let arrr = Array.from(name);
console.log(arrr);

// Array map method ///////////////

let ar = [12, 46, 98, 43, 57];
ar.map((item) => {
  console.log(item);
  return item;
});

//  Array.filter .................

let ar2 = [12, 46, 98, 43, 57];
let a2 = ar2.filter((a) => {
  return a < 50;
});
console.log("filter value = ", a2);

//  Array Reduce method............

let arrr3 = [1, 2, 3, 4, 5, 6];

let newarrr3 = arrr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(newarrr3); // => 21

//  random number ..................

function getRandom() {
  return Math.random() * 100 + 1;
}
getRandom();
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());
console.log(getRandom());


