var x = process.argv[2];
var y = process.argv[3];
var health_ = 100;

class Character {
  constructor(x, y, health) {
    this.x = x;
    this.y = y;
    this.health_ = health_;
  }
  damage() {
    this.health_ = this.health_ - 10;
  }
  getHealth() {
    return this.health_;
  }
  toString() {
    return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
  }
}

var character = new Character(+x, +y);
character.damage();
console.log(character.toString());