import Grid from '../utils/Grid';

class Matrix extends Grid {
  constructor(width = 10, height = 20) {
    super(height, width);
    this.width = width;
    this.height = height;
    //this.elements[19] = ['green', 'green', 'green', 'green', undefined, undefined, 'green', 'green', 'green', 'green'];
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
        return;
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

  checkFullLine() {
    const fullRows = [];

    for (let i = 0; i < this.height; i++) {
      let isFullRow = true;
      for (let j = 0; j < this.width; j++) {
        const block = this.elements[i][j];
        if (!block) {
          isFullRow = false;
        }
      }
      if (isFullRow === true) {
        fullRows.push(i);
      }
    }
    return fullRows;
  }

  removeFullRows(fullRows) {
    for (let i = this.height - 1; i >= 0; i--) {
      if (fullRows.includes(i)) {
        this.elements.splice(i, 1);
      }
    }
    for (let i = 0; i < fullRows.length; i++) {
      this.elements.splice(0, 0, [null, null, null, null, null, null, null, null, null, null]);
    }
  }
}

export default Matrix;
