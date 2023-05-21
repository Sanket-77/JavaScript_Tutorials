//  regular Expressions =>>>>
//  change the same word string
const regex = /vary/g;
const text = "sanket is vary vary and vary nice vary nice";
console.log(text.replace("vary", "VARY"));
console.log(text.replace(regex, "VARY"));
