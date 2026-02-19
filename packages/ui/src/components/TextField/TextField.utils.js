"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFieldIds = exports.getClampedValue = void 0;
var ui_1 = require("@linode/ui");
var react_1 = require("react");
var getClampedValue = function (_a) {
    var max = _a.max, min = _a.min, type = _a.type, value = _a.value;
    var numberTypes = ['tel', 'number'];
    // Because !!0 is falsy :(
    var minAndMaxExist = typeof min === 'number' && typeof max === 'number';
    if (minAndMaxExist && numberTypes.includes(type || '') && value !== '') {
        return (0, ui_1.clamp)(min, max, +value);
    }
    return value;
};
exports.getClampedValue = getClampedValue;
var useFieldIds = function (_a) {
    var errorGroup = _a.errorGroup, _b = _a.hasError, hasError = _b === void 0 ? false : _b, inputId = _a.inputId, label = _a.label;
    var fallbackId = (0, react_1.useId)();
    var validInputId = inputId || (label ? (0, ui_1.convertToKebabCase)(label) : fallbackId);
    var helperTextId = "".concat(validInputId, "-helper-text");
    var errorTextId = "".concat(validInputId, "-error-text");
    var errorScrollClassName = hasError
        ? errorGroup
            ? "error-for-scroll-".concat(errorGroup)
            : "error-for-scroll"
        : '';
    return {
        errorScrollClassName: errorScrollClassName,
        errorTextId: errorTextId,
        helperTextId: helperTextId,
        validInputId: validInputId,
    };
};
exports.useFieldIds = useFieldIds;
