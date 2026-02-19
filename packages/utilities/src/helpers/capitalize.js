"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeAllWords = exports.capitalize = void 0;
var capitalize = function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
};
exports.capitalize = capitalize;
var capitalizeAllWords = function (s, delimiter) {
    if (delimiter === void 0) { delimiter = ' '; }
    return s.split(delimiter).map(exports.capitalize).join(' ');
};
exports.capitalizeAllWords = capitalizeAllWords;
