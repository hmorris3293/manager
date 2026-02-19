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
exports.updateAccountSettingsData = exports.useMutateAccountSettings = exports.useAccountSettings = void 0;
var account_1 = require("@linode/api-v4/lib/account");
var react_query_1 = require("@tanstack/react-query");
var base_1 = require("../base");
var profile_1 = require("../profile");
var queries_1 = require("./queries");
var useAccountSettings = function () {
    var profile = (0, profile_1.useProfile)().data;
    return (0, react_query_1.useQuery)(__assign(__assign(__assign(__assign({}, queries_1.accountQueries.settings), base_1.queryPresets.oneTimeFetch), base_1.queryPresets.noRetry), { enabled: !(profile === null || profile === void 0 ? void 0 : profile.restricted) }));
};
exports.useAccountSettings = useAccountSettings;
var useMutateAccountSettings = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: account_1.updateAccountSettings,
        onSuccess: function (newData) { return (0, exports.updateAccountSettingsData)(newData, queryClient); },
    });
};
exports.useMutateAccountSettings = useMutateAccountSettings;
/**
 * updateAccountSettingsData is a function that we can use to directly update
 * the React Query store for account settings.
 * @todo In the future, we might want to make this generic and move it to
 * the react query base file so other query files can use it
 * @param data {Partial<AccountSettings>} account settings to update
 */
var updateAccountSettingsData = function (newData, queryClient) {
    queryClient.setQueryData(queries_1.accountQueries.settings.queryKey, function (oldData) { return (__assign(__assign({}, oldData), newData)); });
};
exports.updateAccountSettingsData = updateAccountSettingsData;
