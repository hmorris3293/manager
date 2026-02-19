"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertForAria = void 0;
var convertForAria = function (str) {
    return (str
        .trim()
        .toLowerCase()
        // eslint-disable-next-line sonarjs/slow-regex
        .replace(/([^A-Z0-9]+)(.)/gi, function (match, p1, p2) { return p2.toUpperCase(); }));
};
exports.convertForAria = convertForAria;
