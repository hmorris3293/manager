"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var DateRangePicker_1 = require("../DateRangePicker");
var meta = {
    component: DateRangePicker_1.DateRangePicker,
    parameters: {
        docs: {
            description: {
                component: "\n### Overview\nThe Date Range Picker allows users to select a start and end date using a custom calendar component built with Luxon.\n\n### Features\n- Dual side-by-side calendars for selecting date ranges\n- Preset options for quick selection\n- Manual date entry support\n- Keyboard navigation for improved usability\n- Validation to ensure the start date is before the end date\n- Styled according to the CDS design system\n\n### Best Practices\n- Ensure that both start and end dates are always valid selections.\n- Use presets for common date range selections to enhance the user experience.\n- Highlight the selected date range clearly to provide visual feedback.\n        ",
            },
        },
    },
    title: 'Components/DatePicker/DateRangePickerV2',
};
exports.default = meta;
exports.Default = {
    args: {
        endDateProps: {
            label: 'End Date',
            placeholder: 'MM/DD/YYYY',
        },
        presetsProps: {
            enablePresets: true,
        },
        startDateProps: {
            label: 'Start Date',
            placeholder: 'MM/DD/YYYY',
        },
    },
};
