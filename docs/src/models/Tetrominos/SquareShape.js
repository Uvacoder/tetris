import Tetromino from './Tetromino.js';

class SquareShape extends Tetromino {
  constructor() {
    super();
    this.color = 'yellow';
    this.elements = [
      [1, 1],
      [1, 1],
    ];
  }
}

export default SquareShape;
