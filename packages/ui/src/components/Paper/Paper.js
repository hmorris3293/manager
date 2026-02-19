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
exports.Paper = void 0;
var Paper_1 = require("@mui/material/Paper");
var styles_1 = require("@mui/material/styles");
var React = require("react");
var FormHelperText_1 = require("../FormHelperText/FormHelperText");
/**
 *
 * ## Overview
 *
 * Papers are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements like text and images should be placed on them in a way that clearly indicates hierarchy.
 *
 * ## Usage
 * - Papers are used for grouping information.
 * - Papers allow for flexible layouts.
 *
 */
var Paper = function (props) {
    return (<React.Fragment>
      <StyledPaper {...props} data-qa-paper variant={props.error ? 'outlined' : props.variant}/>
      {props.error && <StyledErrorText>{props.error}</StyledErrorText>}
    </React.Fragment>);
};
exports.Paper = Paper;
var StyledPaper = (0, styles_1.styled)(Paper_1.default, {
    shouldForwardProp: function (prop) { return prop !== 'error'; },
})(function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return ({
        borderColor: props.error ? theme.palette.error.dark : undefined,
        padding: theme.spacingFunction(24),
        paddingTop: theme.spacingFunction(16),
    });
});
var StyledErrorText = (0, styles_1.styled)(FormHelperText_1.FormHelperText)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.error.dark,
    });
});
