const numbers = [1, 2, 3, 4, 5];
const employees = [
  { name: "Alice", salary: 60000 },
  { name: "Bob", salary: 75000 },
  { name: "Charlie", salary: 80000 },
];

// Example
// 1. Callback Function for Numbers
function applyCallbackToNumbers(arr, callback) {
  return arr.map(callback);
}

// 2. Recursion - Factorial Calculation
//function calculateFactorial(n) {}

// 3. Closures - Counter for Numbers
//function createCounter() {}

// 4. Map Using Callback for Numbers
//function customMap(arr, callback) {}

// 5. Filter Using Callback for Numbers
//function customFilter(arr, callback) {}

// 6. Sum of Salaries
//function calculateTotalSalary(employees) {}

// 7. Recursion - Fibonacci Calculation
//function calculateFibonacci(n) {}

// 8. Closure - Private Counter for Employees
// function createEmployeeCounter() {}

// 9. Sort Using Callback for Employees
// function customSortBySalary(employees) {}

// 10. Callback with Async Operation
// function simulateAsyncOperation(callback) {}

// Example usage:
const numberCallback = (num) => num * 2;
// const factorialResult = calculateFactorial(5);
// const counter = createCounter();
// const fibonacciResult = calculateFibonacci(6);
// const employeeCounter = createEmployeeCounter();
// const sortedEmployees = customSortBySalary(employees);

// simulateAsyncOperation((result) => {
//   console.log(result);
// });

console.log(applyCallbackToNumbers(numbers, numberCallback));
// console.log(factorialResult);
// console.log(counter());
// console.log(customMap(numbers, (num) => num * 3));
// console.log(customFilter(numbers, (num) => num % 2 === 0));
// console.log(calculateTotalSalary(employees));
// console.log(fibonacciResult);
// console.log(employeeCounter.increment());
// console.log(sortedEmployees);
