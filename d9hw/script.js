///Create a To-Do list application where users can add tasks, mark them as complete, and delete them.
const ITEMS_CONTAINER = document.getElementById('items');
const ITEM_TEMPLATE = document.getElementById('itemTemplate');
const ADD_BUTTON = document.getElementById('add');
const REMOVE_BUTTON = document.getElementById('remove');




let items = getItems();
///add tasks
function getItems() { //save items
  const value = localStorage.getItem('todo') || '[]'; //if no items are stored u get null, if you have || it pulls empty array
 
  return JSON.parse(value);

}
console.log(items);
function setItems() {  /// refresh what we saved above
const itemsJson = JSON.stringify(items);
localStorage.setItem('todo', itemsJson);
}

function addItem() {
  items.unshift({   ////used to add one or more elements to the beginning of the given array.
    description: '',
    completed: false
  });
  setItems(items);
  refreshList();
}

function removeItem() {
  items.splice({   // pop removes last element or shift removes the first
    description: '',
    completed: false
  });
    setItems(items);
    refreshList();
  }

  

  // const handleRemove = e => {
  //   const item = e.target.closest('.item');
  //   item.parentElement.removeChild(item);
  // };

  // const remove = document.createElement('button');
  // remove.textContent = 'Remove';
  // remove.addEventListener('click', handleRemove);

 


function refreshList() { //takes list of items and renders to user
    items.sort((a, b) => {
      if(a.completed) {
        return 1;
      }
      if(b.completed) {
        return -1
      }
      return a.description < b.description ? -1 : 1;
    })
  //todo sort items
  ITEMS_CONTAINER.innerHTML = '';
  for (const item of items) {
    const itemElement      = ITEM_TEMPLATE.content.cloneNode(true);
    const descriptionInput = itemElement.querySelector('.item-description');
    const completedInput   = itemElement.querySelector('.item-completed');
    
    descriptionInput.value = item.description;
    completedInput.checked = item.completed;  //checked is boolean setter for checkboxes

    descriptionInput.addEventListener('change', () => {
      updateItem(item, 'description', descriptionInput.value);
    });
    completedInput.addEventListener('change', () => {
      updateItem(item, 'completed', completedInput.checked); //completed and checked are two different things
    });
    ITEMS_CONTAINER.appendChild(itemElement);
  }
  }; 

refreshList();
ADD_BUTTON.addEventListener('click', () => {
  addItem();
});


REMOVE_BUTTON.addEventListener('click', () =>{
  removeItem();
});

function updateItem(item, key, value) {
  item[key]= value; //this works dont need to access array, bc set items finds it
  setItems(items);
  refreshList();
}
///mark them as complete


///delete them






{/* <div class="item">
<input type="checkbox" class="item-completed">
<input type="text" class="item-description" placeholder='to-Do item...'>

</div> */}