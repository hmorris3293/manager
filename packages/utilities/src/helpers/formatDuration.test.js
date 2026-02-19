"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
var vitest_1 = require("vitest");
var formatDuration_1 = require("./formatDuration");
(0, vitest_1.describe)('formatDuration', function () {
    (0, vitest_1.it)('formats days to hours and minutes', function () {
        var dur = luxon_1.Duration.fromObject({
            days: 2,
            hours: 1,
            minutes: 1,
            seconds: 20,
        });
        (0, vitest_1.expect)((0, formatDuration_1.formatDuration)(dur)).toBe('49 hours, 1 minute');
    });
    (0, vitest_1.it)('format days in hours and minutes rounds minutes up if >=30 secs', function () {
        var dur = luxon_1.Duration.fromObject({
            days: 2,
            hours: 1,
            minutes: 1,
            seconds: 31,
        });
        (0, vitest_1.expect)((0, formatDuration_1.formatDuration)(dur)).toBe('49 hours, 2 minutes');
    });
    (0, vitest_1.it)('formats minutes to minutes and seconds', function () {
        var dur = luxon_1.Duration.fromObject({
            milliseconds: 300,
            minutes: 5,
            seconds: 1,
        });
        (0, vitest_1.expect)((0, formatDuration_1.formatDuration)(dur)).toBe('5 minutes, 1 second');
    });
    (0, vitest_1.it)('format minutes to minutes and seconds up if >=500 msecs', function () {
        var dur = luxon_1.Duration.fromObject({
            milliseconds: 600,
            minutes: 5,
            seconds: 1,
        });
        (0, vitest_1.expect)((0, formatDuration_1.formatDuration)(dur)).toBe('5 minutes, 2 seconds');
    });
    (0, vitest_1.it)('format seconds in seconds', function () {
        var dur = luxon_1.Duration.fromObject({
            milliseconds: 400,
            seconds: 1,
        });
        (0, vitest_1.expect)((0, formatDuration_1.formatDuration)(dur)).toBe('1 second');
    });
    (0, vitest_1.it)('format seconds in seconds and rounds up if >= 500msecs', function () {
        var dur = luxon_1.Duration.fromObject({
            milliseconds: 600,
            seconds: 1,
        });
        (0, vitest_1.expect)((0, formatDuration_1.formatDuration)(dur)).toBe('2 seconds');
    });
});
