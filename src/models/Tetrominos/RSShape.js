import Tetromino from './Tetromino';

class RSShape extends Tetromino {
  constructor() {
    super();
    this.color = 'green';
    this.elements = [
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
  }
}

export default RSShape;
