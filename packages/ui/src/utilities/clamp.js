"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = clamp;
/**
 * Restricts a number to be within a range.
 */
function clamp(min, max, value) {
    if (value > max) {
        return max;
    }
    if (value < min) {
        return min;
    }
    return value;
}
