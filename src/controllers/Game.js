import Matrix from '../models/Matrix';
import LShape from '../models/Tetrominos/LShape';
import MatrixView from '../views/MatrixView';

class Game {
  constructor() {
    this.matrix = new Matrix();
    this.matrixView = new MatrixView();
    this.main = this.main.bind(this);
    this.spawnNewTetromino();

    this.matrixView.render(this.matrix);
  }

  main() {
    //TODO spawn new tetromino if currentTetromino is null
      if (this.currentTetromino == null) {
          this.spawnNewTetromino();
      }
    if (this.currentTetromino) {
      this.matrix.removeTetromino(this.currentTetromino);
      this.currentTetromino.drop();
      this.matrix.update(this.currentTetromino);
      this.matrix.isCollided(this.currentTetromino) && (this.currentTetromino = null);
    }

    this.matrixView.render(this.matrix);
  }

  spawnNewTetromino() {
    this.currentTetromino = this.getRandomTetromino();
    this.matrix.update(this.currentTetromino);
  }

  getRandomTetromino() {
    // TODO: add new classes for all tetromino shapes and create algorithm that will return tetromino of random type

    return new LShape();
  }
}

export default Game;
