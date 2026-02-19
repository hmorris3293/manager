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
exports.useTypeQuery = exports.useSpecificTypes = exports.useAllTypes = void 0;
var react_query_1 = require("@tanstack/react-query");
var base_1 = require("../base");
var linodes_1 = require("../linodes/linodes");
var useAllTypes = function (enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, linodes_1.linodeQueries.types._ctx.all), { enabled: enabled }), base_1.queryPresets.oneTimeFetch));
};
exports.useAllTypes = useAllTypes;
/**
 * Some Linodes may have types that aren't returned by the /types and /types-legacy endpoints. This
 * hook may be useful in fetching these "shadow plans".
 *
 * Always returns an array of the same length of the `types` argument.
 */
var useSpecificTypes = function (types, enabled) {
    if (enabled === void 0) { enabled = true; }
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useQueries)({
        queries: types.map(function (type) { return (__assign(__assign(__assign({ enabled: enabled && Boolean(type) }, linodes_1.linodeQueries.types._ctx.type(type)), base_1.queryPresets.oneTimeFetch), { initialData: function () {
                var allTypesFromCache = queryClient.getQueryData(linodes_1.linodeQueries.types._ctx.all.queryKey);
                return allTypesFromCache === null || allTypesFromCache === void 0 ? void 0 : allTypesFromCache.find(function (t) { return t.id === type; });
            } })); }),
    });
};
exports.useSpecificTypes = useSpecificTypes;
var useTypeQuery = function (type, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, exports.useSpecificTypes)([type], enabled)[0];
};
exports.useTypeQuery = useTypeQuery;
