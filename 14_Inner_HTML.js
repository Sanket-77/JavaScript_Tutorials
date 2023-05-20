let x = document.getElementsByTagName("span")[0];
console.log(x);
let y = document.getElementsByTagName("span")[0];
console.dir(y);
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

first.innerHTML;
first.innerHTML = <i>Hey i am Italic </i>;
first.outerHTML;
first.outerHTML = <div>hey</div>;

document.body.firstChild.data;
console.log(document.body.textContent);

//  Changing HTML classes using JavaScript .................

first.classList;
first.classList.add("red");
first.classList.remove("red");
first.classList.toggle("red");
first.classList.contains("red");
