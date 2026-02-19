"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllVPCIPsRequest = exports.getAllVPCsIPsRequest = exports.getAllVPCsRequest = void 0;
var api_v4_1 = require("@linode/api-v4");
var utilities_1 = require("@linode/utilities");
var getAllVPCsRequest = function (filter) {
    return (0, utilities_1.getAll)(function (params) { return (0, api_v4_1.getVPCs)(params, filter); })().then(function (data) { return data.data; });
};
exports.getAllVPCsRequest = getAllVPCsRequest;
var getAllVPCsIPsRequest = function (filter) {
    return (0, utilities_1.getAll)(function (params) { return (0, api_v4_1.getVPCsIPs)(params, filter); })().then(function (data) { return data.data; });
};
exports.getAllVPCsIPsRequest = getAllVPCsIPsRequest;
var getAllVPCIPsRequest = function (id, filter) {
    return (0, utilities_1.getAll)(function (params) { return (0, api_v4_1.getVPCIPs)(id, params, filter); })().then(function (data) { return data.data; });
};
exports.getAllVPCIPsRequest = getAllVPCIPsRequest;
