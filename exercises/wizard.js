class Wizard {
  constructor(object) {
    this.name = object.name;
    this.bearded = object.bearded === undefined ? true: false;
  }
  incantation() {
    
  }
}



module.exports = Wizard