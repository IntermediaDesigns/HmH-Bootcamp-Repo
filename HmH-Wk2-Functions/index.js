let count = 0;
let response;
let working = true;

while (working) {
       response = prompt(
              "What task would you like to run? (sum, convert, low, wordCounter, random)"
            );

       if (response === "sum") {sum();}
              else if (response === "convert") {convert();}
              else if (response === "low") {low();}
              else if (response === "random") {random();}
              else if (response === "wordCounter") {wordCounter();}       
}

// sum: The app will prompt the users for two numbers and return the sum.
function sum() {
       let firstNumber = +prompt("Enter the first number:");
       let secondNumber = +prompt("Enter the second number:");
       let answer = firstNumber * secondNumber;
              alert(`${firstNumber} * ${secondNumber} = ${answer}`)
}

// convert: The app will convert minutes into seconds.
function convert() {
       let number = +prompt("Enter the number of minutes:");
              alert(`There are ${number * 60} seconds in ${number} minutes.`);
}

// low: The app will state if the first number is lower than the second number.
function low() {
       let number1 = +prompt("Enter the first number:");
       let number2 = +prompt("Enter the second number:");
              if (number1 < number2) {
                     alert(`${number1} is less than ${number2}`);
              }
                     else {
                            alert(`${number1} is greater than ${number2}`);
                     }
}

// random: The app will give a random number between 0 and the user's specified number.
function random() {
       let maxNumber = +prompt("Enter the maximum number:");
              alert(`I have generated a random number: ${Math.round(Math.random() * maxNumber)}`);
}

// wordCounter: The app will state how many words are in a sentence.
function wordCounter() {
       let words = prompt("Enter a sentence to count the words:");
       let count = 0;
       for (let i = 0; i < words.length; i++) {
              if (words[i] === " ") {
                     count = count + 1;}  
       }
       count = count + 1;
              alert("There are " + count + " words.");
}