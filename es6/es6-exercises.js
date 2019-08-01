"use strict";
// Exercise 1 refactoring arrow function + const
const double = (value) => value * 2;
console.log(double(10));

// Exercise 2 refactoring arrow function + template literals
const greet = (name) => {
    name === undefined ? name = "Alex" : name;
    console.log(`Hello, ${name}`);
};
greet();
greet("Anna");

// Exercise 3 refactoring spread operator
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 refactoring spread operator
const newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);

// Exercise 5 refactoring Array De-structuring
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
// console.log(...testResults);

// Exercise 6 Object De-structuring
const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);
