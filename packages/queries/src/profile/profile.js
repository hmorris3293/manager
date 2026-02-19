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
exports.useDisableTwoFactorMutation = exports.useRevokeTrustedDeviceMutation = exports.useTrustedDevicesQuery = exports.sshKeyEventHandler = exports.useDeleteSSHKeyMutation = exports.useUpdateSSHKeyMutation = exports.useCreateSSHKeyMutation = exports.useSSHKeysQuery = exports.useVerifyPhoneVerificationCodeMutation = exports.useSendPhoneVerificationCodeMutation = exports.useSMSOptOutMutation = exports.useGrants = exports.updateProfileData = exports.useMutateProfile = exports.useProfile = exports.profileQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var queries_1 = require("../account/queries");
var base_1 = require("../base");
exports.profileQueries = (0, query_key_factory_1.createQueryKeys)('profile', {
    appTokens: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, api_v4_1.getAppTokens)(params, filter); },
            queryKey: [params, filter],
        });
    },
    grants: {
        queryFn: api_v4_1.listGrants,
        queryKey: null,
    },
    personalAccessTokens: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, api_v4_1.getPersonalAccessTokens)(params, filter); },
            queryKey: [params, filter],
        });
    },
    preferences: {
        queryFn: api_v4_1.getUserPreferences,
        queryKey: null,
    },
    profile: function (options) {
        if (options === void 0) { options = {}; }
        return ({
            queryFn: function () { return (0, api_v4_1.getProfile)(options); },
            queryKey: [options],
        });
    },
    securityQuestions: {
        queryFn: api_v4_1.getSecurityQuestions,
        queryKey: null,
    },
    sshKeys: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, api_v4_1.getSSHKeys)(params, filter); },
            queryKey: [params, filter],
        });
    },
    trustedDevices: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, api_v4_1.getTrustedDevices)(params, filter); },
            queryKey: [params, filter],
        });
    },
});
var useProfile = function (options) {
    if (options === void 0) { options = {}; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.profileQueries.profile(options)), base_1.queryPresets.oneTimeFetch));
};
exports.useProfile = useProfile;
var useMutateProfile = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.updateProfile,
        onSuccess: function (newData, variables) {
            (0, exports.updateProfileData)(newData, queryClient);
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.users.queryKey,
            });
            if (variables.email) {
                // If the user updates their email, re-request notifications to
                // potentially clear the email bounce notification.
                queryClient.invalidateQueries({
                    queryKey: queries_1.accountQueries.notifications.queryKey,
                });
            }
        },
    });
};
exports.useMutateProfile = useMutateProfile;
var updateProfileData = function (newData, queryClient) {
    queryClient.setQueryData(exports.profileQueries.profile().queryKey, function (oldData) { return (__assign(__assign({}, oldData), newData)); });
};
exports.updateProfileData = updateProfileData;
var useGrants = function () {
    var profile = (0, exports.useProfile)().data;
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, exports.profileQueries.grants), base_1.queryPresets.oneTimeFetch), { enabled: Boolean(profile === null || profile === void 0 ? void 0 : profile.restricted) }));
};
exports.useGrants = useGrants;
var useSMSOptOutMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.smsOptOut,
        onSuccess: function () {
            (0, exports.updateProfileData)({ verified_phone_number: null }, queryClient);
        },
    });
};
exports.useSMSOptOutMutation = useSMSOptOutMutation;
var useSendPhoneVerificationCodeMutation = function () {
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.sendCodeToPhoneNumber,
    });
};
exports.useSendPhoneVerificationCodeMutation = useSendPhoneVerificationCodeMutation;
var useVerifyPhoneVerificationCodeMutation = function () {
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.verifyPhoneNumberCode,
    });
};
exports.useVerifyPhoneVerificationCodeMutation = useVerifyPhoneVerificationCodeMutation;
var useSSHKeysQuery = function (params, filter, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.profileQueries.sshKeys(params, filter)), { enabled: enabled, placeholderData: react_query_1.keepPreviousData }));
};
exports.useSSHKeysQuery = useSSHKeysQuery;
var useCreateSSHKeyMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createSSHKey,
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: exports.profileQueries.sshKeys._def,
            });
            // also invalidate the /account/users data because that endpoint returns some SSH key data
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.users._ctx.paginated._def,
            });
        },
    });
};
exports.useCreateSSHKeyMutation = useCreateSSHKeyMutation;
var useUpdateSSHKeyMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updateSSHKey)(id, data); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: exports.profileQueries.sshKeys._def,
            });
            // also invalidate the /account/users data because that endpoint returns some SSH key data
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.users._ctx.paginated._def,
            });
        },
    });
};
exports.useUpdateSSHKeyMutation = useUpdateSSHKeyMutation;
var useDeleteSSHKeyMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteSSHKey)(id); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: exports.profileQueries.sshKeys._def,
            });
            // also invalidate the /account/users data because that endpoint returns some SSH key data
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.users._ctx.paginated._def,
            });
        },
    });
};
exports.useDeleteSSHKeyMutation = useDeleteSSHKeyMutation;
var sshKeyEventHandler = function (_a) {
    // This event handler is a bit agressive and will over-fetch, but UX will
    // be great because this will ensure Cloud has up to date data all the time.
    var invalidateQueries = _a.invalidateQueries;
    invalidateQueries({
        queryKey: exports.profileQueries.sshKeys._def,
    });
    // also invalidate the /account/users data because that endpoint returns some SSH key data
    invalidateQueries({
        queryKey: queries_1.accountQueries.users._ctx.paginated._def,
    });
};
exports.sshKeyEventHandler = sshKeyEventHandler;
var useTrustedDevicesQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.profileQueries.trustedDevices(params, filter)), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useTrustedDevicesQuery = useTrustedDevicesQuery;
var useRevokeTrustedDeviceMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteTrustedDevice)(id); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: exports.profileQueries.trustedDevices._def,
            });
        },
    });
};
exports.useRevokeTrustedDeviceMutation = useRevokeTrustedDeviceMutation;
var useDisableTwoFactorMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.disableTwoFactor,
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: exports.profileQueries.profile().queryKey,
            });
            // also invalidate the /account/users data because that endpoint returns 2FA status for each user
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.users._ctx.paginated._def,
            });
        },
    });
};
exports.useDisableTwoFactorMutation = useDisableTwoFactorMutation;
