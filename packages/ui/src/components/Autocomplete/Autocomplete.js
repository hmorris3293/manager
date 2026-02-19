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
exports.Autocomplete = void 0;
var Autocomplete_1 = require("@mui/material/Autocomplete");
var react_1 = require("react");
var chevron_down_svg_1 = require("../../assets/icons/chevron-down.svg");
var close_svg_1 = require("../../assets/icons/close.svg");
var Box_1 = require("../Box");
var CircleProgress_1 = require("../CircleProgress");
var InputAdornment_1 = require("../InputAdornment");
var TextField_1 = require("../TextField");
var Autocomplete_styles_1 = require("./Autocomplete.styles");
/**
 * An Autocomplete component that provides a user-friendly select input
 * allowing selection between options.
 *
 * @example
 * <Autocomplete
 *  label="Select a Fruit"
 *  onSelectionChange={(selected) => console.log(selected)}
 *  options={[
 *    {
 *      label: 'Apple',
 *      value: 'apple',
 *    }
 *  ]}
 * />
 */
var Autocomplete = function (props) {
    var clearOnBlur = props.clearOnBlur, defaultValue = props.defaultValue, _a = props.disablePortal, disablePortal = _a === void 0 ? true : _a, _b = props.disableSelectAll, disableSelectAll = _b === void 0 ? false : _b, _c = props.errorText, errorText = _c === void 0 ? '' : _c, helperText = props.helperText, label = props.label, _d = props.limitTags, limitTags = _d === void 0 ? 2 : _d, _e = props.loading, loading = _e === void 0 ? false : _e, loadingText = props.loadingText, multiple = props.multiple, noMarginTop = props.noMarginTop, noOptionsText = props.noOptionsText, _f = props.keepSearchEnabledOnMobile, keepSearchEnabledOnMobile = _f === void 0 ? false : _f, onBlur = props.onBlur, onChange = props.onChange, options = props.options, placeholder = props.placeholder, renderInput = props.renderInput, renderOption = props.renderOption, _g = props.selectAllLabel, selectAllLabel = _g === void 0 ? '' : _g, textFieldProps = props.textFieldProps, value = props.value, rest = __rest(props, ["clearOnBlur", "defaultValue", "disablePortal", "disableSelectAll", "errorText", "helperText", "label", "limitTags", "loading", "loadingText", "multiple", "noMarginTop", "noOptionsText", "keepSearchEnabledOnMobile", "onBlur", "onChange", "options", "placeholder", "renderInput", "renderOption", "selectAllLabel", "textFieldProps", "value"]);
    var _h = react_1.default.useState(false), isReadonly = _h[0], setIsReadonly = _h[1];
    var isSelectAllActive = multiple && Array.isArray(value) && value.length === options.length;
    var selectAllText = isSelectAllActive ? 'Deselect All' : 'Select All';
    var selectAllOption = { label: "".concat(selectAllText, " ").concat(selectAllLabel) };
    var optionsWithSelectAll = __spreadArray([selectAllOption], options, true);
    return (<Autocomplete_1.default ChipProps={{ deleteIcon: <close_svg_1.default /> }} clearOnBlur={clearOnBlur} data-qa-autocomplete={label} defaultValue={defaultValue} disableCloseOnSelect={multiple} disablePortal={disablePortal} limitTags={limitTags} loading={loading} loadingText={loadingText || 'Loading...'} multiple={multiple} noOptionsText={noOptionsText || <i>You have no options to choose from</i>} onBlur={onBlur} onTouchStart={function () {
            setIsReadonly(true);
        }} options={multiple && !disableSelectAll && options.length > 0
            ? optionsWithSelectAll
            : options} PopperComponent={Autocomplete_styles_1.CustomPopper} popupIcon={<chevron_down_svg_1.default data-testid="KeyboardArrowDownIcon"/>} renderInput={renderInput
            ? renderInput
            : function (params) {
                var _a, _b;
                return (<TextField_1.TextField errorText={errorText} helperText={helperText} inputId={params.id} label={label} loading={loading} noMarginTop={noMarginTop} placeholder={placeholder !== null && placeholder !== void 0 ? placeholder : 'Select an option'} required={(_a = textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.InputProps) === null || _a === void 0 ? void 0 : _a.required} tooltipText={textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.tooltipText} {...params} {...textFieldProps} InputProps={__assign(__assign(__assign({}, params.InputProps), textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.InputProps), { endAdornment: (<>
                      {loading && (<InputAdornment_1.InputAdornment position="end">
                          <CircleProgress_1.CircleProgress noPadding size="xs"/>
                        </InputAdornment_1.InputAdornment>)}
                      {(_b = textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.InputProps) === null || _b === void 0 ? void 0 : _b.endAdornment}
                      {params.InputProps.endAdornment}
                    </>) })} inputProps={__assign(__assign(__assign({}, params.inputProps), textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.inputProps), { readOnly: isReadonly && !keepSearchEnabledOnMobile })}/>);
            }} renderOption={function (props, option, state, ownerState) {
            var isSelectAllOption = option === selectAllOption;
            var ListItem = isSelectAllOption ? Autocomplete_styles_1.StyledListItem : 'li';
            return renderOption ? (renderOption(props, option, state, ownerState)) : (<ListItem {...props} data-qa-option key={props.key}>
            <>
              <Box_1.Box sx={{
                    flexGrow: 1,
                }}>
                {rest.getOptionLabel
                    ? rest.getOptionLabel(option)
                    : option.label}
              </Box_1.Box>
              <Autocomplete_styles_1.SelectedIcon visible={state.selected}/>
            </>
          </ListItem>);
        }} value={value} {...rest} onChange={function (e, value, reason, details) {
            if (onChange) {
                if ((details === null || details === void 0 ? void 0 : details.option) === selectAllOption) {
                    if (isSelectAllActive) {
                        if (typeof value === typeof []) {
                            onChange(e, [], reason, details);
                        }
                    }
                    else {
                        if (typeof value === typeof options) {
                            onChange(e, options, reason, details);
                        }
                    }
                }
                else {
                    onChange(e, value, reason, details);
                }
            }
        }}/>);
};
exports.Autocomplete = Autocomplete;
