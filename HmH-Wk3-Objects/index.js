// Create an array list that stays on screen
const arrayContainer = document.querySelector("#arrayList");

const listInfo = {
       name: "Max",
       money: "0",
       dogs: "0",
       laptops: "0",
}

function render() {
       let listInfoStr = '';
       for (let key in listInfo) {
           listInfoStr += `"${key}": ${listInfo[key]}, `;
       }
       // Remove the trailing comma and space
       listInfoStr = listInfoStr.slice(0, -2);
       arrayContainer.textContent = `{${listInfoStr}}`;
};

render();

/*Displays "You need a $100 to buy a dog." under buttons. When you earn money, per each $100, you buy 1 dog and it updates dogs array and decreases money buy $ amount used*/

const buyDogButton = document.querySelector(".buyDog")
const display = document.querySelector("#display")

listInfo.dogs = 0;

buyDogButton.addEventListener("click", function() {
       if (listInfo.money >= 100) {
           listInfo.money -= 100;
           listInfo.dogs += 1;
           render();
       } else {
           display.textContent = "You need $100 to buy a dog.";
       }
   });


/*Displays "You don't have a dog, it couldn't of died." After you buy a dog, the dogs array decreases by 1*/
const deathButton = document.querySelector(".death");

deathButton.addEventListener("click", function() {
       if (listInfo.dogs > 0) {
           listInfo.dogs -= 1;
           render();
       } else {
           display.textContent = "You don't have a dog, it couldn't have died.";
       }
   });

// Adds $100 each click to the money array
const workButton = document.querySelector(".work");

listInfo.money = 0;

workButton.addEventListener("click", function() {
       listInfo.money += 100;
       render();
   });

/* Displays "You need $1000 to buy a laptop." under button. When you earn money, per each $1000, you buy 1 laptop and it updates laptops array and decreases money buy $ amount used*/
const laptopButton = document.querySelector(".laptop");

listInfo.laptops = 0;

laptopButton.addEventListener("click", function() {
       if (listInfo.money >= 1000) {
           listInfo.money -= 1000;
           listInfo.laptops += 1;
           render();
       } else {
           display.textContent = "You need $1000 to buy a laptop.";
       }
   });


       




       