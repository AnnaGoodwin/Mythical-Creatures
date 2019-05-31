class Human {
  constructor() {
    this.name = 'Jane';
    this.encounterCounter = 0;
    this.knockedOut = false;
  }
  noticesOgre() {
    // this.encounterCounter++;
    // console.log(this.encounterCounter)
    if(this.encounterCounter === 3 || this.encounterCounter === 6) {
      return true;
    } else {
      return false;
    }

  }
}

module.exports = Human;