// function test() {
// return 2+2;
// // return 'goodbye'; // unreachable code return needs to be last value
// }
// console.log(test());

// let login = function (password) {
//   if (password === 'test123'){
//     return 'succesful log in'

//   } else {
//     return 'failed login'
//   }
// }
//let result = login('test123');
//   console.log(login('test123')); is the same as console.log(result);

///////////////////any function that doesnt return anything aka doesnt use return keyword is undefined.
//////////////////if u use return keyword to specify return value and execute it, everything after will not be executed.
/////////////////can use return keyword multiple times as long as they are in their own code blocks

////////////////////tasks//////////////////
//create a function called favNum and set it up with a parameter claled num, use return to return whatever number is given
//as the argument, log this to the console with the message ' my fav number is [num]' using template literals.

function favNum(num){
  return num;
}
let myfavNum = favNum(3);
console.log(`my fav ${myfavNum} to see`);

/////////////// what will be returned from ////////////////////
function password(a) {
  if (a.length > 8) {
    return console.log(`You chose ${a}`);
  }else{
    return console.log('not enough letters');
  }
  }
  
  password('PurpleRhino123');
  password ('Circle77');

  //1.) You chose PurpleRhino123
  //2.) Circle77 note enough letters = 8 not more than 8
