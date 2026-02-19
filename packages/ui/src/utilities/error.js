"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorText = void 0;
var getErrorText = function (error) {
    var _a;
    if (Array.isArray(error)) {
        return (_a = error[0]) === null || _a === void 0 ? void 0 : _a.reason;
    }
    return error;
};
exports.getErrorText = getErrorText;
