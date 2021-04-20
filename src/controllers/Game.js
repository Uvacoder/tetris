import Matrix from '../models/Matrix';
import LShape from '../models/Tetrominos/LShape';
import MatrixView from '../views/MatrixView';

class Game {
  constructor() {
    this.matrix = new Matrix();
    this.matrixView = new MatrixView();
    this.currentPiece = new LShape();
    this.main = this.main.bind(this);

    this.matrix.addTetromino(this.currentPiece);
    this.matrixView.render(this.matrix);
  }

  main() {
    if (this.currentPiece) {
      this.matrix.removeTetromino(this.currentPiece);
      this.currentPiece.drop();
      this.matrix.update(this.currentPiece);
      this.matrix.isCollided(this.currentPiece) && (this.currentPiece = null);
    }

    this.matrixView.render(this.matrix);
  }
}

export default Game;
