"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Outlined = exports.Error = exports.Default = void 0;
var react_1 = require("react");
var Paper_1 = require("./Paper");
var meta = {
    component: Paper_1.Paper,
    title: 'Foundations/Paper',
};
exports.Default = {
    args: {
        children: 'This is text within a Paper',
    },
    render: function (args) { return <Paper_1.Paper {...args}/>; },
};
exports.Error = {
    args: {
        children: 'This is text within a Paper',
        error: 'This Paper has an error.',
    },
    render: function (args) { return <Paper_1.Paper {...args}/>; },
};
exports.Outlined = {
    args: {
        children: 'This is text within a Paper',
        variant: 'outlined',
    },
    render: function (args) { return <Paper_1.Paper {...args}/>; },
};
exports.default = meta;
