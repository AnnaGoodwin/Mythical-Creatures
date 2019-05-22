class Hobbit {
  constructor(newName) {
    this.name = newName;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = true;
    if(this.name === 'Frodo') {
      this.hasRing = true;
    } else if (this.name === 'Samwise') {
      this.hasRing = false;
    }
  } 

  celebrateBirthday() {
    this.age++
    console.log(this.age)
    if (this.age <= 32) {
      this.adult = false;
    } else if (this.age >= 101) {
      this.old = true;
    } else {
      this.adult = true;
    }
  }

}

module.exports = Hobbit;