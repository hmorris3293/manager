"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeRangePicker = void 0;
var material_1 = require("@mui/material");
var AdapterLuxon_1 = require("@mui/x-date-pickers/AdapterLuxon");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var luxon_1 = require("luxon");
var react_1 = require("react");
var Box_1 = require("../../Box/Box");
var Button_1 = require("../../Button/Button");
var Divider_1 = require("../../Divider/Divider");
var Stack_1 = require("../../Stack/Stack");
var Calendar_1 = require("../Calendar/Calendar");
var Presets_1 = require("../DateRangePicker/Presets");
var DateTimeField_1 = require("../DateTimeField");
var TimePicker_1 = require("../TimePicker");
var TimeZoneSelect_1 = require("../TimeZoneSelect");
var DateTimeRangePicker = function (_a) {
    var _b, _c, _d, _e, _f;
    var endDateProps = _a.endDateProps, format = _a.format, onApply = _a.onApply, presetsProps = _a.presetsProps, startDateProps = _a.startDateProps, sx = _a.sx;
    var _g = (0, react_1.useState)((_b = startDateProps === null || startDateProps === void 0 ? void 0 : startDateProps.value) !== null && _b !== void 0 ? _b : null), startDate = _g[0], setStartDate = _g[1];
    var _h = (0, react_1.useState)((_c = presetsProps === null || presetsProps === void 0 ? void 0 : presetsProps.defaultValue) !== null && _c !== void 0 ? _c : null), selectedPreset = _h[0], setSelectedPreset = _h[1];
    var _j = (0, react_1.useState)((_d = endDateProps === null || endDateProps === void 0 ? void 0 : endDateProps.value) !== null && _d !== void 0 ? _d : null), endDate = _j[0], setEndDate = _j[1];
    var _k = (0, react_1.useState)(startDateProps === null || startDateProps === void 0 ? void 0 : startDateProps.errorMessage), startDateError = _k[0], setStartDateError = _k[1];
    var _l = (0, react_1.useState)(endDateProps === null || endDateProps === void 0 ? void 0 : endDateProps.errorMessage), endDateError = _l[0], setEndDateError = _l[1];
    var _m = (0, react_1.useState)(false), open = _m[0], setOpen = _m[1];
    var _o = (0, react_1.useState)(null), anchorEl = _o[0], setAnchorEl = _o[1];
    var _p = (0, react_1.useState)(luxon_1.DateTime.now()), currentMonth = _p[0], setCurrentMonth = _p[1];
    var _q = (0, react_1.useState)('start'), focusedField = _q[0], setFocusedField = _q[1]; // Tracks focused input field
    var _r = (0, react_1.useState)('UTC'), timeZone = _r[0], setTimeZone = _r[1]; // Default timezone
    var startDateInputRef = (0, react_1.useRef)(null);
    var endDateInputRef = (0, react_1.useRef)(null);
    var theme = (0, material_1.useTheme)();
    var isSmallScreen = (0, material_1.useMediaQuery)(theme.breakpoints.down('sm'));
    var handleOpen = function (field) {
        var _a;
        setAnchorEl(((_a = startDateInputRef.current) === null || _a === void 0 ? void 0 : _a.parentElement) || startDateInputRef.current);
        setOpen(true);
        setFocusedField(field);
        validateDates(startDate, endDate);
    };
    var handleClose = function () {
        setOpen(false);
        setAnchorEl(null);
    };
    var handleApply = function () {
        onApply === null || onApply === void 0 ? void 0 : onApply({
            endDate: endDate ? endDate.toISO() : null,
            selectedPreset: selectedPreset,
            startDate: startDate ? startDate.toISO() : null,
        });
        handleClose();
    };
    var handleTimeZoneChange = function (newTimeZone) {
        if (!newTimeZone) {
            return;
        }
        setTimeZone(newTimeZone);
        setStartDate(function (prev) {
            return prev ? prev.setZone(newTimeZone, { keepLocalTime: true }) : null;
        });
        setEndDate(function (prev) {
            return prev ? prev.setZone(newTimeZone, { keepLocalTime: true }) : null;
        });
    };
    var validateDates = function (newStartDate, newEndDate) {
        if (newStartDate && newEndDate && newStartDate > newEndDate) {
            setStartDateError('Start date must be earlier than or equal to end date.');
            setEndDateError('End date must be later than or equal to start date.');
        }
        else {
            setStartDateError('');
            setEndDateError('');
        }
    };
    var handleDateSelection = function (date) {
        if (focusedField === 'start') {
            setStartDate(date);
            // Clear end date **only** if the new start date is after the current end date
            if (endDate && date > endDate) {
                setEndDate(null);
            }
            setFocusedField('end'); // Automatically focus on the end date
        }
        else {
            if (startDate && date < startDate) {
                // If the selected end date is earlier than the start date, update the start date
                setStartDate(date);
                setEndDate(null); // Clear the end date
                setFocusedField('end'); // Refocus on the end date
            }
            else {
                setEndDate(date);
                setFocusedField('start'); // Loop back to start date
            }
        }
        validateDates(startDate, endDate);
    };
    var handlePresetSelect = function (selectedStartDate, selectedEndDate, selectedPresetLabel) {
        setStartDate(selectedStartDate);
        setEndDate(selectedEndDate);
        setSelectedPreset(selectedPresetLabel);
        setFocusedField('start'); // Reset focus to start after preset selection
        setCurrentMonth(selectedStartDate || luxon_1.DateTime.now());
        setStartDateError('');
        setEndDateError('');
    };
    return (<LocalizationProvider_1.LocalizationProvider dateAdapter={AdapterLuxon_1.AdapterLuxon}>
      <Box_1.Box>
        <Stack_1.Stack direction="row" spacing={2} sx={sx}>
          <DateTimeField_1.DateTimeField errorText={startDateError} format={format} inputRef={startDateInputRef} label={(_e = startDateProps === null || startDateProps === void 0 ? void 0 : startDateProps.label) !== null && _e !== void 0 ? _e : 'Start Date'} onChange={function (date) {
            setStartDate(date);
            // Clear end date **only** if the new start date is after the current end date
            if (endDate && date && date > endDate) {
                setEndDate(null);
            }
            setFocusedField('end'); // Automatically focus on end date
        }} onClick={function () { return handleOpen('start'); }} value={startDate}/>
          <DateTimeField_1.DateTimeField errorText={endDateError} format={format} inputRef={endDateInputRef} label={(_f = endDateProps === null || endDateProps === void 0 ? void 0 : endDateProps.label) !== null && _f !== void 0 ? _f : 'End Date'} onChange={function (date) {
            setEndDate(date);
        }} onClick={function () { return handleOpen('end'); }} value={endDate}/>
        </Stack_1.Stack>
        <material_1.Popover anchorEl={anchorEl} anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }} disableAutoFocus onClose={handleClose} open={open} role="dialog" sx={{ boxShadow: 3, zIndex: 1300 }} transformOrigin={{ horizontal: 'left', vertical: 'top' }}>
          <Box_1.Box bgcolor="background.paper" boxShadow={4} display="flex" gap={2} paddingRight={2} sx={{ overflowX: isSmallScreen ? 'auto' : '' }}>
            {(presetsProps === null || presetsProps === void 0 ? void 0 : presetsProps.enablePresets) && (<Presets_1.Presets onPresetSelect={handlePresetSelect} selectedPreset={selectedPreset}/>)}
            <Box_1.Box>
              <Box_1.Box display="flex" gap={2}>
                <Calendar_1.Calendar direction="left" endDate={endDate} focusedField={focusedField} month={currentMonth} onDateClick={handleDateSelection} setMonth={setCurrentMonth} startDate={startDate}/>
                <Calendar_1.Calendar direction="right" endDate={endDate} focusedField={focusedField} month={currentMonth.plus({ months: 1 })} onDateClick={handleDateSelection} setMonth={function (date) {
            return setCurrentMonth(date.minus({ months: 1 }));
        }} startDate={startDate}/>
              </Box_1.Box>
              <Box_1.Box display="flex" gap={2} justifyContent="space-between" paddingBottom={2}>
                <TimePicker_1.TimePicker label="Start Time" onChange={function (newTime) {
            if (newTime) {
                setStartDate(function (prev) {
                    var _a;
                    return (_a = prev === null || prev === void 0 ? void 0 : prev.set({
                        hour: newTime.hour,
                        minute: newTime.minute,
                    })) !== null && _a !== void 0 ? _a : newTime;
                });
            }
        }} value={startDate}/>
                <TimePicker_1.TimePicker label="End Time" onChange={function (newTime) {
            if (newTime) {
                setEndDate(function (prev) {
                    var _a;
                    return (_a = prev === null || prev === void 0 ? void 0 : prev.set({
                        hour: newTime.hour,
                        minute: newTime.minute,
                    })) !== null && _a !== void 0 ? _a : newTime;
                });
            }
        }} value={endDate}/>
                <TimeZoneSelect_1.TimeZoneSelect noMarginTop onChange={handleTimeZoneChange} value={timeZone}/>
              </Box_1.Box>
            </Box_1.Box>
          </Box_1.Box>
          <Divider_1.Divider spacingBottom={0} spacingTop={0}/>
          <Box_1.Box display="flex" gap={2} justifyContent="flex-end" padding={2}>
            <Button_1.Button buttonType="outlined" onClick={handleClose}>
              Cancel
            </Button_1.Button>
            <Button_1.Button buttonType="primary" onClick={handleApply}>
              Apply
            </Button_1.Button>
          </Box_1.Box>
        </material_1.Popover>
      </Box_1.Box>
    </LocalizationProvider_1.LocalizationProvider>);
};
exports.DateTimeRangePicker = DateTimeRangePicker;
