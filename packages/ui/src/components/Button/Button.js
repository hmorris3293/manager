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
exports.Button = void 0;
var HelpOutline_1 = require("@mui/icons-material/HelpOutline");
var Button_1 = require("@mui/material/Button");
var styles_1 = require("@mui/material/styles");
var React = require("react");
var utilities_1 = require("../../utilities");
var Tooltip_1 = require("../Tooltip");
var buttonTypeToColor = {
    outlined: 'secondary', // We're treating this as a secondary
    primary: 'primary',
    secondary: 'secondary',
};
var buttonTypeToVariant = {
    outlined: 'outlined',
    primary: 'contained',
    secondary: 'contained',
};
var StyledButton = (0, styles_1.styled)(Button_1.default, {
    shouldForwardProp: (0, utilities_1.omittedProps)(['compactX', 'compactY', 'buttonType']),
})(function (_a) {
    var compactX = _a.compactX, compactY = _a.compactY;
    return (__assign(__assign({}, (compactX && {
        minWidth: 50,
        paddingLeft: 0,
        paddingRight: 0,
    })), (compactY && {
        minHeight: 20,
        paddingBottom: 0,
        paddingTop: 0,
    })));
});
exports.Button = React.forwardRef(function (_a, ref) {
    var alwaysShowTooltip = _a.alwaysShowTooltip, 
    // default to secondary as some components never define a buttonType (usually buttons with icons)
    // and we end up with the wrong styles (purple color, see #6455)
    // It would be nice to remove this default and require the prop but this fixes the issue for now.
    _b = _a.buttonType, 
    // default to secondary as some components never define a buttonType (usually buttons with icons)
    // and we end up with the wrong styles (purple color, see #6455)
    // It would be nice to remove this default and require the prop but this fixes the issue for now.
    buttonType = _b === void 0 ? 'secondary' : _b, color = _a.color, disabled = _a.disabled, sxEndIcon = _a.sxEndIcon, tooltipAnalyticsEvent = _a.tooltipAnalyticsEvent, tooltipText = _a.tooltipText, TooltipProps = _a.TooltipProps, rest = __rest(_a, ["alwaysShowTooltip", "buttonType", "color", "disabled", "sxEndIcon", "tooltipAnalyticsEvent", "tooltipText", "TooltipProps"]);
    var showTooltip = alwaysShowTooltip || (disabled && Boolean(tooltipText));
    var handleTooltipAnalytics = function () {
        if (tooltipAnalyticsEvent) {
            tooltipAnalyticsEvent();
        }
    };
    var handleDisabledKeyDown = function (e) {
        // Disable the buttom from submitting forms when disabled
        // Allow the user to tab to the button and press
        // space or enter to trigger the tooltip.
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleTooltipAnalytics();
        }
    };
    var button = (<StyledButton {...rest} aria-describedby={showTooltip ? 'button-tooltip' : rest['aria-describedby']} aria-disabled={disabled} buttonType={buttonType} color={(color === 'error' && color) || buttonTypeToColor[buttonType]} data-testid={rest['data-testid'] || 'button'} disableRipple={disabled || rest.disableRipple} endIcon={(showTooltip && <HelpOutline_1.default sx={sxEndIcon}/>) || rest.endIcon} onClick={disabled ? function (e) { return e.preventDefault(); } : rest.onClick} onKeyDown={disabled ? handleDisabledKeyDown : rest.onKeyDown} ref={ref} variant={buttonTypeToVariant[buttonType] || 'text'}/>);
    if (showTooltip) {
        return (<Tooltip_1.Tooltip aria-label={rest['aria-label']} data-testid="Tooltip" id="button-tooltip" onClick={handleTooltipAnalytics} title={tooltipText} {...TooltipProps}>
          {button}
        </Tooltip_1.Tooltip>);
    }
    return button;
});
