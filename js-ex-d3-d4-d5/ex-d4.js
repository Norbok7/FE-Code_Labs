//ex1 function to greet a user with hello

// function greet(a){
//     const name = prompt("enter your name:");
//     if(a);
//     alert('hey there'+' '+ (name))};

//     greet();


//ex 2 Write a JavaScript function called multiply 
// that takes two numbers as arguments and returns
//  their product. Test the function 
//  with different inputs.
// function multiply(a,b){
// return a*b;
// }
// let c = multiply(3,2 );
// console.log(c);

// // ex 3 
// person = {
//   name: 'Gar',
//   age: 32,
//   gender: "male",
//   }
// console.log(person);
// //ex 4
// car = {
//   make: 'audi',
//   model: 'a4',
//   year: '23',

// }
// console.log(car);

// program to reverse a string

// program to reverse a string

// ex 5 reverse string function
function reverseString(str) {

  // return a new array of strings
  const arrayStrings = str.split("");
 
  // reverse the new created array elements
  const reverseArray = arrayStrings.reverse();

  // join all elements of the array into a string
  const joinArray = reverseArray.join("");
  
  // return the reversed string
  return joinArray;
}

// take input from the user
const string = prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);

//ex 6. calculate area pie * radius squared
let radius = 4
let pie = 3.14

function calculateArea(radius, pie){
return radius * pie;
}
let area = calculateArea(4,3.14);
console.log(area);
 

