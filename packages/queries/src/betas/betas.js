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
exports.useBetaQuery = exports.useBetasQuery = void 0;
var react_query_1 = require("@tanstack/react-query");
var keys_1 = require("./keys");
var useBetasQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.betaQueries.paginated(params, filter)), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useBetasQuery = useBetasQuery;
var useBetaQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.betaQueries.beta(id)), { enabled: enabled }));
};
exports.useBetaQuery = useBetaQuery;
