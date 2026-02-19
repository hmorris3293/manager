"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var VisibilityTooltip_1 = require("./VisibilityTooltip");
var meta = {
    component: VisibilityTooltip_1.VisibilityTooltip,
    title: 'Components/Tooltip/Visibility Tooltip',
};
exports.Default = {
    args: {
        isVisible: true,
    },
    render: function (args) { return <VisibilityTooltip_1.VisibilityTooltip {...args}/>; },
};
exports.default = meta;
