"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputAdornment = void 0;
var InputAdornment_1 = require("@mui/material/InputAdornment");
var react_1 = require("react");
/**
 * Use an InputAdornment to decorate a `<TextField />` with a prefix or suffix
 *
 * @example
 * <TextField
 *   label="Percentage"
 *   InputProps={{
 *     startAdornment: <InputAdornment position="end">%</InputAdornment>,
 *   }}
 * />
 */
var InputAdornment = function (props) {
    return <InputAdornment_1.default {...props}/>;
};
exports.InputAdornment = InputAdornment;
