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
exports.useRevokeAppAccessTokenMutation = exports.useRevokePersonalAccessTokenMutation = exports.useUpdatePersonalAccessTokenMutation = exports.useCreatePersonalAccessTokenMutation = exports.usePersonalAccessTokensQuery = exports.useAppTokensQuery = void 0;
exports.tokenEventHandler = tokenEventHandler;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var profile_1 = require("./profile");
var useAppTokensQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, profile_1.profileQueries.appTokens(params, filter)), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useAppTokensQuery = useAppTokensQuery;
var usePersonalAccessTokensQuery = function (params, filter, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign({ enabled: enabled, placeholderData: react_query_1.keepPreviousData }, profile_1.profileQueries.personalAccessTokens(params, filter)));
};
exports.usePersonalAccessTokensQuery = usePersonalAccessTokensQuery;
var useCreatePersonalAccessTokenMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createPersonalAccessToken,
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: profile_1.profileQueries.personalAccessTokens._def,
            });
        },
    });
};
exports.useCreatePersonalAccessTokenMutation = useCreatePersonalAccessTokenMutation;
var useUpdatePersonalAccessTokenMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updatePersonalAccessToken)(id, data); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: profile_1.profileQueries.personalAccessTokens._def,
            });
        },
    });
};
exports.useUpdatePersonalAccessTokenMutation = useUpdatePersonalAccessTokenMutation;
var useRevokePersonalAccessTokenMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deletePersonalAccessToken)(id); },
        onSuccess: function () {
            // Wait 1 second to invalidate cache after deletion because API needs time
            setTimeout(function () {
                queryClient.invalidateQueries({
                    queryKey: profile_1.profileQueries.personalAccessTokens._def,
                });
            }, 1000);
        },
    });
};
exports.useRevokePersonalAccessTokenMutation = useRevokePersonalAccessTokenMutation;
var useRevokeAppAccessTokenMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteAppToken)(id); },
        onSuccess: function () {
            // Wait 1 second to invalidate cache after deletion because API needs time
            setTimeout(function () {
                return queryClient.invalidateQueries({
                    queryKey: profile_1.profileQueries.appTokens._def,
                });
            }, 1000);
        },
    });
};
exports.useRevokeAppAccessTokenMutation = useRevokeAppAccessTokenMutation;
function tokenEventHandler(_a) {
    var invalidateQueries = _a.invalidateQueries;
    invalidateQueries({
        queryKey: profile_1.profileQueries.appTokens._def,
    });
    invalidateQueries({
        queryKey: profile_1.profileQueries.personalAccessTokens._def,
    });
}
