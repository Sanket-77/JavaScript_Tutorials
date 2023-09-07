// .......onClick function => 

let a = document.getElementsByClassName("first")[0];
a.onclick = () => {
  let b = document.getElementsByClassName("first")[0];
  b.innerHTML = "Hello";
};

//  Add Event Listener 

btn.addEventListener("click", function (e) {
  alert("hello");
});

// ................ add event listner on click.

document.getElementById("google").addEventListener("click", function () {
  window.location = "https://google.com";
  window.focus();
});

//..........Date. 

let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let d = a.getDate();
console.log(h, m, s, d);
