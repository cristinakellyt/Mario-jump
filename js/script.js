const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOver = document.querySelector('.game-over');
const btnPlayAgain = document.querySelector('.play-again');

function jump() {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(gameFlow, 10);

function gameFlow() {
  const pipePosition = pipe.offsetLeft;

  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace('px', '');

  const cloudPosition = clouds.offsetLeft;

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clouds.style.animation = 'none';
    clouds.style.left = `${cloudPosition}px`;
    gameOverBoard();
    clearInterval(loop);
  }
}

function startGameAgain() {
  pipe.style.animation = 'pipeAnimation 2s infinite linear';
  // pipe.style.left = `${pipePosition}px`;

  // mario.style.animation = 'none';
  // mario.style.bottom = `${marioPosition}px`;

  // mario.src = './img/mario.gif';
  //mario.style.width = '150px';
  // mario.style.marginLeft = '0';

  // clouds.style.animation = 'cloudsAnimation 20s infinite linear';
  // clouds.style.left = `${cloudPosition}px`;
}

function gameOverBoard() {
  gameOver.style.display = 'flex';
}

function playAgain() {
  gameOver.style.display = 'none';
  startGameAgain();
}

document.addEventListener('keydown', jump);
btnPlayAgain.addEventListener('click', playAgain);
