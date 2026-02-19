"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var luxon_1 = require("luxon");
var vitest_1 = require("vitest");
var useFormattedDate_1 = require("./useFormattedDate");
(0, vitest_1.describe)('useFormattedDate', function () {
    (0, vitest_1.it)('returns the correctly formatted date', function () {
        var result = (0, react_1.renderHook)(function () { return (0, useFormattedDate_1.useFormattedDate)(); }).result;
        var expectedDate = luxon_1.DateTime.local().toFormat('yyyy-MM-dd');
        (0, vitest_1.expect)(result.current).toBe(expectedDate);
    });
});
