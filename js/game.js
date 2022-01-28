const SNAKE_COLOR = 'limegreen';
const SNAKE_BORDER_COLOR = 'darkgreen';
const APPLE_COLOR = 'red';
const BONUS_APPLE_COLOR = 'purple';
const SIZE_20 = 20;
const BONUS = 5; //will be used for bonus points

var canvas;
var ctx;
var gameControl;
var snakeHeadPosX; //0 - 19
var snakeHeadPosY; //0 - 19
var trail = [];
var size; // Start at 3
var applePosX;
var applePosY;

// (X: 0, Y: 1) = Up, (X: 0, Y: -1) = Down, (X: 1, Y: 0) = Right, (X: -1, Y: 0) = Left 
var nextMoveX;
var nextMoveY;

function loadCanvas() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  start();
}

function start() {
  //set all deafault values;
  snakeHeadPosX = 1;
  snakeHeadPosY = 0;
  nextMoveX = 1;
  nextMoveY = 0;
  applePosX = 5;
  applePosY = 3;
  size = 3;
  //Start game and set speed
  gameControl = setInterval(gameLoop, 100);
}

function gameLoop() {
  snakeHeadPosX += nextMoveX;
  snakeHeadPosY += nextMoveY;

  //paint canvas
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  appleHandler();
  snakeHandler();

  trail.push({ x: snakeHeadPosX, y: snakeHeadPosY });
  while (trail.length > size) {
    trail.shift();
  }
}

//Handling of the apple
function appleHandler() {
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'red';
  ctx.shadowColor = 'red';
  ctx.shadowBlur = 40;
  ctx.fillRect(applePosX * SIZE_20, applePosY * SIZE_20, SIZE_20, SIZE_20);
  ctx.strokeRect(applePosX * SIZE_20, applePosY * SIZE_20, SIZE_20, SIZE_20);
}

//Handling of the snake
function snakeHandler() {
  for (var a = 0; a < trail.length; a++) {
    ctx.fillStyle = 'white';
    ctx.shadowColor = 'limegreen';
    ctx.shadowBlur = 40;
    ctx.fillRect(trail[a].x * SIZE_20, trail[a].y * SIZE_20, SIZE_20, SIZE_20)
  }
}

//Function for when snake touch itself or touch the wall.
function gameOver() {
  ctx.shadowColor = 'red';
  ctx.shadowBlur = 20;
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '60px Georgia';
  ctx.fillText('GAME OVER', 20, 200);
  ctx.fillText('SCORE: ' + size, 20, 260);
  clearInterval(control);
}

//on key pressed
document.onkeydown = function keyPressed(e) {
  switch (e.keyCode) {
    case 37:
      nextMoveX = -1;
      nextMoveY = 0;
      break;
    case 38:
      nextMoveX = 0;
      nextMoveY = -1;
      break;
    case 39:
      nextMoveX = 1;
      nextMoveY = 0;
      break;
    case 40:
      nextMoveX = 0;
      nextMoveY = 1;
      break;
  }
}

// Divided the gameLoop into more function for easier navigation. 
// It is now possible to move around the snake on the canvas with up, down, left and right key