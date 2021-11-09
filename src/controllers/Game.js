import Matrix from '../models/Matrix';
import L from '../models/Tetrominos/L';
import J from '../models/Tetrominos/J';
import I from '../models/Tetrominos/I';
import O from '../models/Tetrominos/O';
import S from '../models/Tetrominos/S';
import Z from '../models/Tetrominos/Z';
import T from '../models/Tetrominos/T';
import MatrixView from '../views/MatrixView';
import ScoreView from '../views/ScoreView';

class Game {
  constructor() {
    this.matrix = new Matrix();
    this.matrixView = new MatrixView();
    this.scoreView = new ScoreView();
    this.drop = this.drop.bind(this);

    this.spawnNewTetromino();

    this.matrixView.render(this.matrix);

    this.score = 0;
  }

  drop() {
    if (this.currentTetromino == null) {
      this.spawnNewTetromino();
    }
    if (this.currentTetromino) {
      this.matrix.removeTetromino(this.currentTetromino);
      this.currentTetromino.drop();
      this.matrix.update(this.currentTetromino);
      if (this.matrix.isCollided(this.currentTetromino)) {
        this.currentTetromino = null;
        const fullRows = this.matrix.checkFullLine();
        this.matrix.removeFullRows(fullRows);
        this.updateScore(fullRows.length);
      }
    }

    this.matrixView.render(this.matrix);
  }

  spawnNewTetromino() {
    this.currentTetromino = this.getRandomTetromino();
    this.matrix.update(this.currentTetromino);
  }

  getRandomTetromino() {
    //const pieces = [L, J, I, O, S, Z, T];
    const pieces = [O];
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

  updateScore(rowsCompleted) {
    this.score += rowsCompleted * 10;
    this.scoreView.update(this.score);
  }
}

export default Game;
