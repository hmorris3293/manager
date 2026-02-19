"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByVersion = exports.sortByArrayLength = exports.sortByNumber = exports.sortByString = void 0;
var sortByString = function (a, b, order) {
    var result = 0;
    if (a.toLowerCase() < b.toLowerCase()) {
        result = -1;
    }
    else if (a.toLowerCase() > b.toLowerCase()) {
        result = 1;
    }
    if (order === 'asc') {
        return result; // ascending order
    }
    return -result; // descending order
};
exports.sortByString = sortByString;
var sortByNumber = function (a, b, order) {
    var result = 0;
    if (a < b) {
        result = -1;
    }
    else if (a > b) {
        result = 1;
    }
    if (order === 'asc') {
        return result; // ascending order
    }
    return -result; // descending order
};
exports.sortByNumber = sortByNumber;
var sortByArrayLength = function (a, b, order) {
    var result = 0;
    if (a.length > b.length) {
        result = 1;
    }
    else if (a.length < b.length) {
        result = -1;
    }
    return order === 'asc' ? result : -result;
};
exports.sortByArrayLength = sortByArrayLength;
/**
 * Compares two semantic version strings based on the specified order.
 *
 * This function splits each version string into its constituent parts (major, minor, patch),
 * compares them numerically, and returns a positive number, zero, or a negative number
 * based on the specified sorting order. If components are missing in either version,
 * they are treated as zero.
 *
 * @param {string} a - The first version string to compare.
 * @param {string} b - The second version string to compare.
 * @param {SortOrder} order - The intended sort direction of the output; 'asc' means lower versions come first, 'desc' means higher versions come first.
 * @returns {number} Returns a positive number if version `a` is greater than `b` according to the sort order,
 *                   zero if they are equal, and a negative number if `b` is greater than `a`.
 *
 * @example
 * // returns a positive number
 * sortByVersion('1.2.3', '1.2.2', 'asc');
 *
 * @example
 * // returns zero
 * sortByVersion('1.2.3', '1.2.3', 'asc');
 *
 * @example
 * // returns a negative number
 * sortByVersion('1.2.3', '1.2.4', 'asc');
 */
var sortByVersion = function (a, b, order) {
    var aParts = a.split('.');
    var bParts = b.split('.');
    var result = (function () {
        for (var i = 0; i < Math.max(aParts.length, bParts.length); i += 1) {
            // If one version has a part and another doesn't (e.g. 3.1 vs 3.1.1),
            // treat the missing part as 0.
            var aNumber = Number(aParts[i]) || 0;
            var bNumber = Number(bParts[i]) || 0;
            var diff = aNumber - bNumber;
            if (diff !== 0) {
                return diff;
            }
        }
        return 0;
    })();
    return order === 'asc' ? result : -result;
};
exports.sortByVersion = sortByVersion;
