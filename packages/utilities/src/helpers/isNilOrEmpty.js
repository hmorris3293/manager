"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNilOrEmpty = void 0;
var isNilOrEmpty = function (v) {
    return v === null ||
        v === undefined ||
        v === '' ||
        (typeof v === 'object' &&
            (v instanceof Set || v instanceof Map
                ? v.size === 0
                : Object.keys(v || {}).length === 0));
};
exports.isNilOrEmpty = isNilOrEmpty;
