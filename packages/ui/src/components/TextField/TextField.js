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
exports.TextField = void 0;
var KeyboardArrowDown_1 = require("@mui/icons-material/KeyboardArrowDown");
var styles_1 = require("@mui/material/styles");
var TextField_1 = require("@mui/material/TextField");
var react_1 = require("react");
var Box_1 = require("../Box");
var CircleProgress_1 = require("../CircleProgress");
var FormHelperText_1 = require("../FormHelperText");
var InputAdornment_1 = require("../InputAdornment");
var InputLabel_1 = require("../InputLabel");
var TooltipIcon_1 = require("../TooltipIcon");
var TextField_utils_1 = require("./TextField.utils");
var TextField = function (props) {
    var InputLabelProps = props.InputLabelProps, InputProps = props.InputProps, SelectProps = props.SelectProps, children = props.children, className = props.className, containerProps = props.containerProps, dataAttrs = props.dataAttrs, editable = props.editable, error = props.error, errorGroup = props.errorGroup, errorText = props.errorText, expand = props.expand, hasAbsoluteError = props.hasAbsoluteError, helperText = props.helperText, _a = props.helperTextPosition, helperTextPosition = _a === void 0 ? 'bottom' : _a, hideLabel = props.hideLabel, inputId = props.inputId, inputProps = props.inputProps, labelPosition = props.labelPosition, label = props.label, labelTooltipText = props.labelTooltipText, _b = props.labelTooltipIconPosition, labelTooltipIconPosition = _b === void 0 ? 'right' : _b, _c = props.labelTooltipIconSize, labelTooltipIconSize = _c === void 0 ? 'small' : _c, loading = props.loading, max = props.max, min = props.min, noMarginTop = props.noMarginTop, onBlur = props.onBlur, onChange = props.onChange, optional = props.optional, required = props.required, slotProps = props.slotProps, tooltipClasses = props.tooltipClasses, tooltipOnMouseEnter = props.tooltipOnMouseEnter, tooltipPosition = props.tooltipPosition, tooltipText = props.tooltipText, tooltipWidth = props.tooltipWidth, trimmed = props.trimmed, type = props.type, value = props.value, textFieldProps = __rest(props, ["InputLabelProps", "InputProps", "SelectProps", "children", "className", "containerProps", "dataAttrs", "editable", "error", "errorGroup", "errorText", "expand", "hasAbsoluteError", "helperText", "helperTextPosition", "hideLabel", "inputId", "inputProps", "labelPosition", "label", "labelTooltipText", "labelTooltipIconPosition", "labelTooltipIconSize", "loading", "max", "min", "noMarginTop", "onBlur", "onChange", "optional", "required", "slotProps", "tooltipClasses", "tooltipOnMouseEnter", "tooltipPosition", "tooltipText", "tooltipWidth", "trimmed", "type", "value"]);
    var _d = react_1.default.useState(value !== null && value !== void 0 ? value : ''), _value = _d[0], setValue = _d[1];
    var theme = (0, styles_1.useTheme)();
    var sxTooltipIconLeft = {
        marginRight: "".concat(theme.spacingFunction(4)),
        padding: "".concat(theme.spacingFunction(4), " ").concat(theme.spacingFunction(4), " ").concat(theme.spacingFunction(4), " ").concat(theme.spacingFunction(2)),
        '&& svg': {
            fill: theme.tokens.component.Label.Icon,
            stroke: theme.tokens.component.Label.Icon,
            strokeWidth: 0,
            ':hover': {
                color: theme.tokens.alias.Content.Icon.Primary.Hover,
                fill: theme.tokens.alias.Content.Icon.Primary.Hover,
                stroke: theme.tokens.alias.Content.Icon.Primary.Hover,
            },
        },
    };
    var sxTooltipIconRight = {
        marginLeft: "".concat(theme.spacingFunction(4)),
        padding: "".concat(theme.spacingFunction(4)),
    };
    var _e = (0, TextField_utils_1.useFieldIds)({ errorGroup: errorGroup, hasError: Boolean(errorText), inputId: inputId, label: label }), errorScrollClassName = _e.errorScrollClassName, errorTextId = _e.errorTextId, helperTextId = _e.helperTextId, validInputId = _e.validInputId;
    var isControlled = value !== undefined;
    react_1.default.useEffect(function () {
        if (isControlled) {
            setValue(value);
        }
    }, [value, isControlled]);
    var handleBlur = function (e) {
        if (trimmed) {
            var trimmedValue = e.target.value.trim();
            e.target.value = trimmedValue;
            setValue(trimmedValue);
        }
        if (onBlur) {
            onBlur(e);
        }
    };
    var handleChange = react_1.default.useCallback(function (e) {
        /**
         * If we've provided a min and max value, make sure the user
         * input doesn't go outside of those bounds ONLY if the input
         * type matches a number type.
         */
        var cleanedValue = (0, TextField_utils_1.getClampedValue)({
            max: max,
            min: min,
            type: type,
            value: e.target.value,
        });
        /**
         * If the cleanedValue is undefined, set the value to an empty
         * string but this shouldn't happen.
         */
        setValue(cleanedValue || '');
        // Invoke the onChange prop if one is provided with the cleaned value.
        if (onChange) {
            /**
             * Create clone of event node only if our cleanedValue
             * is different from the e.target.value
             *
             * This solves for a specific scenario where the e.target on
             * the MUI TextField select variants were actually a plain object
             * rather than a DOM node.
             *
             * So e.target on a text field === <input />
             * while e.target on the select variant === { value: 10, name: undefined }
             *
             * See GitHub issue: https://github.com/mui-org/material-ui/issues/16470
             */
            if (e.target.value !== cleanedValue) {
                var clonedEvent = __assign(__assign({}, e), { target: e.target.cloneNode() });
                clonedEvent.target.value = "".concat(cleanedValue);
                onChange(clonedEvent);
            }
            else {
                onChange(e);
            }
        }
    }, [min, max, type, onChange]);
    var labelSuffixText = required
        ? '(required)'
        : optional
            ? '(optional)'
            : null;
    return (<Box_1.Box {...containerProps} className={"".concat(errorText ? errorScrollClassName : '', " ").concat((containerProps === null || containerProps === void 0 ? void 0 : containerProps.className) || '')} sx={__assign(__assign(__assign(__assign({}, (Boolean(tooltipText) && {
            alignItems: 'flex-end',
            display: 'flex',
            flexWrap: 'wrap',
        })), (!noMarginTop &&
            labelPosition === 'left' && { marginTop: theme.spacing(3) })), (labelPosition === 'left' && {
            flexDirection: 'row',
            display: 'flex',
            gap: theme.spacing(1),
            alignItems: 'center',
        })), containerProps === null || containerProps === void 0 ? void 0 : containerProps.sx)}>
      <Box_1.Box alignItems={'center'} className={hideLabel ? 'visually-hidden' : ''} data-testid="inputLabelWrapper" display="flex" sx={__assign({}, (labelPosition !== 'left' && __assign({ marginBottom: theme.spacing(1) }, (!noMarginTop && { marginTop: theme.spacing(2) }))))}>
        {labelTooltipText && labelTooltipIconPosition === 'left' && (<TooltipIcon_1.TooltipIcon labelTooltipIconSize={labelTooltipIconSize} status="help" sxTooltipIcon={sxTooltipIconLeft} text={labelTooltipText} width={tooltipWidth}/>)}
        <InputLabel_1.InputLabel data-qa-textfield-label={label} htmlFor={validInputId} sx={{
            marginBottom: 0,
            transform: 'none',
            fontSize: labelTooltipIconSize === 'large'
                ? theme.tokens.font.FontSize.S
                : theme.tokens.font.FontSize.Xs,
        }} {...InputLabelProps} // We should change this name so that it's not conflicting with the deprecated prop
    >
          {label}
          {labelSuffixText && (<Box_1.Box component="span" sx={{ font: theme.font.normal }}>
              {' '}
              {labelSuffixText}
            </Box_1.Box>)}
        </InputLabel_1.InputLabel>
        {labelTooltipText && labelTooltipIconPosition === 'right' && (<TooltipIcon_1.TooltipIcon labelTooltipIconSize={labelTooltipIconSize} status="help" sxTooltipIcon={sxTooltipIconRight} text={labelTooltipText} width={tooltipWidth}/>)}
      </Box_1.Box>

      {helperText && helperTextPosition === 'top' && (<FormHelperText_1.FormHelperText data-qa-textfield-helper-text id={helperTextId} sx={{
                marginTop: 0,
            }}>
          {helperText}
        </FormHelperText_1.FormHelperText>)}
      <Box_1.Box sx={__assign(__assign({}, (Boolean(tooltipText) && {
            display: 'flex',
            width: '100%',
        })), { width: '100%' })}>
        <TextField_1.default {...textFieldProps} {...dataAttrs} className={className} error={!!error || !!errorText} fullWidth helperText={''} 
    /**
     * Set _helperText_ and _label_ to no value because we want to
     * have the ability to put the helper text under the label at the top.
     */
    label={''} onBlur={handleBlur} onChange={handleChange} slotProps={__assign({ htmlInput: __assign(__assign({ 'aria-describedby': helperText ? helperTextId : undefined, 'aria-errormessage': errorText ? errorTextId : undefined, 'aria-invalid': !!error || !!errorText, 'data-testid': 'textfield-input', id: validInputId }, inputProps), slotProps === null || slotProps === void 0 ? void 0 : slotProps.htmlInput), input: __assign(__assign({ className: className, disableUnderline: true, endAdornment: loading && (<InputAdornment_1.InputAdornment position="end">
                  <CircleProgress_1.CircleProgress noPadding size="xs"/>
                </InputAdornment_1.InputAdornment>), sx: __assign({}, (expand && {
                    maxWidth: '100%',
                })) }, InputProps), slotProps === null || slotProps === void 0 ? void 0 : slotProps.input), select: __assign(__assign({ IconComponent: KeyboardArrowDown_1.default, MenuProps: {
                    MenuListProps: { className: 'selectMenuList' },
                    PaperProps: { className: 'selectMenuDropdown' },
                    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                    transformOrigin: { horizontal: 'left', vertical: 'top' },
                }, disableUnderline: true }, SelectProps), slotProps === null || slotProps === void 0 ? void 0 : slotProps.select) }, slotProps)} sx={__assign(__assign({ marginTop: 0 }, (Boolean(tooltipText) && {
            width: '416px',
        })), props.sx)} type={type} 
    /*
     * Let us explicitly pass an empty string to the input
     * See UserDefinedFieldsPanel.tsx for a verbose explanation why.
     */
    value={_value} variant="standard">
          {children}
        </TextField_1.default>
        {tooltipText && (<TooltipIcon_1.TooltipIcon classes={{ popper: tooltipClasses }} onMouseEnter={tooltipOnMouseEnter} status="info" sxTooltipIcon={{
                height: '34px',
                margin: '0px 0px 0px 4px',
                padding: '17px',
                width: '34px',
            }} text={tooltipText} tooltipPosition={tooltipPosition} width={tooltipWidth}/>)}
      </Box_1.Box>
      {errorText && (<FormHelperText_1.FormHelperText data-qa-textfield-error-text={label} role="alert" sx={__assign(__assign(__assign({}, ((editable || hasAbsoluteError) && {
                position: 'absolute',
            })), (editable && {
                paddingLeft: 1,
                wordBreak: 'keep-all',
            })), { alignItems: 'center', color: theme.palette.error.dark, display: 'flex', left: 5, top: 42, width: '100%' })}>
          {errorText}
        </FormHelperText_1.FormHelperText>)}
      {helperText && helperTextPosition === 'bottom' && (<FormHelperText_1.FormHelperText data-qa-textfield-helper-text id={helperTextId}>
          {helperText}
        </FormHelperText_1.FormHelperText>)}
    </Box_1.Box>);
};
exports.TextField = TextField;
