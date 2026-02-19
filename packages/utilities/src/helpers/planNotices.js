"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPlanTypes = exports.getCapabilityFromPlanType = exports.plansNoticesUtils = void 0;
/**
 * @param {Region[]} regionsData
 * @param {string} selectedRegionID
 * @returns {object} { hasSelectedRegion, isPlanPanelDisabled, isSelectedRegionEligibleForPlan }
 */
var plansNoticesUtils = function (props) {
    var regionsData = props.regionsData, selectedRegionID = props.selectedRegionID;
    /**
     * If the user has selected a region, find that region in the regionsData
     * @returns {Region | undefined}
     */
    var selectedRegion = regionsData === null || regionsData === void 0 ? void 0 : regionsData.find(function (region) { return region.id === selectedRegionID; });
    /**
     * If the user has selected a region
     * @returns {boolean}
     */
    var hasSelectedRegion = Boolean(selectedRegionID);
    /**
     * If the user has selected a region and that region has Premium Plans
     * @returns {boolean}
     */
    var isSelectedRegionEligibleForPlan = function (planType) {
        return Boolean(selectedRegion === null || selectedRegion === void 0 ? void 0 : selectedRegion.capabilities.includes((0, exports.getCapabilityFromPlanType)(planType)));
    };
    /**
     * A util to determine if the Premium Plan selection should be disabled
     * @param {LinodeTypeClass} linodeType
     * @param {Capabilities} planType
     * @returns {boolean}
     */
    var isPlanPanelDisabled = function (planType) {
        return hasSelectedRegion && !isSelectedRegionEligibleForPlan(planType);
    };
    return {
        hasSelectedRegion: hasSelectedRegion,
        isPlanPanelDisabled: isPlanPanelDisabled,
        isSelectedRegionEligibleForPlan: isSelectedRegionEligibleForPlan,
    };
};
exports.plansNoticesUtils = plansNoticesUtils;
/**
 * Maps the plan type to the capability name
 * We only need to map the GPU and Premium plans for our purposes (notices) but this can be expanded
 * @param planType
 * @returns {Capabilities} the capability name
 */
var getCapabilityFromPlanType = function (planType) {
    switch (planType) {
        case 'accelerated': {
            return 'NETINT Quadra T1U';
        }
        case 'gpu': {
            return 'GPU Linodes';
        }
        case 'premium': {
            return 'Premium Plans';
        }
        default: {
            return 'Linodes';
        }
    }
};
exports.getCapabilityFromPlanType = getCapabilityFromPlanType;
/**
 * Formats the plan type for display
 * @param planType
 * @returns {string} the formatted plan type
 */
var formatPlanTypes = function (planType) {
    return planType === 'gpu'
        ? 'GPU'
        : planType.charAt(0).toUpperCase() + planType.slice(1);
};
exports.formatPlanTypes = formatPlanTypes;
