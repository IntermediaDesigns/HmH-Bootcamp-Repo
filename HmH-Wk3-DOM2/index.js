// Toggle the Box
const changeBox = document.querySelector("#box");

changeBox.addEventListener("click", function (event) {
       if (event.target.style.backgroundColor === "blue") {
           event.target.style.backgroundColor = "white";
       } else {
           event.target.style.backgroundColor = "blue";
       }
   });

// Mirror
const mirrorText = document.querySelector('#mirrorText');
const input = document.querySelector('input');

input.addEventListener('input', function () {
  mirrorText.textContent = input.value;
});

// Counter
const minusButton = document.querySelector('#minus');
const plusButton = document.querySelector('#plus');
const numCount = document.querySelector('#numCount');
let count = 0;

minusButton.addEventListener('click', function () {
  count = count - 1;
  numCount.textContent = count;
});

plusButton.addEventListener('click', function () {
  count = count + 1;
  numCount.textContent = count;
});

// Race
const car = document.querySelector('#car');
const body = document.querySelector('body');

body.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    car.style.marginLeft = +car.style.marginLeft.split('px')[0] + 5 + 'px';
  }
  if (e.key === 'ArrowLeft') {
    car.style.marginLeft = +car.style.marginLeft.split('px')[0] - 5 + 'px';
  }
});

// Stopwatch
const numTimer = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const clearButton = document.querySelector('#clear');

let seconds = 0;
let intervalId;

startButton.addEventListener('click', function () {
  intervalId = setInterval(function () {
    seconds = seconds + 1;
    numTimer.textContent = `${seconds} seconds`;
  }, 1000);
});

stopButton.addEventListener('click', function () {
  clearInterval(intervalId);
});

clearButton.addEventListener('click', function () {
  clearInterval(intervalId);
  seconds = 0;
  numTimer.textContent = `${seconds} seconds`;
});
