"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var Box_1 = require("@mui/material/Box");
var react_1 = require("react");
/**
 * The Box component serves as a wrapper for creating simple layouts or styles.
 * It uses a `<div />` unless unless you change it with the `component` prop
 */
exports.Box = react_1.default.forwardRef(function (props, ref) {
    return <Box_1.default {...props} ref={ref}/>;
});
