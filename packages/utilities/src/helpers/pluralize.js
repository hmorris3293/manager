"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralize = void 0;
var pluralize = function (single, plural, value) {
    return value === 1 ? "".concat(value, " ").concat(single) : "".concat(value, " ").concat(plural);
};
exports.pluralize = pluralize;
