"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebouncedValue = void 0;
var react_1 = require("react");
var useDebouncedValue = function (value, delay) {
    if (delay === void 0) { delay = 500; }
    var _a = (0, react_1.useState)(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    (0, react_1.useEffect)(function () {
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
};
exports.useDebouncedValue = useDebouncedValue;
