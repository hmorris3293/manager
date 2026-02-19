"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditableLabelState = void 0;
var React = require("react");
var useEditableLabelState = function () {
    var _a = React.useState(''), editableLabel = _a[0], setEditableLabel = _a[1];
    var _b = React.useState(''), editableLabelError = _b[0], setEditableLabelError = _b[1];
    var resetEditableLabel = function () {
        setEditableLabelError('');
    };
    return {
        editableLabel: editableLabel,
        editableLabelError: editableLabelError,
        resetEditableLabel: resetEditableLabel,
        setEditableLabel: setEditableLabel,
        setEditableLabelError: setEditableLabelError,
    };
};
exports.useEditableLabelState = useEditableLabelState;
