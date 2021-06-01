/**
 * Generate random integer type number
 * @param min - minimum number
 * @param max - maximum number
 */
export const generateRandomIntNumber = (min = 0, max: number) => {
  return Math.floor(Math.random() * (max + 1)) + min
}
