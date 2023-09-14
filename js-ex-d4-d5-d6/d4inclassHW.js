// //ex 1 understand this keyword in diff contexts
// // Create three functions: one global, one as an object 
// // method, and an arrow function inside an object.

// //global ////this in below looks to window
// function speak(){
//   console.log
// }
// //one as an object method////  this referring to class
// const classChoice={
//   strength: 5,
//   agility: 3,
//   stamina: 8,
//   printAgility: function() { //object method?
//     console.log("'this' in implicit scope: total agility", this.agility);
//   }
// }
// classChoice.printAgility();
// //arrow function isde of object  // this referring to user
// const User = () => {
//   (this.name = "John Doe"), (this.age = 20);
// };
// const user = new User();
// console.log(user);
/////////////////EX. 2//////////////////////
class Person  {
  constructor(name, age) {
  this.name = name;
  this.age = age;
  
}
 
greet() {
  console.log(`Hello! my name is ${this.name} I am ${this.age}`)
  }
  static info () {
    return console.log('this is a Person class');
  }
  set ageNewOne(value){
    return (age<=2)}

    
  get ageNew() {
    return this.age}
  }
    //come back to this problem
    
    
  
  
  

console.log(Person.info());
const guy = new Person ('garrett', 24)
guy.greet();

//////////Ex. 3
const girl = new Person ('brandi', 22)
girl.greet();

console.log(guy, girl);
////////////ex. 4////////////
// static in class says SyntaxError: Unexpected strict mode reserved word
// in outside of instance class it is fine
//cant call me.info(); have to call Person.info
///////////ex.5//////////
//come back to this one

///ex. 6////////
///ex.7////////





