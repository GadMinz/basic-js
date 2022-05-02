const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!'
    if ((!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
        throw new Error('Invalid date!');
    }
    let month = date.getMonth() + 1
    if (3 <= month && month <= 5) {
        return 'spring'
    }

    if (6 <= month && month <= 8) {
        return 'summer'
    }

    if (9 <= month && month <= 11) {
        return 'fall'
    }

    return 'winter'
}

module.exports = {
    getSeason
};
