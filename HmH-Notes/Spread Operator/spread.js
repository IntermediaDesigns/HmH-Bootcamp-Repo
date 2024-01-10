/* Spread Operator / Rest Operator */


// Main array, insert ...certsToAdd, into the array. the 3 dots is the spread operator. if you do not put the  spread ... before the certsToAdd, it will bring in the whole certsToAdd, adding the spread only brings in the array elements
var certifications = ['Responsive Web Design', ...certsToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications);

// add the elements of an existing array into a new array
var certsToAdd = ['Algorithms and Data Structures', 'Front End Libraries']; 


// pass elements of an array as arguments to a function. 
function addThreeNumbers(x, y, z) { 
	console.log(x+y+z)
}
var args = [0, 1, 2, 3];// will only call for the 3 items in the function, if you add another number, you must name it to function

addThreeNumbers(...args); //using the spread ... brings in the arguments from the function addThreeNumbers(x, y, z )

// copy arrays
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log(arr);
console.log(arr2);


// concatenate arrays
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
//arr1.concat(arr2);
arr1 = [...arr1, "freeCodeCamp", ...arr2];
console.log(arr1);


// REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3); 
console.log(arr)