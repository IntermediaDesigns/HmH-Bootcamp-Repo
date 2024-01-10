//Spread Operator (...): The spread operator in JavaScript is used to expand iterable elements into individual elements. It’s commonly used with arrays and objects.
//Example:

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // arr2 is now [1, 2, 3, 4, 5]

//Ternary Operator (condition ? exprIfTrue : exprIfFalse): This is a shorthand for an if-else statement. It checks a condition and executes the first expression if the condition is true, otherwise it executes the second expression2.
//Example:

const age = 15;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // Outputs "Juice"



// map() Method: The map() method creates a new array by calling a provided function on every element in the calling array3.
//Example:


const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num); // squares is now [1, 4, 9]



// filter() Method: The filter() method creates a new array with all elements that pass the test implemented by the provided function4.
//Example:


const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0); // evens is now [2, 4]


// Destructuring: Destructuring in JavaScript is a syntax that allows us to unpack values from arrays or properties from objects into distinct variables5.
//Example:


const obj = { a: 1, b: 2 };
const { a, b } = obj; // a is 1, b is 2