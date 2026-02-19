"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardActions = void 0;
var react_1 = require("react");
var ActionsPanel_1 = require("./ActionsPanel");
var meta = {
    component: ActionsPanel_1.ActionsPanel,
    title: 'Components/ActionsPanel',
};
var primaryButtonProps = {
    label: 'Confirm',
};
var secondaryButtonProps = {
    label: 'Cancel',
};
exports.StandardActions = {
    args: {
        primaryButtonProps: primaryButtonProps,
        secondaryButtonProps: secondaryButtonProps,
    },
    render: function (args) {
        return <ActionsPanel_1.ActionsPanel sx={{ justifyContent: 'flex-start' }} {...args}/>;
    },
};
exports.default = meta;
