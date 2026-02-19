"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Checkbox = void 0;
var Checkbox_1 = require("@mui/material/Checkbox");
var styles_1 = require("@mui/material/styles");
var React = require("react");
var icons_1 = require("../../assets/icons");
var FormControlLabel_1 = require("../FormControlLabel");
var TooltipIcon_1 = require("../TooltipIcon");
/**
 * ## Usage
 *
 * - Used when there are lists of options and the user may select any number of choices, including none, one, or many.
 * - A standalone checkbox is used for a single option that the user can turn on or off (i.e., accepting terms and conditions).
 *
 * ## Guidelines
 *
 * - Visually present groups of choices as groups, and clearly separate them from other groups on the same page.
 * - Lay out lists vertically, with one choice per line.
 * - Write checkbox labels so that users know what will happen if they check a particular box.
 * - Checkboxes often default to having none of the options selected.
 * - Changed settings should not take effect until the user clicks the action button.
 * - If the user clicks the Back button, any changes made to checkboxes should be discarded and the original settings reinstated.
 */
var Checkbox = function (props) {
    var sxFormLabel = props.sxFormLabel, text = props.text, toolTipText = props.toolTipText, rest = __rest(props, ["sxFormLabel", "text", "toolTipText"]);
    var BaseCheckbox = (<StyledCheckbox checkedIcon={<icons_1.CheckboxCheckedIcon />} color="primary" data-qa-checked={props.checked} icon={<icons_1.CheckboxIcon />} indeterminateIcon={<icons_1.CheckboxIndeterminateIcon />} {...rest}/>);
    var CheckboxComponent = props.text ? (<StyledFormControlLabel control={BaseCheckbox} label={text} sx={sxFormLabel}/>) : (BaseCheckbox);
    return (<>
      {CheckboxComponent}
      {toolTipText ? <TooltipIcon_1.TooltipIcon status="help" text={toolTipText}/> : null}
    </>);
};
exports.Checkbox = Checkbox;
var StyledCheckbox = (0, styles_1.styled)(Checkbox_1.default, {
    label: 'StyledCheckbox',
})(function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return (__assign(__assign(__assign({ '& .defaultFill': {
            transition: theme.transitions.create(['fill']),
        }, padding: theme.tokens.spacing.S8, transition: theme.transitions.create(['color']) }, (props.readOnly && {
        color: theme.tokens.component.Checkbox.Empty.ReadOnly.Border,
        pointerEvents: 'none',
    })), (props.checked &&
        props.readOnly && {
        svg: {
            '#Check': {
                fill: theme.tokens.component.Checkbox.Checked.ReadOnly.Icon,
            },
            border: "1px solid ".concat(theme.tokens.component.Checkbox.Checked.ReadOnly.Border),
        },
        color: "".concat(theme.tokens.component.Checkbox.Checked.ReadOnly.Background, " !important"),
        pointerEvents: 'none',
    })), (props.indeterminate &&
        props.readOnly && {
        svg: {
            'g rect:nth-of-type(2)': {
                fill: theme.tokens.component.Checkbox.Indeterminated.ReadOnly.Icon,
            },
            border: "1px solid ".concat(theme.tokens.component.Checkbox.Indeterminated.ReadOnly.Border),
        },
        color: "".concat(theme.tokens.component.Checkbox.Checked.ReadOnly.Background, " !important"),
        pointerEvents: 'none',
    })));
});
var StyledFormControlLabel = (0, styles_1.styled)(FormControlLabel_1.FormControlLabel)(function (_a) {
    var theme = _a.theme;
    return ({
        '& .MuiFormControlLabel-label': {
            paddingTop: theme.tokens.spacing.S2,
        },
        marginRight: 0,
    });
});
