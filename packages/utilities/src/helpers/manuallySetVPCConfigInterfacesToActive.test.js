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
var utilities_1 = require("@linode/utilities");
var vitest_1 = require("vitest");
var manuallySetVPCConfigInterfacesToActive_1 = require("./manuallySetVPCConfigInterfacesToActive");
(0, vitest_1.describe)('manually setting VPC Configs to active', function () {
    (0, vitest_1.it)('sets all vpc interfaces to active', function () {
        var config = utilities_1.configFactory.build({
            interfaces: utilities_1.linodeConfigInterfaceFactoryWithVPC.buildList(3),
        });
        var updatedConfigs = (0, manuallySetVPCConfigInterfacesToActive_1.manuallySetVPCConfigInterfacesToActive)([config]);
        if (updatedConfigs[0].interfaces) {
            for (var _i = 0, _a = updatedConfigs[0].interfaces; _i < _a.length; _i++) {
                var linodeInterface = _a[_i];
                (0, vitest_1.expect)(linodeInterface.active).toBe(true);
            }
        }
    });
    (0, vitest_1.it)('ignores non vpc interfaces', function () {
        var _a;
        var config = utilities_1.configFactory.build();
        var oldConfigState = __assign({}, config);
        var updatedConfigs = (0, manuallySetVPCConfigInterfacesToActive_1.manuallySetVPCConfigInterfacesToActive)([config]);
        if (updatedConfigs[0].interfaces) {
            for (var i = 0; i < updatedConfigs[0].interfaces.length; i++) {
                var linodeInterface = updatedConfigs[0].interfaces[i];
                if (linodeInterface.purpose !== 'vpc') {
                    (0, vitest_1.expect)(linodeInterface.active).toEqual((_a = oldConfigState.interfaces) === null || _a === void 0 ? void 0 : _a[i].active);
                }
                else {
                    (0, vitest_1.expect)(linodeInterface.active).toBe(true);
                }
            }
        }
    });
});
