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

// Exercise 5
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);

// Exercise 6
var scientist = {firstName: "Will", experience: 12};
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
