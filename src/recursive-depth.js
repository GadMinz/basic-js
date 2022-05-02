const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

class DepthCalculator {
    calculateDepth(arr, count = 0) {
        if (arr instanceof Array) {
            if (arr.length === 0) arr.push(1)
            return arr.map(value => this.calculateDepth(value, count + 1)).max() - (count > 0 ? 0 : 1) // Если главный массив не считаем
        }
        return count + 1;
    }
}

module.exports = {
    DepthCalculator
};
