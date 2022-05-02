const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let count = 1
    let encodeStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++
            continue
        }
        if (count === 1) {
            encodeStr += str[i]
            continue
        }
        encodeStr += `${count}${str[i]}`
        count = 1
    }
    return encodeStr
}

module.exports = {
    encodeLine
};
