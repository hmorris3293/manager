"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitAt = splitAt;
/**
 * Splits a given list or string at a given index.
 *
 * @param index - The index to split at.
 * @param input - The list (array) or string to split.
 * @returns An array containing two parts: the first part (0 to index), the second part (index to end).
 *
 * @example
 * splitAt(3, [1, 2, 3, 4, 5]); // [[1, 2, 3], [4, 5]]
 * splitAt(3, "hello"); // ["hel", "lo"]
 */
function splitAt(index, input) {
    return [input.slice(0, index), input.slice(index)];
}
