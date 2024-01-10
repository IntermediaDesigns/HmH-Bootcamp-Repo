// you have a pet?
// how many legs? 4, does it bark? yes, color? tan, name? "Rosa", gender? female, species: "Dog"

// we've created an object to represent Lynjai's dog
const rosa = {
  id: 1,
  name: "Rosa",
  legs: 4,
  doesBark: true,
  color: "tan",
  gender: "female",
  species: "dog",
  age: 4,
};

// how do we access a single property
// dot notation
// console.log(rosa.gender);
// bracket notation
// console.log(rosa["gender"]);
// dot notation vs bracket notation
// bracket notation will treat is an expression that needs to be evaluated where as dot just treats as the string directly

// let x = "color";
// console.log(rosa["x"]);

// add a property - age? 4
// rosa.age = 4;
// rosa["age"] = 4;
// console.log(rosa);

// updating a value of a property
// rosa aged a year
// console.log(rosa);
// rosa.age = rosa.age + 1;
// console.log(rosa);

// remove a property
// how can a delete the legs property from rosa
// delete rosa.legs;
// console.log(rosa);
