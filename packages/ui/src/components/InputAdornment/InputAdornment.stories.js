"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndAdornment = exports.StartAdornment = exports.Default = void 0;
var react_1 = require("react");
var Input_1 = require("../Input");
var InputAdornment_1 = require("./InputAdornment");
var meta = {
    component: InputAdornment_1.InputAdornment,
    title: 'Components/Input/InputAdornment',
};
exports.Default = {
    args: {
        children: '$',
        position: 'end',
    },
    render: function (args) { return <Input_1.Input startAdornment={<InputAdornment_1.InputAdornment {...args}/>}/>; },
};
exports.StartAdornment = {
    args: {
        children: '$',
        position: 'end',
    },
    render: function (args) { return <Input_1.Input startAdornment={<InputAdornment_1.InputAdornment {...args}/>}/>; },
};
exports.EndAdornment = {
    args: {
        children: '%',
        position: 'end',
    },
    render: function (args) { return <Input_1.Input endAdornment={<InputAdornment_1.InputAdornment {...args}/>}/>; },
};
exports.default = meta;
