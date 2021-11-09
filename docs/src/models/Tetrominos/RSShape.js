import Tetromino from './Tetromino.js';

class RSShape extends Tetromino {
  constructor() {
    super();
    this.color = 'green';
    this.elements = [
      [1, 0],
      [1, 1],
      [0, 1],
    ];
  }
}

export default RSShape;
