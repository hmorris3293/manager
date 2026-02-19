"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayBox = void 0;
var styles_1 = require("@mui/material/styles");
var Box_1 = require("../../Box/Box");
exports.DayBox = (0, styles_1.styled)(Box_1.Box, {
    label: 'DayBox',
    shouldForwardProp: function (prop) { return prop !== 'isStartOrEnd' && prop !== 'isSelected'; },
})(function (_a) {
    var isSelected = _a.isSelected, isStartOrEnd = _a.isStartOrEnd, theme = _a.theme;
    return ({
        '&:hover': {
            backgroundColor: !isStartOrEnd
                ? theme.tokens.component.Calendar.HoverItem.Background
                : theme.tokens.alias.Action.Primary.Hover,
            border: "1px solid ".concat(theme.tokens.component.Calendar.Border),
            color: isStartOrEnd
                ? theme.tokens.component.Calendar.SelectedItem.Text
                : theme.tokens.component.Calendar.HoverItem.Text,
        },
        alignItems: 'center',
        backgroundColor: isStartOrEnd || isSelected
            ? theme.tokens.component.Calendar.SelectedItem.Background.Default
            : 'transparent',
        borderRadius: '50%',
        color: isStartOrEnd || isSelected
            ? theme.tokens.component.Calendar.SelectedItem.Text
            : theme.tokens.component.Calendar.Text.Default,
        cursor: 'pointer',
        display: 'flex',
        height: 40,
        justifyContent: 'center',
        transition: 'background-color 0.2s ease',
        width: 40,
    });
});
