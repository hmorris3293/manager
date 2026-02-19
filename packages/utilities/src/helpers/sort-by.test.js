"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var sort_by_1 = require("./sort-by");
(0, vitest_1.describe)('sortByVersion', function () {
    (0, vitest_1.it)('should identify the later major version as greater', function () {
        var result = (0, sort_by_1.sortByVersion)('2.0.0', '1.0.0', 'asc');
        (0, vitest_1.expect)(result).toBeGreaterThan(0);
    });
    (0, vitest_1.it)('should identify the later minor version as greater', function () {
        var result = (0, sort_by_1.sortByVersion)('1.2.0', '1.1.0', 'asc');
        (0, vitest_1.expect)(result).toBeGreaterThan(0);
    });
    (0, vitest_1.it)('should identify the later patch version as greater', function () {
        var result = (0, sort_by_1.sortByVersion)('1.1.2', '1.1.1', 'asc');
        (0, vitest_1.expect)(result).toBeGreaterThan(0);
    });
    (0, vitest_1.it)('should identify the later minor version with differing number of digits', function () {
        var result = (0, sort_by_1.sortByVersion)('1.30', '1.3', 'asc');
        (0, vitest_1.expect)(result).toBeGreaterThan(0);
    });
    (0, vitest_1.it)('should return negative when the first version is earlier in ascending order', function () {
        var result = (0, sort_by_1.sortByVersion)('1.0.0', '2.0.0', 'asc');
        (0, vitest_1.expect)(result).toBeLessThan(0);
    });
    (0, vitest_1.it)('should return positive when the first version is earlier in descending order', function () {
        var result = (0, sort_by_1.sortByVersion)('1.0.0', '2.0.0', 'desc');
        (0, vitest_1.expect)(result).toBeGreaterThan(0);
    });
    (0, vitest_1.it)('should return zero when versions are equal', function () {
        var result = (0, sort_by_1.sortByVersion)('1.2.3', '1.2.3', 'asc');
        (0, vitest_1.expect)(result).toEqual(0);
    });
});
