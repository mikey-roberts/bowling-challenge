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
 