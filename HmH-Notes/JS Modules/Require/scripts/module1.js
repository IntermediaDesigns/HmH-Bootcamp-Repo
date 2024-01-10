const f = function() {
       console.log("This is function f inside module1.js");
     };

const x = function() {
       console.log("This is function x inside module1.js");
     };

const P = 3.14;
     

// Depending on what you export, you can import
// Decide what you want to export, both functions or one

// Exports only f function and x function will be consiered a private function
module.exports = f;

// If you export with this, you provide a specific name for something you are exporting
module.exports.f = f;
// module.exports.x = x;
// module.exports.P = P;

// If you want to export 2 functions and provide a name to export:
module.exports = {f, x};

// If you want to export 3 functions and provide a name to export:
module.exports = {f, x, P}; 


