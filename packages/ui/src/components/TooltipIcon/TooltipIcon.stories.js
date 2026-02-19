"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeTooltipIcon = exports.SmallTooltipIcon = exports.VariableWidth = exports.Default = void 0;
var react_1 = require("react");
var TooltipIcon_1 = require("./TooltipIcon");
var meta = {
    component: TooltipIcon_1.TooltipIcon,
    title: 'Components/Tooltip/Tooltip Icon',
};
exports.Default = {
    args: {
        status: 'help',
        text: 'Hello World',
    },
    render: function (args) { return <TooltipIcon_1.TooltipIcon {...args}/>; },
};
exports.VariableWidth = {
    args: {
        status: 'help',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        width: 500,
    },
    render: function (args) { return <TooltipIcon_1.TooltipIcon {...args}/>; },
};
exports.SmallTooltipIcon = {
    args: {
        status: 'help',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        labelTooltipIconSize: 'small',
    },
    render: function (args) { return <TooltipIcon_1.TooltipIcon {...args}/>; },
};
exports.LargeTooltipIcon = {
    args: {
        status: 'help',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        labelTooltipIconSize: 'large',
    },
    render: function (args) { return <TooltipIcon_1.TooltipIcon {...args}/>; },
};
exports.default = meta;
