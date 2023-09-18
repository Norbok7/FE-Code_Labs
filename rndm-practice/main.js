function myFunction() {
  document.getElementById('demo').innerHTML ='We will paint your inside, or Outside Walls as well as objects!';

}

function myFunctionTwo() {
  document.getElementById('demo').innerHTML ='We can take down, add or remove new or old Wallpaper';

}
function myFunctionThree() {
  document.getElementById('demo').innerHTML ='We will take down, add or remove new or old Drywall';

}

let message = document.getElementById("message");
const buttonCal = document.querySelector("button");
buttonCal.addEventListener("click", calculateCost);

function calculateCost() {
  let numOfPizza = parseInt(document.getElementById("quantity").value);
  let totalPrice = 0;
  //list of pizza prices
  const pizza1 = {
    qty: 1,
    price: 6.45,
  };

  const pizza2 = {
    qty: 2,
    price: 12.0,
  };

  const pizza3 = {
    qty: 3,
    price: 14.0,
  };

  //storing pizza objects into an array
  const pizzas = [pizza1, pizza2, pizza3];

  if (numOfPizza === 0 || numOfPizza < 0) {
    message.innerHTML =
      "Please enter a positive number. You cannot order 0 pizza or negative pizzas, my friend! You'll go hungry and make Italians sad!";
    return;
  } else if (numOfPizza === 1) {
    totalPrice += pizzas[0].price;
  } else if (numOfPizza % 2 === 0 && numOfPizza < 5) {
    totalPrice += pizzas[1].price * (numOfPizza / 2);
  } else if (numOfPizza % 3 === 0) {
    totalPrice += pizzas[2].price * (numOfPizza / 3);
  } else if (numOfPizza % 3 === 1) {
    totalPrice += pizzas[2].price * ((numOfPizza - 1) / 3) + pizzas[0].price;
  } else if (numOfPizza % 3 === 2) {
    totalPrice += pizzas[2].price * ((numOfPizza - 2) / 3) + pizzas[1].price;
  }
  message.innerHTML =
    "You ordered " +
    numOfPizza +
    " pizza(s). The total cost of your order is: $" +
    totalPrice +
    ".";
}