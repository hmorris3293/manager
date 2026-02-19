"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var vitest_1 = require("vitest");
var useOpenClose_1 = require("./useOpenClose");
(0, vitest_1.describe)('useOpenClose hook', function () {
    (0, vitest_1.it)('defaults "isOpen" property to false', function () {
        var result = (0, react_1.renderHook)(function () { return (0, useOpenClose_1.useOpenClose)(); }).result;
        (0, vitest_1.expect)(result.current.isOpen).toBe(false);
    });
    (0, vitest_1.it)('includes a "open" function which sets isOpen to true', function () {
        var result = (0, react_1.renderHook)(function () { return (0, useOpenClose_1.useOpenClose)(); }).result;
        (0, react_1.act)(function () { return result.current.open(); });
        (0, vitest_1.expect)(result.current.isOpen).toBe(true);
    });
    (0, vitest_1.it)('includes a "close" function which sets isOpen to false', function () {
        var result = (0, react_1.renderHook)(function () { return (0, useOpenClose_1.useOpenClose)(); }).result;
        (0, react_1.act)(function () { return result.current.open(); });
        (0, vitest_1.expect)(result.current.isOpen).toBe(true);
        (0, react_1.act)(function () { return result.current.close(); });
        (0, vitest_1.expect)(result.current.isOpen).toBe(false);
    });
});
