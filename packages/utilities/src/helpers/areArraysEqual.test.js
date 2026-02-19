"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var areArraysEqual_1 = require("./areArraysEqual");
(0, vitest_1.describe)('compare arrays', function () {
    var array1 = ['104.237.150.6', '192.168.216.240'];
    (0, vitest_1.it)('should return `true` if the given arrays are the same.', function () {
        var array2 = ['104.237.150.6', '192.168.216.240'];
        var result = (0, areArraysEqual_1.areArraysEqual)(array1, array2);
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)('should return `false` if the given arrays contain different data types', function () {
        var array2 = [10, 2];
        var result = (0, areArraysEqual_1.areArraysEqual)(array1, array2);
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)('should return `false` if the given arrays have the same elements in different order.', function () {
        var array2 = ['192.168.216.240', '104.237.150.6'];
        var result = (0, areArraysEqual_1.areArraysEqual)(array1, array2);
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)('should return `false` if the given arrays have different values', function () {
        var array3 = ['104.237.150.6', '192.168.216.241'];
        var result = (0, areArraysEqual_1.areArraysEqual)(array1, array3);
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)('should return `false` if the given arrays have different sizes', function () {
        var array4 = [
            '104.237.150.6',
            '192.168.216.240',
            '143.42.184.169',
        ];
        var result = (0, areArraysEqual_1.areArraysEqual)(array1, array4);
        (0, vitest_1.expect)(result).toBe(false);
    });
});
