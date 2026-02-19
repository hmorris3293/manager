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
exports.oauthClientsEventHandler = exports.useUpdateOAuthClientMutation = exports.useCreateOAuthClientMutation = exports.useDeleteOAuthClientMutation = exports.useResetOAuthClientMutation = exports.useOAuthClientsQuery = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var queries_1 = require("./queries");
var useOAuthClientsQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, queries_1.accountQueries.oauthClients(params, filter)), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useOAuthClientsQuery = useOAuthClientsQuery;
var useResetOAuthClientMutation = function (id) {
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.resetOAuthClientSecret)(id); },
    });
};
exports.useResetOAuthClientMutation = useResetOAuthClientMutation;
var useDeleteOAuthClientMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteOAuthClient)(id); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.oauthClients._def,
            });
        },
    });
};
exports.useDeleteOAuthClientMutation = useDeleteOAuthClientMutation;
var useCreateOAuthClientMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createOAuthClient,
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.oauthClients._def,
            });
        },
    });
};
exports.useCreateOAuthClientMutation = useCreateOAuthClientMutation;
var useUpdateOAuthClientMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updateOAuthClient)(id, data); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.oauthClients._def,
            });
        },
    });
};
exports.useUpdateOAuthClientMutation = useUpdateOAuthClientMutation;
var oauthClientsEventHandler = function (_a) {
    var invalidateQueries = _a.invalidateQueries;
    // We may over-fetch because on `onSuccess` also invalidates, but this will be
    // good for UX because Cloud will always be up to date
    invalidateQueries({
        queryKey: queries_1.accountQueries.oauthClients._def,
    });
};
exports.oauthClientsEventHandler = oauthClientsEventHandler;
