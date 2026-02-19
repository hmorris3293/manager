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
exports.CircleProgress = void 0;
var CircularProgress_1 = require("@mui/material/CircularProgress");
var styles_1 = require("@mui/material/styles");
var React = require("react");
var utilities_1 = require("../../utilities");
var Box_1 = require("../Box");
var SIZE_MAP = {
    lg: 124,
    md: 40,
    sm: 20,
    xs: 16,
};
/**
 * Use for short, indeterminate activities requiring user attention. Defaults to large.
 *
 * sizes:
 * xs = 14
 * md = 20
 * md = 40
 * lg = 124
 */
var CircleProgress = function (props) {
    var children = props.children, noPadding = props.noPadding, size = props.size, sx = props.sx, rest = __rest(props, ["children", "noPadding", "size", "sx"]);
    var variant = typeof props.value === 'number' ? 'determinate' : 'indeterminate';
    var value = typeof props.value === 'number' ? props.value : 0;
    if (size) {
        return (<StyledCustomCircularProgress {...rest} aria-label="Content is loading" data-qa-circle-progress data-testid="circle-progress" noPadding={noPadding} size={noPadding ? SIZE_MAP[size] : SIZE_MAP[size] * 2} tabIndex={0}/>);
    }
    return (<StyledRootDiv aria-label="Content is loading" sx={sx}>
      {children !== undefined && (<Box_1.Box sx={{ marginTop: 4, position: 'absolute' }}>{children}</Box_1.Box>)}
      <StyledCircularProgress {...rest} data-qa-circle-progress={value} data-testid="circle-progress" size={SIZE_MAP['lg']} thickness={2} value={value} variant={variant}/>
    </StyledRootDiv>);
};
exports.CircleProgress = CircleProgress;
var StyledRootDiv = (0, styles_1.styled)('div')(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto 20px',
            position: 'relative'
        },
        _b[theme.breakpoints.up('md')] = {
            flex: 1,
            height: 300,
        },
        _b.width = '100%',
        _b);
});
var StyledCircularProgress = (0, styles_1.styled)(CircularProgress_1.default)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            position: 'relative'
        },
        _b[theme.breakpoints.down('sm')] = {
            height: '72px !important',
            width: '72px !important',
        },
        _b);
});
var StyledCustomCircularProgress = (0, styles_1.styled)(CircularProgress_1.default, {
    shouldForwardProp: (0, utilities_1.omittedProps)(['noPadding']),
})(function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return (__assign({ padding: "calc(".concat(theme.spacing(), " * 1.3)") }, (props.noPadding && {
        padding: 0,
    })));
});
