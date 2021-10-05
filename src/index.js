import Game from './controllers/Game';

const game = new Game();
// game.main();
setInterval(game.main, 500);
document.addEventListener('onkeydown', (event) => {
  if (event.key === '4') {
    game.move('left');
  }
  if (event.key === '6') {
    game.move('right');
  }
});
