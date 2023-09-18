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


/// step 1.Define a Person class with properties name and age.
class Person  {
  constructor(name, age) {
  this.name = name;
  this.age = age;
  }
//step 2. Add a method greet() to this class which outputs a greeting.
static info(){
  return console.log('this is a person class')
}
greet() {
  console.log(`Hello! my name is ${this.name} I am ${this.age}`)
  }
  get newAge() {
		return this.age;
    
	}

	set newAge(age) {
    this.push(age);
    console.log('new age set');
  }

	}
  




//step 3. Instantiate two different Person objects and invoke their greet methods.
//instantiate refers to using a class typically
const bio = new Person('joe', 24);
const bioTwo = new Person('sarah', 22); // person objects instatiated from a class

bio.greet();
bioTwo.greet();


console.log(bio);
Person.info() //returns when called outside of class
//Person.set.newAge();
 ///can not call inside of class

    //come back to this problem
    ////////////ex. 3////////////////
   // Modify your Person class. The constructor should now accept and 
   //      initialize name and age properties.

 
////////////ex. 4////////////
// static in class says SyntaxError: Unexpected strict mode reserved word
// in outside of instance class it is fine
///////////ex.5//////////
//GET HELP WITH THIS PROBLEM
///ex. 6////////
//GET WALKTHROUGH
///ex.7////////
class Library {
  constructor(){
    this.books = []};
addBook(book){
this.books.push(book);
console.log('book added');
};
removeBook(book){
this.books = this.books.filter((bk) => (bk) !== books);
console.log('book removed');
};
listBookReturned(){
this.books.forEach((book) => 
book.update());
};
  }

  class Book {

    #isbn
    constructor (isbn, title, author, yearPublished){
  this.isbn = isbn,
  this.title = title,
  this.author = author,
  this.yearPublished = yearPublished;
     
    }
    update(data) {
      console.log('books updated');
    }
  }

const library = new Library;
const book = new Book;
library.addBook(book);
library.addBook(book);
library.listBookReturned();

//ex 8
class Studentz {
  constructor(names, grades){
    this.names = names
    this.grades = grades
  }
  
  addGrades(name, grade){
this.grades.push(grade)
  };
  avgGrades(){
    let sum = 0;
    for(let i = 0; i<grade.length; i++) {
      sum += grade[i]}
   return  sum/grade.length

    }
  }
const studentz = new Studentz;
const A = grade;
const B = grade;
const C = grade;

studentz.grades(A);











