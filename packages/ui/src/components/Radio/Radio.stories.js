"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithLabel = exports.Groups = exports.SmallSize = exports.CheckedReadOnly = exports.CheckedDisabled = exports.Checked = exports.UncheckedReadOnly = exports.UncheckedDisabled = exports.Unchecked = exports.Default = void 0;
// @todo: modularization - Import from 'ui' package once FormControlLabel is migrated.
var material_1 = require("@mui/material");
var react_1 = require("react");
var Box_1 = require("../Box");
var RadioGroup_1 = require("../RadioGroup");
var Radio_1 = require("./Radio");
var meta = {
    args: {
        checkedState: 'unchecked',
        size: 'medium',
        state: 'default',
    },
    argTypes: {
        state: {
            options: ['default', 'disabled', 'readonly', 'hover', 'active'],
            control: { type: 'radio' },
            description: 'The state to render',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '"default"' },
            },
        },
        checkedState: {
            options: ['unchecked', 'checked'],
            control: { type: 'radio' },
            description: 'The checked state of the radio button',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '"unchecked"' },
            },
        },
        size: {
            control: {
                type: 'radio',
            },
            options: ['small', 'medium'],
            description: 'The size of the component',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '"medium"' },
            },
        },
        disableRipple: {
            control: 'boolean',
            description: 'If true, the ripple effect is disabled',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        disableFocusRipple: {
            control: 'boolean',
            description: 'If true, the focus ripple effect is disabled',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        disableTouchRipple: {
            control: 'boolean',
            description: 'If true, the touch ripple effect is disabled',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        name: { table: { disable: true } },
        slots: { table: { disable: true } },
        slotProps: { table: { disable: true } },
        component: { table: { disable: true } },
        ref: { table: { disable: true } },
        defaultChecked: { table: { disable: true } },
        disabled: { table: { disable: true } },
        readOnly: { table: { disable: true } },
        checked: { table: { disable: true } },
    },
    component: Radio_1.Radio,
    decorators: [
        function (Story) { return (<Box_1.Box sx={{ padding: 4 }}>
        <Story />
      </Box_1.Box>); },
    ],
    title: 'Foundations/Radio',
};
exports.Default = {
    render: function (args) {
        var _a = args.state, state = _a === void 0 ? 'default' : _a, _b = args.checkedState, checkedState = _b === void 0 ? 'unchecked' : _b, radioProps = __rest(args, ["state", "checkedState"]);
        var stateProps = {};
        if (state === 'disabled') {
            stateProps = { disabled: true };
        }
        else if (state === 'readonly') {
            stateProps = { readOnly: true };
        }
        var stateStyle = {};
        if (state === 'hover') {
            stateStyle = { backgroundColor: 'rgba(0, 0, 0, 0.04)' };
        }
        else if (state === 'active') {
            stateStyle = { backgroundColor: 'rgba(0, 0, 0, 0.08)' };
        }
        var isChecked = checkedState === 'checked';
        return (<Box_1.Box sx={{ '& .MuiRadio-root': stateStyle }}>
        <Radio_1.Radio {...radioProps} {...stateProps} checked={isChecked}/>
      </Box_1.Box>);
    },
};
exports.Unchecked = {
    parameters: {
        controls: { disable: true },
    },
    render: function () { return <Radio_1.Radio />; },
};
exports.UncheckedDisabled = {
    name: 'Unchecked Disabled',
    parameters: {
        controls: { disable: true },
    },
    render: function () { return <Radio_1.Radio disabled/>; },
};
exports.UncheckedReadOnly = {
    name: 'Unchecked Read Only',
    parameters: {
        controls: { disable: true },
    },
    render: function () { return <Radio_1.Radio readOnly/>; },
};
exports.Checked = {
    parameters: {
        controls: { disable: true },
    },
    render: function () { return <Radio_1.Radio checked/>; },
};
exports.CheckedDisabled = {
    name: 'Checked Disabled',
    parameters: {
        controls: { disable: true },
    },
    render: function () { return <Radio_1.Radio checked disabled/>; },
};
exports.CheckedReadOnly = {
    name: 'Checked Read Only',
    parameters: {
        controls: { disable: true },
    },
    render: function () { return <Radio_1.Radio checked readOnly/>; },
};
exports.SmallSize = {
    name: 'Small Size',
    parameters: {
        controls: { disable: true },
    },
    render: function () { return (<Box_1.Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Radio_1.Radio size="small"/>
      <Radio_1.Radio checked size="small"/>
    </Box_1.Box>); },
};
var RadioGroupsDemo = function (props) {
    var size = props.size;
    var _a = (0, react_1.useState)('Option 1'), selectedValue = _a[0], setSelectedValue = _a[1];
    var handleChange = function (event) {
        setSelectedValue(event.target.value);
    };
    return (<RadioGroup_1.RadioGroup onChange={handleChange} value={selectedValue}>
      <material_1.FormControlLabel control={<Radio_1.Radio disabled size={size}/>} label="Disabled" value="Disabled"/>
      <material_1.FormControlLabel control={<Radio_1.Radio size={size}/>} label="Option 1" value="Option 1"/>
      <material_1.FormControlLabel control={<Radio_1.Radio size={size}/>} label="Option 2" value="Option 2"/>
    </RadioGroup_1.RadioGroup>);
};
exports.Groups = {
    name: 'Controlled Radio Groups',
    args: {
        size: 'medium',
    },
    argTypes: {
        size: {
            control: {
                type: 'radio',
            },
            options: ['small', 'medium'],
            description: 'The size of the component',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '"medium"' },
            },
        },
    },
    render: function (args) {
        return <RadioGroupsDemo size={args.size}/>;
    },
};
exports.WithLabel = {
    name: 'With Label',
    parameters: {
        controls: { disable: true },
    },
    render: function () { return (<Box_1.Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <material_1.FormControlLabel control={<Radio_1.Radio />} label="Unchecked with label"/>
      <material_1.FormControlLabel control={<Radio_1.Radio checked/>} label="Checked with label"/>
      <material_1.FormControlLabel control={<Radio_1.Radio disabled/>} label="Disabled with label"/>
      <material_1.FormControlLabel control={<Radio_1.Radio checked disabled/>} label="Checked disabled with label"/>
    </Box_1.Box>); },
};
exports.default = meta;
