"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var splitAt_1 = require("./splitAt");
(0, vitest_1.describe)('splitAt', function () {
    // For arrays
    (0, vitest_1.it)('splits an array at the given index', function () {
        var result = (0, splitAt_1.splitAt)(3, [1, 2, 3, 4, 5]);
        (0, vitest_1.expect)(result).toEqual([
            [1, 2, 3],
            [4, 5],
        ]);
    });
    (0, vitest_1.it)('splits an array when index is 0', function () {
        var result = (0, splitAt_1.splitAt)(0, [1, 2, 3, 4, 5]);
        (0, vitest_1.expect)(result).toEqual([[], [1, 2, 3, 4, 5]]);
    });
    (0, vitest_1.it)('splits an array when index is the length of the array', function () {
        var result = (0, splitAt_1.splitAt)(5, [1, 2, 3, 4, 5]);
        (0, vitest_1.expect)(result).toEqual([[1, 2, 3, 4, 5], []]);
    });
    (0, vitest_1.it)('splits an array when index is the (length - 1) of the array', function () {
        var result = (0, splitAt_1.splitAt)(4, [1, 2, 3, 4, 5]);
        (0, vitest_1.expect)(result).toEqual([[1, 2, 3, 4], [5]]);
    });
    (0, vitest_1.it)('splits an empty array', function () {
        var result = (0, splitAt_1.splitAt)(0, []);
        (0, vitest_1.expect)(result).toEqual([[], []]);
    });
    (0, vitest_1.it)('splits an array of one element', function () {
        var result = (0, splitAt_1.splitAt)(1, [1]);
        (0, vitest_1.expect)(result).toEqual([[1], []]);
    });
    (0, vitest_1.it)('splits an array at the given negative index', function () {
        var result = (0, splitAt_1.splitAt)(-1, [1, 2, 3, 4, 5]);
        (0, vitest_1.expect)(result).toEqual([[1, 2, 3, 4], [5]]);
    });
    // For strings
    (0, vitest_1.it)('splits a string at the given index', function () {
        var result = (0, splitAt_1.splitAt)(3, 'abcdefgh');
        (0, vitest_1.expect)(result).toEqual(['abc', 'defgh']);
    });
    (0, vitest_1.it)('splits a string when index is 0', function () {
        var result = (0, splitAt_1.splitAt)(0, 'abcdefgh');
        (0, vitest_1.expect)(result).toEqual(['', 'abcdefgh']);
    });
    (0, vitest_1.it)('splits a string when index is the length of the string', function () {
        var result = (0, splitAt_1.splitAt)(8, 'abcdefgh');
        (0, vitest_1.expect)(result).toEqual(['abcdefgh', '']);
    });
    (0, vitest_1.it)('splits a string when index is the (length - 1) of the string', function () {
        var result = (0, splitAt_1.splitAt)(7, 'abcdefgh');
        (0, vitest_1.expect)(result).toEqual(['abcdefg', 'h']);
    });
    (0, vitest_1.it)('splits an empty string', function () {
        var result = (0, splitAt_1.splitAt)(0, '');
        (0, vitest_1.expect)(result).toEqual(['', '']);
    });
    (0, vitest_1.it)('splits a string with one character', function () {
        var result = (0, splitAt_1.splitAt)(1, 'a');
        (0, vitest_1.expect)(result).toEqual(['a', '']);
    });
    (0, vitest_1.it)('splits a string at the given negative index', function () {
        var result = (0, splitAt_1.splitAt)(-1, 'abcdefgh');
        (0, vitest_1.expect)(result).toEqual(['abcdefg', 'h']);
    });
});
