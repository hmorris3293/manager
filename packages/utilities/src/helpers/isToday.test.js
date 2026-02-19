"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
var vitest_1 = require("vitest");
var isToday_1 = require("./isToday");
(0, vitest_1.describe)('isToday helper utility', function () {
    (0, vitest_1.it)('should return true for times within the same 24 hour period', function () {
        (0, vitest_1.expect)((0, isToday_1.isToday)(luxon_1.DateTime.local().valueOf() / 1000, luxon_1.DateTime.local().plus({ hours: 5 }).valueOf() / 1000)).toBe(true);
    });
    (0, vitest_1.it)('should return true if start and end are the same', function () {
        (0, vitest_1.expect)((0, isToday_1.isToday)(luxon_1.DateTime.local().valueOf() / 1000, luxon_1.DateTime.local().valueOf() / 1000)).toBe(true);
    });
    (0, vitest_1.it)('should return false if start is more than 24 hours before end', function () {
        (0, vitest_1.expect)((0, isToday_1.isToday)(luxon_1.DateTime.local().valueOf() / 1000, luxon_1.DateTime.local().plus({ hours: 25 }).valueOf() / 1000)).toBe(false);
        (0, vitest_1.expect)((0, isToday_1.isToday)(luxon_1.DateTime.local().valueOf() / 1000, luxon_1.DateTime.local().plus({ months: 1 }).valueOf() / 1000)).toBe(false);
    });
});
