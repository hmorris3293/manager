"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var stringUtils_1 = require("./stringUtils");
(0, vitest_1.describe)('truncateAndJoinList', function () {
    var strList = ['a', 'b', 'c'];
    var bigStrList = [];
    for (var i = 0; i < 1000; i++) {
        bigStrList.push('a');
    }
    (0, vitest_1.it)('joins full lists less than max', function () {
        var result = (0, stringUtils_1.truncateAndJoinList)(strList, 5);
        (0, vitest_1.expect)(result).toBe('a, b, c');
    });
    (0, vitest_1.it)('truncates lists greater than max', function () {
        var result = (0, stringUtils_1.truncateAndJoinList)(strList, 2);
        (0, vitest_1.expect)(result).toBe('a, b, plus 1 more');
    });
    (0, vitest_1.it)('works with large lists ', function () {
        var result = (0, stringUtils_1.truncateAndJoinList)(bigStrList, 3);
        (0, vitest_1.expect)(result).toBe('a, a, a, plus 997 more');
    });
    (0, vitest_1.it)('defaults to a max of 100', function () {
        var result = (0, stringUtils_1.truncateAndJoinList)(bigStrList);
        (0, vitest_1.expect)(result).toMatch(/, plus 900 more/);
    });
    (0, vitest_1.it)('supports overriding the total amount', function () {
        // Imagine this is a response from the API with a page size of 3, but 6 results total
        var fakeApiData = {
            data: ['a', 'b', 'c'],
            results: 6,
        };
        var result = (0, stringUtils_1.truncateAndJoinList)(strList, 2, fakeApiData.results);
        (0, vitest_1.expect)(result).toMatch(/, plus 4 more/);
    });
});
(0, vitest_1.describe)('isNumeric', function () {
    (0, vitest_1.it)('should return true for a number', function () {
        (0, vitest_1.expect)((0, stringUtils_1.isNumeric)('12456')).toBe(true);
    });
    (0, vitest_1.it)('should return false for a number with a decimal', function () {
        (0, vitest_1.expect)((0, stringUtils_1.isNumeric)('1.2456')).toBe(false);
    });
    (0, vitest_1.it)('should return false for text', function () {
        (0, vitest_1.expect)((0, stringUtils_1.isNumeric)('my-linode')).toBe(false);
    });
});
