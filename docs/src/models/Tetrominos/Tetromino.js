import Grid from '../../utils/Grid.js';

class Tetromino extends Grid {
  constructor(color, variants) {
    super();
    this.x = 4;
    this.y = 0;
    this.color = color;
    this.variants = variants;
    this.currentVariant = 0;
    this.elements = this.variants[this.currentVariant];
  }

  drop() {
    this.y++;
  }

  move(side) {
    if (side === 'left') this.x--;
    if (side === 'right') this.x++;
  }

  rotate() {
    this.currentVariant += 1;
    if (this.currentVariant > this.variants.length - 1) this.currentVariant = 0;
    this.elements = this.variants[this.currentVariant];
  }
}

export default Tetromino;
