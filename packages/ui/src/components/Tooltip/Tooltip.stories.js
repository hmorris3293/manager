"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var Typography_1 = require("../Typography");
var Tooltip_1 = require("./Tooltip");
var meta = {
    component: Tooltip_1.Tooltip,
    title: 'Components/Tooltip',
};
exports.Default = {
    args: {
        children: <Typography_1.Typography component="span">Hover to see Tooltip</Typography_1.Typography>,
        title: 'This is a Tooltip',
    },
    render: function (args) { return <Tooltip_1.Tooltip {...args}/>; },
};
exports.default = meta;
