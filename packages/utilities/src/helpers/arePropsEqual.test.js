"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var arePropsEqual_1 = require("./arePropsEqual");
(0, vitest_1.describe)('shallowCompareProps', function () {
    var prevProps = {
        a: 1,
        b: 2,
        c: [3, 4],
    };
    (0, vitest_1.it)('should return `true` if the given props are shallowly equal.', function () {
        var nextProps = {
            a: 1,
            b: 2,
            c: [3, 4],
        };
        var result1 = (0, arePropsEqual_1.arePropsEqual)(['a'], prevProps, nextProps);
        var result2 = (0, arePropsEqual_1.arePropsEqual)(['a', 'b'], prevProps, nextProps);
        (0, vitest_1.expect)(result1).toBe(true);
        (0, vitest_1.expect)(result2).toBe(true);
    });
    (0, vitest_1.it)('should return `false`` if the given props are NOT shallowly equal.', function () {
        var nextProps = {
            a: 10,
            b: 20,
            c: [3, 4],
        };
        var result1 = (0, arePropsEqual_1.arePropsEqual)(['a'], prevProps, nextProps);
        var result2 = (0, arePropsEqual_1.arePropsEqual)(['a', 'b'], prevProps, nextProps);
        var result3 = (0, arePropsEqual_1.arePropsEqual)(['c'], prevProps, nextProps);
        (0, vitest_1.expect)(result1).toBe(false);
        (0, vitest_1.expect)(result2).toBe(false);
        (0, vitest_1.expect)(result3).toBe(false);
    });
});
