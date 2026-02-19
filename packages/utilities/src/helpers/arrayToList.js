"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToList = void 0;
var arrayToList = function (input, separator) {
    if (separator === void 0) { separator = ','; }
    if (!Array.isArray(input) || input.length === 0) {
        return '';
    }
    if (input.length === 1) {
        return input[0];
    }
    if (input.length === 2) {
        return "".concat(input[0], " and ").concat(input[1]);
    }
    else {
        var head = input.slice(0, -1);
        var tail = input[input.length - 1];
        return "".concat(head.join("".concat(separator, " "))).concat(separator, " and ").concat(tail);
    }
};
exports.arrayToList = arrayToList;
