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
exports.useAccountMaintenancePoliciesQuery = exports.useAccountMaintenanceQuery = exports.useAllAccountMaintenanceQuery = void 0;
var react_query_1 = require("@tanstack/react-query");
var base_1 = require("../base");
var queries_1 = require("./queries");
var useAllAccountMaintenanceQuery = function (params, filter, enabled) {
    if (params === void 0) { params = {}; }
    if (filter === void 0) { filter = {}; }
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, queries_1.accountQueries.maintenance._ctx.all(params, filter)), base_1.queryPresets.longLived), { enabled: enabled }));
};
exports.useAllAccountMaintenanceQuery = useAllAccountMaintenanceQuery;
var useAccountMaintenanceQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, queries_1.accountQueries.maintenance._ctx.paginated(params, filter)), { placeholderData: react_query_1.keepPreviousData, refetchInterval: 20000, refetchOnWindowFocus: 'always' }));
};
exports.useAccountMaintenanceQuery = useAccountMaintenanceQuery;
var useAccountMaintenancePoliciesQuery = function () {
    return (0, react_query_1.useQuery)(queries_1.accountQueries.maintenance._ctx.policies);
};
exports.useAccountMaintenancePoliciesQuery = useAccountMaintenancePoliciesQuery;
