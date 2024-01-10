const boxContainer = document.querySelector("#box-container");

// fill the box container with 100 boxes
for (let i = 0; i < 500; i++) {
  let box = document.createElement("div");
  box.style.backgroundColor = "blue";
  box.addEventListener("click", function (event) {
    console.log(event.target.style.backgroundColor);
    // i want to fill in the box with blue
    // if already blue we want to turn back white
    if (event.target.style.backgroundColor === "blue") {
      event.target.style.backgroundColor = "white";
    } else {
      event.target.style.backgroundColor = "blue";
    }
  });
  box.className = "box";
  boxContainer.appendChild(box);
}

// when a click a box i want to see the word clicked in the console
