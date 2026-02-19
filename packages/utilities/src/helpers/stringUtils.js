"use strict";
/**
 * Join a list of strings for display. If the length of the list
 * is greater than the max, truncate the list before joining.
 *
 * ```typescript
 * truncateAndJoinList(['a', 'b', 'c'], 2) == 'a, b...and 1 more';
 * truncateAndJoinList(['a', 'b', 'c']) == 'a, b, c';
 * ```
 *
 * @param strList
 * A list of strings to join and possibly truncate.
 * @param max
 * The max number of elements to display.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumeric = exports.wrapInQuotes = exports.truncateAndJoinList = void 0;
var truncateAndJoinList = function (strList, max, total) {
    if (max === void 0) { max = 100; }
    var count = strList.length;
    return count > max
        ? strList.slice(0, max).join(', ') +
            ", plus ".concat(total ? total - max : count - max, " more")
        : strList.join(', ');
};
exports.truncateAndJoinList = truncateAndJoinList;
var wrapInQuotes = function (s) { return '"' + s + '"'; };
exports.wrapInQuotes = wrapInQuotes;
var isNumeric = function (s) { return /^\d+$/.test(s); };
exports.isNumeric = isNumeric;
