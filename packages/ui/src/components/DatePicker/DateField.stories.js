"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithError = exports.Interactive = exports.Default = void 0;
var luxon_1 = require("luxon");
var DateField_1 = require("./DateField");
var meta = {
    argTypes: {
        errorText: {
            control: 'text',
            description: 'Displays an error message when an invalid value is entered.',
        },
        format: {
            control: 'select',
            description: 'Format in which date should be displayed.',
            options: ['MM/dd/yyyy', 'dd-MM-yyyy', 'yyyy-MM-dd'],
        },
        label: {
            control: 'text',
            description: 'Label for the input field.',
        },
    },
    component: DateField_1.DateField,
    parameters: {
        docs: {
            description: {
                component: "\n### Overview\nThe **DateField** component provides a user-friendly way to input date values.\n\n### Features\n- Supports various date formats\n- Displays error messages for validation\n- Accepts manual input or selection via UI\n- Fully accessible with screen readers\n\n### Best Practices\n- Ensure a valid format is always provided.\n- Use error messages for invalid date values.\n- Keep labels descriptive to help users understand the input.\n        ",
            },
        },
    },
    title: 'Components/DatePicker/DateFieldV2',
};
exports.default = meta;
exports.Default = {
    args: {
        errorText: '',
        format: 'yyyy-MM-dd',
        label: 'Select Date',
        value: null,
        onChange: function () { },
    },
};
exports.Interactive = {
    args: {
        format: 'dd-MM-yyyy',
        label: 'Pick a Date',
        value: luxon_1.DateTime.now(),
        onChange: function () { },
    },
};
exports.WithError = {
    args: {
        errorText: 'Invalid date format',
        format: 'MM/dd/yyyy',
        label: 'Invalid Date Input',
        value: null,
        onChange: function () { },
    },
};
