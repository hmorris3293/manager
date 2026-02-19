"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var deepStringTransform_1 = require("./deepStringTransform");
(0, vitest_1.describe)('deepStringTransform utility function', function () {
    var fn = function (s) { return s.toUpperCase(); };
    var _deepStringTransform = function (value) { return (0, deepStringTransform_1.deepStringTransform)(value, fn); };
    (0, vitest_1.it)('applies transformation function to plain strings', function () {
        (0, vitest_1.expect)(_deepStringTransform('hello-world')).toBe('HELLO-WORLD');
    });
    (0, vitest_1.it)('does not apply transform function to other types of values', function () {
        (0, vitest_1.expect)(_deepStringTransform(10)).toBe(10);
        (0, vitest_1.expect)(_deepStringTransform(true)).toBe(true);
        (0, vitest_1.expect)(_deepStringTransform(null)).toBe(null);
        (0, vitest_1.expect)(_deepStringTransform(undefined)).toBe(undefined);
    });
    (0, vitest_1.it)('applies transformation function to each string in an array', function () {
        (0, vitest_1.expect)(_deepStringTransform(['hello', 10])).toEqual(['HELLO', 10]);
        (0, vitest_1.expect)(_deepStringTransform([])).toEqual([]);
    });
    (0, vitest_1.it)('applies transformation function to each string value in an object', function () {
        var input = {
            key1: 'Hello',
            key2: {
                key3: 'World',
                key4: true,
            },
        };
        (0, vitest_1.expect)(_deepStringTransform(input)).toEqual({
            key1: 'HELLO',
            key2: {
                key3: 'WORLD',
                key4: true,
            },
        });
    });
});
