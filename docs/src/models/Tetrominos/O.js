import Tetromino from './Tetromino.js';

class O extends Tetromino {
  constructor() {
    const color = 'yellow';
    const variants = [
      [1, 1],
      [1, 1],
    ];
    super(color, variants);
  }
}

export default O;
