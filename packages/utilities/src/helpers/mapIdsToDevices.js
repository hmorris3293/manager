"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapIdsToDevices = void 0;
var helpers_1 = require("../helpers");
var mapIdsToDevices = function (ids, devices) {
    var _a;
    if (devices === void 0) { devices = []; }
    var deviceMap = new Map(
    // Even though the types extend Device. type insertion is still required here
    devices.map(function (device) { return [device.id, device]; }));
    if (Array.isArray(ids)) {
        return ids.map(function (id) { return deviceMap.get(id); }).filter(helpers_1.isNotNullOrUndefined);
    }
    else if (ids !== null) {
        return (_a = deviceMap.get(ids)) !== null && _a !== void 0 ? _a : null;
    }
    else {
        return null;
    }
};
exports.mapIdsToDevices = mapIdsToDevices;
