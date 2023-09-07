// //1. Write a JavaScript program that displays "Hello, World!" on the console.
// // alert('hello world');
// //2.declare a variable and assign it your name as string
// //display to console 
// let firstName = 'Garrett';
// console.log(firstName);
// //3. calculate and display area of rectangle use l/w to store dimensions
// function area(x){
//   length = 2,
//   width = 4,
//   (x=length*width)
//   console.log('area is equal to ' +x);
// }
// area('area is equal to');
// //4. check if # even or odd message on console
// const num = 7;
// if (num % 2 == 0) console.log(num + " is an Even Number");
// else console.log(num + " is an Odd Number");

// function time(hour){

//   if (hour >= 6 && hour < 12) 
//   console.log('good morning');
//  else if (hour >= 12 && hour <18)
//  console.log('good afternoon');
// else 
// console.log('gn');
  
// }
// time(19);

// //5 display #1-10 with for loop


// //console.log("for loop");

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// //ex 6 program to prompt fo rname and display personallized mssg
// let name = prompt("Please enter your name:"); console. log("Hello, " + name + "!");

// //ex 7 display factorial of a #. prompt user for # and display the factorial
// let number = prompt('number please');
// if (number) {
//   let fact = 1;
//   for (i = 1; i <= number; i++) {
//     fact *= i;
//   }
//   console.log(`The Factorial of ${number} is ${fact}.`);
// }

// // 8 calc if leap yr or not 
// function checkLeapYear(year) {
//   if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//     console.log(year + ' is a leap year ' );
//   } else {
//     console.log (year + ' is not a leap year ' );
//   }
// }

// //ex 9 calc program flow using loop to display sum of all #'s from 1-100 using a while loop
// function ex9Button() {
//   let ex9Result = ('exercise9Result');
//   let sum = 0;
//   let addI = 1;

//   while(addI <= 100) {
//       sum += addI;
//       addI++;
//   }
//   console.log(sum);
// }
// ex9Button();

//ex 10 program that prompts user for 2 #s and performs the four basic operations on those #'s
// let a = prompt('positive integer');
// let b = prompt('another positive integer');


// console.log(a+b); //2,4 = 24
// console.log(a*b); //2*4 = 8
// console.log(a/b); //2/4 = .5
// console.log(a-b); //2-4 = -2

// var numOne=prompt('positive integer');
// var numTwo=prompt('another positive integer');
//   res = numOne + numTwo;
//   document.write("Add = " + res + "<br/>");
//   res = numOne - numTwo;
//   document.write("Subtract = " + res + "<br/>");
//   res = numOne * numTwo;
//   document.write("Multiply = " + res + "<br/>");
//   res = numOne/numTwo;
//   document.write("Divide = " + res + "<br/>");

// //ex 11
// let mouth = 'tooth';
// let run = 3;
// Boolean(10>9); 
// let cat = null;
// let dog='';

// let name = {
//   firstName: 'garrett',
//   age: 32,
// }
// let exercises = ['pushup', 'situp', 'squat'];
// console.log(exercises[0]);

//ex 12 create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array lngth is reached.
// let objList = [
//   {burger:'beef', price: "$3"},
//   {taco: 'chicken', price: '$4'},
//   {soup: 'orange', price: '$5'},
// ]
// const list1 = document.querySelector('ul.list1');
// const list2 = document.querySelector('ul.list2');

// while(list1.firstChild || list2.firstChild) {
//     list1.removeChild(list1.firstChild);
//     list2.removeChild(list2.firstChild);
// }

// for (let i = 0; i < objList.length; i++) {
//     let listItem1 = document.createElement('li');
//     let listItem2 = document.createElement('li');
//     list1.appendChild(listItem1);
//     list2.appendChild(listItem2);
//     listItem1.innerText = objList[i].food;
//     listItem2.innerText = objList[i].price;
// }
