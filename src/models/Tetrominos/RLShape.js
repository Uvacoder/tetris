import Tetromino from './Tetromino';

class RLShape extends Tetromino {
  constructor() {
    super();
    this.color = 'orange';
    this.elements = [
      [1, 0],
      [1, 0],
      [1, 1]
    ];
  }
}

export default RLShape;