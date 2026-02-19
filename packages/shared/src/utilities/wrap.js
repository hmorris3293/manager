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
exports.ThemeWrapper = exports.QueryClientWrapper = exports.renderWithWrappers = exports.wrap = void 0;
var queries_1 = require("@linode/queries");
var ui_1 = require("@linode/ui");
var react_1 = require("@testing-library/react");
var react_2 = require("react");
var wrap = function (ui, wrappers) { return wrappers.reduce(function (prev, wrapper) { return wrapper(prev); }, ui); };
exports.wrap = wrap;
var renderWithWrappers = function (ui, wrappers) {
    var renderResult = (0, react_1.render)((0, exports.wrap)(ui, wrappers));
    return __assign(__assign({}, renderResult), { rerender: function (ui) { return renderResult.rerender((0, exports.wrap)(ui, wrappers)); } });
};
exports.renderWithWrappers = renderWithWrappers;
var QueryClientWrapper = function (queryClient) {
    if (queryClient === void 0) { queryClient = (0, queries_1.queryClientFactory)(); }
    return function (ui) { return (<queries_1.QueryClientProvider client={queryClient}>{ui}</queries_1.QueryClientProvider>); };
};
exports.QueryClientWrapper = QueryClientWrapper;
var ThemeWrapper = function (theme) {
    if (theme === void 0) { theme = ui_1.light; }
    return function (ui) { return <ui_1.ThemeProvider theme={theme}>{ui}</ui_1.ThemeProvider>; };
};
exports.ThemeWrapper = ThemeWrapper;
