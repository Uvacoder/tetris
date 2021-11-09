import Tetromino from './Tetromino.js';

class L extends Tetromino {
  constructor() {
    const color = 'blue';
    const variants = [
      [
        [0, 0, 1],
        [1, 1, 1],
      ],
      [
        [1, 0],
        [1, 0],
        [1, 1],
      ],
      [
        [1, 1, 1],
        [1, 0, 0],
      ],
      [
        [1, 1],
        [0, 1],
        [0, 1],
      ],
    ];
    super(color, variants);
  }
}

export default L;
