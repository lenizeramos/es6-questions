const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

// Example
// 1. Add Method to Object
person.introduce = function () {
  return `Hi, I'm ${this.name}.`;
};

// 2. Invoke Object Method
const greeting = person.greet();

// 3. Update Object Property
// Update Object Property using 'this' keyword
person.changeName = function (newName) {
  this.name = newName;
};
person.changeName("Bob");

// 4. Object Method with Parameters
person.greetOtherPerson = function (otherPersonName) {
  return `Hello ${otherPersonName}, I'm ${this.name}`;
};

// 5. Function with This Keyword
function logThis() {
  return this;
}

// 6. Object Method Using This
const myObject = {
  name: "Beze",
  age: 35,
  methodUsingThis: function () {
    return `My name is ${this.name} and I'm ${this.age}`;
  },
};

// 7. This in Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  };
}

// 8. Object Method with Callback
person.callWithCallback = function (callBack) {
  return callBack(this.name, this.age);
};

// 9. Binding Object Method
const customGreet = person.greet.bind(person)

//Example Output

//console.log(person.introduce());
//console.log(greeting);
//console.log(person.name);
//console.log(person.greetOtherPerson("Dave"));
//console.log(logThis())
//console.log(myObject.methodUsingThis());
/*
let person1 = new Person("Elisson", 55);
let person2 = new Person("Denize", 63);
console.log(person1);
console.log(person2.greet());
*/
// console.log(
//   person.callWithCallback(
//     (name, age) => `I am ${name} and I am ${age} years old.`
//   )
// );
//console.log(customGreet());
