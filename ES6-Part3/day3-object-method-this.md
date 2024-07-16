**Object (Methods, This):**

**Data Source:**

```javascript
const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};
```

**Questions:**

1. **Add Method to Object:** Add a method called `introduce` to the `person` object, which returns a self-introduction.

2. **Invoke Object Method:** Call the `greet` method of the `person` object and store the result in a variable.

3. **Update Object Property:** Change the name of the person to "Bob" by creating a function that takes a new name as an argument and uses the 'this' keyword to update the person's name property. Invoke the function with the person object and the new name "Bob".

4. **Object Method with Parameters:** Add a method to the `person` object that takes another person's name as an argument and returns a greeting message.

5. **Function with This Keyword:** Create a function that returns the value of `this` within the function and call it.

6. **Object Method Using This:** Implement an object with a method that uses the `this` keyword to access its own properties.

7. **This in Constructor Function:** Create a constructor function for creating person objects and set the `name` and `age` properties using the `this` keyword.

8. **Object Method with Callback:** Implement a method in an object that takes a callback function and executes it with the object's properties.

9. **Binding Object Method:** Create an object with a method and use the `bind` method to create a new function with a specific value of `this`.
