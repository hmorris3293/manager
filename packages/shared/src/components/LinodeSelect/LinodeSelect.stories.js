"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelect = exports.noOptionsMessage = exports.Default = void 0;
var addon_actions_1 = require("@storybook/addon-actions");
var react_1 = require("react");
var LinodeSelect_1 = require("./LinodeSelect");
var linodes = [
    { id: 1, label: 'Linode 1' },
    { id: 2, label: 'Linode 2' },
    { id: 3, label: 'Linode 3' },
    { id: 4, label: 'Linode 4' },
];
var meta = {
    argTypes: {
        onSelectionChange: {
            action: 'onSelectionChange',
        },
    },
    args: {
        onSelectionChange: (0, addon_actions_1.action)('onSelectionChange'),
    },
    component: LinodeSelect_1.LinodeSelect,
    title: 'Components/Selects/Linode Select',
};
exports.default = meta;
/** Default Linode Select */
exports.Default = {
    args: {
        options: linodes,
    },
    render: function (args) { return <LinodeSelect_1.LinodeSelect {...args}/>; },
};
exports.noOptionsMessage = {
    args: {
        label: 'Select a Linode',
        noOptionsMessage: 'This is a custom message when there are no options to display.',
        options: [],
        placeholder: 'Select a Linode',
        value: null,
    },
    render: function (args) { return <LinodeSelect_1.LinodeSelect {...args}/>; },
};
/* Linode Multi-select */
exports.MultiSelect = {
    args: {
        multiple: true,
        onSelectionChange: function (selected) {
            (0, addon_actions_1.action)('onSelectionChange')(selected.map(function (linode) { return linode.id; }));
        },
        value: [1, 2],
    },
    render: function (args) { return <LinodeSelect_1.LinodeSelect {...args}/>; },
};
