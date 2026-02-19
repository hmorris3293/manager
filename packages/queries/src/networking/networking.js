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
exports.useCreateIPv6RangeMutation = exports.useAllDetailedIPv6RangesQuery = exports.useAllIPv6RangesQuery = exports.useAllIPsQuery = exports.networkingQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var react_1 = require("react");
var linodes_1 = require("../linodes/linodes");
var requests_1 = require("./requests");
exports.networkingQueries = (0, query_key_factory_1.createQueryKeys)('networking', {
    ips: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, requests_1.getAllIps)(params, filter); },
            queryKey: [params, filter],
        });
    },
    ipv6: {
        contextQueries: {
            range: function (range) { return ({
                queryFn: function () { return (0, api_v4_1.getIPv6RangeInfo)(range); },
                queryKey: [range],
            }); },
            ranges: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, requests_1.getAllIPv6Ranges)(params, filter); },
                    queryKey: [params, filter],
                });
            },
        },
        queryKey: null,
    },
});
var useAllIPsQuery = function (params, filter, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.networkingQueries.ips(params, filter)), { enabled: enabled }));
};
exports.useAllIPsQuery = useAllIPsQuery;
var useAllIPv6RangesQuery = function (params, filter, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.networkingQueries.ipv6._ctx.ranges(params, filter)), { enabled: enabled }));
};
exports.useAllIPv6RangesQuery = useAllIPv6RangesQuery;
var useAllDetailedIPv6RangesQuery = function (params, filter, enabled) {
    var _a;
    if (enabled === void 0) { enabled = true; }
    var ranges = (0, exports.useAllIPv6RangesQuery)(params, filter, enabled).data;
    var queryResults = (0, react_query_1.useQueries)({
        queries: (_a = ranges === null || ranges === void 0 ? void 0 : ranges.map(function (range) { return exports.networkingQueries.ipv6._ctx.range(range.range); })) !== null && _a !== void 0 ? _a : [],
    });
    // @todo use React Query's combine once we upgrade to v5
    var data = queryResults.reduce(function (detailedRanges, query) {
        if (query.data) {
            detailedRanges.push(query.data);
        }
        return detailedRanges;
    }, []);
    var stableData = (0, react_1.useMemo)(function () { return data; }, [JSON.stringify(data)]);
    return { data: stableData };
};
exports.useAllDetailedIPv6RangesQuery = useAllDetailedIPv6RangesQuery;
var useCreateIPv6RangeMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createIPv6Range,
        onSuccess: function (_, variables) {
            // Invalidate networking queries
            queryClient.invalidateQueries({ queryKey: exports.networkingQueries.ips._def });
            queryClient.invalidateQueries({
                queryKey: exports.networkingQueries.ipv6.queryKey,
            });
            // Invalidate Linode queries
            if (variables.linode_id) {
                queryClient.invalidateQueries({
                    exact: true,
                    queryKey: linodes_1.linodeQueries.linode(variables.linode_id).queryKey,
                });
                queryClient.invalidateQueries({
                    queryKey: linodes_1.linodeQueries.linode(variables.linode_id)._ctx.ips.queryKey,
                });
                queryClient.invalidateQueries({
                    queryKey: linodes_1.linodeQueries.linodes.queryKey,
                });
            }
        },
    });
};
exports.useCreateIPv6RangeMutation = useCreateIPv6RangeMutation;
