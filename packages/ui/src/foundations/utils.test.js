"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var design_language_system_1 = require("@linode/design-language-system");
var vitest_1 = require("vitest");
var utils_1 = require("./utils");
(0, vitest_1.describe)('spacingFunction', function () {
    (0, vitest_1.it)('should return the correct token for exact values', function () {
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(0)).toBe(design_language_system_1.Spacing.S0);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(2)).toBe(design_language_system_1.Spacing.S2);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(4)).toBe(design_language_system_1.Spacing.S4);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(6)).toBe(design_language_system_1.Spacing.S6);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(8)).toBe(design_language_system_1.Spacing.S8);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(12)).toBe(design_language_system_1.Spacing.S12);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(16)).toBe(design_language_system_1.Spacing.S16);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(20)).toBe(design_language_system_1.Spacing.S20);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(24)).toBe(design_language_system_1.Spacing.S24);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(28)).toBe(design_language_system_1.Spacing.S28);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(32)).toBe(design_language_system_1.Spacing.S32);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(36)).toBe(design_language_system_1.Spacing.S36);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(40)).toBe(design_language_system_1.Spacing.S40);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(48)).toBe(design_language_system_1.Spacing.S48);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(64)).toBe(design_language_system_1.Spacing.S64);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(72)).toBe(design_language_system_1.Spacing.S72);
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(96)).toBe(design_language_system_1.Spacing.S96);
    });
    (0, vitest_1.it)('should round to the nearest token for in-between values', function () {
        // Values between tokens should round to nearest
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(3)).toBe(design_language_system_1.Spacing.S2); // Round down to 2
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(5)).toBe(design_language_system_1.Spacing.S4); // Round down to 4
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(7)).toBe(design_language_system_1.Spacing.S6); // Round down to 6
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(11)).toBe(design_language_system_1.Spacing.S12); // Round down to 12
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(13)).toBe(design_language_system_1.Spacing.S12); // Round down to 12
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(15)).toBe(design_language_system_1.Spacing.S16); // Round up to 16
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(17)).toBe(design_language_system_1.Spacing.S16); // Round down to 16
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(18)).toBe(design_language_system_1.Spacing.S16); // Round down to 16
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(19)).toBe(design_language_system_1.Spacing.S20); // Round up to 20
    });
    (0, vitest_1.it)('should handle multiple spacing values correctly', function () {
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(4, 8)).toBe("".concat(design_language_system_1.Spacing.S4, " ").concat(design_language_system_1.Spacing.S8));
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(4, 8, 16)).toBe("".concat(design_language_system_1.Spacing.S4, " ").concat(design_language_system_1.Spacing.S8, " ").concat(design_language_system_1.Spacing.S16));
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(4, 8, 16, 24)).toBe("".concat(design_language_system_1.Spacing.S4, " ").concat(design_language_system_1.Spacing.S8, " ").concat(design_language_system_1.Spacing.S16, " ").concat(design_language_system_1.Spacing.S24));
    });
    (0, vitest_1.it)('should limit to 4 values even if more are provided', function () {
        (0, vitest_1.expect)((0, utils_1.spacingFunction)(4, 8, 16, 24, 32)).toBe("".concat(design_language_system_1.Spacing.S4, " ").concat(design_language_system_1.Spacing.S8, " ").concat(design_language_system_1.Spacing.S16, " ").concat(design_language_system_1.Spacing.S24));
    });
});
