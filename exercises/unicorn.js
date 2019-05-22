class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }
  isWhite() {
    return false;
  }
  says(sparkle) {
    return `**;* ${sparkle} *;**`
  }
}

module.exports = Unicorn