"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionsWithFeature = exports.doesRegionSupportFeature = void 0;
var doesRegionSupportFeature = function (region, regionsData, feature) {
    var regionMetaData = regionsData.find(function (thisRegion) {
        return thisRegion.id === region;
    });
    if (!regionMetaData) {
        return false;
    }
    return regionMetaData.capabilities.includes(feature);
};
exports.doesRegionSupportFeature = doesRegionSupportFeature;
var regionsWithFeature = function (regionsData, feature) {
    return regionsData.filter(function (region) { return region.capabilities.includes(feature); });
};
exports.regionsWithFeature = regionsWithFeature;
