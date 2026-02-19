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
exports.useLinodeTransferByDate = exports.useLinodeTransfer = exports.useLinodeStatsByDate = exports.useLinodeStats = exports.STATS_NOT_READY_MESSAGE = exports.STATS_NOT_READY_API_MESSAGE = void 0;
var react_query_1 = require("@tanstack/react-query");
var linodes_1 = require("./linodes");
exports.STATS_NOT_READY_API_MESSAGE = 'Stats are unavailable at this time.';
exports.STATS_NOT_READY_MESSAGE = 'Stats for this Linode are not available yet';
var queryOptions = {
    placeholderData: react_query_1.keepPreviousData,
    refetchInterval: 300000, // 5 minutes
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
    retryOnMount: false,
};
var useLinodeStats = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, linodes_1.linodeQueries.linode(id)._ctx.stats), { enabled: enabled }), queryOptions));
};
exports.useLinodeStats = useLinodeStats;
var useLinodeStatsByDate = function (id, year, month, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, linodes_1.linodeQueries.linode(id)._ctx.statsByDate(year, month)), { enabled: enabled }), queryOptions));
};
exports.useLinodeStatsByDate = useLinodeStatsByDate;
var useLinodeTransfer = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, linodes_1.linodeQueries.linode(id)._ctx.transfer), { enabled: enabled }), queryOptions));
};
exports.useLinodeTransfer = useLinodeTransfer;
var useLinodeTransferByDate = function (id, year, month, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, linodes_1.linodeQueries.linode(id)._ctx.transferByDate(year, month)), { enabled: enabled }), queryOptions));
};
exports.useLinodeTransferByDate = useLinodeTransferByDate;
