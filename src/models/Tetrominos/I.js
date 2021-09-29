import Tetromino from './Tetromino';

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
