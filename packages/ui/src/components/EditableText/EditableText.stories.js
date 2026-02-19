"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithCustomLinkComponent = exports.WithSuffix = exports.Default = void 0;
var addon_actions_1 = require("@storybook/addon-actions");
var preview_api_1 = require("@storybook/preview-api");
var React = require("react");
var EditableText_1 = require("./EditableText");
exports.Default = {
    args: {
        onCancel: (0, addon_actions_1.action)('onCancel'),
        text: 'Edit me!',
    },
    render: function (args) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var _a = (0, preview_api_1.useArgs)(), setLocalArgs = _a[1];
        var onEdit = function (updatedText) {
            return Promise.resolve(setLocalArgs({ text: updatedText }));
        };
        return <EditableText_1.EditableText {...args} onEdit={onEdit}/>;
    },
};
exports.WithSuffix = {
    args: {
        onCancel: (0, addon_actions_1.action)('onCancel'),
        text: 'I have a suffix',
    },
    render: function (args) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var _a = (0, preview_api_1.useArgs)(), setLocalArgs = _a[1];
        var onEdit = function (updatedText) {
            return Promise.resolve(setLocalArgs({ text: updatedText }));
        };
        return (<EditableText_1.EditableText {...args} onEdit={onEdit} textSuffix=" (I am the suffix)"/>);
    },
};
/**
 * Pretend this is `react-router-dom`'s Link component.
 * This is just an example to show usage with `EditableText`
 */
var Link = function (props) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} href={props.to} rel="noreferrer" target="_blank"/>;
};
exports.WithCustomLinkComponent = {
    args: {
        LinkComponent: Link,
        labelLink: 'https://linode.com',
        onCancel: (0, addon_actions_1.action)('onCancel'),
        text: 'I have a link',
    },
    render: function (args) { return <EditableText_1.EditableText {...args}/>; },
};
var meta = {
    component: EditableText_1.EditableText,
    title: 'Components/Input/Editable Text',
};
exports.default = meta;
