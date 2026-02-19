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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledActionButton = void 0;
var styles_1 = require("@mui/material/styles");
var Button_1 = require("./Button");
/**
 * A button for our action menu's. Eventually this treatment will go away,
 * but the sake of the MUI migration we need to keep it around for now, and as a styled component in order to get rid of
 * spreading excessive styles for everywhere this is used.
 *
 */
exports.StyledActionButton = (0, styles_1.styled)(Button_1.Button, {
    label: 'StyledActionButton',
})(function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return (__assign(__assign(__assign({}, (!props.disabled && {
        '&:hover': {
            backgroundColor: theme.color.buttonPrimaryHover,
            color: theme.color.white,
        },
    })), { background: 'transparent', color: theme.textColors.linkActiveLight, font: theme.font.normal, fontSize: '14px', lineHeight: '16px', minWidth: 0, padding: '12px 10px' }), (props.disabled && {
        color: theme.palette.mode === 'dark'
            ? "".concat(theme.color.grey6, " !important")
            : theme.color.disabledText,
        cursor: 'default',
    })));
});
