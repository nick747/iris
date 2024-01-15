/**
 * Detects the color value of a string
 * @param {string} s - The color value input
 * @returns {string} the value: 'hex', 'rgb', 'invalid' if nothing matches
 */

export const getType = (s: string): 'hex' | 'rgb' | 'invalid' => {
  const hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  const hexWithoutHashRegex = /^[0-9a-fA-F]{3}|[0-9a-fA-F]{6}$/;
  const rgbRegex = /^rgb\(\s*(\d{1,3}\s*,\s*){2}\s*\d{1,3}\s*\)$/;
  const rgbWithoutParenthesesRegex = /^(\d{1,3}\s*,){2}\s*\d{1,3}$/;

  if (hexRegex.test(s) || hexWithoutHashRegex.test(s)) {
    return 'hex';
  } else if (rgbRegex.test(s) || rgbWithoutParenthesesRegex.test(s)) {
    return 'rgb';
  } else {
    return 'invalid';
  }
};
