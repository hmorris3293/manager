"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evenizeNumber = void 0;
var evenizeNumber = function (n) {
    if (n === 0) {
        return n;
    }
    return n % 2 === 0 ? n : n - 1;
};
exports.evenizeNumber = evenizeNumber;
