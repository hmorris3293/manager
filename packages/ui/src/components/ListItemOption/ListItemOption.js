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
exports.StyledDisabledItem = exports.ListItemOption = void 0;
var styles_1 = require("@mui/material/styles");
var utils_1 = require("@mui/utils");
var react_1 = require("react");
var Autocomplete_1 = require("../Autocomplete");
var Box_1 = require("../Box");
var ListItem_1 = require("../ListItem");
var Tooltip_1 = require("../Tooltip");
var ListItemOption = function (_a) {
    var _b;
    var children = _a.children, disabledOptions = _a.disabledOptions, item = _a.item, maxHeight = _a.maxHeight, props = _a.props, selected = _a.selected;
    var className = props.className, onClick = props.onClick, rest = __rest(props, ["className", "onClick"]);
    var isItemOptionDisabled = Boolean(disabledOptions);
    var itemOptionDisabledReason = disabledOptions === null || disabledOptions === void 0 ? void 0 : disabledOptions.reason;
    return (<Tooltip_1.Tooltip disableFocusListener={!isItemOptionDisabled} disableHoverListener={!isItemOptionDisabled} disableTouchListener={!isItemOptionDisabled} enterDelay={200} enterNextDelay={200} enterTouchDelay={200} PopperProps={{
            sx: {
                '& .MuiTooltip-tooltip': {
                    minWidth: (_b = disabledOptions === null || disabledOptions === void 0 ? void 0 : disabledOptions.tooltipWidth) !== null && _b !== void 0 ? _b : 215,
                },
            },
        }} title={isItemOptionDisabled && itemOptionDisabledReason
            ? itemOptionDisabledReason
            : ''}>
      <exports.StyledDisabledItem {...rest} aria-disabled={undefined} className={isItemOptionDisabled ? "".concat(className, " Mui-disabled") : className} componentsProps={{
            root: {
                'data-qa-option': item.id,
                'data-testid': item.id,
            },
        }} data-qa-disabled-item={isItemOptionDisabled} onClick={function (e) {
            return isItemOptionDisabled
                ? e.preventDefault()
                : onClick
                    ? onClick(e)
                    : null;
        }} style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxHeight: maxHeight,
        }}>
        {children}
        {isItemOptionDisabled && (<Box_1.Box sx={utils_1.visuallyHidden}>{itemOptionDisabledReason}</Box_1.Box>)}
        {selected && <Autocomplete_1.SelectedIcon style={{ marginLeft: 8 }} visible/>}
      </exports.StyledDisabledItem>
    </Tooltip_1.Tooltip>);
};
exports.ListItemOption = ListItemOption;
exports.StyledDisabledItem = (0, styles_1.styled)(ListItem_1.ListItem, {
    label: 'StyledDisabledItem',
})(function () { return ({
    '&.Mui-disabled': {
        cursor: 'not-allowed',
    },
    '&.MuiAutocomplete-option': {
        minHeight: 'auto !important',
        padding: '8px 10px !important',
    },
    '&.MuiListItem-root[aria-disabled="true"]:active': {
        pointerEvents: 'none !important',
    },
}); });
