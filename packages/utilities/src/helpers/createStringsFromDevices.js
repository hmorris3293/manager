"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStringsFromDevices = void 0;
var rdx = function (result, _a) {
    var _b, _c;
    var key = _a[0], device = _a[1];
    if (device === null) {
        return result;
    }
    if (isDisk(device)) {
        return __assign(__assign({}, result), (_b = {}, _b[key] = "disk-".concat(device.disk_id), _b));
    }
    if (isVolume(device)) {
        return __assign(__assign({}, result), (_c = {}, _c[key] = "volume-".concat(device.volume_id), _c));
    }
    return result;
};
var isDisk = function (device) {
    return typeof device.disk_id === 'number';
};
var isVolume = function (device) {
    return typeof device.volume_id === 'number';
};
var createStringsFromDevices = function (devices) {
    return Object.entries(devices).reduce(rdx, {});
};
exports.createStringsFromDevices = createStringsFromDevices;
