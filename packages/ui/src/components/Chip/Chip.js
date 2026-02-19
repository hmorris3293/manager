"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chip = void 0;
var Chip_1 = require("@mui/material/Chip");
var React = require("react");
exports.Chip = React.forwardRef(function (props, ref) {
    return <Chip_1.default ref={ref} {...props}/>;
});
