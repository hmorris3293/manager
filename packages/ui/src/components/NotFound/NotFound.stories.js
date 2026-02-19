"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var NotFound_1 = require("./NotFound");
var meta = {
    component: NotFound_1.NotFound,
    title: 'Components/NotFound',
};
exports.Default = {
    render: function (args) { return <NotFound_1.NotFound {...args}/>; },
};
exports.default = meta;
