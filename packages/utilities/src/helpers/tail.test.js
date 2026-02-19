"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var tail_1 = require("./tail");
(0, vitest_1.describe)('tail utility function', function () {
    (0, vitest_1.it)('should return all but the first element of an array', function () {
        (0, vitest_1.expect)((0, tail_1.tail)([1, 2, 3])).toEqual([2, 3]);
        (0, vitest_1.expect)((0, tail_1.tail)([1])).toEqual([]);
        (0, vitest_1.expect)((0, tail_1.tail)([])).toEqual([]);
    });
    (0, vitest_1.it)('should return an empty array when passed an empty array', function () {
        (0, vitest_1.expect)((0, tail_1.tail)([])).toEqual([]);
    });
    (0, vitest_1.it)('should return an empty array when passed an array with one element', function () {
        (0, vitest_1.expect)((0, tail_1.tail)([1])).toEqual([]);
    });
    (0, vitest_1.it)('should return an empty array when passed an empty array', function () {
        (0, vitest_1.expect)((0, tail_1.tail)([])).toEqual([]);
    });
});
