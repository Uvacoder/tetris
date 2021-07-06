import Game from './controllers/Game';

const game = new Game();
// game.main();
setInterval(game.main, 500);
document.addEventListener('keypress', (event) => {
  if (event.key === '4') {
    game.moveLeft();
  }
  if (event.key === '6') {
    game.moveRight();
  }
});
