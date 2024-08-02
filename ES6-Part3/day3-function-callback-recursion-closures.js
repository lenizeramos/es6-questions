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
function calculateFactorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  /*
  let result = 1;
  for (let i = n; i > 0; i--) {
    console.log(i)
   console.log(result *= i);
  }
  return result;
  */
  return n * calculateFactorial(n - 1);
}

// 3. Closures - Counter for Numbers
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// 4. Map Using Callback for Numbers
function customMap(arr, callback) {
  let customMapNumbersArray = [];
  for (const element of arr) {
    customMapNumbersArray.push(callback(element));
  }
  return customMapNumbersArray;
}

// 5. Filter Using Callback for Numbers
function customFilter(arr, callback) {
  let customFilterNumbersArray = [];
  for (const element of arr) {
    if (callback(element)) {
      customFilterNumbersArray.push(element);
    }
  }
  return customFilterNumbersArray;
}

// 6. Sum of Salaries
function calculateTotalSalary(employees) {
  /*let sum = 0
  for (const {salary} of employees) {
    sum += salary
  }
  return sum*/
  return employees.reduce((sum, element) => sum + element.salary, 0);
}

// 7. Recursion - Fibonacci Calculation
function calculateFibonacci(n) {}

// 8. Closure - Private Counter for Employees
// function createEmployeeCounter() {}

// 9. Sort Using Callback for Employees
// function customSortBySalary(employees) {}

// 10. Callback with Async Operation
// function simulateAsyncOperation(callback) {}

// Example usage:
//const numberCallback = (num) => num * 2;
//const factorialResult = calculateFactorial(4);
//const counter = createCounter();
const fibonacciResult = calculateFibonacci(6);
// const employeeCounter = createEmployeeCounter();
// const sortedEmployees = customSortBySalary(employees);

// simulateAsyncOperation((result) => {
//   console.log(result);
// });

//console.log(applyCallbackToNumbers(numbers, numberCallback));
//console.log(factorialResult);
//console.log(counter());
//console.log(customMap(numbers, (num) => num * 3));
//console.log(customFilter(numbers, (num) => num % 2 === 0));
//console.log(calculateTotalSalary(employees));
console.log(fibonacciResult);
// console.log(employeeCounter.increment());
// console.log(sortedEmployees);
