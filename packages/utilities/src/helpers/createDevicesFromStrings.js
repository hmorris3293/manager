"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDevicesFromStrings = void 0;
/**
 * The `value` should be formatted as volume-123, disk-123, etc.,
 */
var createTypeRecord = function (value) {
    var _a;
    if (value === null || value === undefined || value === 'none') {
        return null;
    }
    // Given: volume-123
    var _b = value.split('-'), type = _b[0], id = _b[1]; // -> [volume, 123]
    if (type !== 'volume' && type !== 'disk') {
        return null;
    }
    var key = "".concat(type, "_id"); // -> `volume_id`
    var idAsNumber = Number(id); // -> 123
    return _a = {}, _a[key] = idAsNumber, _a; // -> { volume_id: 123 }
};
var createDevicesFromStrings = function (devices) { return ({
    sda: createTypeRecord(devices.sda),
    sdb: createTypeRecord(devices.sdb),
    sdc: createTypeRecord(devices.sdc),
    sdd: createTypeRecord(devices.sdd),
    sde: createTypeRecord(devices.sde),
    sdf: createTypeRecord(devices.sdf),
    sdg: createTypeRecord(devices.sdg),
    sdh: createTypeRecord(devices.sdh),
}); };
exports.createDevicesFromStrings = createDevicesFromStrings;
