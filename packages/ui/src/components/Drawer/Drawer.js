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
exports.Drawer = void 0;
var ui_1 = require("@linode/ui");
var Drawer_1 = require("@mui/material/Drawer");
var Grid_1 = require("@mui/material/Grid");
var styles_1 = require("@mui/material/styles");
var React = require("react");
var error_1 = require("../../utilities/error");
var stringUtils_1 = require("../../utilities/stringUtils");
var Box_1 = require("../Box");
var CircleProgress_1 = require("../CircleProgress");
var ErrorState_1 = require("../ErrorState");
var IconButton_1 = require("../IconButton");
var NotFound_1 = require("../NotFound/NotFound");
var Typography_1 = require("../Typography");
/**
 * ## Overview
 * - Drawers are essentially modal dialogs that appear on the right of the screen rather than the center.
 * - Like traditional modals, they block interaction with the page content.
 * - They are elevated above the app’s UI and don’t affect the screen’s layout grid.
 *
 * ## Behavior
 *
 * - Clicking a button on the screen opens the drawer.
 * - Drawers can be closed by pressing the `esc` key, clicking the “X” icon, or clicking the “Cancel” button.
 */
exports.Drawer = React.forwardRef(function (props, ref) {
    var _a, _b;
    var children = props.children, error = props.error, isFetching = props.isFetching, onClose = props.onClose, open = props.open, sx = props.sx, title = props.title, wide = props.wide, rest = __rest(props, ["children", "error", "isFetching", "onClose", "open", "sx", "title", "wide"]);
    var titleID = (0, stringUtils_1.convertForAria)(title);
    var theme = (0, styles_1.useTheme)();
    var sxDrawer = {
        '& .MuiDrawer-paper': __assign((_a = { padding: theme.spacing(4) }, _a[theme.breakpoints.down('sm')] = {
            padding: theme.spacing(2),
        }, _a), (wide
            ? {
                maxWidth: 700,
                width: '100%',
            }
            : (_b = {},
                _b[theme.breakpoints.down('sm')] = {
                    maxWidth: 445,
                    width: '100%',
                },
                _b.width = 480,
                _b))),
        '& .actionPanel': {
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: theme.spacing(1),
        },
        '& .selectionCard': {
            flexBasis: '100%',
            maxWidth: '100%',
        },
    };
    // Store the last valid children and title in refs
    // This is to prevent flashes of content during the drawer's closing transition,
    // and its content becomes potentially undefined
    var lastChildrenRef = React.useRef(children);
    var lastTitleRef = React.useRef(title);
    var lastErrorRef = React.useRef(error);
    // Update refs when the drawer is open and content is matched
    if (open) {
        lastChildrenRef.current = children;
        lastTitleRef.current = title;
        lastErrorRef.current = error;
    }
    var errorText = (0, error_1.getErrorText)(lastErrorRef.current);
    return (<Drawer_1.default anchor="right" onClose={function (_, reason) {
            if (onClose && reason !== 'backdropClick') {
                onClose({}, 'escapeKeyDown');
            }
        }} open={open} ref={ref} sx={__assign(__assign({}, sxDrawer), sx)} {...rest} aria-labelledby={titleID} data-qa-drawer data-testid="drawer" role="dialog">
        <Grid_1.default container sx={function (theme) { return ({
            '&&': {
                marginBottom: theme.spacing(2),
            },
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            position: 'relative',
        }); }} wrap="nowrap">
          <Grid_1.default>
            {isFetching ? null : (<Typography_1.Typography data-qa-drawer-title={lastTitleRef.current} data-testid="drawer-title" id={titleID} sx={function (theme) { return ({
                marginRight: theme.spacing(2),
                wordBreak: 'break-word',
            }); }} variant="h2">
                {lastTitleRef.current}
              </Typography_1.Typography>)}
          </Grid_1.default>
          <Grid_1.default>
            <IconButton_1.IconButton aria-label="Close drawer" color="primary" data-qa-close-drawer onClick={function () { return onClose === null || onClose === void 0 ? void 0 : onClose({}, 'escapeKeyDown'); }} size="large" sx={{
            position: 'absolute',
            right: '-12px',
            top: '-12px',
        }}>
              <ui_1.CloseIcon />
            </IconButton_1.IconButton>
          </Grid_1.default>
        </Grid_1.default>
        {isFetching ? (<Box_1.Box display="flex" justifyContent="center" mt={12}>
            <CircleProgress_1.CircleProgress size="md"/>
          </Box_1.Box>) : errorText &&
            (errorText === 'Not Found' || errorText === 'Not found') ? (<NotFound_1.NotFound alignTop/>) : (<>
            {errorText && <ErrorState_1.ErrorState errorText={errorText}/>}
            {lastChildrenRef.current}
          </>)}
      </Drawer_1.default>);
});
