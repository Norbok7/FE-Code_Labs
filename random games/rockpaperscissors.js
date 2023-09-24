const userChoiceDisplay      = document.getElementById('user-choice');
const computerChoiceDisplay  = document.getElementById('computer-choice');
const resultsDisplay         = document.getElementById('results');
const userWins               = document.getElementById('user-wins');
const computerWins           = document.getElementById('computer-wins');
const draws                  = document.getElementById('draws');
const possibleChoices        = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let u = 1;
let c = 1;
let d = 1;




///possible choices  ///span id allows us to enter in that field after retrieving with getElementByID above

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id 
  userChoiceDisplay.innerHTML = userChoice
  console.log(userChoice)
  computerRandom();
  getResult();
  tallyHo();
}))

function computerRandom() {
 const randomNumber = Math.floor(Math.random() *3) +1;

 if(randomNumber === 1) {
 computerChoice = 'rock'};

 if(randomNumber === 2) {
 computerChoice = 'paper'};

 if(randomNumber === 3) {
 computerChoice = 'scissors'};

 computerChoiceDisplay.innerHTML = computerChoice
 console.log(computerChoice);
};

function getResult() {
if (computerChoice ===  userChoice){
result = 'draw'
}
if (computerChoice === 'rock' && userChoice === 'scissors'){
result = 'you lose'}
if (computerChoice == 'rock' && userChoice === 'paper'){
result = 'you win'}

if(computerChoice === 'paper' && userChoice === 'rock'){
result = 'you lose'}
if(computerChoice === 'paper' && userChoice === 'scissors'){
result = 'you win'}

if(computerChoice === 'scissors' && userChoice === 'rock'){
result = 'you win'
}
if(computerChoice === 'scissors' && userChoice === 'paper'){
result = 'you lose'
}
resultsDisplay.innerHTML = result
};
//display computer choice number = choice
function tallyHo() {
  
 if(result === 'you win') {
  
  return userWins.innerHTML = u++;
}
  
  if(result === 'you lose'){
    
  return computerWins.innerHTML = c++;
}

  if(result === 'draw'){
   
    return draws.innerHTML = d++;
  }

 
  };