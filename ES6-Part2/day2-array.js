const numbers = [42, 9, 17, 25, 56, 33, 8, 4, 91, 13, 64, 2];

// 1. Sort Numbers in Ascending Order
const sortedNumbers = numbers.toSorted((a, b) => {
  return a - b;
});

// 2. Find the First Number Greater than or Equal to 50
const firstNumberGreaterThan50 = numbers.find((number) => {
  return number >= 50;
});

// 3. Reverse the Array
const reversedNumbers = numbers.toReversed();

// 4. Check for Inclusion of 33
const includes33 = numbers.includes(33);

// 5. Check if Any Number is Even
const hasEvenNumber = numbers.some((number) => {
  return number % 2 === 0;
});

// 6. Check if All Numbers are Less than 100
const allLessThan100 = numbers.every((number) => {
  return number < 100;
});

// 7. Find the Index of Number 91
const index91 = numbers.indexOf(91);

// 8. Join Numbers as a Comma-Separated String
const numbersAsCSV = numbers.join(", ");

console.log("Sorted Numbers:", sortedNumbers);
console.log(
  "First Number Greater than or Equal to 50:",
  firstNumberGreaterThan50
);
console.log("Reversed Numbers:", reversedNumbers);
console.log("Includes 33:", includes33);
console.log("Has Even Number:", hasEvenNumber);
console.log("All Less Than 100:", allLessThan100);
console.log("Index of 91:", index91);
console.log("Numbers as CSV:", numbersAsCSV);
