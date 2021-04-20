import Tetromino from './Tetromino';

class LShape extends Tetromino {
  constructor() {
    super();
    this.color = 'blue';
    this.elements = [
      [1, 0],
      [1, 0],
      [1, 0],
      [1, 1],
    ];
  }
}

export default LShape;
