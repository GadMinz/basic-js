const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {}
  for (let dns of domains) {
    let dnsArr = dns.split('.')
    let temp = ''
    for (let i = dnsArr.length - 1; i >= 0; i--) {
      temp += `.${dnsArr[i]}`
      if (!result[temp]) result[temp] = 0
      result[temp]++
    }
  }
  return result
}

module.exports = {
  getDNSStats
};
