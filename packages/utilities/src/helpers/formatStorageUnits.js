"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatStorageUnits = formatStorageUnits;
// eslint-disable-next-line sonarjs/single-char-in-character-classes
var storageRegex = /([0-9])([kMGTPEZY]?i?[B])/;
var labelPrefixRegex = /^(DBaaS).+- /;
function replaceFunc(match, p1, p2) {
    return "".concat(p1, " ").concat(p2);
}
function formatStorageUnits(unformattedString) {
    if (unformattedString.match(labelPrefixRegex)) {
        unformattedString = unformattedString.replace(labelPrefixRegex, '');
    }
    if (!unformattedString.match(storageRegex)) {
        return unformattedString;
    }
    return unformattedString.replace(storageRegex, replaceFunc);
}
