class Side {}

class Left extends Side {
  constructor() {
    super();

    this.increament = -1;
  }

  collisionChecker(x, j) {
    return x + j < 1;
  }
}

class Right extends Side {
  constructor() {
    super();

    this.increament = 1;
  }

  collisionChecker(x, j, width) {
    return x + j >= width - 1;
  }
}

export { Left, Right };
