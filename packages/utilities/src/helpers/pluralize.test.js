"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var pluralize_1 = require("./pluralize");
(0, vitest_1.describe)('Pluralize helper function', function () {
    (0, vitest_1.it)('should pluralize when the number of items is greater than 1', function () {
        (0, vitest_1.expect)((0, pluralize_1.pluralize)('thing', 'things', 3)).toEqual('3 things');
    });
    (0, vitest_1.it)('should not pluralize when the number of items is 1', function () {
        (0, vitest_1.expect)((0, pluralize_1.pluralize)('bat', 'bats', 1)).toEqual('1 bat');
    });
    (0, vitest_1.it)('should pluralize 0 or below', function () {
        (0, vitest_1.expect)((0, pluralize_1.pluralize)('orangutan', 'orangutans', 0)).toEqual('0 orangutans');
        (0, vitest_1.expect)((0, pluralize_1.pluralize)('orangutan', 'orangutans', -4)).toEqual('-4 orangutans');
    });
});
