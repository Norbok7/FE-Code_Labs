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
//yes can access inner and outter variable as they are in the same family block of the function
// a is before initialization


function outerFunction(){
b=2;
c=3;
console.log(c);
function innerFunction(){
  a=4;
  console.log(a);
}
return innerFunction();
}
outerFunction();



function functionFactory(param){
  return function (travel) {
  return `${travel} ${param}!`;
 };
}

const beach = functionFactory('clearwater');
 console.log(beach('Where the beach is white'));
 

 function counter(){
  let currentValue = 0;

  return function(val){
    currentValue += val;
    return currentValue;
  }  
}

// create a counter and increment by one
let d = counter()
console.log(d(1))
console.log(d(1))
console.log(d(1))

// create a new counter and increment it by 2
let e = counter()
console.log(e(2))
console.log(e(2))
console.log(e(2));


function counterTwo(){
  let bigValue = 2;
 return function(score){
  bigValue+=score;
  return bigValue;
 } 
}