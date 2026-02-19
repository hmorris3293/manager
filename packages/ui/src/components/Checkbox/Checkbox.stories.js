"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallSize = exports.WithLabelAndTooltip = exports.WithTooltip = exports.WithLabel = exports.IndeterminateReadOnly = exports.CheckedReadOnly = exports.UncheckedReadOnly = exports.IndeterminateDisabled = exports.CheckedDisabled = exports.UncheckedDisabled = exports.Indeterminate = exports.Checked = exports.Unchecked = exports.Default = void 0;
var react_1 = require("react");
var Box_1 = require("../Box");
var Checkbox_1 = require("./Checkbox");
var meta = {
    component: Checkbox_1.Checkbox,
    decorators: [
        function (Story) { return (<Box_1.Box sx={function (theme) { return ({ margin: theme.tokens.spacing.S16 }); }}>
        <Story />
      </Box_1.Box>); },
    ],
    title: 'Foundations/Checkbox',
};
exports.default = meta;
exports.Default = {
    argTypes: {
        text: {
            control: {
                type: 'text',
            },
        },
        toolTipText: {
            control: {
                type: 'text',
            },
        },
    },
    args: {
        checked: false,
    },
};
exports.Unchecked = {
    args: {
        checked: false,
    },
};
exports.Checked = {
    args: {
        checked: true,
    },
};
exports.Indeterminate = {
    args: {
        indeterminate: true,
    },
};
exports.UncheckedDisabled = {
    args: {
        disabled: true,
    },
};
exports.CheckedDisabled = {
    args: {
        checked: true,
        disabled: true,
    },
};
exports.IndeterminateDisabled = {
    args: {
        indeterminate: true,
        disabled: true,
    },
};
exports.UncheckedReadOnly = {
    args: {
        readOnly: true,
    },
};
exports.CheckedReadOnly = {
    args: {
        readOnly: true,
        checked: true,
    },
};
exports.IndeterminateReadOnly = {
    args: {
        readOnly: true,
        indeterminate: true,
    },
};
exports.WithLabel = {
    args: {
        text: 'This Checkbox has a label',
    },
};
exports.WithTooltip = {
    args: {
        toolTipText: 'This is the tooltip!',
    },
};
exports.WithLabelAndTooltip = {
    args: {
        text: 'This Checkbox has a tooltip',
        toolTipText: 'This is the tooltip!',
    },
};
exports.SmallSize = {
    args: {
        size: 'small',
    },
};
