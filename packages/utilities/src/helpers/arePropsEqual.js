"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arePropsEqual = void 0;
/**
 * Specify props to shallowly compare.
 *
 * @param prevProps
 * @param nextProps
 */
var arePropsEqual = function (props, prevProps, nextProps) {
    var areEqual = true;
    props.forEach(function (prop) {
        if (prevProps[prop] !== nextProps[prop]) {
            areEqual = false;
        }
    });
    return areEqual;
};
exports.arePropsEqual = arePropsEqual;
