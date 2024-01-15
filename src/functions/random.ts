/**
 * Generates a random color in HEX or RGB space
 * @param {'hex' | 'rgb'} type - The color space to use for the generation 
 * @returns {string} The color in HEX or RGB space
 */

export const randomColor = (type: 'hex' | 'rgb'): string => {
  let randomColor: string = "";

  let rgbValues: number[] = [];

  for (let i = 0; i < 3; i++) {
    rgbValues.push(Math.floor(Math.random() * 255));
  }

  if (type == 'hex') {
    randomColor += "#";
    for (let i = 0; i < 3; i++) {
      randomColor += rgbValues[i].toString(16);
    }
  } else if (type == 'rgb') {
    randomColor += "rgb(" + rgbValues[0].toString() + ", " + rgbValues[1].toString() + ", " + rgbValues[2].toString() + ")";
  }

  return randomColor;
};