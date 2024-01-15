/**
 * Returns the input clean, without '#' or 'rgb(...)'
 * @param {string} s - The input 
 * @returns {string} - The cleaned input
 */

export const cleanInput = (s: string): string => {
  if (s.startsWith("#")) {
    s = s.slice(1);
  } else if (s.startsWith("rgb(") && s.endsWith(")")) {
    s = s.slice(4, -1);
  }

  return s;
}