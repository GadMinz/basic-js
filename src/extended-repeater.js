const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let result = []
    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1
    let separator = options.separator ? options.separator : '+'
    let addition = typeof options.addition !== 'undefined' ? options.addition : ''
    let additionRepeat = options.additionRepeatTimes ? options.additionRepeatTimes : 1
    let additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
    for (let i = 0; i < repeatTimes; i++) {
        let additions = Array(additionRepeat).fill(addition + '').join(additionSeparator)
        result.push(`${str}${additions}`)
    }
    return result.join(separator)
}

module.exports = {
    repeater
};
