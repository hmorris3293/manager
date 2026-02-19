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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePicker = void 0;
var AdapterLuxon_1 = require("@mui/x-date-pickers/AdapterLuxon");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var TimePicker_1 = require("@mui/x-date-pickers/TimePicker");
var react_1 = require("react");
var utilities_1 = require("../../utilities");
var Box_1 = require("../Box/Box");
var FormHelperText_1 = require("../FormHelperText");
var InputLabel_1 = require("../InputLabel/InputLabel");
var TimePicker = function (_a) {
    var errorText = _a.errorText, _b = _a.format, format = _b === void 0 ? 'hh:mm a' : _b, // Default format
    inputRef = _a.inputRef, label = _a.label, onChange = _a.onChange, onClick = _a.onClick, sx = _a.sx, value = _a.value, rest = __rest(_a, ["errorText", "format", "inputRef", "label", "onChange", "onClick", "sx", "value"]);
    var fallbackId = react_1.default.useId();
    var validInputId = label ? (0, utilities_1.convertToKebabCase)(label) : fallbackId;
    var errorTextId = "".concat(validInputId, "-error-text");
    var handleChange = function (newTime) {
        if (newTime === null || newTime === void 0 ? void 0 : newTime.isValid) {
            onChange(newTime);
        }
    };
    return (<LocalizationProvider_1.LocalizationProvider dateAdapter={AdapterLuxon_1.AdapterLuxon}>
      <Box_1.Box display="flex" flex="1" flexDirection="column" sx={sx}>
        <InputLabel_1.InputLabel htmlFor={validInputId} sx={{
            marginBottom: 0,
            transform: 'none',
        }}>
          {label}
        </InputLabel_1.InputLabel>
        <TimePicker_1.TimePicker ampm={format === 'hh:mm a'} // Toggle 12-hour or 24-hour format
     onChange={handleChange} slotProps={{
            actionBar: {
                sx: function (theme) { return ({
                    justifyContent: 'center',
                    marginBottom: theme.spacing(0.5),
                    marginTop: theme.spacing(0.5),
                    padding: 0,
                }); },
            },
            layout: {
                sx: function (theme) { return ({
                    '& .MuiPickersLayout-contentWrapper': {
                        borderBottom: "1px solid ".concat(theme.tokens.component.Calendar.Border),
                    },
                    border: "1px solid ".concat(theme.tokens.component.Calendar.Border),
                }); },
            },
            openPickerButton: {
                sx: { padding: 0 },
            },
            popper: {
                sx: function (theme) { return ({
                    ul: {
                        borderColor: "".concat(theme.tokens.component.Calendar.Border, " !important"),
                    },
                }); },
            },
            textField: {
                InputLabelProps: { shrink: true },
                error: Boolean(errorText),
                helperText: '',
                id: validInputId,
                inputRef: inputRef,
                onClick: onClick,
            },
        }} sx={{ marginTop: 1 }} value={value} {...rest}/>
        {errorText && (<FormHelperText_1.FormHelperText id={errorTextId} role="alert" sx={{
                color: function (theme) { return theme.palette.error.dark; },
                marginTop: '4px',
            }}>
            {errorText}
          </FormHelperText_1.FormHelperText>)}
      </Box_1.Box>
    </LocalizationProvider_1.LocalizationProvider>);
};
exports.TimePicker = TimePicker;
