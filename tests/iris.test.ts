import * as iris from '../src/index';

describe('Iris Library Tests', () => {
  test('getType should identify hex color', () => {
    const result = iris.getType('#ff0000');
    expect(result).toBe('hex');
  });

  test('getType should identify rgb color', () => {
    const result = iris.getType('rgb(255, 0, 0)');
    expect(result).toBe('rgb');
  });

  test('toHex should convert rgb to hex', () => {
    const result = iris.toHex('rgb(255, 0, 0)');
    expect(result).toBe('#ff0000');
  });

  test('toRgb should convert hex to rgb', () => {
    const result = iris.toRgb('#ff0000', 1);
    expect(result).toBe('rgb(255, 0, 0)');
  });
});
