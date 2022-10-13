// Variables and constants needed for game design
const canvas = document.querySelector('canvas');
canvas.style.border = "2px solid black";
const ctx = canvas.getContext('2d');
const background = new Image ();
background.src = '/images/road.png';
const startScreen = document.querySelector('.game-intro');
const car = new Image ();
car.src = '/images/car.png';


//Variables and constants needed for game performance
let isGameOver = false;
let gameId = 0;
let isCarGoingLeft = false;
let isCarGoingRight = false;
let carSpeed = 3;
let carX = canvas.width - 300;
let carY = canvas.height - 200;
let carWidth = 95;
let carHeight = 100;
let obstacleX = Math.floor(Math.random() * ((canvas.width - 40 - 200) - 40) + 40);
let obstacleY = 0;
let obstacleWidth = Math.floor(Math.random() * (200 - 70) + 70);
let obstacleHeight = 30;


//Functions needed for game
const carMove = () => {
  if (isCarGoingLeft) {
    if (carX > 35) {
      carX -= carSpeed;
    }
  } else if (isCarGoingRight) {
    if (carX < canvas.width - carWidth - 35) {
      carX += carSpeed;
    }
  }
}

const drawObstacle = () => {
  ctx.beginPath();
  ctx.fillStyle = 'brown';
  ctx.fillRect(obstacleX, obstacleY, obstacleWidth, obstacleHeight);
  ctx.closePath();
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    startScreen.style.display = 'none';
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car, carX, carY, carWidth, carHeight);

    carMove();
    drawObstacle();
    if (isGameOver) {
      cancelAnimationFrame(gameId);
    } else {
      gameId = requestAnimationFrame(startGame);
    }
    if (gameId === 1000) {
      isGameOver = true;
    }
  }
  document.addEventListener("keydown", event => {
    if (event.code === "ArrowLeft") {
      isCarGoingLeft = true;
    }
    if (event.code === "ArrowRight") {
      isCarGoingRight = true;
    }
  });

  document.addEventListener("keyup", event => {
    isCarGoingLeft = false;
    isCarGoingRight = false;
  });
};
