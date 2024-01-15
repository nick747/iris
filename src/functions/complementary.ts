import { cleanInput } from "./clean_input";
import { getType } from "./get_type";
import { toHex } from "./to_hex";
import { toRgb } from "./to_rgb";

/**
 * Returns the complementary color of a hex or rgb color
 * @param {string} s - The input color, a hex or a rgb one
 * @returns {string} The complementary color
 */

export const findComplementary = (s: string): string => {
  s = s.trim();

  let type: string = getType(s);
  s = cleanInput(s);

  if (type == 'hex') {
    let rgb = toRgb(s, 2) as number[];

    /* find complementary */
    for (let i = 0; i < 3; i++) {
      rgb[i] = 255 - rgb[i];
    }

    return toHex(rgb.join(", "));

  } else if (type == 'rgb') {
    let rgb = toRgb(s, 2) as number[];

    /* find complementary */
    for (let i = 0; i < 3; i++) {
      rgb[i] = 255 - rgb[i];
    }

    return `rgb(${rgb.join(", ")})`;

  } else {
    throw new Error("Invalid input color");
  }
}