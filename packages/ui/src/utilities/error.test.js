"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var error_1 = require("./error");
(0, vitest_1.describe)('getErrorText', function () {
    (0, vitest_1.it)('should return a string error text', function () {
        (0, vitest_1.expect)((0, error_1.getErrorText)('Not Found')).toBe('Not Found');
    });
    (0, vitest_1.it)('should return an APIError error text', function () {
        (0, vitest_1.expect)((0, error_1.getErrorText)([{ reason: 'Not Found' }])).toBe('Not Found');
    });
});
