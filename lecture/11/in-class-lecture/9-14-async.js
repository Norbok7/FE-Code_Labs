console.log(1);


setTimeout(()=>{
  console.log('this is and example of asynchronous code!');
}, 0);
console.log(2);
console.log(3);

//fetch data from a server
async function fetchPosts(){
  //url
  const url= 'https://jsonplaceholder.typicode.com/posts?_limit=10';
 try {
  const response = await fetch(url);  //any lines after await have to wait
  console.log(response);
  const data = await response.json();//reason for json is bc response doesnt have info we want
  //its just a quicker way of getting the body of information not the extra header etc.
  console.log(data);
 } catch (error) {
console.log('error', error)
 }
}
  // add to webpage





fetchPosts(); // what happens is u get  a promise in the console log
//a promise is that a code will be executed when

//async and await is a cleaner way to wait for a response to get back to us, and then
//execute code after that