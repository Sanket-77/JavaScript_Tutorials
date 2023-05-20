// Javascript can be used to send or recive information from the network when needed.

//  Fetch Api => used to get data over network.

let p = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    response.json();
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
  })
  .then((value2) => {
    console.log(value2);
  });

//  ****** Post Request *******

// Cookie in javascript ....................
// In cookie Storage object are send to server with each request.

console.log(document.cookie);
document.cookie = "name=sanket7737";
document.cookie = "name2=sanket7";
document.cookie = "name3=sanket7645";
let key = prompt("Enter your key");
let value = prompt("Enter your value");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);
