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
  