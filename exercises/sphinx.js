class Sphinx {
  constructor() {
    this.riddles = [];
  }

  collectRiddle(riddles) {
    this.riddles.push(riddles);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answer) {
        this.riddles.pop();
      }
    }
  }
}






module.exports = Sphinx;