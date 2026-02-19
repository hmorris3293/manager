"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var FormControl_1 = require("../FormControl");
var Input_1 = require("../Input");
var InputLabel_1 = require("./InputLabel");
var meta = {
    component: InputLabel_1.InputLabel,
    title: 'Components/Input/InputLabel',
};
exports.Default = {
    args: {
        children: 'Phone Number',
        sx: { transform: 'none' },
    },
    render: function (args) { return (<FormControl_1.FormControl>
      <InputLabel_1.InputLabel {...args}/>
      <Input_1.Input />
    </FormControl_1.FormControl>); },
};
exports.default = meta;
