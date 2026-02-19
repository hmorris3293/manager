"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useErrors = void 0;
var React = require("react");
var scrollErrorIntoView_1 = require("../helpers/scrollErrorIntoView");
var useErrors = function () {
    var _a = React.useState([]), errors = _a[0], setErrors = _a[1];
    // If there are errors, scroll them into view
    React.useEffect(function () {
        if (errors) {
            (0, scrollErrorIntoView_1.scrollErrorIntoView)();
        }
    }, [errors]);
    var resetErrors = function () { return setErrors([]); };
    return [errors, setErrors, resetErrors];
};
exports.useErrors = useErrors;
