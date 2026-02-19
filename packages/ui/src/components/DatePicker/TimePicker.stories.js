"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithError = exports.Interactive = exports.Default = void 0;
var luxon_1 = require("luxon");
var TimePicker_1 = require("./TimePicker");
var meta = {
    argTypes: {
        errorText: {
            control: 'text',
            description: 'Displays an error message when an invalid time is entered.',
        },
        format: {
            control: 'select',
            description: 'Format in which time should be displayed.',
            options: ['HH:mm', 'hh:mm a'], // 24-hour & 12-hour formats
        },
        label: {
            control: 'text',
            description: 'Label for the input field.',
        },
        sx: {
            control: 'object',
            description: 'MUI sx prop for custom styling.',
        },
    },
    component: TimePicker_1.TimePicker,
    parameters: {
        docs: {
            description: {
                component: "\n### Overview\nThe **TimePicker** component provides an easy way to input time values using MUI's TimePicker.\n\n### Features\n- Supports 12-hour and 24-hour time formats\n- Displays error messages for validation\n- Accepts manual input or selection via UI\n- Fully accessible with screen readers\n\n### Best Practices\n- Ensure a valid format is always provided.\n- Use error messages for invalid time inputs.\n- Keep labels descriptive to improve user experience.\n      ",
            },
        },
    },
    title: 'Components/DatePicker/TimePickerV2',
};
exports.default = meta;
exports.Default = {
    args: {
        errorText: '',
        format: 'hh:mm a',
        label: 'Select Time',
        value: null,
        onChange: function () { },
    },
};
exports.Interactive = {
    args: {
        format: 'HH:mm',
        label: 'Pick a Time',
        value: luxon_1.DateTime.now(),
        onChange: function () { },
    },
};
exports.WithError = {
    args: {
        errorText: 'Invalid time format',
        format: 'hh:mm a',
        label: 'Invalid Time Input',
        value: null,
        onChange: function () { },
    },
};
