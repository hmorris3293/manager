"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisabledTooltip = exports.LinkButton = exports.Outlined = exports.SecondaryWarning = exports.Secondary = exports.Default = void 0;
var addon_actions_1 = require("@storybook/addon-actions");
var react_1 = require("react");
var Button_1 = require("./Button");
var StyledLinkButton_1 = require("./StyledLinkButton");
/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 * - Buttons are aligned right with primary button to the far right and secondary buttons positioned to the left.
 * - There can be more than one secondary button.
 * - Ideally there is one primary button per page. This helps provide a visual focus to the main purpose of the page.
 * - Button labels should support the user taking their desired action by clearly stating what will happen when clicked (ex. Create Linode, Delete Firewall).
 * - There is no destructive button style. We do not take an implied position on the user’s knowledge or intention by using an alert color such as red for destructive actions.
 */
var meta = {
    argTypes: {
        tooltipAnalyticsEvent: {
            action: 'Analytics Event Action',
        },
    },
    args: {
        buttonType: 'primary',
        children: 'Button',
        compactX: false,
        compactY: false,
        disabled: false,
        loading: false,
        onClick: (0, addon_actions_1.action)('onClick'),
        sx: {},
        tooltipAnalyticsEvent: (0, addon_actions_1.action)('tooltipAnalyticsEvent'),
        tooltipText: '',
    },
    component: Button_1.Button,
    title: 'Foundations/Button',
};
exports.default = meta;
/**
 * Default Primary Button
 *  Bold and easily visible. Represents the primary or preferred action on the page.
 */
exports.Default = {
    args: {},
    render: function (args) { return <Button_1.Button {...args}/>; },
};
/** Secondary Button
 * The bold text is intentionally understated to pair well with a primary button, sit inside a table head or within a form.
 */
exports.Secondary = {
    args: {
        buttonType: 'secondary',
    },
    render: function (args) { return <Button_1.Button {...args}/>; },
};
exports.SecondaryWarning = {
    args: {
        buttonType: 'secondary',
        color: 'error',
    },
    render: function (args) { return <Button_1.Button {...args}/>; },
};
/** Outlined Button
 * This hybrid button style should be used with discretion. It is used when:
 * - A primary button is appropriate but is distracting or misleading. One example is a Delete button on an entity and we do not want to suggest deleting is the preferred action.
 * - A secondary button is appropriate but it could be missed because of its positioning on the page.
 */
exports.Outlined = {
    args: {
        buttonType: 'outlined',
    },
    parameters: {
        controls: {
            exclude: /.*/,
        },
    },
    render: function (args) { return <Button_1.Button {...args}/>; },
};
/**
 * This is a styled component `<StyledLinkButton />` which is a button that looks like a link. Eventually this treatment will go away,
 * but the sake of the MUI migration we need to keep it around for now, and as a styled component in order to get rid of
 * spreading theme.applyLinkStyles.
 */
exports.LinkButton = {
    parameters: {
        controls: {
            exclude: /.*/,
        },
    },
    // _args must be present in order to disable controls
    render: function (_args) { return <StyledLinkButton_1.StyledLinkButton>Button</StyledLinkButton_1.StyledLinkButton>; },
};
/**
 * Disabled Button w/ Tooltip
 */
exports.DisabledTooltip = {
    args: {
        disabled: true,
        tooltipText: "You don't have permission to do this.",
    },
    render: function (args) { return <Button_1.Button {...args}/>; },
};
