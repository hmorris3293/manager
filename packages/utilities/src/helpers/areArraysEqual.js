"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areArraysEqual = void 0;
/**
 * Specify props to compare arrays.
 * Note: This function is not recursive and will only be true if arrays are sorted equally.
 * The reason is that this function is intended to do the bare minimum for the sake of performance and its current use case(s).
 *
 * @param array1
 * @param array2
 *
 * @returns boolean
 */
var areArraysEqual = function (array1, array2) {
    return (array1.length === array2.length &&
        array1.every(function (v, i) { return v === array2[i]; }));
};
exports.areArraysEqual = areArraysEqual;
