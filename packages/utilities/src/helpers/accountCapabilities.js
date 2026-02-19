"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFeatureEnabled = exports.isFeatureEnabledV2 = void 0;
/**
 * Determines if a feature should be enabled.
 *
 * @returns true if the feature is returned from account.capabilities **AND** if it is explicitly enabled
 * by a feature flag
 *
 * If the feature will never depend on account.capabilites, use Launch Darkly flags directly via the useFlags hook instead.
 */
var isFeatureEnabledV2 = function (featureName, isFeatureFlagEnabled, capabilities) {
    return isFeatureFlagEnabled && capabilities.includes(featureName);
};
exports.isFeatureEnabledV2 = isFeatureEnabledV2;
/**
 * @deprecated Use isFeatureEnabledV2 instead
 *
 * Determines if a feature should be enabled.
 *
 * @returns true if the feature is returned from account.capabilities **or** if it is explicitly enabled
 * by a feature flag
 *
 * We use "or" instead of "and" here to allow us to enable features in "lower" environments
 * without needing the customer capability.
 *
 * If you need to launch a production feature, but have it be gated,
 * you would turn the flag *off* for that environment, but have the API return
 * the account capability.
 */
var isFeatureEnabled = function (featureName, isFeatureFlagEnabled, capabilities) {
    return isFeatureFlagEnabled || capabilities.includes(featureName);
};
exports.isFeatureEnabled = isFeatureEnabled;
