"use strict";
/**
 * Returns all elements of an array except the first one.
 * @param array The input array.
 * @returns An array with all elements of the input array except the first one.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tail = tail;
function tail(array) {
    return array.slice(1);
}
