"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var unitConversions_1 = require("./unitConversions");
(0, vitest_1.describe)('conversion helper functions', function () {
    (0, vitest_1.describe)('readableBytes', function () {
        (0, vitest_1.it)('should return "0 bytes" if bytes === 0', function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(0).formatted).toBe('0 bytes');
        });
        (0, vitest_1.it)("should handle negative values, unless it' disabled by the handleNegatives option", function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(-123).formatted).toBe('-123 bytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(-123).value).toBe(-123);
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(-1048576).formatted).toBe('-1 MB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(-1048576).value).toBe(-1);
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(-1048576, { handleNegatives: false }).formatted).toBe('0 bytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(-0.5, { handleNegatives: false }).formatted).toBe('0 bytes');
        });
        (0, vitest_1.it)('should return B if < 1024', function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1023).formatted).toBe('1023 bytes');
        });
        (0, vitest_1.it)('handles KB, MB, GB', function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024).formatted).toBe('1 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1048576).formatted).toBe('1 MB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1073741824).formatted).toBe('1 GB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1073741824 * 40).formatted).toBe('40 GB');
        });
        (0, vitest_1.it)('returns results with two decimal places if x < 10', function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 1.5).formatted).toBe('1.5 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 1.75).formatted).toBe('1.75 KB');
        });
        (0, vitest_1.it)('returns results with one decimal place if 10 >= x < 100', function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 12.75).formatted).toBe('12.8 KB');
        });
        (0, vitest_1.it)('returns results rounded to whole number if x >= 100', function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 100).formatted).toBe('100 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 100.25).formatted).toBe('100 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 100.5).formatted).toBe('101 KB');
        });
        (0, vitest_1.it)('respects rounding when specified with number', function () {
            var round0 = { round: 0 };
            var round1 = { round: 1 };
            var round2 = { round: 2 };
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 9.72, round0).formatted).toBe('10 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 9.72, round1).formatted).toBe('9.7 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 9.72, round2).formatted).toBe('9.72 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 89.99, round0).formatted).toBe('90 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 89.99, round1).formatted).toBe('90 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 89.99, round2).formatted).toBe('89.99 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 100.25, round0).formatted).toBe('100 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 100.25, round1).formatted).toBe('100.3 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 100.25, round2).formatted).toBe('100.25 KB');
        });
        (0, vitest_1.it)('respects rounding when given specific units', function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 9.723, { round: { KB: 3 } }).formatted).toBe('9.723 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 9.723, { round: { MB: 3 } }).formatted).toBe('9.72 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 1024 * 143.22, { round: { MB: 2 } }).formatted).toBe('143.22 MB');
        });
        (0, vitest_1.it)("doesn't return units higher than the specific max unit", function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 1024 * 1024 * 50, { maxUnit: 'MB' }).formatted).toBe('51200 MB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 1024 * 1024 * 50, { maxUnit: 'KB' }).formatted).toBe('52428800 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 1024 * 1024 * 50, { maxUnit: 'bytes' }).formatted).toBe('53687091200 bytes');
        });
        (0, vitest_1.it)('returns the given unit if specified', function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 1024 * 1024 * 50, { unit: 'MB' }).formatted).toBe('51200 MB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 1024 * 1024 * 50, { unit: 'GB' }).formatted).toBe('50 GB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024 * 1024 * 1024 * 50, { unit: 'TB' }).formatted).toBe('0.05 TB');
        });
        (0, vitest_1.it)('handles inputs that are <= 1', function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1).formatted).toBe('1 byte');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(0.5).formatted).toBe('0.5 bytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(-0.5).formatted).toBe('-0.5 bytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(0.01, { maxUnit: 'bytes' }).formatted).toBe('0.01 bytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(0.5, { unit: 'MB' }).formatted).toBe('0 MB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(0.3, { round: 0 }).formatted).toBe('0 bytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(0.5, { round: 0 }).formatted).toBe('1 byte');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(0.5, { round: 1 }).formatted).toBe('0.5 bytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(0.05, { round: 1 }).formatted).toBe('0.1 bytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(0.05, { round: 2 }).formatted).toBe('0.05 bytes');
        });
        (0, vitest_1.it)('returns 0 bytes if the input is invalid', function () {
            // This behavior is debatable. It's for potential situations where we mistakenly pass a
            // nun-number value to readableBytes (something we didn't handle/expect from the API, etc.).
            // Before adding this behavior, we were displaying "NaN bytes" in these situations. We could
            // throw an error and let consumers handle each case (or display an error message) but this
            // seemed the most straightforward path to me.
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(undefined).value).toBe(0);
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(undefined).formatted).toBe('0 bytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)('invalid').formatted).toBe('0 bytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)({}).formatted).toBe('0 bytes');
        });
        (0, vitest_1.it)('allows custom unit labels', function () {
            var unitLabels = {
                GB: 'Gigabytes',
                KB: 'Kilobytes',
                MB: 'Megabytes',
                TB: 'Terabytes',
                bytes: 'B',
            };
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1, { unitLabels: unitLabels }).unit).toBe('B');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024, { unitLabels: unitLabels }).unit).toBe('Kilobytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1048576, { unitLabels: unitLabels }).unit).toBe('Megabytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1073741824, { unitLabels: unitLabels }).unit).toBe('Gigabytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1073741824 * 10000, { unitLabels: unitLabels }).unit).toBe('Terabytes');
        });
        (0, vitest_1.it)('only affects values with custom labels that have been specified', function () {
            var unitLabels = {
                bytes: 'B',
            };
            // Custom unit label:
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1, { unitLabels: unitLabels }).unit).toBe('B');
            // Default unit label (not affected):
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1024, { unitLabels: unitLabels }).unit).toBe('KB');
        });
        (0, vitest_1.it)('correctly pluralizes "bytes"', function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1).unit).toBe('byte');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1).formatted).toBe('1 byte');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(-1).unit).toBe('byte');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(-1).formatted).toBe('-1 byte');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(2).unit).toBe('bytes');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(2).formatted).toBe('2 bytes');
        });
        (0, vitest_1.it)('handles base 10 when the option is given', function () {
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1000, { base10: true }).formatted).toBe('1 KB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1000 * 1000, { base10: true }).formatted).toBe('1 MB');
            (0, vitest_1.expect)((0, unitConversions_1.readableBytes)(1000 * 1000 * 1000, { base10: true }).formatted).toBe('1 GB');
        });
    });
    (0, vitest_1.describe)('convertBytesToTarget', function () {
        (0, vitest_1.it)('should convert bytes to kilobytes correctly', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertBytesToTarget)('KB', 1024)).toBe(1);
            (0, vitest_1.expect)((0, unitConversions_1.convertBytesToTarget)('KB', 5 * 1024)).toBe(5);
        });
        (0, vitest_1.it)('should convert bytes to megabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertBytesToTarget)('MB', 5 * 1024 * 1024)).toBe(5);
        });
        (0, vitest_1.it)("should return value unchanged if unit is 'bytes'", function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertBytesToTarget)('bytes', 1919)).toBe(1919);
        });
        (0, vitest_1.it)('should convert to gigabytes correctly', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertBytesToTarget)('GB', 2 * 1024 * 1024 * 1024)).toBe(2);
        });
    });
    (0, vitest_1.describe)('convertStorageUnit', function () {
        var base = 1024;
        // Bytes
        (0, vitest_1.it)('should convert bytes to bytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('B', 5 * Math.pow(base, 0), 'B')).toBe(5);
        });
        (0, vitest_1.it)('should convert bytes to kilobytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('B', 5 * Math.pow(base, 1), 'KB')).toBe(5);
        });
        (0, vitest_1.it)('should convert bytes to megabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('B', 5 * Math.pow(base, 2), 'MB')).toBe(5);
        });
        (0, vitest_1.it)('should convert bytes to gigabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('B', 5 * Math.pow(base, 3), 'GB')).toBe(5);
        });
        (0, vitest_1.it)('should convert bytes to terabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('B', 5 * Math.pow(base, 4), 'TB')).toBe(5);
        });
        // Kilobytes
        (0, vitest_1.it)('should convert kilobytes to kilobytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('KB', 5 * Math.pow(base, 0), 'KB')).toBe(5);
        });
        (0, vitest_1.it)('should convert kilobytes to meagabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('KB', 5 * Math.pow(base, 1), 'MB')).toBe(5);
        });
        (0, vitest_1.it)('should convert kilobytes to gigabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('KB', 5 * Math.pow(base, 2), 'GB')).toBe(5);
        });
        (0, vitest_1.it)('should convert kilobytes to terabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('KB', 5 * Math.pow(base, 3), 'TB')).toBe(5);
        });
        (0, vitest_1.it)('should convert kilobytes to bytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('KB', 5, 'B')).toBe(5 * Math.pow(base, 1));
        });
        // Megabytes
        (0, vitest_1.it)('should convert megabytes to megabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('MB', 5 * Math.pow(base, 0), 'MB')).toBe(5);
        });
        (0, vitest_1.it)('should convert megabytes to gigabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('MB', 5 * Math.pow(base, 1), 'GB')).toBe(5);
        });
        (0, vitest_1.it)('should convert megabytes to terabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('MB', 5 * Math.pow(base, 2), 'TB')).toBe(5);
        });
        (0, vitest_1.it)('should convert megabytes to kilobytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('MB', 5, 'KB')).toBe(5 * Math.pow(base, 1));
        });
        (0, vitest_1.it)('should convert megabytes to bytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('MB', 5, 'B')).toBe(5 * Math.pow(base, 2));
        });
        // Gigabytes
        (0, vitest_1.it)('should convert gigabytes to gigabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('GB', 5 * Math.pow(base, 0), 'GB')).toBe(5);
        });
        (0, vitest_1.it)('should convert gigabytes to terabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('GB', 5 * Math.pow(base, 1), 'TB')).toBe(5);
        });
        (0, vitest_1.it)('should convert gigabytes to megabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('GB', 5, 'MB')).toBe(5 * Math.pow(base, 1));
        });
        (0, vitest_1.it)('should convert gigabytes to kilobytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('GB', 5, 'KB')).toBe(5 * Math.pow(base, 2));
        });
        (0, vitest_1.it)('should convert gigabytes to bytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('GB', 5, 'B')).toBe(5 * Math.pow(base, 3));
        });
        // Terabytes
        (0, vitest_1.it)('should convert terabytes to terabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('TB', 5 * Math.pow(base, 0), 'TB')).toBe(5);
        });
        (0, vitest_1.it)('should convert terabytes to gigabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('TB', 5, 'GB')).toBe(5 * Math.pow(base, 1));
        });
        (0, vitest_1.it)('should convert gigabytes to megabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('TB', 5, 'MB')).toBe(5 * Math.pow(base, 2));
        });
        (0, vitest_1.it)('should convert gigabytes to kilobytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('TB', 5, 'KB')).toBe(5 * Math.pow(base, 3));
        });
        (0, vitest_1.it)('should convert gigabytes to bytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertStorageUnit)('TB', 5, 'B')).toBe(5 * Math.pow(base, 4));
        });
    });
    (0, vitest_1.describe)('convertMegabytesTo', function () {
        var oneByteInMegabytes = Number.parseFloat('9.5367431640625e-7');
        var oneKilobyteInMegabytes = 0.0009765625;
        var oneGigabyteInMegabytes = 1024;
        var rationalGigabyteQuantity = 1377.28;
        var rationalKilobyteQuantity = 0.0013134765625;
        (0, vitest_1.it)('should convert megabytes to bytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertMegabytesTo)(oneByteInMegabytes)).toBe('1 bytes');
        });
        (0, vitest_1.it)('should convert megabytes to kilobytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertMegabytesTo)(oneKilobyteInMegabytes)).toBe('1.00 KB');
        });
        (0, vitest_1.it)('should convert megabytes to gigabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertMegabytesTo)(oneGigabyteInMegabytes)).toBe('1.00 GB');
        });
        (0, vitest_1.it)('should only return whole numbers when the removeDecimals argument is passed when the result is measured in gigabytes', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertMegabytesTo)(oneGigabyteInMegabytes, true)).toBe('1 GB');
        });
        (0, vitest_1.it)('should return two decimals of precision for quantities between whole numbers', function () {
            (0, vitest_1.expect)((0, unitConversions_1.convertMegabytesTo)(rationalKilobyteQuantity)).toBe('1.34 KB');
            (0, vitest_1.expect)((0, unitConversions_1.convertMegabytesTo)(rationalGigabyteQuantity)).toBe('1.34 GB');
        });
    });
});
