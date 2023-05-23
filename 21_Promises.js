// ** Promise => is a promise of code execution. The code is either executed or fails. In both cases subscriber will be notified.
//promises => promises is process which used to perform any kind of async operation.
// Promises has two state => resolve and reject.
// resolve =>  state means there execution is successfully done.
// reject => execution is failed.

//  state => Initially pending, Then changes to either "fullfill" when resolve is called. or "reject" when reject is called.
// result => Initially "undefined", Then changes to value if resolved or error when reject.

let promise = new Promise(function (resolve, reject) {
  console.log("I am in promise ");
  resolve(56);
});
console.log(promise);

//  promise use for parallel execution -----> 

// fetch google home page
// fetch data from data api
// fetch picture from the server

let pro = new Promise((resolve, reject) => {
  console.log("promis is pending ");
  setTimeout(() => {
    console.log("I am promise and I am resolved");
    resolve(true);
  }, 3000);
});

// ///////////////////////////////////////////////

// Promise Chaining => 

let p = new Promise((resolve, reject) => {
  console.log(" Hey i am not resolved");
  setTimeout(() => {
    resolve(1);
  }, 6000);
});
p.then(() => {
  console.log("This promis is now resolved");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 6000);
  });
}).then((value) => {
  console.log(value);
});

//  Promise API ----------

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Value 2");
    reject(new Error("error"));
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 3");
  }, 3000);
});
//  Promise.all
let Promise_All = Promise.all([p1, p2, p3]);
Promise_All.then((value) => {
  console.log(value);
});
//  Promise.allSetteled
let Promise_All1 = Promise.allSettled([p1, p2, p3]);
Promise_All.then((value) => {
  console.log(value);
});
