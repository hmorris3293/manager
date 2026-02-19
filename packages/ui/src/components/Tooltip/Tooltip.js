"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tooltipClasses = exports.Tooltip = void 0;
var Tooltip_1 = require("@mui/material/Tooltip");
Object.defineProperty(exports, "tooltipClasses", { enumerable: true, get: function () { return Tooltip_1.tooltipClasses; } });
var react_1 = require("react");
/**
 * Tooltips display informative text when users hover over, focus on, or tap an element.
 */
var Tooltip = function (props) {
    // Avoiding displaying [object Object] in the data-qa-tooltip attribute when the title is an JSX element.
    // Can be overridden by passing data-qa-tooltip directly to the Tooltip component.
    var dataQaTooltip = typeof props.title === 'string' ? props.title : undefined;
    return <Tooltip_1.default data-qa-tooltip={dataQaTooltip} {...props}/>;
};
exports.Tooltip = Tooltip;
