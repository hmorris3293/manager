"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionSupportsMetadata = exports.utoa = void 0;
/**
 * Unicode to ASCII (encode data to Base64)
 * https://base64.guru/developers/javascript/examples/unicode-strings
 */
var utoa = function (data) {
    try {
        return btoa(unescape(encodeURIComponent(data)));
    }
    catch (error) {
        return data;
    }
};
exports.utoa = utoa;
var regionSupportsMetadata = function (regionsData, region) {
    var _a, _b;
    return ((_b = (_a = regionsData
        .find(function (regionData) { return regionData.id === region; })) === null || _a === void 0 ? void 0 : _a.capabilities.includes('Metadata')) !== null && _b !== void 0 ? _b : false);
};
exports.regionSupportsMetadata = regionSupportsMetadata;
