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
exports.useVLANsInfiniteQuery = exports.useVlansQuery = exports.vlanQueries = void 0;
var vlans_1 = require("@linode/api-v4/lib/vlans");
var utilities_1 = require("@linode/utilities");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var getAllVLANs = function () {
    return (0, utilities_1.getAll)(function (params) { return (0, vlans_1.getVlans)(params); })().then(function (_a) {
        var data = _a.data;
        return data;
    });
};
exports.vlanQueries = (0, query_key_factory_1.createQueryKeys)('vlans', {
    all: {
        queryFn: getAllVLANs,
        queryKey: null,
    },
    infinite: function (filter) {
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function (_a) {
                var _b = _a.pageParam, pageParam = _b === void 0 ? 1 : _b;
                return (0, vlans_1.getVlans)({ page: pageParam, page_size: 25 }, filter);
            },
            queryKey: [filter],
        });
    },
});
var useVlansQuery = function () {
    return (0, react_query_1.useQuery)(exports.vlanQueries.all);
};
exports.useVlansQuery = useVlansQuery;
var useVLANsInfiniteQuery = function (filter, enabled) {
    if (filter === void 0) { filter = {}; }
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useInfiniteQuery)(__assign(__assign({ getNextPageParam: function (_a) {
            var page = _a.page, pages = _a.pages;
            if (page === pages) {
                return undefined;
            }
            return page + 1;
        }, initialPageParam: 1 }, exports.vlanQueries.infinite(filter)), { enabled: enabled }));
};
exports.useVLANsInfiniteQuery = useVLANsInfiniteQuery;
