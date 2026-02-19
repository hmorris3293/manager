"use strict";
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
exports.Divider = void 0;
var Divider_1 = require("@mui/material/Divider");
var styles_1 = require("@mui/material/styles");
var React = require("react");
var utilities_1 = require("../../utilities");
var Divider = function (props) {
    return <StyledDivider {...props}/>;
};
exports.Divider = Divider;
var StyledDivider = (0, styles_1.styled)(Divider_1.default, {
    label: 'StyledDivider',
    shouldForwardProp: (0, utilities_1.omittedProps)([
        'spacingTop',
        'spacingBottom',
        'light',
        'dark',
    ]),
})(function (_a) {
    var props = __rest(_a, []);
    return ({
        marginBottom: props.spacingBottom,
        marginTop: props.spacingTop,
    });
});
