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
exports.getAllLinodeTypes = exports.getAllLinodeDisks = exports.getAllLinodeFirewalls = exports.getAllLinodeConfigs = exports.getAllLinodeKernelsRequest = exports.getAllLinodesRequest = void 0;
var api_v4_1 = require("@linode/api-v4");
var utilities_1 = require("@linode/utilities");
var getAllLinodesRequest = function (passedParams, passedFilter) {
    if (passedParams === void 0) { passedParams = {}; }
    if (passedFilter === void 0) { passedFilter = {}; }
    return (0, utilities_1.getAll)(function (params, filter) {
        return (0, api_v4_1.getLinodes)(__assign(__assign({}, params), passedParams), __assign(__assign({}, filter), passedFilter));
    })().then(function (data) { return data.data; });
};
exports.getAllLinodesRequest = getAllLinodesRequest;
var getAllLinodeKernelsRequest = function (passedParams, passedFilter) {
    if (passedParams === void 0) { passedParams = {}; }
    if (passedFilter === void 0) { passedFilter = {}; }
    return (0, utilities_1.getAll)(function (params, filter) {
        return (0, api_v4_1.getLinodeKernels)(__assign(__assign({}, params), passedParams), __assign(__assign({}, filter), passedFilter));
    })().then(function (data) { return data.data; });
};
exports.getAllLinodeKernelsRequest = getAllLinodeKernelsRequest;
var getAllLinodeConfigs = function (id) {
    return (0, utilities_1.getAll)(function (params, filter) {
        return (0, api_v4_1.getLinodeConfigs)(id, params, filter);
    })().then(function (data) { return data.data; });
};
exports.getAllLinodeConfigs = getAllLinodeConfigs;
var getAllLinodeFirewalls = function (linodeId, passedParams, passedFilter) {
    if (passedParams === void 0) { passedParams = {}; }
    if (passedFilter === void 0) { passedFilter = {}; }
    return (0, utilities_1.getAll)(function (params, filter) {
        return (0, api_v4_1.getLinodeFirewalls)(linodeId, __assign(__assign({}, params), passedParams), __assign(__assign({}, filter), passedFilter));
    })().then(function (data) { return data.data; });
};
exports.getAllLinodeFirewalls = getAllLinodeFirewalls;
var getAllLinodeDisks = function (id) {
    return (0, utilities_1.getAll)(function (params, filter) { return (0, api_v4_1.getLinodeDisks)(id, params, filter); })().then(function (data) { return data.data; });
};
exports.getAllLinodeDisks = getAllLinodeDisks;
var getAllLinodeTypes = function () {
    return (0, utilities_1.getAll)(api_v4_1.getLinodeTypes)().then(function (results) { return results.data; });
};
exports.getAllLinodeTypes = getAllLinodeTypes;
