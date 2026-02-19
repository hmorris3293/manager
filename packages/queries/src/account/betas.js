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
exports.useAccountBetaQuery = exports.useCreateAccountBetaMutation = exports.useAccountBetasQuery = void 0;
var account_1 = require("@linode/api-v4/lib/account");
var react_query_1 = require("@tanstack/react-query");
var regions_1 = require("../regions");
var queries_1 = require("./queries");
var useAccountBetasQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, queries_1.accountQueries.betas._ctx.paginated(params, filter)), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useAccountBetasQuery = useAccountBetasQuery;
var useCreateAccountBetaMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: account_1.enrollInBeta,
        onSuccess: function () {
            // Refetch the paginated list of account betas. If we just enrolled in a beta,
            // it will show up in account betas.
            queryClient.invalidateQueries({
                queryKey: queries_1.accountQueries.betas._ctx.paginated._def,
            });
            // Refetch all regions data because enrolling in betas can enable new regions
            // or region capabilities.
            queryClient.invalidateQueries({
                queryKey: regions_1.regionQueries._def,
            });
        },
    });
};
exports.useCreateAccountBetaMutation = useCreateAccountBetaMutation;
var useAccountBetaQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = false; }
    return (0, react_query_1.useQuery)(__assign({ enabled: enabled, retry: false }, queries_1.accountQueries.betas._ctx.beta(id)));
};
exports.useAccountBetaQuery = useAccountBetaQuery;
