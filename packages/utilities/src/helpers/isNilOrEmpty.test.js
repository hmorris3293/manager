"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var isNilOrEmpty_1 = require("./isNilOrEmpty");
(0, vitest_1.describe)('isNilOrEmpty function', function () {
    (0, vitest_1.it)('should return true if variable is null or undefined or empty object', function () {
        var x = null;
        var y = undefined;
        var obj = {};
        var arr = [];
        var set = new Set();
        var map = new Map();
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(x)).toBe(true);
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(y)).toBe(true);
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(obj)).toBe(true);
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(arr)).toBe(true);
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(set)).toBe(true);
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(map)).toBe(true);
    });
    (0, vitest_1.it)('should return false if variable is of not empty', function () {
        var str = 'test';
        var num = 15;
        var obj = { key: 'value' };
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(str)).toBe(false);
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(num)).toBe(false);
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(obj)).toBe(false);
    });
    (0, vitest_1.it)('should return false if an array, set or map is of not empty', function () {
        var arr = [1, 2, 3];
        var set = new Set([1, 2, 3]);
        var map = new Map([['key', 'value']]);
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(arr)).toBe(false);
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(set)).toBe(false);
        (0, vitest_1.expect)((0, isNilOrEmpty_1.isNilOrEmpty)(map)).toBe(false);
    });
});
