const dragons = [
  {
    id: 1,
    emoji: "🐉",
    name: "Draco",
    species: "Fire Dragon",
    color: "Red",
  },
  {
    id: 2,
    emoji: "🐲",
    name: "Saphira",
    species: "Ice Dragon",
    color: "Blue",
  },
  {
    id: 3,
    emoji: "🐊",
    name: "Fang",
    species: "Earth Dragon",
    color: "Green",
  },
  {
    id: 4,
    emoji: "🦎",
    name: "Lizardon",
    species: "Water Dragon",
    color: "Blue",
  },
  {
    id: 5,
    emoji: "🌈",
    name: "Aurora",
    species: "Sky Dragon",
    color: "Multicolored",
  },
  {
    id: 6,
    emoji: "🔥",
    name: "Inferno",
    species: "Fire Dragon",
    color: "Orange",
  },
  {
    id: 7,
    emoji: "❄️",
    name: "Frostbite",
    species: "Ice Dragon",
    color: "White",
  },
  {
    id: 8,
    emoji: "🌍",
    name: "Terra",
    species: "Earth Dragon",
    color: "Brown",
  },
  {
    id: 9,
    emoji: "💧",
    name: "Hydro",
    species: "Water Dragon",
    color: "Aqua",
  },
  {
    id: 10,
    emoji: "☁️",
    name: "Nimbus",
    species: "Sky Dragon",
    color: "Gray",
  },
];

let selectedDragon = dragons[0];

// fill up our select box with the dragons
const select = document.querySelector("select");
select.addEventListener("change", (e) => {
  // how can i console the id of the dragon that was selected?
  const dragonId = +e.target.value;
  // we need to look through our array of dragon and find one with the id of our dragonId

  selectedDragon = dragons.filter((dragon) => dragon.id === dragonId)[0];
  render();
});

function render() {
  for (let dragon of dragons) {
    const option = document.createElement("option");
    option.textContent = dragon.name;
    option.value = dragon.id;
    select.appendChild(option);
  }

  const div = document.querySelector("#dragon-container");
  // destructuring
  // i need all the properties and value from selected dragon
  // const id = selectedDragon.id
  // const name = selectedDragon.name
  // const emoji = selectedDragon.emoji
  const { id, name, emoji } = selectedDragon;
  const pId = document.createElement("p");
  pId.textContent = `id: ${id}`;
  div.appendChild(pId);

  //const pEmoji = document.createElement("p");
  //pEmoji.textContent = `emoji: ${emoji}`;
  //div.appendChild(pEmoji);

  //const pName = document.createElement("p");
  //pName.textContent = `emoji: ${name}`;
  //div.appendChild(pName);
}

render();

// filter method outputs a new array with the same or less items than the original array per the cb function argument. for each item it gets invoked and it it evaluates to true it keeps the item and puts it in the new array and if it evaluates to false it throws the item out.
// console.log([1, 2, 3, 4, 5orig, 6].filter((num) => num === 3));

// non mutating - not changing the original array

// console.log(
//   [
//     {
//       id: 8,
//       emoji: "🌍",
//       name: "Terra",
//       species: "Earth Dragon",
//       color: "Brown",
//     },
//     {
//       id: 9,
//       emoji: "💧",
//       name: "Hydro",
//       species: "Water Dragon",
//       color: "Aqua",
//     },
//     {
//       id: 10,
//       emoji: "☁️",
//       name: "Nimbus",
//       species: "Sky Dragon",
//       color: "Gray",
//     },
//   ].filter((dragon) => dragon.name === "Terra")
// );

// spread operator - extracts all the meat from an object or an array

// great for making copies of objects

const dragon = {
  id: 10,
  emoji: "☁️",
  name: "Nimbus",
  species: "Sky Dragon",
  color: "Gray",
};

// const copy = { ...dragon };
// copy.name = "Aurora";
// console.log(copy.name);
// console.log(dragon.name);

// primitive values vs values by reference

// const dragonArr = [
//   {
//     id: 8,
//     emoji: "🌍",
//     name: "Terra",
//     species: "Earth Dragon",
//     color: "Brown",
//   },
//   {
//     id: 9,
//     emoji: "💧",
//     name: "Hydro",
//     species: "Water Dragon",
//     color: "Aqua",
//   },
//   {
//     id: 10,
//     emoji: "☁️",
//     name: "Nimbus",
//     species: "Sky Dragon",
//     color: "Gray",
//   },
// ];

// const copyArr = [...dragonArr];
// console.log(copyArr);
