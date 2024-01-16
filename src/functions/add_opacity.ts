import { cleanInput } from "./clean_input";
import { getType } from "./get_type";
import { toRgb } from "./to_rgb";

/**
 * Adds an opacity to a RGB or HEX color
 * @param {string} s - The input color (RGB or HEX) 
 * @param {number} opacity - The opacity value, between 0 and 1 or 0 and 100 
 * @param {number} outputType - The output type which changes the prefix of the output, either 'rgbo(r, g, b, o)' or 'rgba(r, g, b, a)'
 * @returns {string} The output color with the opacity
 */

export const addOpacity = (s: string, opacity: number, outputType: 0 | 1 = 0): string => {
  s = s.trim();
  let type: string = getType(s);
  s = cleanInput(s);

  /* check if someone inserted opacity as integer number */
  if (opacity > 1 && opacity <= 100) {
    opacity /= 100;
  } else if (opacity < 0 || opacity > 100) {
    throw new Error("Invalid opacity. The opacity must be a number from 0 to 1 (i.e. 0.5) or from 0 to 100 (i.e. 50)")
  }

  let prefix: string = (outputType == 0) ? 'rgbo(' : 'rgba(';

  if (type === 'hex' || type === 'rgb') {
    /* convert to 'r, g, b' color type */
    let colorWithOpacity = toRgb(s) as string;

    colorWithOpacity += `, ${opacity})`;

    return prefix + colorWithOpacity;

  } else {
    throw new Error("Invalid input color");
  }
}
