const canvas = document.querySelector('canvas');
canvas.style.border = "2px solid black";
const ctx = canvas.getContext('2d');
const background = new Image ();
background.src = '/images/road.png';
const startScreen = document.querySelector('.game-intro');
const car = new Image ();
car.src = '/images/car.png';





window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    startScreen.style.display = 'none';
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car, 200, 500, 95, 100);
  }
};
