import Tetromino from './Tetromino.js';

class RLShape extends Tetromino {
  constructor() {
    super();
    this.color = 'orange';
    this.elements = [
      [0, 1],
      [0, 1],
      [1, 1],
    ];
  }
}

export default RLShape;
