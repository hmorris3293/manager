"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthlyTraffic = exports.getTotalTraffic = exports.getTraffic = exports.formatPercentage = exports.formatNumber = exports.getMetrics = void 0;
// Returns max, average, and last for RDD data from the API, which has this
// shape: [ [n1, n2], ... ], where n1 is unix-time in milliseconds and n2 is the
// value.
var getMetrics = function (data) {
    // If there's no data
    if (!data || !Array.isArray(data) || data.length < 1) {
        return { average: 0, last: 0, length: 0, max: 0, total: 0 };
    }
    var max = 0;
    var sum = 0;
    // The data is large, so we get everything we need in one iteration
    data.forEach(function (_a, idx) {
        var _ = _a[0], value = _a[1];
        if (!value || isNaN(value)) {
            return;
        }
        if (value > max) {
            max = value;
        }
        sum += value;
    });
    var length = data.length;
    // Safeguard against dividing by 0
    var average = length > 0 ? sum / length : 0;
    var last = data[length - 1][1] || 0;
    return { average: average, last: last, length: length, max: max, total: sum };
};
exports.getMetrics = getMetrics;
var formatNumber = function (n) { return n.toFixed(2); };
exports.formatNumber = formatNumber;
var formatPercentage = function (value) { return (0, exports.formatNumber)(value) + ' %'; };
exports.formatPercentage = formatPercentage;
var getTraffic = function (averageInBits) {
    var averageInBytes = averageInBits / 8;
    // eslint-disable-next-line
    var averageBytesOverDay = averageInBytes * (60 * 60 * 24); // 86400 seconds in 24 hours
    return averageBytesOverDay;
};
exports.getTraffic = getTraffic;
var getTotalTraffic = function (inBits, outBits, length, inBitsV6, outBitsV6) {
    if (inBitsV6) {
        inBits += inBitsV6;
    }
    if (outBitsV6) {
        outBits += outBitsV6;
    }
    var averageIn = inBits / length;
    var averageOut = outBits / length;
    var inTraffic = (0, exports.getTraffic)(averageIn);
    var outTraffic = (0, exports.getTraffic)(averageOut);
    return {
        combinedTraffic: inTraffic + outTraffic,
        inTraffic: inTraffic,
        outTraffic: outTraffic,
    };
};
exports.getTotalTraffic = getTotalTraffic;
var getMonthlyTraffic = function (stats) {
    var getTrafficSum = function (records) {
        return records.reduce(function (acc, record) {
            return acc + record[1];
        }, 0);
    };
    return (getTrafficSum(stats.netv4.in) +
        getTrafficSum(stats.netv4.out) +
        getTrafficSum(stats.netv6.in) +
        getTrafficSum(stats.netv4.out));
};
exports.getMonthlyTraffic = getMonthlyTraffic;
