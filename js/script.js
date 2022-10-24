const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOverPopUp = document.querySelector('.game-over');
const menuGamePopUp = document.querySelector('.menu-game');
const btnPlayAgain = document.querySelector('.play-again');
const btnStart = document.querySelector('.start');
const btnMainMenu = document.querySelector('.main-menu');
let loop = setInterval(gameFlow, 10);

function gameFlow() {
  const pipePosition = pipe.offsetLeft;

  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');

  const cloudPosition = clouds.offsetLeft;

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {
    pipe.classList.remove('pipe-animation');
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clouds.classList.remove('clouds-animation');
    clouds.style.left = `${cloudPosition}px`;
    gameOverBoard();
    clearInterval(loop);
  }
}

function gameOverBoard() {
  gameOverPopUp.style.display = 'flex';
}

function startGameHandler() {
  pipe.classList.add('pipe-animation');
  pipe.style.left = null;

  mario.removeAttribute('style');
  mario.src = './img/mario.gif';

  clouds.classList.add('clouds-animation');
  clouds.removeAttribute('style');

  menuGamePopUp.style.display = 'none';
  gameOverPopUp.style.display = 'none';

  loop = setInterval(gameFlow, 1000);
}

//Function to make Mario jump
function jumpHandler() {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

function playAgainHandler() {
  gameOverPopUp.style.display = 'none';
  startGameHandler();
}

function showMenuHandler() {
  menuGamePopUp.style.display = 'flex';
}

document.addEventListener('keydown', jumpHandler);
btnPlayAgain.addEventListener('click', playAgainHandler);
btnStart.addEventListener('click', startGameHandler);
btnMainMenu.addEventListener('click', showMenuHandler);
