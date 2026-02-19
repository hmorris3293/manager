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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLinkButton = void 0;
var styles_1 = require("@mui/material/styles");
/**
 * A button that looks like a link. Eventually this treatment will go away,
 * but the sake of the MUI migration we need to keep it around for now, and as a styled component in order to get rid of
 * spreading theme.applyLinkStyles.
 *
 * @todo apply this component wherever theme.applyLinkStyles is used. see #6621
 */
exports.StyledLinkButton = (0, styles_1.styled)('button', {
    label: 'StyledLinkButton',
})(function (_a) {
    var theme = _a.theme;
    return (__assign({}, theme.applyLinkStyles));
});
