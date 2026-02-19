"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notice = void 0;
var react_1 = require("react");
var icons_1 = require("../../assets/icons");
var Box_1 = require("../Box");
var Typography_1 = require("../Typography");
var Notice_styles_1 = require("./Notice.styles");
/**
## Usage

- Appear within the page or modal
- Might be triggered by user action
- Typically used to alert the user to a new service, limited availability, or a potential consequence of the action being taken
- Consider using a [Dismissible Banner](/docs/components-notifications-dismissible-banners--beta-banner) if it’s not critical information

## Types of Notices:

- Success (green line)
- Info (blue line)
- Error (red line)
- Warning (yellow line)
 */
var Notice = function (props) {
    var _a;
    var _b = props.bypassValidation, bypassValidation = _b === void 0 ? false : _b, children = props.children, className = props.className, dataTestId = props.dataTestId, errorGroup = props.errorGroup, _c = props.forceImportantIconVerticalCenter, forceImportantIconVerticalCenter = _c === void 0 ? false : _c, spacingBottom = props.spacingBottom, spacingLeft = props.spacingLeft, spacingTop = props.spacingTop, sx = props.sx, text = props.text, typeProps = props.typeProps, variant = props.variant, rest = __rest(props, ["bypassValidation", "children", "className", "dataTestId", "errorGroup", "forceImportantIconVerticalCenter", "spacingBottom", "spacingLeft", "spacingTop", "sx", "text", "typeProps", "variant"]);
    var _d = (0, Notice_styles_1.useStyles)(), classes = _d.classes, cx = _d.cx;
    var variantMap = {
        error: variant === 'error',
        info: variant === 'info',
        success: variant === 'success',
        tip: variant === 'tip',
        warning: variant === 'warning',
    };
    var errorScrollClassName = bypassValidation
        ? ''
        : errorGroup
            ? "error-for-scroll-".concat(errorGroup)
            : "error-for-scroll";
    var dataAttributes = !variantMap.error
        ? {
            'data-qa-notice': true,
        }
        : {
            'data-qa-error': true,
            'data-qa-notice': true,
        };
    return (<Box_1.Box className={cx(classes.root, (_a = {},
            _a[classes.error] = variantMap.error,
            _a[classes.info] = variantMap.info || variantMap.tip,
            _a[classes.success] = variantMap.success,
            _a[classes.warning] = variantMap.warning,
            _a[errorScrollClassName] = variantMap.error,
            _a), 'notice', className)} data-testid={dataTestId !== null && dataTestId !== void 0 ? dataTestId : "notice".concat(variant ? "-".concat(variant) : '')} role="alert" sx={__spreadArray([
            function (theme) { return ({
                marginBottom: spacingBottom !== undefined
                    ? "".concat(spacingBottom, "px")
                    : theme.spacingFunction(16),
                marginLeft: spacingLeft !== undefined ? "".concat(spacingLeft, "px") : 0,
                marginTop: spacingTop !== undefined ? "".concat(spacingTop, "px") : 0,
            }); }
        ], (Array.isArray(sx) ? sx : [sx]), true)} {...dataAttributes} {...rest}>
      <Box_1.Box sx={function (theme) { return ({
            display: 'flex',
            alignSelf: forceImportantIconVerticalCenter ? 'center' : 'flex-start',
            marginRight: theme.spacingFunction(8),
        }); }}>
        {variantMap.error && <icons_1.ErrorIcon className={classes.icon}/>}
        {variantMap.info && <icons_1.InfoIcon className={classes.icon}/>}
        {variantMap.success && <icons_1.CheckIcon className={classes.icon}/>}
        {variantMap.tip && <icons_1.LightBulbIcon className={classes.icon}/>}
        {variantMap.warning && <icons_1.WarningIcon className={classes.icon}/>}
      </Box_1.Box>
      <Box_1.Box sx={{ width: '100%' }}>
        {text || typeof children === 'string' ? (<Typography_1.Typography {...typeProps}>{text !== null && text !== void 0 ? text : children}</Typography_1.Typography>) : (children)}
      </Box_1.Box>
    </Box_1.Box>);
};
exports.Notice = Notice;
