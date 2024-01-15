// returns if the input is an hex one or a RGB one

export const getType = (s: string): 'hex' | 'rgb' | 'invalid' => {
  const hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  const rgbRegex = /^(\d{1,3}\s*,){2}\s*\d{1,3}$/;

  if (hexRegex.test(s)) {
    return 'hex';
  } else if (rgbRegex.test(s)) {
    return 'rgb';
  } else {
    return 'invalid';
  }
};
