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
exports.useCreateChildAccountPersonalAccessTokenMutation = exports.useChildAccountsInfiniteQuery = exports.useMutateAccount = exports.useAccount = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var base_1 = require("../base");
var profile_1 = require("../profile");
var queries_1 = require("./queries");
var useAccount = function () {
    var profile = (0, profile_1.useProfile)().data;
    return (0, react_query_1.useQuery)(__assign(__assign(__assign(__assign({}, queries_1.accountQueries.account), base_1.queryPresets.oneTimeFetch), base_1.queryPresets.noRetry), { enabled: !(profile === null || profile === void 0 ? void 0 : profile.restricted) }));
};
exports.useAccount = useAccount;
var useMutateAccount = function () {
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.updateAccountInfo,
    });
};
exports.useMutateAccount = useMutateAccount;
var useChildAccountsInfiniteQuery = function (options) {
    var _a, _b;
    var profile = (0, profile_1.useProfile)().data;
    var grants = (0, profile_1.useGrants)().data;
    var hasExplicitAuthToken = Boolean((_a = options.headers) === null || _a === void 0 ? void 0 : _a.Authorization);
    var enabled = (Boolean((profile === null || profile === void 0 ? void 0 : profile.user_type) === 'parent') && !(profile === null || profile === void 0 ? void 0 : profile.restricted)) ||
        Boolean((_b = grants === null || grants === void 0 ? void 0 : grants.global) === null || _b === void 0 ? void 0 : _b.child_account_access) ||
        hasExplicitAuthToken;
    return (0, react_query_1.useInfiniteQuery)(__assign({ enabled: enabled, getNextPageParam: function (_a) {
            var page = _a.page, pages = _a.pages;
            if (page === pages) {
                return undefined;
            }
            return page + 1;
        }, initialPageParam: 1 }, queries_1.accountQueries.childAccounts(options)));
};
exports.useChildAccountsInfiniteQuery = useChildAccountsInfiniteQuery;
var useCreateChildAccountPersonalAccessTokenMutation = function () {
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var euuid = _a.euuid, headers = _a.headers;
            return (0, api_v4_1.createChildAccountPersonalAccessToken)({ euuid: euuid, headers: headers });
        },
    });
};
exports.useCreateChildAccountPersonalAccessTokenMutation = useCreateChildAccountPersonalAccessTokenMutation;
