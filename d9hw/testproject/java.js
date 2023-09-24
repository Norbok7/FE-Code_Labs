//store multiple values in a array
document.body.style.margin="50px";
let tasks = [];
const addTaskButton = document.getElementById('addTask');
addTaskButton.addEventListener('click', () => {
  const newTask = document.getElementById('newTask').value;
  tasks.push(newTask)
  const taskList = document.getElementById('tasks');
  const newTaskElement = document.createElement('li');
  newTaskElement.innerText = newTask;
  taskList.appendChild(newTaskElement);
  document.getElementById('newTask').value = '';
  
})
console.log(tasks);

const tasksList = document.getElementById('tasks');
tasksList.addEventListener('click', (e) => {
  const taskElement = e.target;
  if(!taskElement.classList.contains('completed')){
  taskElement.classList.add('completed');
  
  } else {
    taskElement.remove();
  }
});

function storeTask(){
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskButton.addEventListener('click', storeTask);
tasksList.addEventListener('click', storeTask);

function getTask(){
  const taskStorage = JSON.parse(localStorage.getItem('tasks'));
  if(taskStorage){
    tasks = taskStorage;
  }
  const tasksList = document.getElementById('tasks');
  for(const task of tasks){
   const newTaskElement = document.createElement('li');
   newTaskElement.innerText = task;
   tasksList.appendChild(newTaskElement);

  }
}
window.addEventListener('load', getTask());  /// needed to allow page to load before 
//displaying information, wasnt displaying before.

function deleteTask(task) {
const taskStorage = JSON.parse(localStorage.getItem('tasks'));
const taskIndex   = taskStorage.indexOf(task);
if(taskIndex >= 0){
  taskStorage.splice(taskIndex, 1);
  }
  localStorage.setItem('tasks', JSON.stringify(taskStorage));
}
const taskList = document.getElementById('tasks');
taskList.addEventListener('click', (e) => {
  const taskElement = e.target; 

  taskElement.remove();

  const task = taskElement.innerText;

  deleteTask(task)
});



// class Park{
//   constructor(name, num){
//     this.name = name
//     this.occupants = occupants
//   };
//     park(name){
    
//     console.log(`the name of the park is ${name}`);

//   };
//   occupants(num){
//     console.log(`currently there are ${num} people in the park`);
//   };
 
// }

// const newPark = new Park('hendrickson', 50);
// console.log(newPark);
// newPark.park('hendrickson');
// newPark.occupants(50);

// const park = {
//   name: 'hendrickson',
//   num: 7,
//   parkFacts(){
//   console.log(`this is ${this.name} park, and there are ${this.num} people in the park`)
//   }
// }
// park.parkFacts();



