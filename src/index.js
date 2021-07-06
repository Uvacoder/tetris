import Game from './controllers/Game';
import { Left, Right } from './models/side/Side';

const game = new Game();
// game.main();
setInterval(game.main, 500);
document.addEventListener('keypress', (event) => {
  if (event.key === '4') {
    game.move(new Left());
  }
  if (event.key === '6') {
    game.move(new Right());
  }
});
