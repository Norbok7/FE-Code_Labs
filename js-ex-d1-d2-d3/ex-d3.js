//ex 1 given the code explain what scopes are in this current context of code

function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
		console.log(innerVar); // Can we access innerVar?
	}

	innerFunction();
}

outerFunction();

//these are all innerscope can see everything within them aka local scope

//ex 2 Apply Hoisting Correctly in a JS Project.
car('audi');
function car(make){
  console.log(make);
};
car('audi');
//function runs by running through information from top to bottom unlike global scope variables

//ex 3 implement closures in javascript
//Develop a JavaScript function that returns another function.
//The inner function should have access to 
// variables from the outer function's scope.

// let apple = 'food';
// let urDog = 'pet';
// function foodAndAnimals(apple, dog){
// let urDog = 'gizmo';
// console.log(apple, urDog);
// }
// foodAndAnimals('orange', urDog);

//ex 4 
//Objective: Understand the differences between Local and Global Scope.

//Instructions:

// Declare a global variable outside of any function.
// Create a function that tries to modify that global variable.
// Create another function that declares a local variable with the same name.
// Observe the behavior when calling both functions.

let earth = 'blue';
{
function planets(){
  planet = earth;
console.log(planet)}
function at(){
let planet = 'red';
console.log(planet);
}
}

planets();
at();
//EX 5 Objective: Implement a Function Factory using Closures.
//Design a function that accepts a parameter.

//The function should return another function that uses the parameter
// in some way.

  // Return a function that makes use of 'param'
  function functionFactory(param) {
    return 
  }
// Create an instance of the inner function by invoking functionFactory with a parameter


// ex 6 Objective: Examine how Hoisting impacts variable declarations and the different types of variables used.

// Declare a variable after a console.log statement 
// that tries to print that variable. Observe the behavior, 
// and deduce how JavaScript hoists variable declarations.
// console.log(mouse);
// let mouse = 'gizmo';

//have to intialize before calling with console.log when a global scope

//ex 7 create a funciton that sets up a counter using closures
//outer funciton should define a count variable
// the inner function should increment and print the coutn each time
// it's invoked

function counter(){
  let count = 0;

  return {
    //keys or properties interchangeable
    increment: function(){
   count++;
   return count;
  
    },
    decrement: function(){
      count--;
      return count;
    },
    getCount: function(){
      return count;
    }
  }
}
let myCounter = counter();

console.log(myCounter.getCount());
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());



// //ex 8 Create a function that initializes a counter variable. This function should return another function.
// The returned function, when invoked, should increment the counter and print its value. However, if the counter reaches a certain value (e.g., 10), it should reset itself.
// Notice how hoisting affects the behavior when you try to declare and initialize the counter after referencing it.
// Comment on the role of closure in maintaining the counter's state across multiple invocations of the returned function.

counterTwo(){
let counted = 10;
for (let i = 0; i < 10; i++)
}
  counterTwo();
