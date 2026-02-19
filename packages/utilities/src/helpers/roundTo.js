"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundTo = void 0;
/**
 * Round to a given number of decimals, by default 2.
 * This is different from toFixed and similar methods,
 * because we only want to append decimals if they are
 * significant.
 *
 * Example:
 *
 * 2.toFixed(2) = '2.00'
 * roundTo(2) = 2
 * roundTo(0.01) = 0.01
 * roundTo(0.000234, 5) = 0.00023
 *
 * @param value
 * @param places (Optional) Number of decimal places to round to
 */
var roundTo = function (value, places) {
    if (places === void 0) { places = 2; }
    var multiplier = Math.pow(10, places);
    return Math.round(value * multiplier) / multiplier;
};
exports.roundTo = roundTo;
