"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var windowIsNarrowerThan = function (breakpoint) {
    return window.matchMedia("(max-width: ".concat(breakpoint, "px)")).matches;
};
exports.default = windowIsNarrowerThan;
