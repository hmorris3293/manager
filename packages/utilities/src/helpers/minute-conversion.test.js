"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var minute_conversion_1 = require("./minute-conversion");
(0, vitest_1.describe)('Minute Conversion Utils', function () {
    (0, vitest_1.it)('should convert minutes to hours', function () {
        (0, vitest_1.expect)((0, minute_conversion_1.convertMinutesTo)(120, 'hours', true)).toBe('2,0');
        (0, vitest_1.expect)((0, minute_conversion_1.convertMinutesTo)(120, 'hours', false)).toBe('2');
        (0, vitest_1.expect)((0, minute_conversion_1.convertMinutesTo)(140, 'hours', true)).toBe('2,20');
        (0, vitest_1.expect)((0, minute_conversion_1.convertMinutesTo)(120, 'hours', false)).toBe('2');
        (0, vitest_1.expect)((0, minute_conversion_1.convertMinutesTo)(0, 'hours', false)).toBe('0');
    });
    (0, vitest_1.it)('should convert minutes to days', function () {
        (0, vitest_1.expect)((0, minute_conversion_1.convertMinutesTo)(1440, 'days', true)).toBe('1,0');
        (0, vitest_1.expect)((0, minute_conversion_1.convertMinutesTo)(1500, 'days', false)).toBe('1');
        (0, vitest_1.expect)((0, minute_conversion_1.convertMinutesTo)(1500, 'days', true)).toBe('1,60');
        (0, vitest_1.expect)((0, minute_conversion_1.convertMinutesTo)(2800, 'days', true)).toBe('1,1360');
        (0, vitest_1.expect)((0, minute_conversion_1.convertMinutesTo)(0, 'days', false)).toBe('0');
    });
});
(0, vitest_1.describe)('Human-Readable Minute Conversion', function () {
    (0, vitest_1.it)('should return days, hours, and minutes', function () {
        (0, vitest_1.expect)((0, minute_conversion_1.generateMigrationTimeString)(1440)).toBe("1 day and 0 minutes");
        (0, vitest_1.expect)((0, minute_conversion_1.generateMigrationTimeString)(1500)).toBe("1 day, 1 hour, and 0 minutes");
        (0, vitest_1.expect)((0, minute_conversion_1.generateMigrationTimeString)(2800)).toBe("1 day, 22 hours, and 40 minutes");
        (0, vitest_1.expect)((0, minute_conversion_1.generateMigrationTimeString)(0)).toBe("0 minutes");
        (0, vitest_1.expect)((0, minute_conversion_1.generateMigrationTimeString)(2820)).toBe("1 day, 23 hours, and 0 minutes");
        (0, vitest_1.expect)((0, minute_conversion_1.generateMigrationTimeString)(2880)).toBe("2 days and 0 minutes");
    });
});
(0, vitest_1.describe)('Event seconds conversion', function () {
    (0, vitest_1.it)('should format event seconds correctly', function () {
        (0, vitest_1.expect)((0, minute_conversion_1.formatEventSeconds)(null)).toBe('');
        (0, vitest_1.expect)((0, minute_conversion_1.formatEventSeconds)(undefined)).toBe('');
        (0, vitest_1.expect)((0, minute_conversion_1.formatEventSeconds)(0)).toBe('');
        (0, vitest_1.expect)((0, minute_conversion_1.formatEventSeconds)(3600)).toBe('1 hour');
        (0, vitest_1.expect)((0, minute_conversion_1.formatEventSeconds)(3660)).toBe('1 hour, 1 minute');
        (0, vitest_1.expect)((0, minute_conversion_1.formatEventSeconds)(7300)).toBe('2 hours, 1 minute');
        (0, vitest_1.expect)((0, minute_conversion_1.formatEventSeconds)(7500)).toBe('2 hours, 5 minutes');
        (0, vitest_1.expect)((0, minute_conversion_1.formatEventSeconds)(60)).toBe('1 minute');
        (0, vitest_1.expect)((0, minute_conversion_1.formatEventSeconds)(80)).toBe('1 minute, 20 seconds');
        (0, vitest_1.expect)((0, minute_conversion_1.formatEventSeconds)(120)).toBe('2 minutes');
    });
});
