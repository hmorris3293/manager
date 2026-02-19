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
exports.useDeleteStackScriptMutation = exports.useUpdateStackScriptMutation = exports.useStackScriptsInfiniteQuery = exports.useCreateStackScriptMutation = exports.useAllAccountStackScriptsQuery = exports.useStackScriptQuery = exports.useMarketplaceAppsQuery = void 0;
var api_v4_1 = require("@linode/api-v4");
var queries_1 = require("@linode/queries");
var react_query_1 = require("@tanstack/react-query");
var keys_1 = require("./keys");
var useMarketplaceAppsQuery = function (enabled) {
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, keys_1.stackscriptQueries.marketplace), { enabled: enabled }), queries_1.queryPresets.oneTimeFetch));
};
exports.useMarketplaceAppsQuery = useMarketplaceAppsQuery;
var useStackScriptQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.stackscriptQueries.stackscript(id)), { enabled: enabled }));
};
exports.useStackScriptQuery = useStackScriptQuery;
/**
 * Don't use this! It only exists so users can search for their StackScripts
 * in the legacy main search.
 */
var useAllAccountStackScriptsQuery = function (enabled) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.stackscriptQueries.all), { enabled: enabled }));
};
exports.useAllAccountStackScriptsQuery = useAllAccountStackScriptsQuery;
var useCreateStackScriptMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createStackScript,
        onSuccess: function (stackscript) {
            queryClient.setQueryData(keys_1.stackscriptQueries.stackscript(stackscript.id).queryKey, stackscript);
            queryClient.invalidateQueries({
                queryKey: keys_1.stackscriptQueries.infinite._def,
            });
            queryClient.invalidateQueries({
                queryKey: keys_1.stackscriptQueries.all.queryKey,
            });
        },
    });
};
exports.useCreateStackScriptMutation = useCreateStackScriptMutation;
var useStackScriptsInfiniteQuery = function (filter, enabled) {
    if (filter === void 0) { filter = {}; }
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useInfiniteQuery)(__assign(__assign({}, keys_1.stackscriptQueries.infinite(filter)), { enabled: enabled, getNextPageParam: function (_a) {
            var page = _a.page, pages = _a.pages;
            if (page === pages) {
                return undefined;
            }
            return page + 1;
        }, initialPageParam: 1, placeholderData: react_query_1.keepPreviousData, retry: false }));
};
exports.useStackScriptsInfiniteQuery = useStackScriptsInfiniteQuery;
var useUpdateStackScriptMutation = function (id, options) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)(__assign(__assign({ mutationFn: function (data) { return (0, api_v4_1.updateStackScript)(id, data); } }, options), { onSuccess: function (stackscript, vars, ctx) {
            queryClient.invalidateQueries({
                queryKey: keys_1.stackscriptQueries.infinite._def,
            });
            queryClient.invalidateQueries({
                queryKey: keys_1.stackscriptQueries.all.queryKey,
            });
            queryClient.setQueryData(keys_1.stackscriptQueries.stackscript(id).queryKey, stackscript);
            if (options === null || options === void 0 ? void 0 : options.onSuccess) {
                options.onSuccess(stackscript, vars, ctx);
            }
        } }));
};
exports.useUpdateStackScriptMutation = useUpdateStackScriptMutation;
var useDeleteStackScriptMutation = function (id, options) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)(__assign(__assign({ mutationFn: function () { return (0, api_v4_1.deleteStackScript)(id); } }, options), { onSuccess: function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            queryClient.invalidateQueries({
                queryKey: keys_1.stackscriptQueries.infinite._def,
            });
            queryClient.invalidateQueries({
                queryKey: keys_1.stackscriptQueries.all.queryKey,
            });
            queryClient.removeQueries({
                queryKey: keys_1.stackscriptQueries.stackscript(id).queryKey,
            });
            if (options.onSuccess) {
                options.onSuccess.apply(options, params);
            }
        } }));
};
exports.useDeleteStackScriptMutation = useDeleteStackScriptMutation;
