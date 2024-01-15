import * as iris from '../src/index';

describe('Iris Tests', () => {
  test('getType should identify hex color', () => {
    const result = iris.getType('#ff0000');
    expect(result).toBe('hex');
  });

  test('getType should identify hex color', () => {
    const result = iris.getType('dedede');
    expect(result).toBe('hex');
  });

  test('getType should identify invalid color', () => {
    const result = iris.getType('dededez');
    expect(result).toBe('invalid');
  });

  test('getType should identify invalid color', () => {
    const result = iris.getType('25642, 0, 0');
    expect(result).toBe('invalid');
  });

  test('getType should identify rgb color', () => {
    const result = iris.getType('rgb(255, 0, 0)');
    expect(result).toBe('rgb');
  });

  test('getType should identify rgb color', () => {
    const result = iris.getType('255, 0, 0');
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

  test('randomColor should generate a random hex color', () => {
    const result = iris.randomColor('hex');
  });

  test('randomColor should generate a random rgb color', () => {
    const result = iris.randomColor('rgb');
  });

  test('findComplementary should return the complementary of this color', () => {
    const result = iris.findComplementary('#ff0000');
    expect(result).toBe('#00ffff');
  });

  test('findComplementary should return the complementary of this color', () => {
    const result = iris.findComplementary('255, 0, 0');
    expect(result).toBe('rgb(0, 255, 255)');
  });
});
