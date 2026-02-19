"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithCustomTimeZone = exports.WithError = exports.WithPresets = exports.Default = void 0;
var react_1 = require("react");
var DateTimeRangePicker_1 = require("./DateTimeRangePicker");
var meta = {
    argTypes: {
        endDateProps: {
            control: 'object',
            description: 'Props for end date input field.',
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
        onApply: {
            action: 'onApply',
            description: 'Called when the user clicks Apply.',
        },
        presetsProps: {
            control: 'object',
            description: 'Controls if presets are enabled and sets default values.',
        },
        startDateProps: {
            control: 'object',
            description: 'Props for start date input field.',
        },
    },
    component: DateTimeRangePicker_1.DateTimeRangePicker,
    parameters: {
        docs: {
            description: {
                component: "\n### Overview\nThe **DateTimeRangePicker** component allows users to select a start and end date-time range, along with timezone support.\n\n### Features\n- Select **start & end dates** using a custom calendar\n- Pick **time values** using a time picker\n- Adjust **timezones** dynamically\n- Use **presets** for common date ranges\n- Ensures **validation** between start and end dates\n\n### Best Practices\n- Ensure the start date is before the end date.\n- Use presets for common ranges to improve usability.\n- Highlight the selected range for better visibility.\n        ",
            },
        },
    },
    title: 'Components/DatePicker/DateTimeRangePickerV2',
};
exports.default = meta;
exports.Default = {
    render: function (args) {
        return (<DateTimeRangePicker_1.DateTimeRangePicker {...args} endDateProps={{
                label: 'End Date',
                showTimeZone: true,
            }} onApply={function () { }} presetsProps={{
                defaultValue: 'Last 7 days',
                enablePresets: true,
            }} startDateProps={{
                label: 'Start Date',
                showTimeZone: true,
            }}/>);
    },
};
exports.WithPresets = {
    args: {
        presetsProps: {
            defaultValue: 'Last 30 days',
            enablePresets: true,
        },
    },
};
exports.WithError = {
    args: {
        endDateProps: {
            errorMessage: 'End date is required',
            label: 'End Date',
        },
        startDateProps: {
            errorMessage: 'Start date is required',
            label: 'Start Date',
        },
    },
};
exports.WithCustomTimeZone = {
    render: function (args) {
        return (<DateTimeRangePicker_1.DateTimeRangePicker {...args} endDateProps={{
                label: 'End Date',
                showTimeZone: true,
            }} onApply={function () { }} startDateProps={{
                label: 'Start Date',
                showTimeZone: true,
                timeZoneValue: 'UTC',
            }}/>);
    },
};
