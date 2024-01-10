// You will import to the main.js file from other js files

// To import from other js files, there are a few different ways

// import js code
import {} from '<insert ./filename.js';
// in the {}, you insert the variables you want to import from the js files

// Example - to import from the calc.js file:
import {sum, sub} from './calc.js'


// To import a DEFAULT EXPORT
import{ default as sayMyName} from './whomai.js';

// Because DEFAULT EXPORT is for only 1 thing to export, you can change the name to anything in the import and it will still import the function from the file

// Example:
import{ default as youTuber} from './whomai.js';
// or
import youTuber from './whomai.js';


// Importing ALIASES
// While importing, you can use an alias name especially when there may be multiple with same name when exporting
// Use aliases when it is not so many in a file to import

// Example:

import {sum, sub} from './calc.js';

// to change to an alias name do:
import {sum as add, sub} from './calc.js';

// when console logging, you don't use the sum, you now use add in the console.log


// Importing NAMESPACES
// Use a namespace when you might have too many aliases, so to import everything, you need to create a name known as the namespace.

// Example:
import * as calc from './calc.js';

// console.log(calc.sum(2,3));


// Importing COMBINED EXPORTS
// When you have multiple files to import, you can create a combined js file that you can just import that one js file instead of multiple import codes
import * as combine from './combined.js';

// console.log(combine.calc.sum(1,3));
// console.log(combine.sayMyName());



// Importing DYNAMIC IMPORTS
// see greeting.js file

// This is static import
import { sayHi, sayHola } from './greeting.js';

sayHi();
sayHola();

// To make the import DYNAMIC
// This code can be put anywhere in the file
const { sayHi, sayHola } = await import ('./greeting.js');

sayHi();
sayHola();

// can also set in if code or any logic and will run for example:
if(true) {
       const { sayHi, sayHola } = await import ('./greeting.js');

       sayHi();
       
       sayHola();
}

// can load multiple modules
// Await imports while dynamic import, the import returns a promise
// Now means that you can load multiple modules dynamically, concurrently, simultaneously using promise.all or the settled method
// It takes an array of all promises and runs them in parallel after resolve

// Example:
const { sayHi, sayHola } = await import ('./greeting.js');

// will allow you to import another module and import all at once
const promises = Promise.all(
       [
       await import ('./greeting.js'), 
       await import ('./calc.js')
       ]
);

// Note:  When you want to do Dynamic Imports of multiple modules you can do dynamic imports of my multiple modules using some of the static methods that promise JS promise APIs provides again

console.log(promises);

promises.then (result => {
       console.log(result);
       // console log the first array using 0
       console.log(result(0).sayHi());

       // console log the second array using 1
       console.log(result(1).sum(2,3));
});


