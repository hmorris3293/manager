"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrevious = void 0;
var react_1 = require("react");
/** This hook is from the React docs:
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 */
var usePrevious = function (value) {
    var ref = (0, react_1.useRef)();
    (0, react_1.useEffect)(function () {
        ref.current = value;
    });
    return ref.current;
};
exports.usePrevious = usePrevious;
