var canvas, ctx;

const SNAKE_COLOR = 'limegreen';
const SNAKE_BORDER_COLOR = 'darkgreen';
const APPLE_COLOR = 'red';
const BONUS_APPLE_COLOR = 'purple';
const SIZE_20 = 20;
const BONUS = 5; //will be used for bonus points

var snakeHeadPos = []; //0 - 19
var applePos = [];

function loadCanvas() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  snakeHeadPos.push({ x: 1, y: 0 });
  applePos.push({ x: 5, y: 3 })

  start();
}

function start() {
  //set speed
  setInterval(gameLoop, 100);
}

function gameLoop() {
  //paint canvas
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //Apple
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'red';
  ctx.shadowColor = 'red';
  ctx.shadowBlur = 40;
  ctx.fillRect(applePos[0].x * SIZE_20, applePos[0].y * SIZE_20, SIZE_20, SIZE_20);
  ctx.strokeRect(applePos[0].x * SIZE_20, applePos[0].y * SIZE_20, SIZE_20, SIZE_20);

  //Snake
  ctx.fillStyle = 'white';
  ctx.shadowColor = 'limegreen';
  ctx.shadowBlur = 40;
  ctx.fillRect(snakeHeadPos[0].x * SIZE_20, snakeHeadPos[0].y * SIZE_20, SIZE_20, SIZE_20)
}

//Function for when snake touch itself or touch the wall.
function gameOver() {

}