"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var vitest_1 = require("vitest");
var useInterval_1 = require("./useInterval");
(0, vitest_1.describe)('useInterval', function () {
    vitest_1.vi.useFakeTimers();
    (0, vitest_1.test)('calls the callback with a specified delay', function () {
        var callback = vitest_1.vi.fn();
        (0, react_1.renderHook)(function () { return (0, useInterval_1.useInterval)({ callback: callback, delay: 1000 }); });
        (0, vitest_1.expect)(callback).not.toHaveBeenCalled();
        (0, react_1.act)(function () {
            vitest_1.vi.advanceTimersByTime(1000);
        });
        (0, vitest_1.expect)(callback).toHaveBeenCalledTimes(1);
        (0, react_1.act)(function () {
            vitest_1.vi.advanceTimersByTime(1000);
        });
        (0, vitest_1.expect)(callback).toHaveBeenCalledTimes(2);
    });
    (0, vitest_1.test)('does not call the callback when "when" is false', function () {
        var callback = vitest_1.vi.fn();
        (0, react_1.renderHook)(function () { return (0, useInterval_1.useInterval)({ callback: callback, delay: 1000, when: false }); });
        (0, react_1.act)(function () {
            vitest_1.vi.advanceTimersByTime(5000);
        });
        (0, vitest_1.expect)(callback).not.toHaveBeenCalled();
    });
    (0, vitest_1.test)('stops calling the callback after being cancelled', function () {
        var callback = vitest_1.vi.fn();
        var result = (0, react_1.renderHook)(function () { return (0, useInterval_1.useInterval)({ callback: callback, delay: 1000 }); }).result;
        (0, react_1.act)(function () {
            vitest_1.vi.advanceTimersByTime(1000);
        });
        (0, vitest_1.expect)(callback).toHaveBeenCalledTimes(1);
        (0, react_1.act)(function () {
            result.current.cancel();
        });
        (0, react_1.act)(function () {
            vitest_1.vi.advanceTimersByTime(2000);
        });
        (0, vitest_1.expect)(callback).toHaveBeenCalledTimes(1);
    });
});
