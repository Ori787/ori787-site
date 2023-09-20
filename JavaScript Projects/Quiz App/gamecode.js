import { Question } from "./questionclass.js";
let correctAnswersCounter = 0;

let questionArr = [
  new Question(
    "The capital of Lithuania is:",
    "Vilnius",
    "Madeira",
    "Jurmala",
    "Riga",
    "Innsbruck",
    /*Right Answer*/ "Vilnius"
  ),
  new Question(
    "Which continent is Zimbabwe in?",
    "Oceania",
    "America",
    "Africa",
    "Europe",
    "Asia",
    /*Right Answer*/ "Africa"
  ),
  new Question(
    /*Question*/ "Which state is Los Angeles in?",
    "state of Israel",
    "America",
    "Texas",
    "California",
    "Florida",
    /*Right Answer*/ "California"
  ),
  new Question(
    "The capital of France is:",
    "Madrid",
    "Lisbon",
    "Berlin",
    "Rome",
    "Paris",
    "Paris"
  ),

  new Question(
    "Which river is the longest in the world?",
    "Nile",
    "Amazon",
    "Mississippi",
    "Yangtze",
    "Danube",
    "Nile"
  ),

  new Question(
    "What is the largest desert in the world?",
    "Sahara",
    "Arctic",
    "Gobi",
    "Kalahari",
    "Atacama",
    "Sahara"
  ),

  new Question(
    "Which country is known as the Land of the Rising Sun?",
    "China",
    "India",
    "Japan",
    "Australia",
    "Russia",
    "Japan"
  ),

  new Question(
    "Which mountain range spans the border between Europe and Asia?",
    "Himalayas",
    "Andes",
    "Rocky Mountains",
    "Alps",
    "Ural Mountains",
    "Ural Mountains"
  ),

  new Question(
    "What is the largest country by land area in the world?",
    "United States",
    "Canada",
    "Russia",
    "China",
    "Brazil",
    "Russia"
  ),

  new Question(
    "Which ocean is the largest on Earth?",
    "Atlantic Ocean",
    "Indian Ocean",
    "Southern Ocean",
    "Arctic Ocean",
    "Pacific Ocean",
    "Pacific Ocean"
  ),

  new Question(
    "Which African country is known as the 'Rainbow Nation'?",
    "Nigeria",
    "Ghana",
    "South Africa",
    "Kenya",
    "Egypt",
    "South Africa"
  ),

  new Question(
    "In which country would you find the city of Marrakech?",
    "Saudi Arabia",
    "Morocco",
    "Egypt",
    "Tunisia",
    "Algeria",
    "Morocco"
  ),
  new Question(
    "Which European city is famous for its canals and gondolas?",
    "Barcelona",
    "Venice",
    "Amsterdam",
    "Prague",
    "Vienna",
    "Venice"
  ),

  new Question(
    "What is the largest freshwater lake by surface area in the world?",
    "Lake Victoria",
    "Lake Baikal",
    "Lake Superior",
    "Great Bear Lake",
    "Caspian Sea",
    "Lake Superior"
  ),

  new Question(
    "Which country is known as the 'Land of the Midnight Sun'?",
    "Norway",
    "Canada",
    "Russia",
    "Sweden",
    "Finland",
    "Norway"
  ),

  new Question(
    "In which country is the Great Wall located?",
    "Japan",
    "India",
    "China",
    "South Korea",
    "Vietnam",
    "China"
  ),

  new Question(
    "What is the smallest continent in the world?",
    "Africa",
    "Asia",
    "North America",
    "Australia",
    "Europe",
    "Australia"
  ),

  new Question(
    "Which country is known as the 'Land of Fire and Ice'?",
    "Iceland",
    "Greenland",
    "Norway",
    "Canada",
    "Sweden",
    "Iceland"
  ),

  new Question(
    "What is the capital of Brazil?",
    "Buenos Aires",
    "Rio de Janeiro",
    "Sao Paulo",
    "Brasilia",
    "Bogota",
    "Brasilia"
  ),

  new Question(
    "Which African river is the longest in the world?",
    "Nile",
    "Congo",
    "Niger",
    "Zambezi",
    "Orange",
    "Nile"
  ),

  new Question(
    "Which country is known as the 'Land of the Rising Sun'?",
    "China",
    "India",
    "Japan",
    "Australia",
    "Russia",
    "Japan"
  ),

  new Question(
    "In which country is the city of Petra, famous for its rock-cut architecture, located?",
    "Egypt",
    "Greece",
    "Turkey",
    "Jordan",
    "Lebanon",
    "Jordan"
  ),

  new Question(
    "What is the highest mountain in North America?",
    "Mount Kilimanjaro",
    "Mount Everest",
    "Mount McKinley",
    "Mount Fuji",
    "Mount St. Helens",
    "Mount McKinley"
  ),

  new Question(
    "Which country is known as the 'Land of the Rising Sun'?",
    "China",
    "India",
    "Japan",
    "Australia",
    "Russia",
    "Japan"
  ),

  new Question(
    "What is the largest desert in the world?",
    "Sahara",
    "Arctic",
    "Gobi",
    "Kalahari",
    "Atacama",
    "Sahara"
  ),
];

const setQuestion = (idx) => {
  document.querySelector("#caption").innerHTML = questionArr[idx].question;
  document.querySelector(".a1").querySelector(".mytext").innerHTML =
    questionArr[idx].a1;
  document.querySelector(".a2").querySelector(".mytext").innerHTML =
    questionArr[idx].a2;
  document.querySelector(".a3").querySelector(".mytext").innerHTML =
    questionArr[idx].a3;
  document.querySelector(".a4").querySelector(".mytext").innerHTML =
    questionArr[idx].a4;
  document.querySelector(".a5").querySelector(".mytext").innerHTML =
    questionArr[idx].a5;
};

setQuestion(0);

const questionCounter = () => {
  let myCounter = document.querySelector("#counterplace");
  let currentQuestion = 2;
  document.querySelector("#nextquestion").addEventListener("click", () => {
    if (currentQuestion <= 25) {
      myCounter.innerHTML = `${currentQuestion}/25`;
      currentQuestion++;
    }
  });
};
questionCounter();

const checkifRight = () => {
  const buttons = document
    .querySelector("#playground")
    .querySelectorAll(".mybtn");

  let currentQuestionIndex = 0;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedAnswer =
        btn.parentElement.querySelector(".mytext").textContent;
      const correctAnswer = questionArr[currentQuestionIndex].rightAnswer;
      if (selectedAnswer == correctAnswer) {
        alert("You're Right!");
        correctAnswersCounter++;
      } else {
        alert("You're False!");
      }
      currentQuestionIndex++;
    });
  });
  document.querySelector("#nextquestion").addEventListener("click", () => {
    if (currentQuestionIndex < questionArr.length) {
      setQuestion(currentQuestionIndex);
    } else {
      alert(`You Scored: ${correctAnswersCounter}/${questionArr.length}!`);
    }
  });
};
checkifRight();

const playAgain = () => {
  document.querySelector("#playagainbtn").addEventListener("click", () => {
    location.reload();
  });
};

playAgain();
