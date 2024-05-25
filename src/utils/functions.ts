/**
 *
 * @param {string} text : The text we will slice it.
 * @param {number} max : The maximum number of character of text.
 * @returns : The text after slice it.
 */
export const textSlicer = (text: string, max: number = 50): string => {
  if (text.length >= 50) return `${text.slice(0, max)}...`;
  else return text;
};
