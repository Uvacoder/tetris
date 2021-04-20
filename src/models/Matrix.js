import Grid from '../utils/Grid';

class Matrix extends Grid {
  constructor(height = 20, width = 10) {
    super(height, width);
    this.width = width;
    this.height = height;
  }

  addTetromino(tetromino) {
    tetromino.forEach((block, x, y) => {
      if (block) this.elements[tetromino.y + x][tetromino.x + y] = tetromino.color;
    });
  }

  removeTetromino(tetromino) {
    tetromino.forEach((block, x, y) => {
      if (block) this.elements[tetromino.y + x][tetromino.x + y] = null;
    });
  }

  update(tetromino) {
    tetromino.forEach((block, i, j) => {
      const newX = tetromino.x + j;
      const newY = tetromino.y + i;
      if (block) this.elements[newY][newX] = tetromino.color;
    });
  }

  isCollided(tetromino) {
    let isCollided = false;

    tetromino.forEach((block, i) => {
      if (tetromino.y + i >= this.height - 1) {
        isCollided = true;
      }
    });

    return isCollided;
  }
}

export default Matrix;
