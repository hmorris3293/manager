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
exports.NotFound = void 0;
var React = require("react");
var zero_state_svg_1 = require("../../assets/icons/zero-state.svg");
var Box_1 = require("../Box");
var Typography_1 = require("../Typography");
var NotFound = function (props) {
    var _a = props.alignTop, alignTop = _a === void 0 ? false : _a, rest = __rest(props, ["alignTop"]);
    return (<Box_1.Box sx={__assign(__assign({}, rest.sx), { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: alignTop ? 'flex-start' : 'center', height: '100%', p: 8 })}>
      <zero_state_svg_1.default />
      <Typography_1.Typography variant="h2">Not Found</Typography_1.Typography>
      <Typography_1.Typography sx={{ mt: 1 }}>This page does not exist.</Typography_1.Typography>
    </Box_1.Box>);
};
exports.NotFound = NotFound;
