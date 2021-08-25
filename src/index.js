import Game from './controllers/Game';

const game = new Game();
// game.main();
setInterval(game.main, 500);
document.addEventListener('keypress', (event) => {
  if (event.key === '4' || event.key === 'ArrowLeft') {
    game.move('left');
  }
  if (event.key === '6' || event.key === 'ArrowRight') {
    game.move('right');
  }
  if (event.key === '8' || event.key === 'ArrowUp') {
    game.rotate();
  }
});
