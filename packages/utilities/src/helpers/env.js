"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooleanEnv = getBooleanEnv;
/**
 * Helps you parse an environment variable that is intended to be a boolean.
 */
function getBooleanEnv(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === true || value === 'true') {
        return true;
    }
    return false;
}
