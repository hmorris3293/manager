"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToKebabCase = void 0;
var convertToKebabCase = function (string) {
    return string.replace(/\s+/g, '-').toLowerCase();
};
exports.convertToKebabCase = convertToKebabCase;
