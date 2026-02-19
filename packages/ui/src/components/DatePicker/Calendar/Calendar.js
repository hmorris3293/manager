"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
var ChevronLeft_1 = require("@mui/icons-material/ChevronLeft");
var ChevronRight_1 = require("@mui/icons-material/ChevronRight");
var React = require("react");
var Box_1 = require("../../Box/Box");
var IconButton_1 = require("../../IconButton");
var Stack_1 = require("../../Stack/Stack");
var Typography_1 = require("../../Typography/Typography");
var Calendar_styles_1 = require("./Calendar.styles");
var Calendar = function (_a) {
    var direction = _a.direction, endDate = _a.endDate, focusedField = _a.focusedField, month = _a.month, onDateClick = _a.onDateClick, setMonth = _a.setMonth, startDate = _a.startDate;
    var startOfMonth = month.startOf('month');
    var endOfMonth = month.endOf('month');
    var startDay = startOfMonth.weekday % 7;
    var totalDaysInMonth = endOfMonth.day;
    var totalGridCells = 42; // Always 6 rows (6 × 7)
    var days = [];
    // Fill leading empty slots before the first day of the month
    for (var i = 0; i < startDay; i++) {
        days.push(<Box_1.Box key={"empty-".concat(i)} sx={{ height: 40, width: 40 }}/>);
    }
    var _loop_1 = function (day) {
        var currentDay = month.set({ day: day });
        var isSelected = startDate &&
            endDate &&
            startDate.isValid &&
            endDate.isValid &&
            currentDay >= startDate &&
            currentDay <= endDate;
        var isStartOrEnd = (startDate && startDate.isValid && currentDay.equals(startDate)) ||
            (endDate && endDate.isValid && currentDay.equals(endDate));
        days.push(<Calendar_styles_1.DayBox isSelected={isSelected} isStartOrEnd={isStartOrEnd} key={"".concat(month.month, " ").concat(day)} onClick={function () { return onDateClick(currentDay, focusedField); }}>
        {day}
      </Calendar_styles_1.DayBox>);
    };
    // Fill actual days of the month
    for (var day = 1; day <= totalDaysInMonth; day++) {
        _loop_1(day);
    }
    // Fill trailing empty slots after the last day of the month
    var remainingCells = totalGridCells - days.length;
    for (var i = 0; i < remainingCells; i++) {
        days.push(<Box_1.Box key={"empty-after-".concat(i)} sx={{ height: 40, width: 40 }}/>);
    }
    return (<Box_1.Box paddingBottom={2}>
      {/* Header (Month & Year) */}
      <Stack_1.Stack alignItems="center" direction="row" display="flex" gap={1 / 2} justifyContent="space-between" marginBottom={3} paddingTop={2} spacing={1} textAlign={direction}>
        {direction === 'left' && (<Box_1.Box sx={{ flexGrow: 1 }}>
            <IconButton_1.IconButton disableRipple onClick={function () { return setMonth(month.minus({ months: 1 })); }} size="medium">
              <ChevronLeft_1.default />
            </IconButton_1.IconButton>
          </Box_1.Box>)}
        {/* Display Month & Year */}

        <Typography_1.Typography sx={{ flexGrow: 3 }}>
          {month.toFormat('MMMM yyyy')}
        </Typography_1.Typography>

        {direction === 'right' && (<Box_1.Box sx={{ flexGrow: 1 }}>
            <IconButton_1.IconButton disableRipple onClick={function () { return setMonth(month.plus({ months: 1 })); }} size="medium">
              <ChevronRight_1.default />
            </IconButton_1.IconButton>
          </Box_1.Box>)}
      </Stack_1.Stack>

      {/* Calendar Grid */}
      <Box_1.Box display="grid" gridTemplateColumns="repeat(7, 40px)">
        {/* Weekday Labels */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(function (d, index) { return (<Typography_1.Typography align="center" key={"weekday-".concat(index)}>
            {d}
          </Typography_1.Typography>); })}
        {days}
      </Box_1.Box>
    </Box_1.Box>);
};
exports.Calendar = Calendar;
