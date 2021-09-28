import Tetromino from './Tetromino';

class J extends Tetromino {
  constructor() {
    const color = 'orange';
    const variants = [
      [
        [1, 0, 0],
        [1, 1, 1],
      ],
      [
        [1, 1],
        [1, 0],
        [1, 0],
      ],
      [
        [1, 1, 1],
        [0, 0, 1],
      ],
      [
        [0, 1],
        [0, 1],
        [1, 1],
      ],
    ];
    super(color, variants);
  }
}

export default J;
