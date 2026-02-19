"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInterval = void 0;
var react_1 = require("react");
var useInterval = function (_a) {
    var callback = _a.callback, _b = _a.cancelOnError, cancelOnError = _b === void 0 ? true : _b, _c = _a.delay, delay = _c === void 0 ? 1000 : _c, _d = _a.silenceError, silenceError = _d === void 0 ? false : _d, _e = _a.startImmediately, startImmediately = _e === void 0 ? false : _e, _f = _a.when, when = _f === void 0 ? true : _f;
    var intervalRef = (0, react_1.useRef)();
    // Save the callback to a ref to ensure it has the most recent version
    // without needing to reset the interval each time the callback changes.
    var savedCallback = (0, react_1.useRef)(callback);
    (0, react_1.useEffect)(function () {
        savedCallback.current = callback;
    }, [callback]);
    var clearTimer = (0, react_1.useCallback)(function () {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
            // Optionally clear the ref after stopping the interval
            intervalRef.current = undefined;
        }
    }, []);
    var tick = (0, react_1.useCallback)(function () {
        try {
            savedCallback.current();
        }
        catch (error) {
            if (!silenceError) {
                throw error;
            }
            if (cancelOnError) {
                clearTimer();
            }
        }
    }, [silenceError, cancelOnError, clearTimer]);
    (0, react_1.useEffect)(function () {
        if (when) {
            if (startImmediately) {
                tick();
            }
            intervalRef.current = window.setInterval(tick, delay);
            return clearTimer;
        }
        // Ensure the cleanup function is properly defined for all paths.
        return clearTimer;
    }, [tick, delay, when, startImmediately, clearTimer]);
    // Return the intervalRef and a method to programmatically cancel the interval
    return { cancel: clearTimer, intervalRef: intervalRef };
};
exports.useInterval = useInterval;
