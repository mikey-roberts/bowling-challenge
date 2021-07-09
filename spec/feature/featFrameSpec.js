'use strict'


describe("Game", () => {
  let game;

  beforeEach(function() {
   game = new Game();   
  });
  it("initializes a game with a roll value the player can set", () => {
    game.createRoll(1)
    expect(game.roll[0]).toEqual(1);
  });

  it("returns 0 if every throw is a gutter ball", () => {
    for (let i = 0; i < 20; i++) {
    game.createRoll(0)
    }
    expect(game.score).toEqual(0);
  });
  it("calculates 40 if every roll is a 4", () => {
    for (let i = 0; i < 20; i++) {
    game.createRoll(4)
    }
    expect(game.score).toEqual(40);
  });
  it('calculates a perfect game with every shot a strike', () => {
    for (let i = 0; i < 13; i++) {
    game.createRoll(10)
    }
    expect(game.score).toEqual(300);
  });
    it('calculates a perfect game with every shot a strike', () => {
    for (let i = 0; i < 22; i++) {
    game.createBall(5)
    }
    expect(game.score).toEqual(150);
  });
  });
 