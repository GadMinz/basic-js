const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(+sampleActivity)) return false
  if (sampleActivity <= 0 || sampleActivity >= 9000) return false
  const k = Math.log(2)/5730
  const t = Math.ceil(Math.log(15/sampleActivity)/k)
  if (t < 1) return false
  return t
}

module.exports = {
  dateSample
};
