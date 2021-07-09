'use strict'


describe("Frame", () => {
  let frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe('#createRoll()', () => {
    it('adds roll to the array', () => {
      frame.createRoll(1);
      frame.createRoll(1);
      expect(frame.rolls).toEqual([1, 1]);
    });
  });
  
  describe('#scoreCalc()', () => {
    it('calculates score', () => {
      frame.createRoll(1);
      frame.createRoll(1);
      expect(frame.scoreCalc()).toEqual(2);
    });
  });
  
  describe('#isSpare()', () => {
    it('determines whether the frame is a spare', () => {
      frame.createRoll(6);
      frame.createRoll(4);
      expect(frame.isSpare()).toBeTruthy();
    });
  });
  
  describe('#isStrike()', () => {
    it('returns truthy when roll is a strike', () => {
      frame.createRoll(10);
      expect(frame.isStrike()).toBeTruthy();
    });
  });
  });