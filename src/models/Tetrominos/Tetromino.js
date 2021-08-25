import Grid from '../../utils/Grid';

class Tetromino extends Grid {
  constructor() {
    super();
    this.x = 4;
    this.y = 0;
    this.currentVariant = 0;
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
    console.log(this.currentVariant);
    console.log(this.variants[this.currentVariant]);
    this.elements = this.variants[this.currentVariant];
  }
}

export default Tetromino;
