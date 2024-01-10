// first we have to find the element with querySelector
const button = document.querySelector("#submit-button");

// we want to attach an event listener to the button element so that it will listen to a click
button.addEventListener("click", function (event) {
  // i want to console.log Zeottu
  // first we have to find the input box and save it in variable
  let inputBox = document.querySelector("input");
  // the browser and the input box automatically saves the users input for us behind the scenes and we can access it with .value
  console.log(inputBox.value);
  // we want to change the text content of an existing html element to be the value the user typed in
  // how can we find the p tag and save it in a variable
  const greet = document.querySelector("p");
  greet.textContent = `Hi, ${inputBox.value}`;
  console.log(event);
});
