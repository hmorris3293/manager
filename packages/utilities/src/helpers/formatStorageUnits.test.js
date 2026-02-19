"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var formatStorageUnits_1 = require("./formatStorageUnits");
(0, vitest_1.describe)('formatStorageUnits', function () {
    (0, vitest_1.it)('returns the original string when the string does not contain a storage unit', function () {
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('Linode High Memory')).toBe('Linode High Memory');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('Linode GB')).toBe('Linode GB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('')).toBe('');
    });
    (0, vitest_1.it)('returns a string that contains the storage units and measurement separated by a single space character', function () {
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('Nanode 1GB')).toBe('Nanode 1 GB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('Linode 4GB')).toBe('Linode 4 GB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10kB')).toBe('10 kB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10MB')).toBe('10 MB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10GB')).toBe('10 GB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10TB')).toBe('10 TB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10PB')).toBe('10 PB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10EB')).toBe('10 EB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10ZB')).toBe('10 ZB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10YB')).toBe('10 YB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10kiB')).toBe('10 kiB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10MiB')).toBe('10 MiB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10GiB')).toBe('10 GiB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10TiB')).toBe('10 TiB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10PiB')).toBe('10 PiB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10EiB')).toBe('10 EiB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10ZiB')).toBe('10 ZiB');
        (0, vitest_1.expect)((0, formatStorageUnits_1.formatStorageUnits)('10YiB')).toBe('10 YiB');
    });
});
