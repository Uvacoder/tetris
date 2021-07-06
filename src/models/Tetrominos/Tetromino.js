import Grid from '../../utils/Grid';

class Tetromino extends Grid {
  constructor() {
    super();
    this.x = 4;
    this.y = 0;
  }

  drop() {
    this.y++;
  }

  move(side) {
    if (side === 'left') this.x--;
    if (side === 'right') this.x++;
  }
}

export default Tetromino;
