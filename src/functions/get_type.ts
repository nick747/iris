import { cleanInput } from "./clean_input";

/**
 * Detects the color value of a string
 * @param {string} s - The color value input
 * @returns {string} the value: 'hex', 'rgb', 'invalid' if nothing matches
 */

export const getType = (s: string): 'hex' | 'rgb' | 'invalid' => {
  s = s.trim();
  const hexRegex = /^[0-9a-fA-F]{6}$/;
  const rgbRegex = /^(\b(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b\s*,\s*\b(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b\s*,\s*\b(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b)$/;

  s = cleanInput(s);

  if (hexRegex.test(s)) {
    return 'hex';
  } else if (rgbRegex.test(s)) {
    return 'rgb';
  } else {
    return 'invalid';
  }
};
