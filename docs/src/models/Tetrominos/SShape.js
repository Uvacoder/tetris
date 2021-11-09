import Tetromino from './Tetromino.js';

class SShape extends Tetromino {
  constructor() {
    super();
    this.color = 'red';
    this.elements = [
      [0, 1],
      [1, 1],
      [1, 0],
    ];
  }
}

export default SShape;
