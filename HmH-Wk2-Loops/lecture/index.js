// greet all the students with 'Hi, Welcome to Loops Lecture!'
// console.log - as the code is running we can see the values of different variables
// for loop - it will repeat a block of code a number of times. part 1 - initializer
// part 2 - conditional
// part 3 - increment
// has very specific sequence
// for (let i = 0; i < 21; i++) {
//   console.log(i);
//   console.log("Hi, Welcome to Loops!");
// }

// countdown
// NASA build a countdown for a launch that starts at 10 and counts down to 0 in the console
// let i = 0;
// for (let i = 10; i > 0; i--) {
//   console.log(i);
//   if (i === 1) {
//     console.log("launch");
//   }
// }

// repeatCharacter
// let char = "a";
// let str = "";
// // i want to add the character stored in the variable char to the str 100 times
// // string concatenation (we can add strings together)
// for (let i = 1; i <= 100; i++) {
//   str = str + char;
// }
// console.log(str);

// countVowels

// data types have built in properties and methods that we get for free from javascript
// length is included on all strings and it will give you the number of characters
// we can use bracket notation on strings to access the character at a certain index
let student = "izzy";
let count = 0;

for (let i = 0; i < student.length; i++) {
  if (
    student[i] === "a" ||
    student[i] === "e" ||
    student[i] === "i" ||
    student[i] === "o" ||
    student[i] === "u"
  ) {
    count = count + 1;
  }
}

console.log(count);

// reverseString
// virusGenerations - 1 infected, day 1, doubles every day - how long to reach 1,000,000

let infected = 1;
let day = 1;

// while loop

while (infected <= 1000000) {
  infected *= 2;
  day += 1;
}

console.log(day);
