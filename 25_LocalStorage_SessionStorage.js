//  Local Storage => is web storage object which are not send to server with each request.

localStorage.setItem("name", "sanket");

let key = prompt("ENter Key you want to set");
let value = prompt("ENter value you want to set");

localStorage.setItem(key, value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if (key == "red") {
  localStorage.removeItem(key);
}

// Session Storage => Used less often then localstorage properties and methods are same as local storage.

//  session storage is only exist in same tab.

window.onstorage = (e) => {
  alert("Changed");
  console.log(e);
};
