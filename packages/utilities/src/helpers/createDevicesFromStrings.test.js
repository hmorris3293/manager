"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var createDevicesFromStrings_1 = require("./createDevicesFromStrings");
(0, vitest_1.describe)('LinodeRescue', function () {
    (0, vitest_1.describe)('createRescueDevicesPostObject', function () {
        (0, vitest_1.it)('Returns the minimum requirement.', function () {
            var result = (0, createDevicesFromStrings_1.createDevicesFromStrings)({});
            var expected = {
                sda: null,
                sdb: null,
                sdc: null,
                sdd: null,
                sde: null,
                sdf: null,
                sdg: null,
                sdh: null,
            };
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)('should provide a disk_id for a given slot when provided a valid value', function () {
            var result = (0, createDevicesFromStrings_1.createDevicesFromStrings)({
                sda: 'disk-123',
                sdd: 'disk-456',
            });
            var expected = {
                sda: { disk_id: 123 },
                sdb: null,
                sdc: null,
                sdd: { disk_id: 456 },
                sde: null,
                sdf: null,
                sdg: null,
                sdh: null,
            };
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)('should provide a volume_id for a given slot when provided a valid value', function () {
            var result = (0, createDevicesFromStrings_1.createDevicesFromStrings)({
                sdb: 'volume-123',
                sde: 'volume-456',
            });
            var expected = {
                sda: null,
                sdb: { volume_id: 123 },
                sdc: null,
                sdd: null,
                sde: { volume_id: 456 },
                sdf: null,
                sdg: null,
                sdh: null,
            };
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)('should return null for a disk that is set to None', function () {
            var result = (0, createDevicesFromStrings_1.createDevicesFromStrings)({
                sda: 'none',
                sdd: 'disk-456',
            });
            var expected = {
                sda: null,
                sdb: null,
                sdc: null,
                sdd: { disk_id: 456 },
                sde: null,
                sdf: null,
                sdg: null,
                sdh: null,
            };
            (0, vitest_1.expect)(result).toEqual(expected);
        });
    });
});
