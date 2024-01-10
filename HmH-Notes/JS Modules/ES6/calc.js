// Create your functions or information to export

//Addition function
const sum = (a,b) => {
       return a + b;
}


// Subtraction function
const sub = (a,b) => {
       return a - b;
}

// To export these functions, etc. you add the following to the JS file:
export const sum = (a,b) => {
       return a + b;
}

export const sub = (a,b) => {
       return a - b;
}

// Other ways to export

// NAMED EXPORT
// Named exports allow for multiple functions to be exported
export const sum = (a,b) => {
       return a + b;
}

export const sub = (a,b) => {
       return a - b;
}

export {sum, sub}


// DEFAULT EXPORT
// Use this ONLY when 1 thing is going to be exported 
// See whoami.js file for example