const fruitBasket = ["apple", "banana", "cherry"];
const additionalFruits = ["date", "elderberry"];
const studentInfo = { name: "Alice", age: 25 };
const person1 = { name: "Alice", age: 25, city: "New York" };
const person2 = { age: 30, job: "Engineer" };

//1. **Combine Arrays:**
const combinedFruits = [...fruitBasket, ...additionalFruits];

//console.log(`combinedFruits: ${combinedFruits}`)

//2. **Clone an Array:**
const copiedFruitBasket = [...fruitBasket];
//console.log(`copiedFruitBasket: ${copiedFruitBasket}`)

//3. **Spread in Object:**
const updatedStudentInfo = { ...studentInfo, grade: 100 };
//console.log(updatedStudentInfo)

//4. **Rest Parameters in Function:**
function sumNumbers(...numbers) {
  return numbers.reduce((sum, currentNumber) => sum + currentNumber, 0);
}

console.log(sumNumbers(57, 8, 9, 14));
//5. **Spread in Function Call:**
//function exampleFunction() {}

//6. **Merging Objects:**
//const mergedPerson =

//7. **Spread in Function Parameters:**
//function mergeObjects() {}

//8. **Destructuring and Spread:**
//const modifiedStudentInfo =

//9. **Rest Operator in Array:**
//function firstElementAndRest() {}

//10. **Spread in Object Properties:**
//const updatedStudentInfo2 = { };
