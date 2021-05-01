// SELECTORS
let submitButton = document.querySelector('.submit-button');
let deleteButton = document.querySelector('.item-text__delete');
let refreshButton = document.querySelector('.item-text__refresh');
let updateListItem;
// EVENT LISTENERS
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (submitButton.value == "Submit") {
    addToList();
  }
  if (submitButton.value == "Update") {
    updateLi();
  }
  clearTextBox();
})


// Functions
function createLi (inputItem) {
  let list = document.querySelector('.ordered-list');
  let listItem = document.createElement('li');
  listItem.className="ordered-list-items";

  let textItem = document.createElement('div');
  textItem.className="item-text";
  textItem.innerHTML = inputItem;

  let itemButtons = document.createElement('div');
  itemButtons.className="item-buttons";

  let refreshButtonHTML = document.createElement('input');
  refreshButtonHTML.value="(ヘ･_･)ヘ┳━┳";
  refreshButtonHTML.className="item-text__refresh";
  refreshButtonHTML.type="button";

  refreshButtonHTML.addEventListener("click",() => {
    submitButton.value="Update";
    updateText = textItem.innerHTML;
    document.querySelector(".input-box").value = updateText;
    updateListItem = textItem;
  })

  let deleteButtonHTML = document.createElement('input');
  deleteButtonHTML.value="(╯°□°）╯︵ ┻━┻";
  deleteButtonHTML.className="item-text__delete";
  deleteButtonHTML.type="button";

  deleteButtonHTML.addEventListener("click", () => {
    listItem.remove();
  })

  itemButtons.append(refreshButtonHTML);
  itemButtons.append(deleteButtonHTML);
  listItem.append(textItem)
  listItem.append(itemButtons);
  list.append(listItem);

}



function addToList () {
  let todoItem = document.querySelector(".input-box").value;
  createLi (todoItem);
}

let clearTextBox = () => {
  document.querySelector(".input-box").value="";
}

let updateLi = () => {
  let updateValue = document.querySelector(".input-box").value;
  updateListItem.innerHTML = updateValue;
  submitButton.value="Submit";

}