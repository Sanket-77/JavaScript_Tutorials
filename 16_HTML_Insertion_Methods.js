let a = document.getElementsByTagName("div")[0];
a.innerHTML = a.innerHTML + "<h1>Hello words!</h1>";

let div = document.createElement("div");
div.innerHTML = "<h1>how are you</h1>";
a.appendChild(div);

a.append(div);

a.prepend(div);

a.before(div);

a.after(div);

a.replaceWith(div);

