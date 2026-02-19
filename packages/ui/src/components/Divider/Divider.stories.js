"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var Divider_1 = require("./Divider");
var meta = {
    component: Divider_1.Divider,
    title: 'Foundations/Divider',
};
exports.Default = {
    args: {
        absolute: false,
        light: true,
        variant: 'inset',
    },
    render: function (args) { return <Divider_1.Divider {...args}/>; },
};
exports.default = meta;
