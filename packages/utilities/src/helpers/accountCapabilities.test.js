"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var accountCapabilities_1 = require("./accountCapabilities");
(0, vitest_1.describe)('isFeatureEnabledV2', function () {
    (0, vitest_1.it)('returns `false` when the flag is off and the item is not in account capabilities', function () {
        (0, vitest_1.expect)((0, accountCapabilities_1.isFeatureEnabledV2)('Object Storage', false, [])).toBe(false);
    });
    (0, vitest_1.it)('returns `false` when the flag is on, but the capability is not present', function () {
        (0, vitest_1.expect)((0, accountCapabilities_1.isFeatureEnabledV2)('Object Storage', true, [])).toBe(false);
    });
    (0, vitest_1.it)('returns `true` when the flag is on and the account capability is present', function () {
        (0, vitest_1.expect)((0, accountCapabilities_1.isFeatureEnabledV2)('Object Storage', true, ['Object Storage'])).toBe(true);
    });
    (0, vitest_1.it)('returns `false` when both the flag is on but the account capability is not present', function () {
        (0, vitest_1.expect)((0, accountCapabilities_1.isFeatureEnabledV2)('Object Storage', true, [])).toBe(false);
    });
});
(0, vitest_1.describe)('isFeatureEnabled', function () {
    (0, vitest_1.it)('returns `false` when both the flag is off and the item is not in account capabilities', function () {
        (0, vitest_1.expect)((0, accountCapabilities_1.isFeatureEnabled)('Object Storage', false, [])).toBe(false);
    });
    (0, vitest_1.it)('returns `true` when the flag is on, but the capability is not present', function () {
        (0, vitest_1.expect)((0, accountCapabilities_1.isFeatureEnabled)('Object Storage', true, [])).toBe(true);
    });
    (0, vitest_1.it)('returns `true` when the flag is off, but the account capability is present', function () {
        (0, vitest_1.expect)((0, accountCapabilities_1.isFeatureEnabled)('Object Storage', false, ['Object Storage'])).toBe(true);
    });
    (0, vitest_1.it)('returns `true` when both the flag is on and the account capability is present', function () {
        (0, vitest_1.expect)((0, accountCapabilities_1.isFeatureEnabled)('Object Storage', true, ['Object Storage'])).toBe(true);
    });
});
