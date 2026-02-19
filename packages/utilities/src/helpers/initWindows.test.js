"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var initWindows_1 = require("./initWindows");
var timezone1 = 'America/New_York';
var timezone2 = 'Europe/London';
(0, vitest_1.describe)('initWindows', function () {
    (0, vitest_1.it)('should have "Choose a Time" as the first option if the "unshift" argument is true', function () {
        (0, vitest_1.expect)((0, initWindows_1.initWindows)(timezone1, true)[0][0]).toEqual('Choose a time');
        (0, vitest_1.expect)((0, initWindows_1.initWindows)(timezone1, true)).toHaveLength(13); // Twelve 2-hour windows, plus the 'Choose a time' element
    });
    (0, vitest_1.it)('should not have "Choose a Time" as the first option if the "unshift" argument is not true', function () {
        (0, vitest_1.expect)((0, initWindows_1.initWindows)(timezone2)[0][0]).not.toEqual('Choose a time');
        (0, vitest_1.expect)((0, initWindows_1.initWindows)(timezone2)).toHaveLength(12);
    });
});
