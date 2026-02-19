"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var Box_1 = require("./Box");
var meta = {
    component: Box_1.Box,
    title: 'Foundations/Box',
};
exports.Default = {
    args: {
        border: 1,
        children: 'This is text within a Box',
    },
    render: function (args) { return <Box_1.Box {...args}/>; },
};
exports.default = meta;
