/////////////video 16//////////
let date = new Date();
console.log(date.getDate()); //todays date of month

let hour = date.getHours();
let min = date.getMinutes();
console.log(`${hour}:${min}`); //todays hour+min

let day = date.toLocaleString(`default`, {weekday: 'long'});
console.log(day); //day of week aka tuesday

////////////video 17//////////////
//math.random to get number 1-10 and math.floor for whole #
let numba1 = (Math.floor(Math.random()*10));
let numba2 = (Math.floor(Math.random()*10));
let numba3 = (Math.floor(Math.random()*100));
console.log(numba1, numba2, numba3);
///now find biggest of these #s with relative math
let max = Math.max(numba1, numba2, numba3);
console.log(max); // to find biggest of 3 random #s 

////////////video 18///////////
//comparison operators
// let a = 10;
// let b = 15;
// console.log(a===b); //f
// console.log(a===10); //t

// x='5'
// y=6
// x !== y
// console.log(x!==y); //true
/////////////video 19/////////
//logical operators

// || comparison only one has to be tru to be true
// && all must be true to be true
a=-1;
b=1;
if (a &&  b){
  console.log('hello'); // true a is = -1 true, and b is = 1 true
};
////////////////////////video 20
//?? is nullish operator to compare and declare first defined aka true or false value
let course;
console.log(course ?? 'please select a course');
/////////////video 21
//javascript control flow
//conditionals if statements, switch, ternary
//loops for loop, do while loop, for..in loops, for..of loops
//these are how control flow
////////////video 22
//if else statements
let user = 'employee'

///if else statements
if (user === `guest`){
console.log('login denied')
} else if (user===`employee`){
console.log('login in successful')
}

/////////////////
let myName = 'geatt';
let nameLength = myName.length
if (nameLength > 5){
console.log('more than 5')
} else if(nameLength < 5){
  console.log('less than 5 letters')
} else if (nameLength = 5){
  console.log('equal to 5 letters');
}
////////////video 23/////////////
////switch statement not covered in class
let favFood = 'pizza';
switch(favFood) {
  case 'pasta':
    console.log(`thats right ! ${favFood} is my favorite.`);
    break;
  case 'pasta2':
    console.log(`thats right ! ${favFood} is my favorite.`);
    break;
  case 'pasta3':
    console.log(`thats right ! ${favFood} is my favorite.`);
    break;
  case 'pizza':
    console.log(`thats right ! ${favFood} is my favorite.`);
    break;
  case 'pasta5':
    console.log(`thats right ! ${favFood} is my favorite.`);
    break;
    default:
      console.log(`${favFood} not found...I'm hungry`);
}
///////////////video 24
////ternary operator easier way to check true false like if else statements did
let age = 17;
if(age>= 18) {
  console.log('you can vote' );

}else{
  console.log(`sorry, you can't vote`);

}
//the above if else statement is same as below ternary, but more code
let message = age >= 18 ? 'you can vote' : 'you cant vote';
console.log(message);

let password = 'redruby123';

let mewzage = password === 'redruby123' ? 'success' : 'fail';
console.log(mewzage); //success

//how to use dom 
let body = document.querySelector('body');
let choice = 'dark';
choice === 'dark' ? body.classList.add('darkMode') : null;

let messages = '2 '
let token = 1 < messages ? 'srg' : 'sdfl';
console.log(token);

let time = '11:00'
let greeting = time < '12:00' ? 'good morning' : 'good afternoon'
console.log(greeting);

//////////////////////////lesson 25//////////////////////
/////js for loop
let colors = ['red', 'green', 'blue', 'orange', 'purple',];

for (let color = 0; color < colors.length; color++){
  console.log(`${colors[color]} is my fav color`)
}
///////////////////////lesson 26/////////////////////////


