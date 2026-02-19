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
exports.ActionsPanel = void 0;
var styles_1 = require("@mui/material/styles");
var React = require("react");
var mui_1 = require("tss-react/mui");
var omittedProps_1 = require("../../utilities/omittedProps");
var Box_1 = require("../Box");
var Button_1 = require("../Button");
/**
 * `ActionPanel` is a container for primary and secondary actions (ex: "Cancel" & "Save")
 * It can also be used to render a single action within modals or drawers for styling and layout consistency.
 */
var ActionsPanel = function (props) {
    var _a, _b;
    var className = props.className, primaryButtonProps = props.primaryButtonProps, _c = props.reversePrimaryButtonPosition, reversePrimaryButtonPosition = _c === void 0 ? false : _c, secondaryButtonProps = props.secondaryButtonProps, rest = __rest(props, ["className", "primaryButtonProps", "reversePrimaryButtonPosition", "secondaryButtonProps"]);
    var cx = (0, mui_1.useStyles)().cx;
    var primaryButtonDataQAProp = "data-qa-".concat(primaryButtonProps === null || primaryButtonProps === void 0 ? void 0 : primaryButtonProps['data-testid']);
    var secondaryButtonDataQAProp = "data-qa-".concat(secondaryButtonProps === null || secondaryButtonProps === void 0 ? void 0 : secondaryButtonProps['data-testid']);
    return (<StyledBox className={cx(className, 'actionPanel')} data-qa-buttons reversePrimaryButtonPosition={reversePrimaryButtonPosition} {...rest}>
      {secondaryButtonProps ? (<Button_1.Button {..._a = {}, _a[secondaryButtonDataQAProp] = true, _a} buttonType="secondary" data-qa-cancel {...secondaryButtonProps}>
          {secondaryButtonProps.label}
        </Button_1.Button>) : null}
      {primaryButtonProps ? (<Button_1.Button {..._b = {}, _b[primaryButtonDataQAProp] = true, _b} buttonType="primary" {...primaryButtonProps}>
          {primaryButtonProps.label}
        </Button_1.Button>) : null}
    </StyledBox>);
};
exports.ActionsPanel = ActionsPanel;
var StyledBox = (0, styles_1.styled)(Box_1.Box, {
    label: 'StyledActionsPanel',
    shouldForwardProp: (0, omittedProps_1.omittedProps)(['reversePrimaryButtonPosition']),
})(function (_a) {
    var spacing = _a.theme.spacing, props = __rest(_a, ["theme"]);
    return ({
        display: 'flex',
        flexDirection: props.reversePrimaryButtonPosition ? 'row-reverse' : 'row',
        gap: spacing(),
        justifyContent: 'flex-end',
        marginTop: spacing(1),
        paddingBottom: spacing(1),
        paddingTop: spacing(1),
    });
});
