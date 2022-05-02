const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let nArr = n.toString().split('')
    let max = 0
    for (let i in nArr) {
        let nTemp = nArr.slice()
        nTemp.splice(i, 1)
        let num = +nTemp.join('')
        if (num > max) max = num
    }
    return max
}

module.exports = {
    deleteDigit
};
