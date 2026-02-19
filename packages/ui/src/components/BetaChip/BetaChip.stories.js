"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var BetaChip_1 = require("./BetaChip");
exports.Default = {
    render: function (args) { return <BetaChip_1.BetaChip {...args}/>; },
};
var meta = {
    args: {},
    component: BetaChip_1.BetaChip,
    title: 'Foundations/Chip/BetaChip',
};
exports.default = meta;
