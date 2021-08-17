import Tetromino from './Tetromino';

class SShape extends Tetromino {
  constructor() {
    super();
    this.color = 'red';
    this.elements = [
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
  }
}

export default SShape;
