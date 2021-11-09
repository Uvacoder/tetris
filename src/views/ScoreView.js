class ScoreView {
  constructor() {
    this.scoreElement = document.getElementById('score');
  }

  update(score) {
    this.scoreElement.innerText = score;
  }
}

export default ScoreView;
