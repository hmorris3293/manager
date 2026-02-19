"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDomainRecords = exports.getAllDomains = void 0;
var api_v4_1 = require("@linode/api-v4");
var utilities_1 = require("@linode/utilities");
var getAllDomains = function () {
    return (0, utilities_1.getAll)(function (params) { return (0, api_v4_1.getDomains)(params); })().then(function (data) { return data.data; });
};
exports.getAllDomains = getAllDomains;
var getAllDomainRecords = function (domainId) {
    return (0, utilities_1.getAll)(function (params) { return (0, api_v4_1.getDomainRecords)(domainId, params); })().then(function (_a) {
        var data = _a.data;
        return data;
    });
};
exports.getAllDomainRecords = getAllDomainRecords;
