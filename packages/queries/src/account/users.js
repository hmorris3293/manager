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
exports.useCreateUserMutation = exports.useAccountUserDeleteMutation = exports.useUpdateUserMutation = exports.useAccountUserGrants = exports.useAccountUser = exports.useAccountUsers = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var profile_1 = require("../profile");
var queries_1 = require("./queries");
var useAccountUsers = function (_a) {
    var _b = _a.enabled, enabled = _b === void 0 ? true : _b, filters = _a.filters, params = _a.params;
    var profile = (0, profile_1.useProfile)().data;
    return (0, react_query_1.useQuery)(__assign(__assign({}, queries_1.accountQueries.users._ctx.paginated(params, filters)), { enabled: enabled && !(profile === null || profile === void 0 ? void 0 : profile.restricted), placeholderData: react_query_1.keepPreviousData }));
};
exports.useAccountUsers = useAccountUsers;
var useAccountUser = function (username) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, queries_1.accountQueries.users._ctx.user(username)), { 
        // Enable the query if the user is not on the blocklist
        enabled: !getIsBlocklistedUser(username) }));
};
exports.useAccountUser = useAccountUser;
var useAccountUserGrants = function (username) {
    return (0, react_query_1.useQuery)(queries_1.accountQueries.users._ctx.user(username)._ctx.grants);
};
exports.useAccountUserGrants = useAccountUserGrants;
var useUpdateUserMutation = function (username) {
    var queryClient = (0, react_query_1.useQueryClient)();
    var profile = (0, profile_1.useProfile)().data;
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updateUser)(username, data); },
        onSuccess: function (user) {
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.users._ctx.paginated._def,
            });
            queryClient.setQueryData(queries_1.accountQueries.users._ctx.user(user.username).queryKey, user);
            // If the currently logged in user updates their user, we need to update the profile
            // query to reflect the latest data.
            if (username === (profile === null || profile === void 0 ? void 0 : profile.username)) {
                queryClient.setQueryData(profile_1.profileQueries.profile().queryKey, function (oldProfile) {
                    if (!oldProfile) {
                        return;
                    }
                    return __assign(__assign({}, oldProfile), user);
                });
            }
        },
    });
};
exports.useUpdateUserMutation = useUpdateUserMutation;
var useAccountUserDeleteMutation = function (username) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteUser)(username); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.users._ctx.paginated._def,
            });
            queryClient.removeQueries({
                queryKey: queries_1.accountQueries.users._ctx.user(username).queryKey,
            });
        },
    });
};
exports.useAccountUserDeleteMutation = useAccountUserDeleteMutation;
/**
 * Returns true if a user is "blocklisted". We do this because some accounts
 * such as service accounts will 404 when we hit the account endpoint.
 * @param username a user's username
 * @returns true if account is blocklisted (should *not* be fetched)
 */
function getIsBlocklistedUser(username) {
    if (!username) {
        // "Block" empty, null, or undefined usernames so a query does not run
        return true;
    }
    if (username.startsWith('lke-service-account-')) {
        return true;
    }
    if (username === 'Linode') {
        return true;
    }
    return false;
}
var useCreateUserMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.createUser)(data); },
        onSuccess: function (user) {
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.users._ctx.paginated._def,
            });
            queryClient.setQueryData(queries_1.accountQueries.users._ctx.user(user.username).queryKey, user);
        },
    });
};
exports.useCreateUserMutation = useCreateUserMutation;
