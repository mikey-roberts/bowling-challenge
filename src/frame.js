class Frame {
  constructor() {
  this.rolls = []
  }
  
  createRoll(pins) {
  this.rolls.push(pins);
  }

  scoreCalc() {
  this.rolls[0] + this.rolls[1]
  }

  isStrike() {
  this.rolls[0] == 10;
  }
  
  isSpare() {
  this.rolls[0] + this.rolls[1] == 10;
  }
}