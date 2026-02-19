"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var isNumber_1 = require("./isNumber");
(0, vitest_1.describe)('isNumber utility function', function () {
    (0, vitest_1.it)('should return true when passed a number', function () {
        (0, vitest_1.expect)((0, isNumber_1.isNumber)(0)).toBe(true);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)(1)).toBe(true);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)(-1)).toBe(true);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)(1.1)).toBe(true);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)(-1.1)).toBe(true);
    });
    (0, vitest_1.it)('should return false when passed a non-number', function () {
        (0, vitest_1.expect)((0, isNumber_1.isNumber)('0')).toBe(false);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)('1')).toBe(false);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)('-1')).toBe(false);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)('1.1')).toBe(false);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)('-1.1')).toBe(false);
        // NaN's type is "number"
        // So are Infinity and -Infinity types
        (0, vitest_1.expect)((0, isNumber_1.isNumber)(NaN)).toBe(true);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)(Infinity)).toBe(true);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)(-Infinity)).toBe(true);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)(null)).toBe(false);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)(undefined)).toBe(false);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)({})).toBe(false);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)([])).toBe(false);
        (0, vitest_1.expect)((0, isNumber_1.isNumber)(function () { return null; })).toBe(false);
    });
});
