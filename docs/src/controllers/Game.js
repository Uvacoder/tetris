import Matrix from '../models/Matrix.js';
import L from '../models/Tetrominos/L.js';
import J from '../models/Tetrominos/J.js';
import I from '../models/Tetrominos/I.js';
import O from '../models/Tetrominos/O.js';
import S from '../models/Tetrominos/S.js';
import Z from '../models/Tetrominos/Z.js';
import T from '../models/Tetrominos/T.js';
import MatrixView from '../views/MatrixView.js';

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
    const pieces = [L, J, I, O, S, Z, T];
    const pieceIndex = Math.floor(Math.random() * 7);

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
