"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var arrayToList_1 = require("./arrayToList");
(0, vitest_1.describe)('Array to delimiter-separated list', function () {
    (0, vitest_1.it)('should return a single item as an unaltered string', function () {
        (0, vitest_1.expect)((0, arrayToList_1.arrayToList)(['hello'])).toEqual('hello');
    });
    (0, vitest_1.it)('should return a list with two items separated by "and"', function () {
        (0, vitest_1.expect)((0, arrayToList_1.arrayToList)(['hello', 'goodbye'])).toEqual('hello and goodbye');
    });
    (0, vitest_1.it)('should return a list with three or more items as Oxford comma separated', function () {
        (0, vitest_1.expect)((0, arrayToList_1.arrayToList)(['hello', 'goodbye', 'good riddance'])).toEqual('hello, goodbye, and good riddance');
        (0, vitest_1.expect)((0, arrayToList_1.arrayToList)(['apples', 'peas', 'carrots', 'peaches'])).toEqual('apples, peas, carrots, and peaches');
    });
    (0, vitest_1.it)('should use the delimiter provided', function () {
        (0, vitest_1.expect)((0, arrayToList_1.arrayToList)(['Mumbai, IN', 'Toronto, ON', 'Sydney, AU', 'Atlanta, GA'], ';')).toEqual('Mumbai, IN; Toronto, ON; Sydney, AU; and Atlanta, GA');
    });
    (0, vitest_1.it)('should handle undefined input', function () {
        (0, vitest_1.expect)((0, arrayToList_1.arrayToList)(undefined)).toEqual('');
    });
});
