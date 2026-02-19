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
exports.useRegionAvailabilityQuery = exports.useRegionsAvailabilitiesQuery = exports.useRegionsQuery = exports.useRegionQuery = exports.regionQueries = void 0;
var regions_1 = require("@linode/api-v4/lib/regions");
var utilities_1 = require("@linode/utilities");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var base_1 = require("../base");
var requests_1 = require("./requests");
exports.regionQueries = (0, query_key_factory_1.createQueryKeys)('regions', {
    availability: {
        contextQueries: {
            all: {
                queryFn: requests_1.getAllRegionAvailabilitiesRequest,
                queryKey: null,
            },
            region: function (regionId) { return ({
                queryFn: function () { return (0, regions_1.getRegionAvailability)(regionId); },
                queryKey: [regionId],
            }); },
        },
        queryKey: null,
    },
    region: function (regionId) { return ({
        queryFn: function () { return (0, regions_1.getRegion)(regionId); },
        queryKey: [regionId],
    }); },
    regions: {
        queryFn: requests_1.getAllRegionsRequest,
        queryKey: null,
    },
});
var useRegionQuery = function (regionId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.regionQueries.region(regionId)), { enabled: Boolean(regionId), initialData: function () {
            var regions = queryClient.getQueryData((0, react_query_1.queryOptions)(exports.regionQueries.regions).queryKey);
            return regions === null || regions === void 0 ? void 0 : regions.find(function (r) { return r.id === regionId; });
        }, select: function (region) { return (__assign(__assign({}, region), { label: (0, utilities_1.getNewRegionLabel)(region) })); } }));
};
exports.useRegionQuery = useRegionQuery;
var useRegionsQuery = function () {
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, exports.regionQueries.regions), base_1.queryPresets.longLived), { select: function (regions) {
            return regions.map(function (region) { return (__assign(__assign({}, region), { label: (0, utilities_1.getNewRegionLabel)(region) })); });
        } }));
};
exports.useRegionsQuery = useRegionsQuery;
var useRegionsAvailabilitiesQuery = function (enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.regionQueries.availability._ctx.all), { enabled: enabled }));
};
exports.useRegionsAvailabilitiesQuery = useRegionsAvailabilitiesQuery;
var useRegionAvailabilityQuery = function (regionId, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.regionQueries.availability._ctx.region(regionId)), { enabled: enabled }));
};
exports.useRegionAvailabilityQuery = useRegionAvailabilityQuery;
