"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Typography = void 0;
var Typography_1 = require("@mui/material/Typography");
var react_1 = require("react");
exports.Typography = react_1.default.forwardRef(function (props, ref) {
    return <Typography_1.default {...props} ref={ref}/>;
});
