const classroom ={
  name: 'High Five',
  students: ['sally', 'Jim', 'Karen'],
  printStudents: function () {
    console.log("'this' in implicit scope: ", this.students);
  }
}
classroom.printStudents();
//this used in statement is refering to classroom object in this scenario
//if you just console.log(this); it refers to window object


////////////explicit binding of this/////////////////
const getName = function () {
  console.log("'this' in explicit scope:", this.name);
}

const player = {
  name: 'Lebron',
  isHappy: true,

};
getName.call(player);


//////////////////////////////OBJECT ORIENTED PROGRAMMING...built aroudn objects//////////////////////////
//////////////how to define class below///////////////////

class Animal {
  constructor(name) {
    this.name = name;

  }
  speak() {
    console.log(`${this.name} makes a sound!`);
  }
}
const dog = new Animal('gizmo')
dog.speak();

const cat = new Animal('jiji')
cat.speak();

////////////////////////getters and setters, and they need to return information at least getter//////////////////////////////////
class Rectangle {
  constructor(width, height) {
this.width = width;
this.height = height;
  }
  get area() { // have to use get to get
    return this.width * this.height
  }
  set dimensions(value){  ///helps to set property on class we made
    [this.width, this.height]= value;
  }
 }
const rect1 = new Rectangle(4,5);
console.log(rect1.area);

rect1.dimensions = [2,3];
console.log(rect1.area);

/////////////////////////static method////////////////////////////
/////Static methods belong to the class rather than any particular object instance.////
class Calculator{
  static add (a,b) {
    return a+b;
  }
}

console.log(Calculator.add(4,5)); // 9

///////////////////////////private class fields/////////////////
class Circle {
  #radius; ///means private property aka can not add or change without instance of a circle

  constructor(radius) {
    this.#radius = radius;

  }
  getArea() {
    return Math.PI * this.#radius *this.#radius;
  }
}

const circle = new Circle(5)
console.log(circle.getArea()); //78.53981
console.log(circle.radius); //cant be accessed so undefined due to private