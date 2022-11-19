const difference = require('./difference');

describe('filter the values of an array by another array ', () => {
  describe('check the default value', () => {
    it('[ ],[ ] -> [ ]', () => {
      expect(difference([], [])).toEqual([]);
    });
    it('[1,2],[ ] -> [1,2 ]', () => {
      expect(difference([1, 2], [])).toEqual([1, 2]);
    });
    it('[ ],[1,2 ] -> [ ]', () => {
      expect(difference([], [1, 2])).toEqual([]);
    });
    it('[2, 1], [2, 3] -> [1]', () => {
      expect(difference([2, 1], [2, 3])).toEqual([1]);
    });
    it('[-1, -2], [-3, -4] -> [-1, -2]', () => {
      expect(difference([-1, -2], [-3, -4])).toEqual([-1, -2]);
    });
  });
});
