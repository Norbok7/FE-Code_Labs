//closure
const myName = 'Garrett' //externally available inside my function js specialty
function printName() {
  console.log(myName)

}
printName();

//most closures are functions inside of functions
//ex.
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer variable: ' + outerVariable)
    console.log('Inner variable: ' + innerVariable)
  }
}
const newFunction = outerFunction('outside')
newFunction('inside');

//functions are not accessable outside of functions, however
//outerfunctions variables can be accessed within functions 
//further on the inside of the function functions functions

function inBetween(a, b){
  return function(x) {
    return x => a && x <= b;
  };

}

let arr =[1,2,3,4,5,6,7];
alert(arr.filter(inBetween(3,6)) );
console.log(inBetween);