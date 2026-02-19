"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var statMetrics_1 = require("./statMetrics");
var data = [
    [0, 0.12],
    [0, 0.04],
    [0, 2.98],
    [0, 0],
    [0, 0.7],
    [0, 1.2],
    [0, 0],
    [0, 0],
];
(0, vitest_1.describe)('Stat Metrics', function () {
    var metrics = (0, statMetrics_1.getMetrics)(data);
    (0, vitest_1.it)('returns max', function () {
        (0, vitest_1.expect)(metrics.max).toBe(2.98);
        var newData = __spreadArray(__spreadArray([], data, true), [[0, 100]], false);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)(newData).max).toBe(100.0);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)([
            [0, 0],
            [0, 0],
        ]).max).toBe(0);
    });
    (0, vitest_1.it)('returns average', function () {
        (0, vitest_1.expect)(metrics.average).toBe(0.63);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)([[0, 0]]).average).toBe(0);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)([
            [0, 0],
            [0, 0],
        ]).average).toBe(0);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)([
            [0, 0],
            [0, 1],
        ]).average).toBe(0.5);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)([
            [0, 0],
            [0, 3],
            [0, 12],
        ]).average).toBe(5);
    });
    (0, vitest_1.it)('returns last', function () {
        (0, vitest_1.expect)(metrics.last).toBe(0);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)(__spreadArray(__spreadArray([], data, true), [[0, 8]], false)).last).toBe(8);
    });
    (0, vitest_1.it)('does not crash with unexpected inputs', function () {
        var emptyResponse = { average: 0, last: 0, length: 0, max: 0, total: 0 };
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)([])).toEqual(emptyResponse);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)(undefined)).toEqual(emptyResponse);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)(null)).toEqual(emptyResponse);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)(12)).toEqual(emptyResponse);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)('hello')).toEqual(emptyResponse);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)({})).toEqual(emptyResponse);
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)([[], []])).toEqual({
            average: 0,
            last: 0,
            length: 2,
            max: 0,
            total: 0,
        });
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)([[], ['hello']])).toEqual({
            average: 0,
            last: 0,
            length: 2,
            max: 0,
            total: 0,
        });
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)([[], ['hello', 3]])).toEqual({
            average: 1.5,
            last: 3,
            length: 2,
            max: 3,
            total: 3,
        });
        (0, vitest_1.expect)((0, statMetrics_1.getMetrics)([
            [3, 'hello'],
            ['hello', 3],
        ])).toEqual({
            average: 1.5,
            last: 3,
            length: 2,
            max: 3,
            total: 3,
        });
    });
});
(0, vitest_1.describe)('total traffic', function () {
    (0, vitest_1.it)('returns total traffic given the average', function () {
        var totalTraffic = (0, statMetrics_1.getTotalTraffic)(1, 2, 2);
        (0, vitest_1.expect)(totalTraffic.inTraffic).toBe(5400);
        (0, vitest_1.expect)(totalTraffic.outTraffic).toBe(10800);
        (0, vitest_1.expect)(totalTraffic.combinedTraffic).toBe(16200);
        (0, vitest_1.expect)(totalTraffic.combinedTraffic).toEqual(totalTraffic.inTraffic + totalTraffic.outTraffic);
    });
});
(0, vitest_1.describe)('format number', function () {
    (0, vitest_1.it)('always returns two decimal places', function () {
        (0, vitest_1.expect)((0, statMetrics_1.formatNumber)(24)).toBe('24.00');
        (0, vitest_1.expect)((0, statMetrics_1.formatNumber)(0)).toBe('0.00');
        (0, vitest_1.expect)((0, statMetrics_1.formatNumber)(110)).toBe('110.00');
        (0, vitest_1.expect)((0, statMetrics_1.formatNumber)(92.078)).toBe('92.08');
        (0, vitest_1.expect)((0, statMetrics_1.formatNumber)(10000.07)).toBe('10000.07');
        (0, vitest_1.expect)((0, statMetrics_1.formatNumber)(99.99)).toBe('99.99');
        (0, vitest_1.expect)((0, statMetrics_1.formatNumber)(99.999)).toBe('100.00');
        (0, vitest_1.expect)((0, statMetrics_1.formatNumber)(99.7)).toBe('99.70');
    });
});
(0, vitest_1.describe)('formatting', function () {
    (0, vitest_1.it)('formatPercent adds percent sign', function () {
        (0, vitest_1.expect)((0, statMetrics_1.formatPercentage)(12)).toBe('12.00 %');
        (0, vitest_1.expect)((0, statMetrics_1.formatPercentage)(0)).toBe('0.00 %');
        (0, vitest_1.expect)((0, statMetrics_1.formatPercentage)(123456789)).toBe('123456789.00 %');
    });
});
