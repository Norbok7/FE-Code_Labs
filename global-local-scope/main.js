//             global variable    //

// let game = 'Sonic'; // global variable

// console.log(game);

// function title() {
//   console.log(`${game}`);

// }
// title();
// if (true) {
//   console.log(`${game}`);
// }


//        local variable       //

// function a() {
//   let game = 'Sonic'; // local variable //aka functional scope when used in function
//   console.log(game);
// }

// a();

// if(true) {
//   let game = 'Mario';
//   console.log(game);
// }
// local scope provides security/ less errors or accidental changes

//let const block scoped and var is open scoped
// if(true) {
//   var greeting = 'hello';

// }
// console.log(greeting);

// let x = 10;
// console.log(x);

// if(true) {
//   let x = 2;
//   console.log(x);

// }

// console.log(x);

//scope relates to where a variable can be used by a program
//2 main types of scope global and local
// any variable thats been declared outside of funcitons
//is global scope, ones inside of functions are locals
//local scope preferred as more security
// var only has functional scope, and any other codeblock
// it is not scoped.  Let/Const has true local scope they 
//are blocked scoped. so should use over var.

// TASKS   ///
// 1. 3 variabales in global scope called firstName, lastName and age,
// and a function that logs them to the console in the following 
//format e.g. `John smith is 25 yrs old'.

// let firstName = 'Garrett';
// let lastName = 'Duncan';
// let age = `32`;

// function person() {
//   console.log(firstName, lastName,'is', age, 'years old.')
// }
// person();

function lives() {
  let country = 'England';
  let firstName = 'Garrett';
  let lastName = 'Duncan';
  let age = `32`;
  console.log(firstName, lastName,'is', age, 'years old', 'and lives in', country)
}
lives();
let firstName = 'James';


