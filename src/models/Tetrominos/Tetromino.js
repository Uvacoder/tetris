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
}

export default Tetromino;