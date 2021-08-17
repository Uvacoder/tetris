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
    //TODO add collision check with the element beneath
      let isCollided = false;
      //console.log(tetromino.elements.length);
      tetromino.forEach((block, i) => {
           //console.log(i);
          if ((i === tetromino.elements.length - 1)&&(tetromino.y + i >= this.height - 1 || this.elements[tetromino.y + i + 1][tetromino.x])) {
                  isCollided = true;
              }
    });

    return isCollided;
  }
}

export default Matrix;
