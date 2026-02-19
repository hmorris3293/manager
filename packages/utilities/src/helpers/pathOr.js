"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathOr = void 0;
/**
 * Retrieves the value at the specified path in an object or array. If the value is undefined, returns the provided default value.
 * @param defaultValue {T} The value to return if the path is not found or the value is `undefined`
 * @param path {(string | number)[]} An array representing the path to the value in the object or array
 * @param object {O} The object or array to traverse
 * @returns The value at the specified path, or the default value if the path is not found or is `undefined`
 */
var pathOr = function (defaultValue, path, object) {
    if (object === undefined) {
        return defaultValue;
    }
    var result = object;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var key = path_1[_i];
        if (result === null || result[key] === undefined || result[key] == null) {
            return defaultValue; // Exit early if undefined or null
        }
        result = result[key];
    }
    return result;
};
exports.pathOr = pathOr;
