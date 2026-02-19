"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithError = exports.Disabled = exports.WithSelectedTimezone = exports.Default = void 0;
var TimeZoneSelect_1 = require("./TimeZoneSelect");
var meta = {
    argTypes: {
        disabled: {
            control: 'boolean',
            description: 'Disables the timezone selection if set to true.',
        },
        errorText: {
            control: 'text',
            description: 'Displays an error message when an invalid value is entered.',
        },
        label: {
            control: 'text',
            description: 'Label for the timezone selection dropdown.',
        },
        noMarginTop: {
            control: 'boolean',
            description: 'Removes the top margin when set to true.',
        },
        value: {
            control: 'text',
            description: 'The currently selected timezone value.',
        },
    },
    component: TimeZoneSelect_1.TimeZoneSelect,
    parameters: {
        docs: {
            description: {
                component: "\n### Overview\nThe **TimeZoneSelect** component provides a dropdown selection for choosing timezones.\n\n### Features\n- Displays timezones with GMT offsets\n- Auto-sorted by offset values\n- Supports error messages for validation\n- Allows custom styling and disabling\n\n### Best Practices\n- Ensure a valid timezone is always provided.\n- Use error messages for invalid selections.\n- Keep labels descriptive to improve user experience.\n        ",
            },
        },
    },
    title: 'Components/DatePicker/TimeZoneSelectV2',
};
exports.default = meta;
exports.Default = {
    args: {
        label: 'Select Timezone',
        onChange: function () { },
        value: null,
    },
};
exports.WithSelectedTimezone = {
    args: {
        label: 'Select Timezone',
        onChange: function () { },
        value: 'America/New_York',
    },
};
exports.Disabled = {
    args: {
        disabled: true,
        label: 'Disabled Timezone Select',
        onChange: function () { },
        value: null,
    },
};
exports.WithError = {
    args: {
        errorText: 'Invalid timezone selection',
        label: 'Select Timezone',
        onChange: function () { },
        value: null,
    },
};
