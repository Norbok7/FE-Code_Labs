// // ///////////exercise one
// // class Subject {
// // 	constructor() {
// // 		this.observers = [];
// // 	}
  
// // addObserver(fn) {
// //   this.observers.push(fn);
// // }

// // removeObserver(fn) {
// //   this.observers = this.observers.filter((sub) => sub !== fn);
// // }

// // notifyObserver() {
// //   this.observers.forEach((sub) => {
// //     sub.update();
// //   });
// // }

// // };

// // const subject = new Subject;

// // class Observer {
// // 	update() {
// // 		console.log('Observer updated!');
// // 	}
  
// // }
// // const observer = new Observer
// // const observerTwo = new Observer
// // console.log('Before subscriber list', subject.observers);


// // subject.addObserver(observer);
// // subject.addObserver(observerTwo);

// // console.log('after adding observer', subject.observers)

// // subject.notifyObserver();

// // subject.removeObserver(observerTwo);
// // console.log('after removing observer');
// // subject.notifyObserver();
// // subject.addObserver(observer);
// // subject.addObserver(observer);
// // subject.addObserver(observer);
// // subject.addObserver(observer);
// // subject.notifyObserver();

// ///ex 2 remove destructure name and age in object into their own variables/
// const person = {
// 	name: 'John',
// 	age: 30,
// 	address: {
// 		city: 'New York',
// 		country: 'USA',
// 	},
// };

// const fruits = ['apple', 'banana', 'cherry', 'date'];
// ///own variables 
// let name = person.name;
// let age = person.age;
// console.log(name, age);
// ///2nd and 4th fruit destructured
// const [first, third] = fruits;
// console.log(first, third);
// //destructure city and coutnry from nested objects 
// let city = person.address.city;
// let country = person.address.country
// console.log(city, country);


// //understanding asynchronous coding using async/await
// // Create an async function named fetchPosts that retrieves the first 10 posts from the JSONPlaceholder API.
// // Handle any potential errors using a try/catch block within the async function. If an error occurs, log an appropriate error message.
// // Invoke the fetchPosts function and log the results.

// async function fetchPosts() {
// 	const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

// 	// Your async/await code here
//   try {
//     const data = await fetch(url);
//     const res = await data.json();
//     console.log(res);
// } catch (err) {
//     console.log('Could not fulfill this request. Please check the following error: ', error);
// }
// }

// // Call the function to fetch posts
// fetchPosts();

//////////////////////////////ex 4
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		// TODO: Add observer to the list
   this.observers.push(observer);
	}

	removeObserver(observer) {
		// TODO: Remove observer from the list
      this.observers = this.observers.filter((obs) => obs !== observer);
      //filter is a built in method
	}

	notifyObservers(data) {
		// TODO: Notify all observers with given data
    this.observers.forEach((observer) => {
      observer.update();
      console.log('observers  updated');
    });
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=15';
    try {
      const data = await fetch(url);
      const res = await data.json();
      console.log('async/await', res);
  } catch (err) {
      console.log('Could not fulfill this request. Please check the following error: ', err);
 
  }
}
}
	// TODO: Fetch data from the API and notify observers



class Observer {
	update(data) {
    console.log('obs updated');
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method
const subject = new Subject;
const observer = new Observer;
const observerTwo= new Observer;
const observerThree= new Observer;


subject.addObserver(observer);
subject.addObserver(observerTwo);
subject.addObserver(observerThree);
subject.fetchAndNotify();
subject.notifyObservers();