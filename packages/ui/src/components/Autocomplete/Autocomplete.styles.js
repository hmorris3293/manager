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
exports.CustomPopper = exports.SelectedIcon = exports.StyledListItem = void 0;
var Done_1 = require("@mui/icons-material/Done");
var Popper_1 = require("@mui/material/Popper");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var utilities_1 = require("../../utilities");
exports.StyledListItem = (0, styles_1.styled)('li', {
    label: 'StyledListItem',
    shouldForwardProp: (0, utilities_1.omittedProps)(['selectAllOption']),
})(function (_a) {
    var theme = _a.theme;
    return ({
        '&.MuiAutocomplete-option': {
            overflow: 'unset',
        },
        '&:after': {
            background: theme.color.border3,
            bottom: '-5px',
            content: '""',
            height: '1px',
            left: '-4px',
            position: 'absolute',
            width: '102%',
        },
        color: theme.color.headline,
        font: theme.font.bold,
        fontSize: '1rem',
        marginBottom: '9px',
        position: 'relative',
    });
});
exports.SelectedIcon = (0, styles_1.styled)(Done_1.default, {
    label: 'SelectedIcon',
    shouldForwardProp: function (prop) { return prop != 'visible'; },
})(function (_a) {
    var visible = _a.visible;
    return ({
        height: 17,
        marginLeft: '-2px',
        marginRight: '5px',
        visibility: visible ? 'visible' : 'hidden',
        width: 17,
    });
});
var CustomPopper = function (props) {
    var placement = props.placement, style = props.style, rest = __rest(props, ["placement", "style"]);
    var updatedStyle = __assign(__assign({}, style), { width: (style === null || style === void 0 ? void 0 : style.width)
            ? typeof style.width === 'string'
                ? "calc(".concat(style.width, " + 2px)")
                : style.width + 2
            : undefined });
    return (<Popper_1.default {...rest} data-qa-autocomplete-popper data-testid="autocomplete-popper" modifiers={[
            { enabled: false, name: 'preventOverflow' },
            { enabled: !placement, name: 'flip' },
        ]} placement={placement} style={updatedStyle}/>);
};
exports.CustomPopper = CustomPopper;
