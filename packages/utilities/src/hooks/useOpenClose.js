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
exports.useOpenClose = void 0;
var React = require("react");
var defaultState = {
    open: false,
};
// Simple hook to group "open/close" state & functionality.
// Useful for components that render several drawers, modals, etc. which need
// independent open/close state. This hooks provides a common interface.
var useOpenClose = function (initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = React.useState(initialState), entity = _a[0], setEntity = _a[1];
    var open = function () { return setEntity(function (prevState) { return (__assign(__assign({}, prevState), { open: true })); }); };
    var close = function () { return setEntity(function (prevState) { return (__assign(__assign({}, prevState), { open: false })); }); };
    var isOpen = entity.open;
    return { close: close, isOpen: isOpen, open: open };
};
exports.useOpenClose = useOpenClose;
