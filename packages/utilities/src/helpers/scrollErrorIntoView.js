"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollErrorIntoView = void 0;
/**
 * @deprecated
 * Use `scrollErrorIntoViewV2` instead.
 */
var scrollErrorIntoView = function (errorGroup, options) {
    var _a, _b, _c;
    var errorScrollClassSelector = errorGroup
        ? ".error-for-scroll-".concat(errorGroup)
        : ".error-for-scroll";
    var element = document.querySelectorAll(errorScrollClassSelector)[0];
    if (element) {
        element.scrollIntoView({
            behavior: (_a = options === null || options === void 0 ? void 0 : options.behavior) !== null && _a !== void 0 ? _a : 'auto',
            block: (_b = options === null || options === void 0 ? void 0 : options.block) !== null && _b !== void 0 ? _b : 'center',
            inline: (_c = options === null || options === void 0 ? void 0 : options.inline) !== null && _c !== void 0 ? _c : 'nearest',
        });
    }
};
exports.scrollErrorIntoView = scrollErrorIntoView;
