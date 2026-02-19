"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var escapeRegExp_1 = require("./escapeRegExp");
(0, vitest_1.describe)('escapeRegExp utility function', function () {
    (0, vitest_1.it)('escapes special characters', function () {
        (0, vitest_1.expect)((0, escapeRegExp_1.escapeRegExp)('?')).toBe('\\?');
        (0, vitest_1.expect)((0, escapeRegExp_1.escapeRegExp)('\\')).toBe('\\\\');
        (0, vitest_1.expect)((0, escapeRegExp_1.escapeRegExp)('{')).toBe('\\{');
    });
    (0, vitest_1.it)('leaves strings without special characters untouched', function () {
        (0, vitest_1.expect)((0, escapeRegExp_1.escapeRegExp)('hello world')).toBe('hello world');
        (0, vitest_1.expect)((0, escapeRegExp_1.escapeRegExp)('')).toBe('');
    });
});
