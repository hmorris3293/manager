"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var formatStatus_1 = require("./formatStatus");
(0, vitest_1.describe)('getFormattedStatus', function () {
    (0, vitest_1.it)('should capitalize a single lowercase word', function () {
        (0, vitest_1.expect)((0, formatStatus_1.getFormattedStatus)('active')).toBe('Active');
    });
    (0, vitest_1.it)('should replace underscore with space and capitalize each word', function () {
        (0, vitest_1.expect)((0, formatStatus_1.getFormattedStatus)('in_progress')).toBe('In Progress');
    });
    (0, vitest_1.it)('should handle multiple underscores correctly', function () {
        (0, vitest_1.expect)((0, formatStatus_1.getFormattedStatus)('waiting_for_user_action')).toBe('Waiting For User Action');
    });
    (0, vitest_1.it)('should handle mixed case inputs', function () {
        (0, vitest_1.expect)((0, formatStatus_1.getFormattedStatus)('In_Progress')).toBe('In Progress');
    });
    (0, vitest_1.it)('should handle empty string', function () {
        (0, vitest_1.expect)((0, formatStatus_1.getFormattedStatus)('')).toBe('');
    });
});
