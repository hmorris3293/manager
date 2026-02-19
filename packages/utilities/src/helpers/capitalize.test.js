"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var capitalize_1 = require("./capitalize");
(0, vitest_1.describe)('capitalize', function () {
    (0, vitest_1.it)('should return capitalized string', function () {
        (0, vitest_1.expect)((0, capitalize_1.capitalize)('hello world')).toBe('Hello world');
    });
});
(0, vitest_1.describe)('capitalize', function () {
    (0, vitest_1.it)('should return string with all words capitalized', function () {
        (0, vitest_1.expect)((0, capitalize_1.capitalizeAllWords)('hello world')).toBe('Hello World');
    });
});
