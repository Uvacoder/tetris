import Grid from '../utils/Grid';

class MatrixView {
  constructor() {
    this.element = document.querySelector('#game');
    const gameCells = new Grid(20, 10);

    gameCells.forEach((cell, x, y) => {
      const gameCell = document.createElement('div');
      gameCell.classList.add('game-cell');
      gameCell.dataset.row = x;
      gameCell.dataset.column = y;
      this.element.appendChild(gameCell);
    });
  }

  render(matrix) {
    matrix.forEach((cell, x, y) => {
      const element = document.querySelector(`.game-cell[data-row="${x}"][data-column="${y}"]`);
      if (!element) {
        debugger;
      }
      element.style.backgroundColor = cell ? cell : 'black';
    });
  }
}

export default MatrixView;
