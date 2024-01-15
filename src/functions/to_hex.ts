import { getType } from './get_type';

/* Convert an RGB color to a HEX one */

export const toHex = (s: string): string => {
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

      return `#${hex}`;
    } else {
      throw new Error('Invalid RGB color format');
    }
  } else {
    throw new Error('Invalid color type');
  }
};
