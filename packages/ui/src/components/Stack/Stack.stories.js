"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithDivider = exports.Horizontal = exports.Vertical = exports.Default = void 0;
var react_1 = require("react");
var Divider_1 = require("../Divider");
var Paper_1 = require("../Paper");
var Stack_1 = require("./Stack");
var children = [
    <Paper_1.Paper key={0} variant="outlined">
    1
  </Paper_1.Paper>,
    <Paper_1.Paper key={1} variant="outlined">
    2
  </Paper_1.Paper>,
    <Paper_1.Paper key={2} variant="outlined">
    3
  </Paper_1.Paper>,
];
exports.Default = {
    args: {
        children: children,
        spacing: 2,
    },
    render: function (args) { return <Stack_1.Stack {...args}/>; },
};
exports.Vertical = {
    args: {
        children: children,
        spacing: 2,
    },
    render: function (args) { return <Stack_1.Stack {...args}/>; },
};
exports.Horizontal = {
    args: {
        children: children,
        direction: 'row',
        spacing: 2,
    },
    render: function (args) { return <Stack_1.Stack {...args}/>; },
};
exports.WithDivider = {
    args: {
        children: children,
        direction: 'row',
        divider: <Divider_1.Divider flexItem orientation="vertical"/>,
        spacing: 2,
    },
    render: function (args) { return <Stack_1.Stack {...args}/>; },
};
var meta = {
    component: Stack_1.Stack,
    title: 'Foundations/Stack',
};
exports.default = meta;
