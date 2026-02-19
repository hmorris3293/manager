"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var vitest_1 = require("vitest");
var useDebouncedValue_1 = require("./useDebouncedValue");
(0, vitest_1.describe)('useDebouncedValue', function () {
    (0, vitest_1.it)('debounces the provided value by the given delay', function () {
        vitest_1.vi.useFakeTimers();
        var _a = (0, react_1.renderHook)(function (_a) {
            var value = _a.value;
            return (0, useDebouncedValue_1.useDebouncedValue)(value, 500);
        }, { initialProps: { value: 'test' } }), rerender = _a.rerender, result = _a.result;
        (0, vitest_1.expect)(result.current).toBe('test');
        rerender({ value: 'test-1' });
        (0, vitest_1.expect)(result.current).toBe('test');
        (0, react_1.act)(function () {
            vitest_1.vi.advanceTimersByTime(400);
        });
        (0, vitest_1.expect)(result.current).toBe('test');
        (0, react_1.act)(function () {
            vitest_1.vi.advanceTimersByTime(100);
        });
        (0, vitest_1.expect)(result.current).toBe('test-1');
    });
});
