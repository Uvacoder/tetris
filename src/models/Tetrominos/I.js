import Tetromino from './Tetromino';

class I extends Tetromino {
  constructor() {
    const color = 'skyblue';
    const variants = [
      [
        [1, 0],
        [1, 0],
        [1, 0],
        [1, 0],
      ],
      [
        [1, 1, 1, 1],
        [0, 0, 0, 0],
      ],
    ];
    super(color, variants);
  }
}

export default I;
