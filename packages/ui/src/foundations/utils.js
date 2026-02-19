"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spacingFunction = void 0;
var design_language_system_1 = require("@linode/design-language-system");
// Custom spacing function supporting up to 4 values (top, right, bottom, left)
var spacingFunction = function () {
    var factors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        factors[_i] = arguments[_i];
    }
    // Ensure we only process up to 4 arguments
    var validFactors = factors.slice(0, 4);
    if (validFactors.length === 0) {
        return design_language_system_1.Spacing.S0;
    }
    // If multiple factors are provided, process each one and join with spaces
    if (validFactors.length > 1) {
        return validFactors.map(function (factor) { return (0, exports.spacingFunction)(factor); }).join(' ');
    }
    // Single factor case
    var factor = validFactors[0];
    var spacingValueMap = {};
    /**
     * Dynamically build a mapping from pixel values to spacing tokens by parsing the keys in the Spacing object.
     * Example result:
     * {
     *   0: 'S0', // 0px
     *   2: 'S2', // 2px
     *   4: 'S4', // 4px
     *   ...
     * }
     * This approach eliminates the need for manual token mapping and automatically adapts if
     * new spacing tokens are added to our design system.
     */
    Object.keys(design_language_system_1.Spacing).forEach(function (key) {
        if (key.startsWith('S')) {
            var pixelValue = parseInt(key.substring(1), 10);
            if (!isNaN(pixelValue)) {
                spacingValueMap[pixelValue] = key;
            }
        }
    });
    // Find the closest matching token, rounds down.
    var availablePixels = Object.keys(spacingValueMap).map(Number);
    var closestPixel = availablePixels.reduce(function (prev, curr) {
        return Math.abs(curr - factor) < Math.abs(prev - factor) ? curr : prev;
    });
    var token = spacingValueMap[closestPixel];
    return design_language_system_1.Spacing[token];
};
exports.spacingFunction = spacingFunction;
