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
exports.Dialog = void 0;
var Dialog_1 = require("@mui/material/Dialog");
var DialogContent_1 = require("@mui/material/DialogContent");
var styles_1 = require("@mui/material/styles");
var React = require("react");
var utilities_1 = require("../../utilities");
var error_1 = require("../../utilities/error");
var stringUtils_1 = require("../../utilities/stringUtils");
var Box_1 = require("../Box");
var CircleProgress_1 = require("../CircleProgress");
var DialogTitle_1 = require("../DialogTitle");
var ErrorState_1 = require("../ErrorState");
var NotFound_1 = require("../NotFound/NotFound");
/**
 * ## Overview
 * A modal dialog is a window that appears on top of a parent screen. It's called 'modal' because it creates a mode that disables the parent screen but keeps it visible. Users must interact with the modal to return to the main screen.
 *
 * > ⚠️ In Cloud Manager, dialogs will lock focus onto the dialog and prevent scrolling. For the sake of previewing dialogs, this does not occur in Storybook.
 *
 * ## Modal Types
 * - **Standard**
 *   - Has an "X" button in the top right
 *  - Can contain anything in the body of the dialog
 * - **Confirmation**
 *  - Users must confirm a choice
 * - **Deletion**
 *  - The user must confirm the deletion of an entity
 *  - Can require user to type the entity name to confirm deletion
 *
 * > Clicking off of the modal will not close it.
 * > A modal can only be closed by taking direct action, clicking on a button or the “X” button, or using the `esc` key.
 *
 */
exports.Dialog = React.forwardRef(function (props, ref) {
    var _a;
    var theme = (0, styles_1.useTheme)();
    var children = props.children, className = props.className, _b = props.enableCloseOnBackdropClick, enableCloseOnBackdropClick = _b === void 0 ? false : _b, error = props.error, fullHeight = props.fullHeight, fullWidth = props.fullWidth, isFetching = props.isFetching, _c = props.maxWidth, maxWidth = _c === void 0 ? 'md' : _c, onClose = props.onClose, open = props.open, subtitle = props.subtitle, title = props.title, titleSuffix = props.titleSuffix, rest = __rest(props, ["children", "className", "enableCloseOnBackdropClick", "error", "fullHeight", "fullWidth", "isFetching", "maxWidth", "onClose", "open", "subtitle", "title", "titleSuffix"]);
    var titleID = (0, stringUtils_1.convertForAria)(title);
    // Store the last valid children and title in refs
    // This is to prevent flashes of content during the drawer's closing transition,
    // and its content becomes potentially undefined
    var lastChildrenRef = React.useRef(children);
    var lastErrorRef = React.useRef(error);
    var lastTitleRef = React.useRef(title);
    // Update refs when the drawer is open and content is matched
    if (open) {
        lastChildrenRef.current = children;
        lastTitleRef.current = title;
        lastErrorRef.current = error;
    }
    var errorText = (0, error_1.getErrorText)(lastErrorRef.current);
    return (<StyledDialog aria-labelledby={titleID} closeAfterTransition={false} data-qa-dialog data-qa-drawer data-testid="drawer" fullHeight={fullHeight} fullWidth={fullWidth} maxWidth={(_a = (fullWidth && maxWidth)) !== null && _a !== void 0 ? _a : undefined} onClose={function (_, reason) {
            if (onClose &&
                (reason !== 'backdropClick' || enableCloseOnBackdropClick)) {
                onClose({}, 'escapeKeyDown');
            }
        }} open={open} ref={ref} role="dialog" title={title} {...rest}>
        <Box_1.Box sx={{
            alignItems: 'center',
        }}>
          <DialogTitle_1.DialogTitle id={titleID} isFetching={isFetching} onClose={function () { return onClose === null || onClose === void 0 ? void 0 : onClose({}, 'escapeKeyDown'); }} subtitle={subtitle} title={lastTitleRef.current} titleSuffix={titleSuffix}/>
          <DialogContent_1.default className={className} sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden',
            paddingBottom: theme.spacing(3),
        }}>
            {isFetching ? (<Box_1.Box display="flex" justifyContent="center" my={4}>
                <CircleProgress_1.CircleProgress size="md"/>
              </Box_1.Box>) : errorText &&
            (errorText === 'Not Found' || errorText === 'Not found') ? (<NotFound_1.NotFound />) : (<>
                {errorText && <ErrorState_1.ErrorState errorText={errorText}/>}
                {lastChildrenRef.current}
              </>)}
          </DialogContent_1.default>
        </Box_1.Box>
      </StyledDialog>);
});
var StyledDialog = (0, styles_1.styled)(Dialog_1.default, {
    shouldForwardProp: (0, utilities_1.omittedProps)(['fullHeight', 'title']),
})(function (_a) {
    var _b;
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return ({
        '& .MuiDialog-paper': (_b = {
                height: props.fullHeight ? '100vh' : undefined,
                maxHeight: '100%',
                minWidth: '500px',
                padding: 0
            },
            _b[theme.breakpoints.down('md')] = {
                minWidth: '380px',
            },
            _b),
    });
});
