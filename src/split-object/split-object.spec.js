const splitObject = require('./split-object');

describe('Splits an object into multiple objects with one key/value pair each', () => {
  describe('Splits an object into multiple objects', () => {
    it('{ a: 1, b: 2, c: 3 } -> [{ a: 1 }, { b: 2 }, { c: 3 }]', () => {
      const expected = [{ a: 1 }, { b: 2 }, { c: 3 }];
      const received = splitObject({ a: 1, b: 2, c: 3 });
      expect(received).toEqual(expected);
    });
    it('{ a: 1, b: 2, c: 3 } -> [{ a: 1 }, { b: 2 }, { c: 3 }]', () => {
      const expected = [
        { name: 'robs' },
        { age: 25 },
        { tall: true },
        { userName: 'sbor' },
      ];
      const received = splitObject({
        name: 'robs',
        age: 25,
        tall: true,
        userName: 'sbor',
      });
      expect(received).toEqual(expected);
    });
  });
  describe('check for empty input', () => {
    it('{} -> [] ', () => {
      expect(splitObject({})).toEqual([]);
    });
    it(' -> [] ', () => {
      expect(splitObject()).toEqual([]);
    });
  });
  describe('check for errors', () => {
    it('"f" -> type error ', () => {
      expect(() => splitObject('f')).toThrow(TypeError);
    });
    it('11 -> type error ', () => {
      expect(() => splitObject(11)).toThrow(TypeError);
    });
    it('true -> type error ', () => {
      expect(() => splitObject(true)).toThrow(TypeError);
    });
  });
});
