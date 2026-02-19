"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var Toggle_1 = require("./Toggle");
var EXAMPLE_TEXT = "This is some example text for the toggle's tooltip";
exports.Default = {
    render: function (args) { return <Toggle_1.Toggle {...args} tooltipText={EXAMPLE_TEXT}/>; },
};
var meta = {
    args: {
        disabled: false,
    },
    component: Toggle_1.Toggle,
    title: 'Foundations/Toggle',
};
exports.default = meta;
