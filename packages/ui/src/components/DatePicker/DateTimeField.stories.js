"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithError = exports.Interactive = exports.Default = void 0;
var luxon_1 = require("luxon");
var DateTimeField_1 = require("./DateTimeField");
var meta = {
    argTypes: {
        errorText: {
            control: 'text',
            description: 'Displays an error message when an invalid value is entered.',
        },
        format: {
            control: 'select',
            description: 'Format in which date and time should be displayed.',
            options: [
                'MM/dd/yyyy HH:mm',
                'MM/dd/yyyy hh:mm a',
                'dd-MM-yyyy HH:mm',
                'dd-MM-yyyy hh:mm a',
                'yyyy-MM-dd HH:mm',
                'yyyy-MM-dd hh:mm a',
            ],
        },
        label: {
            control: 'text',
            description: 'Label for the input field.',
        },
    },
    component: DateTimeField_1.DateTimeField,
    parameters: {
        docs: {
            description: {
                component: "\n### Overview\nThe **DateTimeField** component provides a user-friendly way to input date and time values.\n\n### Features\n- Supports various date-time formats\n- Displays error messages for validation\n- Accepts manual input or selection via UI\n- Fully accessible with screen readers\n\n### Best Practices\n- Ensure a valid format is always provided.\n- Use error messages for invalid date/time values.\n- Keep labels descriptive to help users understand the input.\n        ",
            },
        },
    },
    title: 'Components/DatePicker/DateTimeFieldV2',
};
exports.default = meta;
exports.Default = {
    args: {
        errorText: '',
        format: 'yyyy-MM-dd HH:mm',
        label: 'Select Date & Time',
        value: null,
        onChange: function () { },
    },
};
exports.Interactive = {
    args: {
        format: 'yyyy-MM-dd hh:mm a',
        label: 'Pick a Date & Time',
        value: luxon_1.DateTime.now(),
        onChange: function () { },
    },
};
exports.WithError = {
    args: {
        errorText: 'Invalid date format',
        format: 'MM/dd/yyyy HH:mm',
        label: 'Invalid Date Input',
        value: null,
        onChange: function () { },
    },
};
