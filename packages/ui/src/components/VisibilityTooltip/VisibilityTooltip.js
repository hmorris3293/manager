"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityTooltip = void 0;
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var icons_1 = require("../../assets/icons");
var IconButton_1 = require("../IconButton");
var Tooltip_1 = require("../Tooltip");
/**
 * Toggle-able visibility icon with tooltip on hover
 */
var VisibilityTooltip = function (props) {
    var handleClick = props.handleClick, isVisible = props.isVisible, placement = props.placement, sx = props.sx;
    return (<Tooltip_1.Tooltip data-testid="VisibilityTooltip" disableInteractive placement={placement !== null && placement !== void 0 ? placement : 'top'} sx={sx} title={!isVisible ? 'Show' : 'Hide'}>
      <StyledToggleButton onClick={handleClick}>
        {!isVisible ? (<icons_1.VisibilityShowIcon aria-label="Show"/>) : (<icons_1.VisibilityHideIcon aria-label="Hide"/>)}
      </StyledToggleButton>
    </Tooltip_1.Tooltip>);
};
exports.VisibilityTooltip = VisibilityTooltip;
var StyledToggleButton = (0, styles_1.styled)(IconButton_1.IconButton, {
    label: 'StyledToggleButton',
})(function (_a) {
    var theme = _a.theme;
    return ({
        '& svg': {
            '& path': {
                stroke: theme.palette.grey[500],
            },
        },
        '& svg:hover': {
            '& path': {
                stroke: theme.palette.primary.main,
            },
        },
        marginLeft: theme.spacing(),
        minHeight: 'auto',
        minWidth: 'auto',
        padding: 0,
    });
});
