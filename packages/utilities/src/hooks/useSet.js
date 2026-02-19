"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSet = void 0;
var React = require("react");
// useSet exposes an easy API to consumers wishing to use the Set data structure
// as function component state. Sets work pretty well with function components,
// but adding and deleting items is somewhat verbose (well, really only ~5 lines)
// since a new Set must be created in order for React to successfully diff and
// update the DOM when appropriate.
var useSet = function (initial) {
    var _a = React.useState(new Set(initial)), set = _a[0], setSet = _a[1];
    var add = function (element) {
        setSet(function (prevSet) {
            // A new Set must be created, otherwise React won't know to re-render the DOM.
            var newSet = new Set(prevSet);
            newSet.add(element);
            return newSet;
        });
    };
    var _delete = function (element) {
        setSet(function (prevSet) {
            // A new Set must be created, otherwise React won't know to re-render the DOM.
            var newSet = new Set(prevSet);
            newSet.delete(element);
            return newSet;
        });
    };
    // Proxy methods. The entire Set is also exported, so these are just a convenience.
    // More Set methods can be added here.
    var has = function (element) { return set.has(element); };
    var forEach = function (callbackFn) {
        return set.forEach(callbackFn);
    };
    var clear = function () { return set.clear(); };
    return {
        add: add,
        clear: clear,
        delete: _delete,
        forEach: forEach,
        has: has,
        set: set,
    };
};
exports.useSet = useSet;
