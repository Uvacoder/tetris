import Tetromino from './Tetromino';

class S extends Tetromino {
  constructor() {
    const color = 'green';
    const variants = [
      [
        [0, 1, 1],
        [1, 1, 0],
      ],
      [
        [1, 0],
        [1, 1],
        [0, 1],
      ],
    ];
    super(color, variants);
  }
}

export default S;
