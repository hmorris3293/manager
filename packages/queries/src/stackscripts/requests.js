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
exports.getAllAccountStackScripts = exports.getAllOCAsRequest = exports.getOneClickApps = void 0;
var api_v4_1 = require("@linode/api-v4");
var utilities_1 = require("@linode/utilities");
var oneClickFilter = [
    {
        '+and': [
            { '+or': [{ username: 'linode-stackscripts' }, { username: 'linode' }] },
            {
                label: {
                    '+contains': 'One-Click',
                },
            },
        ],
        '+order_by': 'ordinal',
    },
];
var getOneClickApps = function (params) {
    return (0, api_v4_1.getStackScripts)(params, oneClickFilter);
};
exports.getOneClickApps = getOneClickApps;
var getAllOCAsRequest = function (passedParams) {
    if (passedParams === void 0) { passedParams = {}; }
    return (0, utilities_1.getAll)(function (params) {
        return (0, exports.getOneClickApps)(__assign(__assign({}, params), passedParams));
    })().then(function (data) { return data.data; });
};
exports.getAllOCAsRequest = getAllOCAsRequest;
var getAllAccountStackScripts = function () {
    return (0, utilities_1.getAll)(function (params) {
        return (0, api_v4_1.getStackScripts)(params, { mine: true });
    })().then(function (data) { return data.data; });
};
exports.getAllAccountStackScripts = getAllAccountStackScripts;
