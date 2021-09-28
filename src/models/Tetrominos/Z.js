import Tetromino from './Tetromino';

class Z extends Tetromino {
  constructor() {
    const color = 'red';
    const variants = [
      [
        [1, 1, 0],
        [0, 1, 1],
      ],
      [
        [0, 1],
        [1, 1],
        [1, 0],
      ],
    ];
    super(color, variants);
  }
}

export default Z;
