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
exports.ErrorState = void 0;
var ErrorOutline_1 = require("@mui/icons-material/ErrorOutline");
var Grid_1 = require("@mui/material/Grid");
var styles_1 = require("@mui/material/styles");
var React = require("react");
var Button_1 = require("../Button");
var Typography_1 = require("../Typography");
var ErrorState = function (props) {
    var CustomIcon = props.CustomIcon, actionButtonProps = props.actionButtonProps, compact = props.compact, typographySx = props.typographySx;
    var theme = (0, styles_1.useTheme)();
    var sxIcon = {
        color: theme.color.red,
        height: 50,
        marginBottom: theme.spacing(2),
        width: 50,
    };
    return (<ErrorStateRoot alignItems="center" compact={compact} container justifyContent="center">
      <Grid_1.default data-testid="error-state">
        <StyledIconContainer>
          {CustomIcon ? (<CustomIcon data-qa-error-icon style={props.CustomIconStyles} sx={sxIcon}/>) : (<ErrorOutline_1.default data-qa-error-icon sx={sxIcon}/>)}
        </StyledIconContainer>
        {typeof props.errorText === 'string' ? (<Typography_1.Typography data-qa-error-msg style={{ textAlign: 'center' }} sx={typographySx} variant="h3">
            {props.errorText}
          </Typography_1.Typography>) : (<div style={{ textAlign: 'center' }}>{props.errorText}</div>)}
        {actionButtonProps ? (<div style={{ textAlign: 'center' }}>
            <Button_1.Button onClick={function () {
                var _a;
                (_a = actionButtonProps.onClick) === null || _a === void 0 ? void 0 : _a.call(actionButtonProps);
            }} title={actionButtonProps.text}>
              {actionButtonProps.text}
            </Button_1.Button>
          </div>) : null}
      </Grid_1.default>
    </ErrorStateRoot>);
};
exports.ErrorState = ErrorState;
var StyledIconContainer = (0, styles_1.styled)('div')({
    textAlign: 'center',
});
var ErrorStateRoot = (0, styles_1.styled)(Grid_1.default, {
    label: 'ErrorStateRoot',
    shouldForwardProp: function (prop) { return prop !== 'compact'; },
})(function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return ({
        marginLeft: 0,
        padding: props.compact ? theme.spacing(5) : theme.spacing(10),
        width: '100%',
    });
});
