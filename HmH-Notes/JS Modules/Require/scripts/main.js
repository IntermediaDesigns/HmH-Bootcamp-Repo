//How to export and require modules with NODE JS
// To use filesystem with node:
// The variable fs means file system and ("fs") is part of the core modules in node. 
const fs = require("fs");


// To import your js file, you require it:

// f is the variable imported from the file
const f = require("./module1.js");
// or you can require without extension on file
const f = require("./module1");
// Why without extension? If you are bringing in a js file that someone else may have wrote instead of making a js file, importing a folder from a folder through node js
f();

// To test, open terminal
// type: node main.js
// This is function f inside module1.js <--This should appear in the terminal


// Depending on module1 js file export, if you use the exports.f = f;, you have to change the out
const f = require("./module1");

f.f();

// test in node and check


// you can change the name of the exports.f, for example:
const mod = require("./module1");

mod.f();
// add any export function
mod.x();

// test in node and check, both should appear

// import js file bubba with or without extension
// To retrieve the file in node, got to terminal.
// cd your way to the folder, cd module2
// under module2 type: npm init -y
// Open the JSON folder in bottom corner
// Go to main, then change the js file name to the specific file you are bringing in, now back to main js

const mod = require("./module1");
// import with or without extension
const y = require("./module2/bubba");

mod.f();
mod.x();
// add any export function
y();

// test in node

// But because the bubba file was brought in and has a JSON file, you can import like this:
const mod = require("./module1");
// remove the file name, this makes the file look in the folder, read the JSON file, and see main js file listed
const y = require("./module2");

mod.f();
mod.x();
y();

// test in node


// If you only want to import 2 of the functions
const { f, P } = require("./module1");
const y = require("./module2");

f();
console.log(P);
y();

// test in node

