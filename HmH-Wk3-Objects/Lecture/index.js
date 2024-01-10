// applications state - the info that changes, usually changes because of user interactions
// how do we represent a monster in code?
const monstersContainer = document.querySelector("#monsters-container");
const monsters = [
  {
    id: 1,
    name: "Chucky",
    species: "Evil Doll",
    sightings: 2,
    emoji: "🔪",
  },
  {
    id: 2,
    name: "It",
    species: "Ancient Demon",
    sightings: 0,
    emoji: "🤡",
  },
  {
    id: 3,
    name: "Godzilla",
    species: "Iguana",
    sightings: 5,
    emoji: "🦎",
  },
];

// i want to iterate through our state and print out to the screen my current monsters (match my state to the ui)

function render() {
  // we need to iterate through our array of monsters
  // clear out all the stuff
  monstersContainer.replaceChildren();
  for (let monster of monsters) {
    console.log(monster);
    // i want to create a div
    const div = document.createElement("div");
    // add class to div
    div.className = "monster-card";
    // i want to create the name
    const name = document.createElement("p");
    name.textContent = monster.name;
    // i need to append name to the div
    div.appendChild(name);
    // i want to create the emoji
    const emoji = document.createElement("p");
    // fill the emoji p element with the monster emoji
    emoji.textContent = monster.emoji;
    // need to append the emoji element to div
    div.appendChild(emoji);
    // i want to create the species element
    const species = document.createElement("p");
    species.textContent = "species: " + monster.species;
    div.appendChild(species);
    // i want to create the sightings
    const sightings = document.createElement("p");
    sightings.textContent = "Sightings: " + monster.sightings;
    div.appendChild(sightings);
    // i want to create the button
    const button = document.createElement("button");
    button.textContent = "Sighted!";
    // add an event listener to the button
    button.addEventListener("click", function () {
      // i want the num of sightings for this monster to be increased by 1
      monster.sightings = monster.sightings + 1;
      console.log(monster);
      // state is out of match with ui
      render();
    });
    div.appendChild(button);
    // i want to append the div to monstersContainer div
    monstersContainer.appendChild(div);
  }
}

render();
