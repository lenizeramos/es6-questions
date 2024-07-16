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
// const greeting =

// 3. Update Object Property

// Update Object Property using 'this' keyword
//person.changeName = 

// 4. Object Method with Parameters
// person.greetOtherPerson =

// 5. Function with This Keyword
// function logThis() {}

// 6. Object Method Using This
// const myObject =

// 7. This in Constructor Function
// function Person() {}

// 8. Object Method with Callback
// person.callWithCallback =

// 9. Binding Object Method
// const customGreet =

//Example Output

console.log(person.introduce());
// console.log(greeting);
// console.log(person.name);
// console.log(person.greetOtherPerson("Dave"));
// console.log(myObject.methodUsingThis());
// console.log(newPerson);
// console.log(
//   person.callWithCallback(
//     (name, age) => `I am ${name} and I am ${age} years old.`
//   )
// );
// console.log(customGreet());
