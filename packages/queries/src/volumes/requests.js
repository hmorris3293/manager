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
exports.getAllVolumes = exports.getAllVolumeTypes = void 0;
var api_v4_1 = require("@linode/api-v4");
var utilities_1 = require("@linode/utilities");
var getAllVolumeTypes = function () {
    return (0, utilities_1.getAll)(function (params) { return (0, api_v4_1.getVolumeTypes)(params); })().then(function (data) { return data.data; });
};
exports.getAllVolumeTypes = getAllVolumeTypes;
var getAllVolumes = function (passedParams, passedFilter) {
    if (passedParams === void 0) { passedParams = {}; }
    if (passedFilter === void 0) { passedFilter = {}; }
    return (0, utilities_1.getAll)(function (params, filter) {
        return (0, api_v4_1.getVolumes)(__assign(__assign({}, params), passedParams), __assign(__assign({}, filter), passedFilter));
    })().then(function (data) { return data.data; });
};
exports.getAllVolumes = getAllVolumes;
