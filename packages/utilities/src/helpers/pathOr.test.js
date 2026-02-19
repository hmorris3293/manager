"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var pathOr_1 = require("./pathOr");
(0, vitest_1.describe)('pathOr helper function', function () {
    (0, vitest_1.it)('should return the value for a valid key in a simple object', function () {
        var obj = { a: 1, b: 2, c: 3 };
        (0, vitest_1.expect)((0, pathOr_1.pathOr)(0, ['b'], obj)).toBe(2);
    });
    (0, vitest_1.it)('should return the default value if the key is missing in a simple object', function () {
        var obj = { a: 1, b: 2 };
        (0, vitest_1.expect)((0, pathOr_1.pathOr)(0, ['c'], obj)).toBe(0);
    });
    (0, vitest_1.it)('should return a value from a deeply nested object', function () {
        var obj = { a: { b: { c: { d: 5 } } } };
        (0, vitest_1.expect)((0, pathOr_1.pathOr)(0, ['a', 'b', 'c', 'd'], obj)).toBe(5);
    });
    (0, vitest_1.it)('should return the default value if a nested path is invalid', function () {
        var obj = { a: { b: { c: { d: 5 } } } };
        (0, vitest_1.expect)((0, pathOr_1.pathOr)(0, ['a', 'b', 'x', 'y'], obj)).toBe(0);
    });
    (0, vitest_1.it)('should access values inside an array of objects', function () {
        var obj = [{ id: 1 }, { id: 2, name: 'Test' }];
        (0, vitest_1.expect)((0, pathOr_1.pathOr)('N/A', [1, 'name'], obj)).toBe('Test');
    });
    (0, vitest_1.it)('should return the default value for missing keys in an array of objects', function () {
        var obj = [{ id: 1 }, { id: 2 }];
        (0, vitest_1.expect)((0, pathOr_1.pathOr)('N/A', [1, 'name'], obj)).toBe('N/A');
    });
    (0, vitest_1.it)('should access values in an object containing arrays', function () {
        var obj = { a: [10, 20, 30], b: [40, 50] };
        (0, vitest_1.expect)((0, pathOr_1.pathOr)(0, ['a', 1], obj)).toBe(20);
    });
    (0, vitest_1.it)('should return the default value if the index is out of bounds', function () {
        var obj = { a: [10, 20] };
        (0, vitest_1.expect)((0, pathOr_1.pathOr)(-1, ['a', 5], obj)).toBe(-1);
    });
    (0, vitest_1.it)('should access elements in a pure array', function () {
        var obj = [100, 200, 300];
        (0, vitest_1.expect)((0, pathOr_1.pathOr)(0, [2], obj)).toBe(300);
    });
    (0, vitest_1.it)('should return the default value for out-of-bounds array access', function () {
        var obj = [100, 200, 300];
        (0, vitest_1.expect)((0, pathOr_1.pathOr)(0, [5], obj)).toBe(0);
    });
    (0, vitest_1.it)('should return the default value when the object is undefined', function () {
        (0, vitest_1.expect)((0, pathOr_1.pathOr)('default', ['a', 'b'], undefined)).toBe('default');
    });
    (0, vitest_1.it)('should return the entire object if the path is empty', function () {
        var obj = { a: 1 };
        (0, vitest_1.expect)((0, pathOr_1.pathOr)('default', [], obj)).toEqual(obj);
    });
    (0, vitest_1.it)('should return the default value when encountering null in the path', function () {
        var obj = { a: { b: null } };
        (0, vitest_1.expect)((0, pathOr_1.pathOr)('default', ['a', 'b', 'c'], obj)).toBe('default');
    });
    (0, vitest_1.it)('should return the default value for non-existent nested properties', function () {
        var obj = { a: { b: { c: 10 } } };
        (0, vitest_1.expect)((0, pathOr_1.pathOr)('not found', ['a', 'x', 'y'], obj)).toBe('not found');
    });
});
