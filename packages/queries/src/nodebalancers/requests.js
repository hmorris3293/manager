"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNodeBalancers = exports.getAllNodeBalancerConfigs = exports.getAllNodeBalancerTypes = void 0;
var api_v4_1 = require("@linode/api-v4");
var utilities_1 = require("@linode/utilities");
var getAllNodeBalancerTypes = function () {
    return (0, utilities_1.getAll)(function (params) { return (0, api_v4_1.getNodeBalancerTypes)(params); })().then(function (results) { return results.data; });
};
exports.getAllNodeBalancerTypes = getAllNodeBalancerTypes;
var getAllNodeBalancerConfigs = function (id) {
    return (0, utilities_1.getAll)(function (params) {
        return (0, api_v4_1.getNodeBalancerConfigs)(id, params);
    })().then(function (data) { return data.data; });
};
exports.getAllNodeBalancerConfigs = getAllNodeBalancerConfigs;
var getAllNodeBalancers = function () {
    return (0, utilities_1.getAll)(function (params) { return (0, api_v4_1.getNodeBalancers)(params); })().then(function (data) { return data.data; });
};
exports.getAllNodeBalancers = getAllNodeBalancers;
