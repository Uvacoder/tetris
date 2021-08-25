import Matrix from '../models/Matrix';
import LShape from '../models/Tetrominos/LShape';
import RLShape from '../models/Tetrominos/RLShape';
import LineShape from '../models/Tetrominos/LineShape';
import SquareShape from '../models/Tetrominos/SquareShape';
import SShape from '../models/Tetrominos/SShape';
import RSShape from '../models/Tetrominos/RSShape';
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
    //const pieces = [LShape, RLShape, LineShape, SquareShape, SShape, RSShape, TShape];
    const pieces = [RLShape];
    const random = Math.floor(Math.random() * 7);

    return new pieces[0]();
  }

  move(side) {
    if (this.currentTetromino && this.matrix.isCollidedWithSideBorder(this.currentTetromino) !== side) {
      this.matrix.removeTetromino(this.currentTetromino);
      this.currentTetromino.move(side);
      this.matrix.update(this.currentTetromino);
      this.matrixView.render(this.matrix);
    }
  }

  rotate() {
    this.matrix.removeTetromino(this.currentTetromino);
    this.currentTetromino.rotate();
    this.matrix.update(this.currentTetromino);

    this.matrixView.render(this.matrix);
  }
}

export default Game;
