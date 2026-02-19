"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewFeatureChip = void 0;
var design_language_system_1 = require("@linode/design-language-system");
var styles_1 = require("@mui/material/styles");
var React = require("react");
var Chip_1 = require("../Chip");
/**
 * ## Usage
 *
 * The NewFeatureChip is displayed to all users after the feature has been fully rolled out.<br>
 * **Example:** A NewFeatureChip chip may appear in the primary navigation,
 * breadcrumbs, banners, tabs, and/or plain text to designate new functionality and improve visibility for all the users.<br>
 * **Visual style:** bold, capitalized text; reduced height, letter spacing, and font size; solid color background.
 *
 */
var NewFeatureChip = function (props) {
    return (<StyledNewFeatureChip {...props} data-testid="newFeatureChip" label="new"/>);
};
exports.NewFeatureChip = NewFeatureChip;
var StyledNewFeatureChip = (0, styles_1.styled)(Chip_1.Chip, {
    label: 'StyledNewFeatureChip',
    shouldForwardProp: function (prop) { return prop !== 'color'; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        '& .MuiChip-label': {
            padding: 0,
        },
        background: design_language_system_1.Global.Color.Violet[70],
        color: design_language_system_1.Global.Color.Neutrals.White,
        font: theme.font.bold,
        fontSize: '11px',
        fontWeight: theme.tokens.font.FontWeight.Extrabold,
        lineHeight: '12px',
        height: 16,
        letterSpacing: '.22px',
        marginLeft: theme.spacingFunction(8),
        padding: theme.spacingFunction(4),
        textTransform: theme.tokens.font.Textcase.Uppercase,
    });
});
