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
exports.updateTagsSuggestionsData = exports.useAllTagsQuery = void 0;
var api_v4_1 = require("@linode/api-v4");
var utilities_1 = require("@linode/utilities");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var base_1 = require("../base");
var tagQueries = (0, query_key_factory_1.createQueryKeys)('tags', {
    all: {
        queryFn: function () { return getAllTags(); },
        queryKey: null,
    },
});
var useAllTagsQuery = function (enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, tagQueries.all), base_1.queryPresets.longLived), { enabled: enabled }));
};
exports.useAllTagsQuery = useAllTagsQuery;
var getAllTags = function (passedParams, passedFilter) {
    if (passedParams === void 0) { passedParams = {}; }
    if (passedFilter === void 0) { passedFilter = {}; }
    return (0, utilities_1.getAll)(function (params, filter) {
        return (0, api_v4_1.getTags)(__assign(__assign({}, params), passedParams), __assign(__assign({}, filter), passedFilter));
    })().then(function (data) { return data.data; });
};
var updateTagsSuggestionsData = function (newData, queryClient) {
    var uniqueTags = Array.from(new Set(newData.map(function (tag) { return tag.label; })))
        .sort()
        .map(function (label) { return ({ label: label }); });
    queryClient.setQueryData(tagQueries.all.queryKey, uniqueTags);
};
exports.updateTagsSuggestionsData = updateTagsSuggestionsData;
