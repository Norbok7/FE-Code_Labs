/////oveserver pattern

//define class
class Observer{
  //subscribers, and properties
  observers = [];

  //create a method and manually add subscribers or items in other ex.

  subscribe(fn){
    this.observers.push(fn); // where we keep track of subscribers, observer=subscirber here
  }

  //instance method - broadcast information to subscribers
  broadcast(data){
    this.observers.forEach(sub => sub(data))
  }
//another ex. notify All(){
  //this.observers.forEach(observer=> observer.update(this.items));
}


//create observer instance // or instance creation
const observer = new Observer; //pointing to observer instance

//declare a subscriber and point it to a function =>
const subscriber = (data) => {
  console.log('this is from sub 1')
  console.log('here is some data'+ data); 
}

const subscriberTwo = (data) =>{
  console.log('this is from subscriber 2');
  console.log('here is the data again', data);
}
console.log('Before subscriber list', observer.observers);

//adding a subscriber to observer list
observer.subscribe(subscriber);
observer.subscribe(subscriberTwo);

console.log('after subscriber list', observer.subscribe)
//broadcast info to each sub
observer.broadcast('john doe')