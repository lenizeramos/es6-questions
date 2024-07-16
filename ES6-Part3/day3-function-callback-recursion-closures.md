**Functions (Callback, Recursion, Closures):**

**Data Source:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const employees = [
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 75000 },
  { name: "Charlie", salary: 80000 },
];
```

**Questions:**

1. **Callback Function for Numbers:** Write a function that takes an array of numbers and a callback function. The function should apply the callback to each number in the `numbers` array and return the results.

2. **Recursion - Factorial Calculation:** Write a recursive function to calculate the factorial of a given number from the `numbers` array. Choose one number from the array to calculate its factorial.

3. **Closures - Counter for Numbers:** Create a function that returns a closure to count the number of times it has been called. Test this function using a number from the `numbers` array.

4. **Map Using Callback for Numbers:** Implement a custom `map` function for the `numbers` array using a callback function. Apply the callback to each number in the array.

5. **Filter Using Callback for Numbers:** Implement a custom `filter` function for the `numbers` array using a callback function. Filter the numbers based on a condition defined in the callback.

6. **Sum of Salaries:** Calculate the total salary of employees in the `employees` array using the `reduce` method and a callback function. Sum the salaries of all employees.

7. **Recursion - Fibonacci Calculation:** Write a recursive function to calculate the nth Fibonacci number. Choose a number from the `numbers` array to calculate its Fibonacci number.

8. **Closure - Private Counter for Employees:** Create a function that returns an object with methods to increment and retrieve a private counter. Use this counter to keep track of employee-related operations.

9. **Sort Using Callback for Employees:** Implement a custom sorting function for the `employees` array based on salary using a callback function. Sort the employees by their salaries in ascending order.

10. **Callback with Async Operation:** Write a function that takes a callback and simulates an asynchronous operation. Once the operation is complete, call the callback with a result. For example, use this to simulate an asynchronous salary calculation for an employee from the `employees` array.
