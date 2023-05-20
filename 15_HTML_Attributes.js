// HTML Attribute
let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a);
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

first.setAttribute("class", "true search");

first.removeAttribute("class");

console.log(first.attributes);

{/* <div id="first" data-game="mario" data-player="sanket"></div>; */}
console.log(first.dataset);
