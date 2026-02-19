"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var Checkbox_1 = require("../Checkbox");
var Radio_1 = require("../Radio");
var Toggle_1 = require("../Toggle");
var FormControlLabel_1 = require("./FormControlLabel");
var meta = {
    component: FormControlLabel_1.FormControlLabel,
    title: 'Components/Form/FormControlLabel',
};
exports.Default = {
    argTypes: {
        control: {
            mapping: {
                Checkbox: <Checkbox_1.Checkbox />,
                Radio: <Radio_1.Radio />,
                Toggle: <Toggle_1.Toggle />,
            },
            options: ['Checkbox', 'Radio', 'Toggle'],
        },
    },
    args: {
        control: <Checkbox_1.Checkbox />,
        label: 'This is a FormControlLabel',
    },
    render: function (args) { return <FormControlLabel_1.FormControlLabel {...args}/>; },
};
exports.default = meta;
