"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var createStringsFromDevices_1 = require("./createStringsFromDevices");
(0, vitest_1.describe)('LinodeRescue', function () {
    (0, vitest_1.describe)('createRescueDevicesPostObject', function () {
        (0, vitest_1.it)('should return an empty object when all are null', function () {
            var result = (0, createStringsFromDevices_1.createStringsFromDevices)({
                sda: null,
                sdb: null,
                sdc: null,
                sdd: null,
                sde: null,
                sdf: null,
                sdg: null,
                sdh: null,
            });
            var expected = {};
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)('should return IDs prepeneded by `disk-` for disks', function () {
            var result = (0, createStringsFromDevices_1.createStringsFromDevices)({
                sda: null,
                sdb: null,
                sdc: null,
                sdd: { disk_id: 456 },
                sde: null,
                sdf: { disk_id: 123 },
                sdg: null,
                sdh: null,
            });
            var expected = { sdd: 'disk-456', sdf: 'disk-123' };
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)('should return IDs prepended by `volume-` for volumes', function () {
            var result = (0, createStringsFromDevices_1.createStringsFromDevices)({
                sda: null,
                sdb: { volume_id: 123 },
                sdc: null,
                sdd: null,
                sde: { volume_id: 456 },
                sdf: null,
                sdg: null,
                sdh: null,
            });
            var expected = { sdb: 'volume-123', sde: 'volume-456' };
            (0, vitest_1.expect)(result).toEqual(expected);
        });
    });
});
