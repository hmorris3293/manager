"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var addon_actions_1 = require("@storybook/addon-actions");
var react_1 = require("react");
var StyledTagButton_1 = require("./StyledTagButton");
var meta = {
    args: {
        children: 'Tag',
        disabled: false,
        onClick: function () { return null; },
    },
    component: StyledTagButton_1.StyledTagButton,
    title: 'Components/Tags/TagButton',
};
exports.default = meta;
exports.Default = {
    args: {
        buttonType: 'outlined',
        children: 'Tag',
        disabled: false,
        onClick: (0, addon_actions_1.action)('onClick'),
    },
    render: function (args) { return (<StyledTagButton_1.StyledTagButton {...args} endIcon={<StyledTagButton_1.StyledPlusIcon disabled={args.disabled}/>}>
      Add a Tag
    </StyledTagButton_1.StyledTagButton>); },
};
