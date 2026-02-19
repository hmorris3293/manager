"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var clamp_1 = require("./clamp");
(0, vitest_1.describe)('clamp utility function', function () {
    (0, vitest_1.it)('clamps when the value is greater than the max', function () {
        (0, vitest_1.expect)((0, clamp_1.clamp)(1, 3, 4)).toBe(3);
    });
    (0, vitest_1.it)('clamps when the value is less than the min', function () {
        (0, vitest_1.expect)((0, clamp_1.clamp)(1, 3, 0)).toBe(1);
    });
    (0, vitest_1.it)('returns the value if no clamping is required', function () {
        (0, vitest_1.expect)((0, clamp_1.clamp)(1, 3, 2)).toBe(2);
    });
    (0, vitest_1.it)('handles negative numbers', function () {
        (0, vitest_1.expect)((0, clamp_1.clamp)(-5, 5, -6)).toBe(-5);
    });
});
