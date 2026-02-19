"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var CircleProgress_1 = require("./CircleProgress");
exports.Default = {
    render: function (args) { return <CircleProgress_1.CircleProgress {...args}/>; },
};
var meta = {
    args: { size: 'md' },
    component: CircleProgress_1.CircleProgress,
    title: 'Components/Loading States/Circle Progress',
};
exports.default = meta;
