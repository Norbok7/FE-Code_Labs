//////////////////////start video 4/////////////////////////////
//alert('error example');
//['hey there!', 'hello again'].forEach(alert)



//solving for even or odd
// function num(value){
//   if (value%2 ==0){
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// num(4);
//focus on writing explanatory code vs comments 
function isEven(value){
  if(value%2 === 0){
    console.log('isEven');
  } else {
    console.log('isfalse');
  }
}
isEven(3);

///take two #'s and do param
/**
 * 
 * @param {number} num1 the number to raise
 * @param {number} num2 the power to be raised by
 * @returns 
 */
function powerOf(num1, num2) {
  return Math.pow(num1, num2);
}
console.log(powerOf(5,3)); //5x5x5=125 5 to power of 3
///////////////////////end video 4////////////////////////////////
//////////////////////start vid 5////////////////////////////////
//how to display or output javascript
//how to use alert to display dynamic information
// function plus(a, b) {
//   return a+b;
// }
// plus(10,10);
// alert(plus(10,10)); //alert to display dynamic infomration

//prompt('what is your name', 'name:');
//console.log(prompt('what is your name', 'name:'));//prompt for dynamic info

//console.log(confirm('continue learning js?')) // runs boolean okay=true cancel=false


console.log('%c heyo turkey vulture', 'color: red; font-size: 4px; font-weight:bold');
//%c to give styles to 'string'

// comma before country name is place holder string area
//prompt('what country are you from?', 'country name: ');

///////////////////////////video 7///////////////////////dev dreamer
///////data types////

////this is a object
let person = {
  name: 'John',
  age: 30,
}
console.log(person);

///////////////////////video 8//////////////////////dev dreamer
let num1 = 10;
let num2 = 20;

console.log(num1 + num2);
////find modulus of two variables
console.log(num1 % num2); //modulus = 10; finds remaineder
/////////////////////video 9///////////////////////dev dreamer
let x = 30;
x+= 10; ///30+10=40

x/=2;///40/2=20

let xp = 250;
xp*=2; //=500
///////////////////video 10/////////////////////dev dreamer
////numbers archetype

let num3= 1e5; // 1e5 = 100000
console.log(typeof num3); // identify variable type


/////////////////video 11//////////////////////dev dreamer
const PI = 3.14159;
console.log(PI.toFixed(3)); //fixed decimal

num3 = (PI.toPrecision(3));//fixed number of numbers
console.log(num3);

let lightSpeed = 186000
console.log(lightSpeed.toExponential()); //to exponent

////////////////video 12///////////////////////dev dreamer
////all about string data type///////
let s = 'single';
let d = "double";
let b = `backtick`;

let speech = 'Martin Luther King said "I have a dream."'
console.log(speech);

let tip = 'We can escape quotes by using\.'
console.log(tip);
/////////////video 13////////////dev dreamer
////string concantonation basically putting strings together
let teach = 'i am learning';
let program = 'javascript';
let result = teach + ' '+ program;
console.log(result);
let finish = teach.concat(program); //concat same as result above
console.log(finish);

///////////video 14////////////dev dreamer
//template literals

let firstName = 'garrett';
let course = 'java';
let channel = 'dev dreamer';

let infoz =`${firstName} is learning ${course} with ${channel}`
console.log(infoz);

////////////video 15/////////////
//strings and string methods
let xx = 'I am watching Dev Dreamer';
console.log(xx.toUpperCase());
console.log(xx.slice(0, 5)); // takes I am to console 0 is I of string and 5 is space after am




