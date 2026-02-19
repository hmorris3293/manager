"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var truncate_1 = require("./truncate");
(0, vitest_1.describe)('truncate', function () {
    var stringOver140 = (0, truncate_1.truncate)("hello world hello world hello world hello world hello world hello world hello world \n    hello world hello world hello world hello world hello world hello world hello world \n    hello world hello world hello world hello world hello world hello world hello world\n    hello world hello world hello world hello world hello world hello world hello world", 140);
    var stringUnder140 = (0, truncate_1.truncate)('hello world hello world hello world hello world', 140);
    (0, vitest_1.it)('string over 140 + 4 chars should contain an ellipses as last 3 chars', function () {
        (0, vitest_1.expect)(stringOver140.substr(stringOver140.length - 3)).toBe('...');
    });
    (0, vitest_1.it)('string under 140 + 4 chars should not contain an ellipses as last 3 chars', function () {
        (0, vitest_1.expect)(stringUnder140.substr(stringUnder140.length - 3)).not.toBe('...');
    });
});
(0, vitest_1.describe)('truncateMiddle', function () {
    (0, vitest_1.it)('returns strings under the max unchanged', function () {
        (0, vitest_1.expect)((0, truncate_1.truncateMiddle)('hello-world.txt')).toBe('hello-world.txt');
    });
    (0, vitest_1.it)('adds an ellipsis to the middle of the string if over max', function () {
        (0, vitest_1.expect)((0, truncate_1.truncateMiddle)('aaaaaaaaaaaaaaaaaaaa.txt', 10)).toBe('aaa....txt');
    });
    (0, vitest_1.it)('works with a maxLength of 5 (minimum)', function () {
        (0, vitest_1.expect)((0, truncate_1.truncateMiddle)('bb.txt', 5)).toBe('b...t');
    });
});
(0, vitest_1.describe)('truncateEnd', function () {
    (0, vitest_1.it)('returns strings under the max unchanged', function () {
        (0, vitest_1.expect)((0, truncate_1.truncateEnd)('hello-world.txt')).toBe('hello-world.txt');
    });
    (0, vitest_1.it)('adds an ellipsis to the middle of the string if over max', function () {
        (0, vitest_1.expect)((0, truncate_1.truncateEnd)('aaaaaaaaaaaaaaaaaaaa.txt', 10)).toBe('aaaaaaa...');
    });
    (0, vitest_1.it)('works with a maxLength of 4 (minimum)', function () {
        (0, vitest_1.expect)((0, truncate_1.truncateEnd)('bb.txt', 4)).toBe('b...');
    });
});
