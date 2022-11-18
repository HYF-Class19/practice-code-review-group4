import { deepFlat } from './deep-flat.js';

// test case to test deepFlat
for (const solution of [deepFlat]) {
  // the main test suite for the function
  describe('Empty Array', () => {
    it('Empty Array', () => {
      expect(solution([])).toEqual([]);
    });
  });
  describe('Not an Array', () => {
    it('Input a number', () => {
      expect(() => solution(2)).toThrow(TypeError);
    });
    it('Input a string', () => {
      expect(() => solution(2)).toThrow(TypeError);
    });
    it('Input an object', () => {
      expect(() => solution(2)).toThrow(TypeError);
    });
  });
  describe(' nested array', () => {
    it('Array with number', () => {
      expect(solution([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
    });
    it('Array with string', () => {
      expect(solution(['b', ['a', ['c', ['d']], 'e']])).toEqual([
        'b',
        'a',
        'c',
        'd',
        'e',
      ]);
    });
  });
}
