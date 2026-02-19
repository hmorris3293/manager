"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var vitest_1 = require("vitest");
var useSet_1 = require("./useSet");
(0, vitest_1.describe)('useSet', function () {
    (0, vitest_1.it)('adds to the set', function () {
        var result = (0, react_1.renderHook)(function () { return (0, useSet_1.useSet)(); }).result;
        (0, react_1.act)(function () {
            result.current.add(1);
        });
        (0, vitest_1.expect)(result.current.has(1)).toBe(true);
    });
    (0, vitest_1.it)('deletes from the set', function () {
        var result = (0, react_1.renderHook)(function () { return (0, useSet_1.useSet)([1]); }).result;
        (0, react_1.act)(function () {
            result.current.delete(1);
        });
        (0, vitest_1.expect)(result.current.has(1)).toBe(false);
    });
});
