import Tetromino from './Tetromino';

class T extends Tetromino {
  constructor() {
    const color = 'pink';
    const variants = [
      [
        [0, 1, 0],
        [1, 1, 1],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 0],
      ],
      [
        [1, 1, 1],
        [0, 1, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [0, 1],
      ],
    ];
    super(color, variants);
  }
}

export default T;
