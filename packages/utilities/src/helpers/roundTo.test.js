"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var roundTo_1 = require("./roundTo");
(0, vitest_1.describe)('roundTo utility', function () {
    (0, vitest_1.it)('should round to 2 digits by default', function () {
        (0, vitest_1.expect)((0, roundTo_1.roundTo)(2.112)).toBe(2.11);
    });
    (0, vitest_1.it)('should not add decimals to integers', function () {
        (0, vitest_1.expect)((0, roundTo_1.roundTo)(4)).toBe(4);
    });
    (0, vitest_1.it)('should handle small values', function () {
        (0, vitest_1.expect)((0, roundTo_1.roundTo)(0.000000000000711)).toBe(0);
    });
    (0, vitest_1.it)('should round to different number of decimals based on the second argument', function () {
        (0, vitest_1.expect)((0, roundTo_1.roundTo)(2.001, 3)).toBe(2.001);
        (0, vitest_1.expect)((0, roundTo_1.roundTo)(2.001)).toBe(2);
    });
    (0, vitest_1.it)('should handle small values with a larger multiplier value', function () {
        (0, vitest_1.expect)((0, roundTo_1.roundTo)(0.000234, 5)).toBe(0.00023);
    });
});
