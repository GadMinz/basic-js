const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @param sum
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n, sum = 0) {
  for (const el of n.toString()) sum += +el
  return sum.toString().length > 1 ? getSumOfDigits(sum, 0) : sum;
}

module.exports = {
  getSumOfDigits
};
