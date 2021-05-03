import Tetromino from './Tetromino';

class TShape extends Tetromino {
  constructor() {
    super();
    this.color = 'pink';
    this.elements = [
      [0, 1],
      [1, 1],
      [0, 1]
    ];
  }
}

export default TShape;