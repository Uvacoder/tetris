import Matrix from '../models/Matrix';
import L from '../models/Tetrominos/L';
import J from '../models/Tetrominos/J';
import I from '../models/Tetrominos/I';
import O from '../models/Tetrominos/O';
import S from '../models/Tetrominos/S';
import Z from '../models/Tetrominos/Z';
import T from '../models/Tetrominos/T';
import MatrixView from '../views/MatrixView';

class Game {
  constructor() {
    this.matrix = new Matrix();
    this.matrixView = new MatrixView();
    this.drop = this.drop.bind(this);

    this.spawnNewTetromino();

    this.matrixView.render(this.matrix);
  }

  drop() {
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
    const pieces = [L, J, I, O, S, Z, T];
    const pieceIndex = Math.floor(Math.random() * pieces.length);

    return new pieces[pieceIndex]();
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
