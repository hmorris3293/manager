"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewRegionLabel = void 0;
var getNewRegionLabel = function (region) {
    var city = region.label.split(', ')[0];
    // Include state for the US
    if (region.country === 'us') {
        return "".concat(region.country.toUpperCase(), ", ").concat(region.label);
    }
    return "".concat(region.country.toUpperCase(), ", ").concat(city);
};
exports.getNewRegionLabel = getNewRegionLabel;
