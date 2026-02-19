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
exports.useQuotaUsageQuery = exports.useAllQuotasQuery = exports.useQuotasQuery = exports.useQuotaQuery = void 0;
var react_query_1 = require("@tanstack/react-query");
var keys_1 = require("./keys");
var useQuotaQuery = function (service, id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.quotaQueries.service(service)._ctx.quota(id)), { enabled: enabled }));
};
exports.useQuotaQuery = useQuotaQuery;
var useQuotasQuery = function (service, params, filter, enabled) {
    if (params === void 0) { params = {}; }
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.quotaQueries.service(service)._ctx.paginated(params, filter)), { enabled: enabled, placeholderData: react_query_1.keepPreviousData }));
};
exports.useQuotasQuery = useQuotasQuery;
var useAllQuotasQuery = function (service, params, filter, enabled) {
    if (params === void 0) { params = {}; }
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.quotaQueries.service(service)._ctx.all(params, filter)), { enabled: enabled }));
};
exports.useAllQuotasQuery = useAllQuotasQuery;
var useQuotaUsageQuery = function (service, id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.quotaQueries.service(service)._ctx.usage(id)), { enabled: enabled }));
};
exports.useQuotaUsageQuery = useQuotaUsageQuery;
