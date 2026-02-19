"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDisplayName = void 0;
var getDisplayName = function (Component) {
    return Component.displayName || Component.name || 'Component';
};
exports.getDisplayName = getDisplayName;
