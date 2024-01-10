// // DOM manipulations
// // What is the DOM?
// // document object model
// // we can use javascript to modify HTML (kinda) , you're really just modifying the DOM and that causes a change in the appearance of the website
// // why? this is what fuels interactivity

// // how do i create the circle using dom manipulations
const circle = document.createElement("div");
// // circle.setAttribute("id", "circle");
circle.id = "circle";

// // where do we want to put the newly created element? inside the body... how?
// // we have to do something called "appendChild"

// // before we can append something to something we need to find it

body.appendChild(circle);

// // i want a hundred circles
// // for loop

// // create a container for the circles
const circleContainer = document.createElement("div");
// // want to make circleContainer a flexbox
circleContainer.style.display = "flex";
circleContainer.style.flexWrap = "wrap";
circleContainer.style.gap = "5px";

for (let i = 0; i < 100; i++) {
//   // create a div
const circle = document.createElement("div");
//   // set the class as "circle"
circle.className = "circle";
//   // append the div to the body
circleContainer.appendChild(circle);
}

// // append the circleContainer into the body
// body.appendChild(circleContainer);

// just want the word countdown
let h1 = document.createElement("h1");
// fill it up
h1.textContent = "Countdown:";

// i want to attach it to the body
// but to attach it to the body i need to first, find it
const body = document.querySelector("body");

body.appendChild(h1);

// i want to create a variable to save the number of seconds

// how can we decrease the value of seconds by 1 every second?

// setInterval - will fire a function every 1 time per x milliseconds

// higher order function
// a function that can take in another function as an argument

// first example of an anonymous function

// also our first example of asynchronicity - all our code so far has been synchronous - just runs top to bottom.

let seconds = 10;

// i want the number 10 to appear below countdown:
let h2 = document.createElement("h2");
body.appendChild(h2);

setInterval(function () {
  h2.textContent = seconds;

  if (seconds === 0) {
    h2.textContent = "launch!";
    return;
  }
  seconds = seconds - 1;
}, 1000);
