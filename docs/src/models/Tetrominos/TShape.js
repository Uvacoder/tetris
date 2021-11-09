import Tetromino from './Tetromino.js';

class TShape extends Tetromino {
  constructor() {
    super();
    this.color = 'pink';
    this.elements = [
      [1, 0],
      [1, 1],
      [1, 0],
    ];
  }
}

export default TShape;
