"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
var vitest_1 = require("vitest");
var formatUptime_1 = require("./formatUptime");
(0, vitest_1.describe)('Formatting uptime', function () {
    (0, vitest_1.it)('should output a string in the format Xd Yh Zm', function () {
        var value = 60 * 2 + 60 * 60 * 3 + 24;
        (0, vitest_1.expect)((0, formatUptime_1.formatUptime)(value)).toMatch('3h 2m');
    });
    (0, vitest_1.it)('should handle small values', function () {
        (0, vitest_1.expect)((0, formatUptime_1.formatUptime)(0)).toMatch('< 1 minute');
        (0, vitest_1.expect)((0, formatUptime_1.formatUptime)(10)).toMatch('< 1 minute');
    });
    (0, vitest_1.it)('should handle minutes and seconds', function () {
        (0, vitest_1.expect)((0, formatUptime_1.formatUptime)(60 * 4 + 30)).toMatch('4m 30s');
    });
    (0, vitest_1.it)('should handle hours, minutes, and seconds', function () {
        (0, vitest_1.expect)((0, formatUptime_1.formatUptime)(60 * 60 * 3 + 60 * 2)).toMatch('3h 2m');
    });
    (0, vitest_1.it)('should handle days', function () {
        (0, vitest_1.expect)((0, formatUptime_1.formatUptime)(60 * 60 * 24 * 7)).toMatch('7d 0h 0m');
    });
    (0, vitest_1.it)('should handle all the things', function () {
        (0, vitest_1.expect)((0, formatUptime_1.formatUptime)(60 * 60 * 24 * 9 + 60 * 60 * 19 + 60 * 45 + 45)).toMatch('9d 19h 45m');
    });
    (0, vitest_1.it)('should handle durations longer than a month', function () {
        (0, vitest_1.expect)((0, formatUptime_1.formatUptime)(luxon_1.Duration.fromObject({ days: 438, hours: 10, minutes: 15 }).as('seconds'))).toMatch('438d 10h 15m');
    });
    (0, vitest_1.it)('should ignore seconds for longer durations', function () {
        (0, vitest_1.expect)((0, formatUptime_1.formatUptime)(luxon_1.Duration.fromObject({
            days: 438,
            hours: 8,
            minutes: 15,
            seconds: 54,
        }).as('seconds'))).toMatch('438d 8h 15m');
    });
});
