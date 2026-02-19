"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.manuallySetVPCConfigInterfacesToActive = void 0;
// This is a helper function to manually set interfaces related to VPCs to active. We call this function when rebooting/booting linodes; we specifically set the react queryCache
// to this in order to address the flickering 'Reboot Needed' status issue (see PR#9893).
// NOTE: This logic only works for linodes with one configuration/one vpc interface, and will lead to VERY CONFUSING results for linodes with multiple configurations.
var manuallySetVPCConfigInterfacesToActive = function (configs) {
    return configs.map(function (config) {
        var _a, _b;
        return __assign(__assign({}, config), { interfaces: (_b = (_a = config.interfaces) === null || _a === void 0 ? void 0 : _a.map(function (linodeInterface) {
                if (linodeInterface.purpose === 'vpc') {
                    return __assign(__assign({}, linodeInterface), { active: true });
                }
                else {
                    return linodeInterface;
                }
            })) !== null && _b !== void 0 ? _b : null });
    });
};
exports.manuallySetVPCConfigInterfacesToActive = manuallySetVPCConfigInterfacesToActive;
