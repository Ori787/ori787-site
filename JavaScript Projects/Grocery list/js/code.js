let favBtn = document.querySelector(".starimg");

let addBtn = document.querySelector(".plusimg");

let myInput = document.querySelector("#myInput");

let container = document.querySelector(".container");

let favDiv = document.querySelector(".fav-list");

let check = document.querySelector(".checkimg");

let question = document.querySelector(".question");

const listArr = [];

const addToArray = () => {
  addBtn.addEventListener("click", (e) => {
    const inputValue = myInput.value.trim();
    if (inputValue !== "") {
      listArr.push(inputValue);
    }
    console.log(listArr);
  });
};

addToArray();

const addToList = () => {
  addBtn.addEventListener("click", () => {
    let newListColumn = document.createElement("li");
    container.appendChild(newListColumn);
    const inputValue = myInput.value.trim();
    newListColumn.textContent = inputValue;
    let arrToString = JSON.stringify(listArr);
    localStorage.setItem("Current Array", arrToString);
  });
};

addToList();

const appendInFavDiv = () => {
  check.addEventListener("click", () => {
    let myFavList = localStorage.getItem("Current Array");
    if (myFavList) {
      const parsedlist = JSON.parse(myFavList);

      favDiv.innerHTML = "";

      parsedlist.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        favDiv.appendChild(listItem);
      });
    }
  });
};

appendInFavDiv();

const showFavList = () => {
  favBtn.addEventListener("click", () => {
    favDiv.style.display = "block";
    container.style.display = "none";
    question.style.display = "none";
  });
};

showFavList();
