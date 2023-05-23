//
let name = "sanket";
console.log(name.length);

console.log(name[0]);

//  Template literal use backtics insted of quotes ...........

// ** String Interpolation --> We can insert variable directly in template literal this is called string interpolation.

let a = "sanket";
let b = 8668677575;
console.log(`${a} phone Number is ${b}`);

//  Escape sequence charecters.................

let fruit = "banana's";
let pop = "papa's";
console.log(fruit);
console.log(pop);

//  ***** String Methods ***** 

/* 
.length
.toUpperCase()
.toLowerCase()
*/ // sanket

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2, 4)); //slice
console.log(name.slice(2)); //slice
console.log(name.replace("n", "m")); // replace

let friend = "prashant";
let friend2 = "      meena        ";

console.log(name.concat(" is a friend of ", friend, " ok")); //concat
console.log(friend2.trim()); //.trim

//  startsWith
//  endsWith

//  sentence.includes ...............using ternary operator.

sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`);
