//  There is special syntax to work with promises in javascript.
// “async” before a function means: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

// await makes JavaScript wait until that promise settles and returns its result.

async function Weather() {
  let puneWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Deg");
    }, 3000);
  });
  let kolhapurWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("24 Deg");
    }, 5000);
  });

  console.log("fetching pune weather please wait...");
  let punew = await puneWeather;
  console.log("fetched pune weather: " + punew);
  console.log("fetching kolhapur weather please wait...");
  let kolpw = await kolhapurWeather;
  console.log("fetched kolhapur weather: " + kolpw);
}
console.log("welcome to weather control room");
let a = Weather();
a.then((value) => {
  console.log(value);
});
