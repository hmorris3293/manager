"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
exports.TooltipIcon = void 0;
var styled_1 = require("@emotion/styled");
var CheckCircleOutlined_1 = require("@mui/icons-material/CheckCircleOutlined");
var ErrorOutline_1 = require("@mui/icons-material/ErrorOutline");
var HelpOutline_1 = require("@mui/icons-material/HelpOutline");
var InfoOutlined_1 = require("@mui/icons-material/InfoOutlined");
var Warning_1 = require("@mui/icons-material/Warning");
var styles_1 = require("@mui/material/styles");
var React = require("react");
var utilities_1 = require("../../utilities");
var IconButton_1 = require("../IconButton");
var Tooltip_1 = require("../Tooltip");
/**
 * ## Usage
 *
 * Tooltips can be attached to any active element (text fields, buttons, etc.) on a page. They provide descriptions or explanations for their paired elements. Thus, tooltips are highly contextual and specific and don’t explain the bigger picture or entire task flow.
 *
 * **Guidelines**
 * - Don’t use tooltips for information that is vital to task completion.
 * - Provide brief and helpful content inside the tooltip.
 * - Support _both_ mouse _and_ keyboard hover.
 * - Present a link to additional content if needed.
 */
var TooltipIcon = function (props) {
    var theme = (0, styles_1.useTheme)();
    var classes = props.classes, icon = props.icon, leaveDelay = props.leaveDelay, status = props.status, sx = props.sx, sxTooltipIcon = props.sxTooltipIcon, text = props.text, tooltipAnalyticsEvent = props.tooltipAnalyticsEvent, tooltipPosition = props.tooltipPosition, width = props.width, labelTooltipIconSize = props.labelTooltipIconSize;
    var handleOpenTooltip = function () {
        if (tooltipAnalyticsEvent) {
            tooltipAnalyticsEvent();
        }
    };
    var renderIcon;
    var sxRootStyle = {
        '&&': {
            fill: theme.tokens.component.Label.InfoIcon,
            stroke: theme.tokens.component.Label.InfoIcon,
            strokeWidth: 0,
        },
        '&:hover': {
            color: theme.tokens.alias.Content.Icon.Primary.Hover,
            fill: theme.tokens.alias.Content.Icon.Primary.Hover,
            stroke: theme.tokens.alias.Content.Icon.Primary.Hover,
        },
        height: labelTooltipIconSize === 'small' ? 16 : 20,
        width: labelTooltipIconSize === 'small' ? 16 : 20,
    };
    switch (status) {
        case 'error':
            renderIcon = <ErrorOutline_1.default style={{ color: theme.color.red }}/>;
            break;
        case 'help':
            renderIcon = <HelpOutline_1.default sx={sxRootStyle}/>;
            break;
        case 'info':
            renderIcon = <InfoOutlined_1.default sx={sxRootStyle}/>;
            break;
        case 'other':
            renderIcon = icon !== null && icon !== void 0 ? icon : null;
            break;
        case 'success':
            renderIcon = <CheckCircleOutlined_1.default style={{ color: theme.color.blue }}/>;
            break;
        case 'warning':
            renderIcon = <Warning_1.default style={{ color: theme.color.orange }}/>;
            break;
        default:
            renderIcon = null;
    }
    return (<StyledTooltip classes={classes} componentsProps={props.componentsProps} data-qa-help-tooltip enterTouchDelay={0} leaveDelay={leaveDelay ? 3000 : undefined} leaveTouchDelay={5000} onOpen={handleOpenTooltip} placement={tooltipPosition ? tooltipPosition : 'bottom'} sx={sx} title={text} width={width}>
      <IconButton_1.IconButton data-qa-help-button onClick={function (e) {
            // This prevents unwanted behavior when clicking a tooltip icon.
            // See https://github.com/linode/manager/pull/10331#pullrequestreview-1971338778
            e.stopPropagation();
        }} size="large" sx={sxTooltipIcon}>
        {renderIcon}
      </IconButton_1.IconButton>
    </StyledTooltip>);
};
exports.TooltipIcon = TooltipIcon;
var StyledTooltip = (0, styled_1.default)(function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (<Tooltip_1.Tooltip {...props} classes={{ popper: className }}/>);
}, {
    label: 'StyledTooltip',
    shouldForwardProp: (0, utilities_1.omittedProps)(['width']),
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & .", " {\n    max-width: ", ";\n  }\n"], ["\n  & .", " {\n    max-width: ", ";\n  }\n"])), Tooltip_1.tooltipClasses.tooltip, function (props) { return (props.width ? props.width + 'px' : undefined); });
var templateObject_1;
