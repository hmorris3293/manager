"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormValidateOnChange = void 0;
var react_1 = require("react");
/**
 * useFormValidateOnChange
 *
 * @description A hook that returns whether or not the form has been submitted at least once.
 * @returns { hasFormBeenSubmitted: boolean, setHasFormBeenSubmitted: (value: boolean) => void }
 */
var useFormValidateOnChange = function () {
    var _a = (0, react_1.useState)(false), hasFormBeenSubmitted = _a[0], _setHasFormBeenSubmitted = _a[1];
    var setHasFormBeenSubmitted = function (value) {
        _setHasFormBeenSubmitted(value);
    };
    return { hasFormBeenSubmitted: hasFormBeenSubmitted, setHasFormBeenSubmitted: setHasFormBeenSubmitted };
};
exports.useFormValidateOnChange = useFormValidateOnChange;
