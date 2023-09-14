///////////exercise one
class Subject {
	constructor() {
		this.observers = [];
	}
  
addObserver(fn) {
  this.observers.push(fn);
}

removeObserver(fn) {
  this.observers = this.observers.filter((sub) => sub !== fn);
}

notifyObserver() {
  this.observers.forEach((sub) => {
    sub.update();
  });
}

};

const subject = new Subject;

class Observer {
	update() {
		console.log('Observer updated!');
	}
  
}
const observer = new Observer
const observerTwo = new Observer
console.log('Before subscriber list', subject.observers);


subject.addObserver(observer);
subject.addObserver(observerTwo);

console.log('after adding observer', subject.observers)

subject.notifyObserver();

subject.removeObserver(observerTwo);
console.log('after removing observer');
subject.notifyObserver();
subject.addObserver(observer);
subject.addObserver(observer);
subject.addObserver(observer);
subject.addObserver(observer);
subject.notifyObserver();




