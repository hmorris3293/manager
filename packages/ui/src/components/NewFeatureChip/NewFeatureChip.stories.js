"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var NewFeatureChip_1 = require("./NewFeatureChip");
exports.Default = {
    render: function (args) { return <NewFeatureChip_1.NewFeatureChip {...args}/>; },
};
var meta = {
    args: { color: 'default' },
    component: NewFeatureChip_1.NewFeatureChip,
    title: 'Foundations/Chip/NewFeatureChip',
};
exports.default = meta;
