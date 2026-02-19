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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var material_1 = require("@mui/material");
var Radio_1 = require("@mui/material/Radio");
var React = require("react");
var icons_1 = require("../../assets/icons");
/**
### Use radio buttons to

- Expose all available options
- Select a single option from a list

### Guidelines

- If there are 3 or fewer items to select, use radio buttons rather than drop-down menus.
- If possible, offer a default selection.
- Because radio buttons allow only one choice, make sure that the options are both comprehensive and distinct.
- Let users select an option by clicking on either the button itself or its label to provide as big a target area as possible.

### Reasons for a Default Selection

- Expedite tasks
- Give people control and align with their expectations
 */
var Radio = function (props) {
    return (<Radio_1.default checkedIcon={<material_1.SvgIcon component={icons_1.RadioIconRadioed} fontSize={props.size} viewBox="0 0 20 20"/>} data-qa-radio={props.checked || false} icon={<material_1.SvgIcon component={icons_1.RadioIcon} fontSize={props.size} viewBox="0 0 20 20"/>} {...props} inputProps={__assign({ 'aria-checked': props.checked, 'aria-label': props.name, role: 'radio' }, props.inputProps)}/>);
};
exports.Radio = Radio;
