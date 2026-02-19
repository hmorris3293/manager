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
exports.taxIdEventHandler = exports.useAllAccountPayments = exports.useAllAccountInvoices = void 0;
var react_query_1 = require("@tanstack/react-query");
var base_1 = require("../base");
var queries_1 = require("./queries");
var useAllAccountInvoices = function (params, filter) {
    if (params === void 0) { params = {}; }
    if (filter === void 0) { filter = {}; }
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, queries_1.accountQueries.invoices(params, filter)), base_1.queryPresets.oneTimeFetch), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useAllAccountInvoices = useAllAccountInvoices;
var useAllAccountPayments = function (params, filter) {
    if (params === void 0) { params = {}; }
    if (filter === void 0) { filter = {}; }
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, queries_1.accountQueries.payments(params, filter)), base_1.queryPresets.oneTimeFetch), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useAllAccountPayments = useAllAccountPayments;
var taxIdEventHandler = function (_a) {
    var event = _a.event, invalidateQueries = _a.invalidateQueries;
    if (event.action === 'tax_id_invalid' || event.action === 'tax_id_valid') {
        invalidateQueries({
            queryKey: queries_1.accountQueries.notifications.queryKey,
        });
    }
};
exports.taxIdEventHandler = taxIdEventHandler;
