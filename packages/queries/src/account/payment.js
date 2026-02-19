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
exports.useAddPaymentMethodMutation = exports.useMakeDefaultPaymentMethodMutation = exports.useClientToken = exports.useAllPaymentMethodsQuery = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var base_1 = require("../base");
var profile_1 = require("../profile");
var queries_1 = require("./queries");
var useAllPaymentMethodsQuery = function () {
    var _a;
    var grants = (0, profile_1.useGrants)().data;
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, queries_1.accountQueries.paymentMethods), base_1.queryPresets.oneTimeFetch), { enabled: ((_a = grants === null || grants === void 0 ? void 0 : grants.global) === null || _a === void 0 ? void 0 : _a.account_access) !== null }));
};
exports.useAllPaymentMethodsQuery = useAllPaymentMethodsQuery;
var useClientToken = function () {
    return (0, react_query_1.useQuery)(__assign(__assign({}, queries_1.accountQueries.clientToken), base_1.queryPresets.longLived));
};
exports.useClientToken = useClientToken;
var useMakeDefaultPaymentMethodMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.makeDefaultPaymentMethod)(id); },
        onSuccess: function () {
            queryClient.setQueryData(queries_1.accountQueries.paymentMethods.queryKey, function (previousData) {
                if (!previousData) {
                    return undefined;
                }
                return previousData.reduce(function (acc, paymentMethod) {
                    if (paymentMethod.id === id) {
                        acc.push(__assign(__assign({}, paymentMethod), { is_default: true }));
                    }
                    else {
                        acc.push(__assign(__assign({}, paymentMethod), { is_default: false }));
                    }
                    return acc;
                }, []);
            });
        },
    });
};
exports.useMakeDefaultPaymentMethodMutation = useMakeDefaultPaymentMethodMutation;
var useAddPaymentMethodMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.addPaymentMethod,
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.paymentMethods.queryKey,
            });
        },
    });
};
exports.useAddPaymentMethodMutation = useAddPaymentMethodMutation;
