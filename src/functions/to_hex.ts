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
    const isRGBWithParentheses = s.startsWith('rgb(') && s.endsWith(')');
    
    const rgbValues = isRGBWithParentheses ? s.slice(4, -1) : s;
    
    const rgbValuesArray = rgbValues
      .replace(/\s/g, '')
      .split(',')
      .map((value) => parseInt(value, 10));

    if (rgbValuesArray.length === 3 && rgbValuesArray.every((value) => !isNaN(value) && value >= 0 && value <= 255)) {
      const hex = rgbValuesArray
        .map((value) => {
          const hexValue = value.toString(16);
          return hexValue.length === 1 ? '0' + hexValue : hexValue;
        })
        .join('');

      if (outputType === 0) {
        return `#${hex}`;
      } else if (outputType === 1) {
        return hex;
      } else {
        throw new Error('Invalid outputType. It should be either 0 or 1.');
      }
    } else {
      throw new Error('Invalid RGB color format');
    }
  } else {
    throw new Error('Invalid color type');
  }
};
