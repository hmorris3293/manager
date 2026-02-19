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
exports.Select = void 0;
var react_1 = require("react");
var Autocomplete_1 = require("../Autocomplete");
var CircleProgress_1 = require("../CircleProgress");
var InputAdornment_1 = require("../InputAdornment");
var ListItem_1 = require("../ListItem");
var TextField_1 = require("../TextField");
/**
 * An abstracted Autocomplete component with a limited set of props.
 * Meant to be used when needing:
 * - A simple select
 * - A create-able select
 *
 * For any other use-cases, use the Autocomplete component directly.
 */
var Select = function (props) {
    var _a = props.autoFocus, autoFocus = _a === void 0 ? false : _a, _b = props.clearable, clearable = _b === void 0 ? false : _b, _c = props.creatable, creatable = _c === void 0 ? false : _c, _d = props.hideLabel, hideLabel = _d === void 0 ? false : _d, _e = props.keepSearchEnabledOnMobile, keepSearchEnabledOnMobile = _e === void 0 ? false : _e, label = props.label, _f = props.labelPosition, labelPosition = _f === void 0 ? 'top' : _f, listItemProps = props.listItemProps, _g = props.loading, loading = _g === void 0 ? false : _g, _h = props.noOptionsText, noOptionsText = _h === void 0 ? 'No options available' : _h, onChange = props.onChange, options = props.options, _j = props.searchable, searchable = _j === void 0 ? false : _j, sx = props.sx, textFieldProps = props.textFieldProps, rest = __rest(props, ["autoFocus", "clearable", "creatable", "hideLabel", "keepSearchEnabledOnMobile", "label", "labelPosition", "listItemProps", "loading", "noOptionsText", "onChange", "options", "searchable", "sx", "textFieldProps"]);
    var _k = react_1.default.useState(''), inputValue = _k[0], setInputValue = _k[1];
    var handleChange = function (event, value) {
        if (creatable && typeof value === 'string') {
            onChange === null || onChange === void 0 ? void 0 : onChange(event, {
                label: value,
                value: value,
            });
        }
        else if (value && typeof value === 'object' && 'label' in value) {
            var label_1 = value.label, optionValue = value.value;
            onChange === null || onChange === void 0 ? void 0 : onChange(event, {
                label: label_1,
                value: optionValue,
            });
        }
        else {
            onChange === null || onChange === void 0 ? void 0 : onChange(event, null);
        }
    };
    var _options = react_1.default.useMemo(function () { return getOptions({ creatable: creatable, inputValue: inputValue, options: options }); }, [creatable, inputValue, options]);
    return (<Autocomplete_1.Autocomplete {...rest} disableClearable={!clearable} forcePopupIcon freeSolo={creatable} getOptionDisabled={function (option) { return option.value === ''; }} isOptionEqualToValue={function (option, value) {
            if (!option || !value) {
                return false;
            }
            return option.value === value.value;
        }} keepSearchEnabledOnMobile={keepSearchEnabledOnMobile} label={label} noOptionsText={noOptionsText} onChange={handleChange} onInputChange={function (_, value) { return setInputValue(value); }} options={_options} renderInput={function (params) {
            var _a;
            return (<TextField_1.TextField 
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus} {...params} labelPosition={labelPosition} {...textFieldProps} errorText={props.errorText} helperText={props.helperText} hideLabel={hideLabel} inputId={params.id} InputProps={__assign(__assign(__assign({}, params.InputProps), textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.InputProps), { endAdornment: (<>
                {loading && (<InputAdornment_1.InputAdornment position="end">
                    <CircleProgress_1.CircleProgress noPadding size="xs"/>
                  </InputAdornment_1.InputAdornment>)}
                {(_a = textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.InputProps) === null || _a === void 0 ? void 0 : _a.endAdornment}
                {params.InputProps.endAdornment}
              </>), sx: { cursor: creatable || searchable ? 'text' : 'pointer' } })} inputProps={__assign(__assign(__assign({}, params.inputProps), textFieldProps === null || textFieldProps === void 0 ? void 0 : textFieldProps.inputProps), { readOnly: !creatable && !searchable, sx: { cursor: creatable || searchable ? 'text' : 'pointer' } })} label={label} placeholder={props.placeholder} required={props.required} sx={sx}/>);
        }} renderOption={function (props, option) {
            var _a;
            var key = props.key, rest = __rest(props, ["key"]);
            return (<ListItem_1.ListItem {...rest} {...(option.create || option.noOptions
                ? undefined
                : (_a = listItemProps === null || listItemProps === void 0 ? void 0 : listItemProps(option)) === null || _a === void 0 ? void 0 : _a.dataAttributes)} key={option.create ? "create-".concat(option.value) : key} sx={option.noOptions
                    ? {
                        opacity: '1 !important',
                    }
                    : null}>
            {option.create ? (<>
                <strong>Create&nbsp;</strong> &quot;{option.label}&quot;
              </>) : (option.label)}
          </ListItem_1.ListItem>);
        }} selectOnFocus={false} sx={__assign(__assign({}, sx), (!creatable && !searchable
            ? {
                '& .MuiInputBase-input': {
                    '&::selection': {
                        background: 'transparent',
                    },
                },
            }
            : null))}/>);
};
exports.Select = Select;
/**
 * Get the options for the Select component.
 *
 * This allows us to refine the logic the displays ot then options based on the type of select.
 */
var getOptions = function (_a) {
    var creatable = _a.creatable, inputValue = _a.inputValue, options = _a.options;
    // Early return for as "simple" select
    if (!creatable) {
        return options;
    }
    // If there's no input value and no options, show the "no options" option
    if (options.length === 0 && !inputValue) {
        return [{ label: 'No options available', noOptions: true, value: '' }];
    }
    if (inputValue) {
        var matchingOptions = options.filter(function (opt) {
            return opt.label.toLowerCase().includes(inputValue.toLowerCase()) ||
                opt.value.toString().toLowerCase().includes(inputValue.toLowerCase());
        });
        var exactMatch = matchingOptions.some(function (opt) {
            return opt.label.toLowerCase() === inputValue.toLowerCase() ||
                opt.value.toString().toLowerCase() === inputValue.toLowerCase();
        });
        // If there's an exact match, don't show is as a create option
        // This is for when a field has a default value
        if (exactMatch) {
            return options;
        }
        // If there's no matching options, just show the create option
        if (!matchingOptions.length) {
            return [{ create: true, label: inputValue, value: inputValue }];
        }
        // If there's matching options, show the create option and the matching options
        return __spreadArray([
            { create: true, label: inputValue, value: inputValue }
        ], matchingOptions, true).sort(function (a, b) {
            if (a.create) {
                return -1;
            }
            if (b.create) {
                return 1;
            }
            return a.label.localeCompare(b.label);
        });
    }
    return options;
};
