"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hidden = exports.breakpointOrder = void 0;
var material_1 = require("@mui/material");
exports.breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl'];
var isWidthUp = function (breakpoint, width, inclusive) {
    if (inclusive === void 0) { inclusive = true; }
    if (inclusive) {
        return (exports.breakpointOrder.indexOf(breakpoint) <= exports.breakpointOrder.indexOf(width));
    }
    return exports.breakpointOrder.indexOf(breakpoint) < exports.breakpointOrder.indexOf(width);
};
var isWidthDown = function (breakpoint, width, inclusive) {
    if (inclusive === void 0) { inclusive = false; }
    if (inclusive) {
        return (exports.breakpointOrder.indexOf(width) <= exports.breakpointOrder.indexOf(breakpoint));
    }
    return exports.breakpointOrder.indexOf(width) < exports.breakpointOrder.indexOf(breakpoint);
};
var useCurrentWidth = function () {
    var theme = (0, material_1.useTheme)();
    var matchesSm = (0, material_1.useMediaQuery)(theme.breakpoints.up('sm'));
    var matchesMd = (0, material_1.useMediaQuery)(theme.breakpoints.up('md'));
    var matchesLg = (0, material_1.useMediaQuery)(theme.breakpoints.up('lg'));
    var matchesXl = (0, material_1.useMediaQuery)(theme.breakpoints.up('xl'));
    if (matchesXl)
        return 'xl';
    if (matchesLg)
        return 'lg';
    if (matchesMd)
        return 'md';
    if (matchesSm)
        return 'sm';
    return 'xs';
};
var Hidden = function (props) {
    var width = useCurrentWidth();
    var children = props.children, only = props.only, lgDown = props.lgDown, lgUp = props.lgUp, mdDown = props.mdDown, mdUp = props.mdUp, smDown = props.smDown, smUp = props.smUp, xlDown = props.xlDown, xlUp = props.xlUp, xsDown = props.xsDown, xsUp = props.xsUp;
    var upDownProps = {
        lgDown: lgDown,
        lgUp: lgUp,
        mdDown: mdDown,
        mdUp: mdUp,
        smDown: smDown,
        smUp: smUp,
        xlDown: xlDown,
        xlUp: xlUp,
        xsDown: xsDown,
        xsUp: xsUp,
    };
    var visible = true;
    if (only) {
        if (Array.isArray(only)) {
            for (var _i = 0, only_1 = only; _i < only_1.length; _i++) {
                var breakpoint = only_1[_i];
                if (width === breakpoint) {
                    visible = false;
                    break;
                }
            }
        }
        else if (width === only) {
            visible = false;
        }
    }
    if (visible) {
        for (var _a = 0, breakpointOrder_1 = exports.breakpointOrder; _a < breakpointOrder_1.length; _a++) {
            var breakpoint = breakpointOrder_1[_a];
            var breakpointUp = upDownProps["".concat(breakpoint, "Up")];
            var breakpointDown = upDownProps["".concat(breakpoint, "Down")];
            if ((breakpointUp && isWidthUp(breakpoint, width)) ||
                (breakpointDown && isWidthDown(breakpoint, width))) {
                visible = false;
                break;
            }
        }
    }
    if (!visible) {
        return null;
    }
    return children;
};
exports.Hidden = Hidden;
