export const addDigitSeparator = (number, separator) => {
  const digits = String(number).split('');

  for (let i = digits.length - 3; i >= 0; i -= 3) {
    digits.splice(i, 0, separator);
  }

  const separated = digits.join('');

  return separated;
};
