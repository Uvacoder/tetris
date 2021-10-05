import Tetromino from './Tetromino';

class LineShape extends Tetromino {
  constructor() {
    super();
    this.color = 'skyblue';
    this.elements = [[1], [1], [1], [1]];
  }
}

export default LineShape;
