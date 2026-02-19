"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllRegionAvailabilitiesRequest = exports.getAllRegionsRequest = void 0;
var api_v4_1 = require("@linode/api-v4");
var utilities_1 = require("@linode/utilities");
var getAllRegionsRequest = function () {
    return (0, utilities_1.getAll)(function (params) { return (0, api_v4_1.getRegions)(params); })().then(function (data) { return data.data; });
};
exports.getAllRegionsRequest = getAllRegionsRequest;
var getAllRegionAvailabilitiesRequest = function () {
    return (0, utilities_1.getAll)(function (params, filters) {
        return (0, api_v4_1.getRegionAvailabilities)(params, filters);
    })().then(function (data) { return data.data; });
};
exports.getAllRegionAvailabilitiesRequest = getAllRegionAvailabilitiesRequest;
