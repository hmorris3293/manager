"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotNullOrUndefined = exports.isNullOrUndefined = void 0;
var isNullOrUndefined = function (value) {
    return value === null || value === undefined;
};
exports.isNullOrUndefined = isNullOrUndefined;
var isNotNullOrUndefined = function (el) {
    return !(0, exports.isNullOrUndefined)(el);
};
exports.isNotNullOrUndefined = isNotNullOrUndefined;
