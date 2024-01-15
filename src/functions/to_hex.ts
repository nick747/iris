import { getType } from './get_type';

/**
 * Converts a RGB color to a HEX one
 * @param {string} s - The color value input
 * @param {number} [outputType=0] - The type of the output, either with the '#' or not
 * @returns {string} The HEX value of the color, either with the '#' prefix or not (based on the function's param.)
 */

export const toHex = (s: string, outputType: 0 | 1 = 0): string => {
  const colorType = getType(s);

  if (colorType === 'hex') {
    return s;
  } else if (colorType === 'rgb') {
    const rgbValues = s
      .replace(/\s/g, '')
      .split(',')
      .map((value) => parseInt(value, 10));

    if (rgbValues.length === 3 && rgbValues.every((value) => !isNaN(value) && value >= 0 && value <= 255)) {
      const hex = rgbValues
        .map((value) => {
          const hexValue = value.toString(16);
          return hexValue.length === 1 ? '0' + hexValue : hexValue;
        })
        .join('');

      return (outputType == 0) ? `#${hex}` : hex;
    } else {
      throw new Error('Invalid RGB color format');
    }
  } else {
    throw new Error('Invalid color type');
  }
};
