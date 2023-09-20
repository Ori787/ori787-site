// Game Variables
const playBoard = document.querySelector(".gameboard");
const gridSize = 30;
const snakeSpeed = 150;
const initialSnakeLength = 5;
const playAgainBtn = document.querySelector(".playagn");

// Initial snake position and direction
const snake = [{ x: 10, y: 10 }];
let dx = 0;
let dy = 0;
let foodX, foodY; // Declare foodX and foodY here
let score = 0;

// Function to generate random food position on the grid
const generateFood = () => {
  foodX = Math.floor(Math.random() * gridSize);
  foodY = Math.floor(Math.random() * gridSize);
};

// Function to check if the snake eats the food
const feedingCheck = () => {
  if (snake[0].x === foodX && snake[0].y === foodY) {
    score += 10;
    generateFood();
  } else {
    snake.pop();
  }
};

// Function to update the game board
const updateGameboard = () => {
  // Clear the game board
  playBoard.innerHTML = "";
  // Draw the snake
  snake.forEach((segment, index) => {
    const cellIndex = segment.x + segment.y * gridSize;
    const cell = document.createElement("div");
    cell.classList.add(index === 0 ? "snakeHead" : "snakeBody");
    cell.style.gridRowStart = segment.y + 1;
    cell.style.gridColumnStart = segment.x + 1;
    playBoard.appendChild(cell);
  });
  // Draw the food
  const foodCell = document.createElement("div");
  foodCell.classList.add("food");
  foodCell.style.gridRowStart = foodY + 1;
  foodCell.style.gridColumnStart = foodX + 1;
  playBoard.appendChild(foodCell);
};

// Function to move the snake
const moveSnake = () => {
  // Create a new head for the snake based on the current direction
  const newHead = { x: snake[0].x + dx, y: snake[0].y + dy };

  // Check for self-collision
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === newHead.x && snake[i].y === newHead.y) {
      // Game over
      clearInterval(gameInterval);
      alert("Game over! Your score: " + score);
      return;
    }
  }

  snake.unshift(newHead);
  // Check if the snake ate the food
  feedingCheck();
  updateGameboard();
};

// Event listener for key presses
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (dy !== 1) {
        dx = 0;
        dy = -1;
      }
      break;
    case "ArrowDown":
      if (dy !== -1) {
        dx = 0;
        dy = 1;
      }
      break;
    case "ArrowLeft":
      if (dx !== 1) {
        dx = -1;
        dy = 0;
      }
      break;
    case "ArrowRight":
      if (dx !== -1) {
        dx = 1;
        dy = 0;
      }
      break;
  }
});

// Initialize the game
generateFood();
updateGameboard();

// Main game loop
const gameInterval = setInterval(() => {
  moveSnake();
}, snakeSpeed);

const playAgain = () => {
  playAgainBtn.addEventListener("click", () => {
    location.reload();
  });
};

playAgain();
