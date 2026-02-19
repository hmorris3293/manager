"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var Input_1 = require("./Input");
var meta = {
    component: Input_1.Input,
    title: 'Components/Input',
};
exports.Default = {
    render: function (args) { return <Input_1.Input {...args}/>; },
};
exports.default = meta;
