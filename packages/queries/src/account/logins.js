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
exports.useAccountLoginsQuery = void 0;
var react_query_1 = require("@tanstack/react-query");
var queries_1 = require("./queries");
var useAccountLoginsQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, queries_1.accountQueries.logins(params, filter)), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useAccountLoginsQuery = useAccountLoginsQuery;
