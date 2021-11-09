class Grid {
  constructor(x, y) {
    this.elements = new Array(x);

    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i] = new Array(y);
    }
  }

  forEach(callback) {
    for (let i = 0; i < this.elements.length; i++) {
      for (let j = 0; j < this.elements[0].length; j++) {
        callback(this.elements[i][j], i, j);
      }
    }
  }
}

export default Grid;
