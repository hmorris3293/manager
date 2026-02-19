"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateEnd = exports.truncateMiddle = exports.truncate = void 0;
/**
 * Truncate a string and add an ellipsis at the end but ensures the
 * text ends on a word rather than mid-word.
 */
var truncate = function (str, maxLength) {
    if (str.length > maxLength + 4) {
        var beginningText = str.substring(0, maxLength + 1);
        var charsAfterMax = str.substring(maxLength + 1);
        var result = [beginningText];
        // Now we that we have the initial text, we want to ensure that
        // we're ending at the end of a word rather than at the middle,
        // so we want to find the first occurrence of whitespace and end
        // the string there
        for (var _i = 0, charsAfterMax_1 = charsAfterMax; _i < charsAfterMax_1.length; _i++) {
            var letter = charsAfterMax_1[_i];
            // A space means we're at the end of the word so break out of
            // this loop
            if (letter.match(/\W/)) {
                break;
            }
            result.push(letter);
        }
        return "".concat(result.join(''), " ...");
    }
    return str;
};
exports.truncate = truncate;
/**
 * Truncate a string and add an ellipsis in the middle.
 */
var truncateMiddle = function (str, maxLength) {
    if (maxLength === void 0) { maxLength = 40; }
    if (str.length <= maxLength) {
        return str;
    }
    // We need a length of at least 5 for the result to make sense.
    // truncateMiddle('aaaaa') === 'a...a'
    if (maxLength < 5) {
        throw Error('maxLength must be greater than 5.');
    }
    // We need to accommodate the ellipsis
    var actualMax = maxLength - 3;
    var firstHalf = str.substr(0, actualMax / 2);
    var secondHalf = str.substr(str.length - actualMax / 2);
    return firstHalf + '...' + secondHalf;
};
exports.truncateMiddle = truncateMiddle;
/**
 * Truncate a string and add an ellipsis at the end.
 */
var truncateEnd = function (str, maxLength) {
    if (maxLength === void 0) { maxLength = 40; }
    if (str.length <= maxLength) {
        return str;
    }
    // We need a length of at least 4 for the result to make sense.
    // truncateMiddle('aaaa') === 'a...'
    if (maxLength < 4) {
        throw Error('maxLength must be greater than 4.');
    }
    // We need to accommodate the ellipsis
    var actualMax = maxLength - 3;
    return str.substr(0, actualMax) + '...';
};
exports.truncateEnd = truncateEnd;
