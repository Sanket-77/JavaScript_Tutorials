// Object Oriented Programming

// 1. Abstraction => Hiding of internal details
// 2. Encapsulation =>
// 3. Inheritance =>
// 4. Polymorphism =>

//  Prototype =>

let a = {
  name: "harry",
  language: "JavaScript",
};

console.log(a);

let p = {
  run: () => {
    alert("run");
  },
};

a.__proto__ = p;
a.run();

// Class And Objects =>

// Class is an Template

class RailwayForm {
  constructor() {
    console.log("Constructor called");
  }
  submit() {
    alert("Form Submited");
  }
  cancel() {
    alert("This form is cancelled");
  }
}

let sanket = new RailwayForm();
let sumit = new RailwayForm();

sanket.submit();
sumit.submit();
sumit.cancel();

// constructor =>

// Inheritance =>

class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    console.log(this.name + "  is running");
  }
  shout() {
    console.log(this.name + "  shouting");
  }
}

class monky extends Animal {
  eatBanana() {
    console.log(this.name + " is Eating Banana");
  }
  hide() {
    console.log(this.name + " is hiding");
  }
}

let ani = new Animal("Bruno", "white");
let m = new monky("chimpu", "green");

ani.shout();
m.eatBanana();
m.shout();
// ani.hide(); //this not allow

// Method Overriding =>
