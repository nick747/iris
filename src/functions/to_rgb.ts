import { getType } from './get_type';

/* Convert an HEX color to a RGB one */

export const toRgb = (s: string, outputType: 0 | 1 | 2 = 0): string | number[] => {
  const colorType = getType(s);

  if (colorType === 'rgb') {
    const rgbValues = s
      .replace(/rgb\(|\)/g, '')
      .split(',')
      .map((value) => parseInt(value.trim(), 10));

    return outputType === 1 ? `rgb(${rgbValues.join(', ')})` : outputType === 2 ? rgbValues : rgbValues.join(', ');
  } else if (colorType === 'hex') {
    const hex = s.replace(/^#/, '');

    if (hex.length === 3) {
      const fullHex = hex
        .split('')
        .map((char) => char + char)
        .join('');

      const rgbValues = fullHex.match(/.{2}/g)!.map((value) => parseInt(value, 16));

      return outputType === 1 ? `rgb(${rgbValues.join(', ')})` : outputType === 2 ? rgbValues : rgbValues.join(', ');
    } else if (hex.length === 6) {
      const rgbValues = hex.match(/.{2}/g)!.map((value) => parseInt(value, 16));

      return outputType === 1 ? `rgb(${rgbValues.join(', ')})` : outputType === 2 ? rgbValues : rgbValues.join(', ');
    } else {
      throw new Error('Invalid hex color format');
    }
  } else {
    throw new Error('Invalid color type');
  }
};
