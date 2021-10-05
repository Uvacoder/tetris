import Grid from '../utils/Grid';

class Matrix extends Grid {
  constructor(width = 10, height = 20) {
    super(height, width);
    this.width = width;
    this.height = height;
  }

  removeTetromino(tetromino) {
    tetromino.forEach((block, i, j) => {
      if (block) this.elements[tetromino.y + i][tetromino.x + j] = null;
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

    tetromino.forEach((block, i, j) => {
      const isThisElementNotEmpty = Boolean(block);
      const isLastElement = i === tetromino.elements.length - 1;
      const isLastElementInColumn = tetromino.elements
        .filter((_, rowIndex) => rowIndex !== i)
        .every((row) => row[j] === 0);

      const shouldCheckCollision = isThisElementNotEmpty && (isLastElement || isLastElementInColumn);

      const elementBelowX = tetromino.x + j;
      const elementBelowY = tetromino.y + i + 1;
      const isAnyElementBelow = this.elements[elementBelowY] && this.elements[elementBelowY][elementBelowX];

      const isAtTheBottom = elementBelowY >= this.height;

      const isCollidedWithOtherElement = isAtTheBottom || isAnyElementBelow;

      if (shouldCheckCollision && isCollidedWithOtherElement) {
        isCollided = true;
      }
    });
    return isCollided;
  }

  isCollidedWithSideBorder(tetromino) {
    let isCollided = '';

    tetromino.forEach((block, i, j) => {
      if (tetromino.x + j < 1) {
        isCollided = 'left';
      }

      if (tetromino.x + j >= this.width - 1) {
        isCollided = 'right';
      }
    });

    return isCollided;
  }

  isCollidedWithSideBorder(tetromino) {
    let isCollided = '';

    tetromino.forEach((block, i, j) => {
      if (tetromino.x + j < 1) {
        isCollided = 'left';
      }

      if (tetromino.x + j >= this.width - 1) {
        isCollided = 'right';
      }
    });

    return isCollided;
  }
}

export default Matrix;
