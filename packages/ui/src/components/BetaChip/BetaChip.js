"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BetaChip = void 0;
var design_language_system_1 = require("@linode/design-language-system");
var styles_1 = require("@mui/material/styles");
var React = require("react");
var Chip_1 = require("../Chip");
/**
 * ## Usage
 *
 * BetaChip is used when a feature is available to a limited number of users as part of a beta rollout.<br>
 * **Example:** A beta chip may appear in the [primary navigation](https://github.com/linode/manager/pull/8104#issuecomment-1309334374),
 * breadcrumbs, [banners](/docs/components-notifications-dismissible-banners--beta-banners), tabs, and/or plain text to designate beta functionality.<br>
 * **Visual style:** bold, capitalized text; reduced height, letter spacing, and font size; solid color background.
 *
 */
var BetaChip = function (props) {
    return <StyledBetaChip {...props} data-testid="betaChip" label="beta"/>;
};
exports.BetaChip = BetaChip;
var StyledBetaChip = (0, styles_1.styled)(Chip_1.Chip, {
    label: 'StyledBetaChip',
    shouldForwardProp: function (prop) { return prop !== 'color'; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        '& .MuiChip-label': {
            padding: 0,
        },
        background: design_language_system_1.Global.Color.Neutrals[70],
        color: design_language_system_1.Global.Color.Neutrals.White,
        fontWeight: theme.tokens.font.FontWeight.Extrabold,
        fontSize: '11px',
        lineHeight: '12px',
        height: 16,
        letterSpacing: '.22px',
        marginLeft: theme.spacingFunction(8),
        padding: theme.spacingFunction(4),
        textTransform: theme.tokens.font.Textcase.Uppercase,
    });
});
