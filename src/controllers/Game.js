import Matrix from '../models/Matrix';
import LShape from '../models/Tetrominos/LShape';
import LineShape from '../models/Tetrominos/LineShape';
import RLShape from '../models/Tetrominos/RLShape';
import RSShape from '../models/Tetrominos/RSShape';
import SquareShape from '../models/Tetrominos/SquareShape';
import SShape from '../models/Tetrominos/SShape';
import TShape from '../models/Tetrominos/TShape';
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
    const pieces = [LShape, RLShape, LineShape, SquareShape, SShape, RSShape, TShape];

    let r = Math.floor(Math.random() * 7); // 0 -> 6

    return new pieces[r]();
  }

  move(side) {
    if (this.currentTetromino && this.matrix.isCollidedWithSideBorder(this.currentTetromino) !== side) {
      this.matrix.removeTetromino(this.currentTetromino);
      this.currentTetromino.move(side);
    }
  }
}

export default Game;
