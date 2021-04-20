import Game from './controllers/Game';

const game = new Game();
// game.main();
setInterval(game.main, 500);
