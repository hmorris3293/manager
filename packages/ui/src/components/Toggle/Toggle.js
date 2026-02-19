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
exports.Toggle = void 0;
var Switch_1 = require("@mui/material/Switch");
var React = require("react");
var icons_1 = require("../../assets/icons");
var TooltipIcon_1 = require("../TooltipIcon");
/**
 * ## Usage
 *
 * Toggles are best used for changing the state of system functionalities and preferences. Toggles may replace two radio buttons or a single checkbox to allow users to choose between two opposing states.
 * - Toggles should take immediate effect and should not require the user to click Save or Submit.
 * - Keep labels for toggles short and direct.
 * - Toggle switches should be used instead of radio buttons if each item in a set can be independently controlled.
 * - The Toggle component extends the [Material UI Switch props](https://v4.mui.com/api/switch/#props).
 *
 * > **Note:** Do not use toggles in long forms where other types of form fields are present, and users will need to click a Submit button for other changes to take effect. This scenario confuses users because they can’t be sure whether their toggle choice will take immediate effect.
 */
var Toggle = function (props) {
    var tooltipText = props.tooltipText, rest = __rest(props, ["tooltipText"]);
    return (<React.Fragment>
      <Switch_1.default checkedIcon={<icons_1.ToggleOnIcon />} color="primary" data-qa-toggle={props.checked} icon={<icons_1.ToggleOffIcon />} {...rest}/>
      {tooltipText && <TooltipIcon_1.TooltipIcon status="help" text={tooltipText}/>}
    </React.Fragment>);
};
exports.Toggle = Toggle;
