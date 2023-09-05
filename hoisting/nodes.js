 //functions are hoisted to top so can call above functions
 //only declarations are hoisted not initializations
 

 // ex 1.  what is the expected outcome of the following?
 book(' the magicians nephew');

 function book(title) {
  console.log(`the book is called ${title}`);
}

//function will be hoisted

//  //ex 2. what is the expected outcome of the following?
//how would you fix this?

// console.log(book);
// let book = 'the silver chair'; 

//initizlazation of let book = needs to be above the call 
// it is not hoisted
