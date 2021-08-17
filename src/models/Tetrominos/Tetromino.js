import Grid from '../../utils/Grid';

class Tetromino extends Grid {
  constructor() {
    super();
    this.x = 4;
    this.y = 0;
    this.z = 0;
  }

  drop() {
    this.y++;
  }

  move(side) {
    if (side === 'left') this.x--;
    if (side === 'right') this.x++;
  }

  rotate() {
    this.z += 1;
    if (this.z % (this.variants.length - 1) === 0) this.z = 0;
    //console.log(this.z);
    //this.z = this.z % (this.variants.length - 1) === 0 ? 1 : this.z + 1;
    //console.log(this.z);
    this.elements = this.variants[this.z];
  }
}

export default Tetromino;
