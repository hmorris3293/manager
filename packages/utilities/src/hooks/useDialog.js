"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDialog = void 0;
var React = require("react");
/**
 * useDialog Hook
 *
 * Created to reuse shared logic for confirmation dialogs.
 * Handles basic shared actions such as setting loading state on
 * submit, opening and closing the dialog, etc.
 *
 * If the action being confirmed is complex, you'll likely need to expand this
 * hook or write custom logic.
 *
 * @example
 *
 * const myRequest = (id: string) => Promise<any>;
 *
 * const {
 *  dialog,
 *  openDialog,
 *  closeDialog,
 *  submitDialog,
 *  handleError
 * } = useDialog<string>(myRequest);
 *
 *
 * @returns
 *
 * dialog object: contains state variables for the dialog
 * open, close handlers: Opening the dialog requires the label
 * and the ID of the entity that the action is going to target.
 *
 * submit handler: Handles updating loading/error states and making
 * the API request. Returns promises so the consumer can chain additional
 * logic on top of these handlers.
 *
 * error handler: Set the dialog error directly. Exposed so that consumers
 * can specify a default error message.
 *
 * @param request
 */
var useDialog = function (request) {
    var _a = React.useState(), error = _a[0], setErrors = _a[1];
    var _b = React.useState(false), isOpen = _b[0], setOpen = _b[1];
    var _c = React.useState(false), isLoading = _c[0], setLoading = _c[1];
    var _d = React.useState(-1), entityID = _d[0], setEntityID = _d[1];
    var _e = React.useState(''), entityLabel = _e[0], setEntityLabel = _e[1];
    var mountedRef = React.useRef(true);
    var submitDialog = function (params) {
        setErrors(undefined);
        setLoading(true);
        return request(params)
            .then(function (response) {
            if (!mountedRef.current) {
                return;
            }
            handleSuccess();
            return response;
        })
            .catch(function (e) {
            if (!mountedRef.current) {
                return;
            }
            /**
             * This sets the error to whatever the API returns.
             * Consumers can use the exposed handleError method
             * directly if they want to override this with a custom message.
             */
            handleError(e[0].reason);
            return Promise.reject(e);
        });
    };
    var openDialog = function (id, label) {
        if (label === void 0) { label = ''; }
        setEntityLabel(label);
        setEntityID(id);
        setErrors(undefined);
        setLoading(false);
        setOpen(true);
    };
    var handleSuccess = function () {
        setErrors(undefined);
        setLoading(false);
        setOpen(false);
    };
    var handleError = function (e) {
        setErrors(e);
        setLoading(false);
    };
    var closeDialog = function () {
        setOpen(false);
    };
    React.useEffect(function () {
        return function () {
            mountedRef.current = false;
        };
    }, []);
    return {
        closeDialog: closeDialog,
        dialog: { entityID: entityID, entityLabel: entityLabel, error: error, isLoading: isLoading, isOpen: isOpen },
        handleError: handleError,
        openDialog: openDialog,
        submitDialog: submitDialog,
    };
};
exports.useDialog = useDialog;
