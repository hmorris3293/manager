"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepStringTransform = void 0;
// Given a value of any type and a string transformation function, apply the
// function to the value recursively. Useful for redacting string patterns.
var deepStringTransform = function (value, fn) {
    if (typeof value === 'string') {
        return fn(value);
    }
    if (Array.isArray(value)) {
        return value.map(function (thisElement) { return (0, exports.deepStringTransform)(thisElement, fn); });
    }
    if (typeof value === 'object' && value !== null) {
        return Object.entries(value).reduce(function (acc, _a) {
            var _b;
            var key = _a[0], _value = _a[1];
            return __assign(__assign({}, acc), (_b = {}, _b[key] = (0, exports.deepStringTransform)(_value, fn), _b));
        }, {});
    }
    return value;
};
exports.deepStringTransform = deepStringTransform;
