// DEFAULT EXPORT
// Use this ONLY when 1 thing is going to be exported 

const sayMyName = () => {
       return 'tapaScript';
}

// Export
// When exporting from a default export, you can use 2 ways

// Use this export at the end of the function
export default sayMyName;

// or

// Use this export while you are defining it
export default const sayMyName = () => {
       return 'tapaScript';
}

// To import to main.js, see main.js file
