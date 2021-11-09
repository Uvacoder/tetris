import Tetromino from './Tetromino.js';

class I extends Tetromino {
  constructor() {
    const color = 'skyblue';
    const variants = [
      [1, 1, 1, 1],
      [[1], [1], [1], [1]],
    ];
    super(color, variants);
  }
}

export default I;
