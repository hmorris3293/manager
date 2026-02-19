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
exports.StyledPlusIcon = exports.StyledTagButton = void 0;
var styles_1 = require("@mui/material/styles");
var icons_1 = require("../../assets/icons");
var utilities_1 = require("../../utilities");
var Button_1 = require("./Button");
/**
 * A button for Tags. Eventually this treatment will go away,
 * but the sake of the MUI migration we need to keep it around for now, and as a styled component in order to get rid of
 * spreading excessive styles for everywhere this is used.
 *
 */
exports.StyledTagButton = (0, styles_1.styled)(Button_1.Button, {
    label: 'StyledTagButton',
    shouldForwardProp: (0, utilities_1.omittedProps)(['panel']),
})(function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return (__assign(__assign({ border: 'none', color: theme.tokens.alias.Action.Neutral, fontSize: '0.875rem', minHeight: 30, whiteSpace: 'nowrap' }, (props.panel && {
        height: 34,
    })), (!props.disabled && {
        '&:hover, &:focus': {
            '& svg': {
                color: theme.color.white,
            },
            backgroundColor: theme.color.buttonPrimaryHover,
            border: 'none',
            color: theme.color.white,
        },
        backgroundColor: theme.color.tagButtonBg,
        color: theme.color.tagButtonText,
    })));
});
exports.StyledPlusIcon = (0, styles_1.styled)(icons_1.PlusSignIcon, {
    label: 'StyledPlusIcon',
})(function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return ({
        color: props.disabled
            ? theme.name === 'dark'
                ? theme.tokens.color.Neutrals[70]
                : theme.color.disabledText
            : theme.color.tagButtonText,
        height: '10px',
        width: '10px',
    });
});
