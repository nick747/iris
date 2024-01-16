import * as iris from '../src/index';

describe('Iris Tests', () => {

  /* getType tests */

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

  /* toHex / toRgb tests */

  test('toHex should convert rgb to hex', () => {
    const result = iris.toHex('rgb(255, 0, 0)');
    expect(result).toBe('#ff0000');
  });

  test('toRgb should convert hex to rgb', () => {
    const result = iris.toRgb('#ff0000', 1);
    expect(result).toBe('rgb(255, 0, 0)');
  });

  /* randomColor tests */

  test('randomColor should generate a random hex color', () => {
    const result = iris.randomColor('hex');
  });

  test('randomColor should generate a random rgb color', () => {
    const result = iris.randomColor('rgb');
  });

  /* findComplementary tests */

  test('findComplementary should return the complementary of this color', () => {
    const result = iris.findComplementary('#ff0000');
    expect(result).toBe('#00ffff');
  });

  test('findComplementary should return the complementary of this color', () => {
    const result = iris.findComplementary('255, 0, 0');
    expect(result).toBe('rgb(0, 255, 255)');
  });

  /* addOpacity tests */
  
  test('addOpacity should return the color with the added opacity - RGB', () => {
    const result = iris.addOpacity('255, 0, 0', 0.5, 0);
    expect(result).toBe('rgbo(255, 0, 0, 0.5)');
  });

  test('addOpacity should return the color with the added opacity - RGB', () => {
    const result = iris.addOpacity('255, 0, 0', 50, 0);
    expect(result).toBe('rgbo(255, 0, 0, 0.5)');
  });

  test('addOpacity should return the color with the added opacity - RGB', () => {
    const result = iris.addOpacity('255, 0, 0', 50, 1);
    expect(result).toBe('rgba(255, 0, 0, 0.5)');
  });

  test('addOpacity should return the color with the added opacity - HEX', () => {
    const result = iris.addOpacity('ff0000', 0.5, 0);
    expect(result).toBe('rgbo(255, 0, 0, 0.5)');
  });

  test('addOpacity should return the color with the added opacity - HEX', () => {
    const result = iris.addOpacity('ff0000', 50, 0);
    expect(result).toBe('rgbo(255, 0, 0, 0.5)');
  });

  test('addOpacity should return the color with the added opacity - HEX', () => {
    const result = iris.addOpacity('ff0000', 50, 1);
    expect(result).toBe('rgba(255, 0, 0, 0.5)');
  });
});
