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
exports.useMutateAccountAgreements = exports.useAccountAgreements = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var base_1 = require("../base");
var profile_1 = require("../profile");
var queries_1 = require("./queries");
var useAccountAgreements = function (enabled) {
    var profile = (0, profile_1.useProfile)().data;
    return (0, react_query_1.useQuery)(__assign(__assign(__assign(__assign({}, queries_1.accountQueries.agreements), base_1.queryPresets.oneTimeFetch), base_1.queryPresets.noRetry), { enabled: enabled === undefined
            ? !(profile === null || profile === void 0 ? void 0 : profile.restricted)
            : enabled && !(profile === null || profile === void 0 ? void 0 : profile.restricted) }));
};
exports.useAccountAgreements = useAccountAgreements;
var useMutateAccountAgreements = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.signAgreement,
        onSuccess: function (data, variables) {
            queryClient.setQueryData(queries_1.accountQueries.agreements.queryKey, function (previousData) {
                if (!previousData) {
                    return undefined;
                }
                var newAgreements = __assign({}, previousData);
                for (var key in variables) {
                    if (variables[key] !== undefined) {
                        newAgreements[key] =
                            variables[key];
                    }
                }
                return newAgreements;
            });
        },
    });
};
exports.useMutateAccountAgreements = useMutateAccountAgreements;
