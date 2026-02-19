"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var factories_1 = require("../factories");
var getIsLegacyInterfaceArray_1 = require("./getIsLegacyInterfaceArray");
(0, vitest_1.describe)('getIsLegacyInterfaceArray', function () {
    (0, vitest_1.it)('determines the given interfaces are legacy', function () {
        var legacyInterfaces = factories_1.linodeConfigInterfaceFactory.buildList(3);
        (0, vitest_1.expect)((0, getIsLegacyInterfaceArray_1.getIsLegacyInterfaceArray)(legacyInterfaces)).toBe(true);
        (0, vitest_1.expect)((0, getIsLegacyInterfaceArray_1.getIsLegacyInterfaceArray)(undefined)).toBe(true);
        (0, vitest_1.expect)((0, getIsLegacyInterfaceArray_1.getIsLegacyInterfaceArray)([])).toBe(true);
    });
    (0, vitest_1.it)('returns false if the given interfaces are new Linode Interfaces', function () {
        var linodeInterfacesVlan = factories_1.linodeInterfaceFactoryVlan.buildList(3);
        (0, vitest_1.expect)((0, getIsLegacyInterfaceArray_1.getIsLegacyInterfaceArray)(linodeInterfacesVlan)).toBe(false);
        var linodeInterfacesVPC = factories_1.linodeInterfaceFactoryVPC.buildList(3);
        (0, vitest_1.expect)((0, getIsLegacyInterfaceArray_1.getIsLegacyInterfaceArray)(linodeInterfacesVPC)).toBe(false);
        var linodeInterfacesPublic = factories_1.linodeInterfaceFactoryPublic.buildList(3);
        (0, vitest_1.expect)((0, getIsLegacyInterfaceArray_1.getIsLegacyInterfaceArray)(linodeInterfacesPublic)).toBe(false);
    });
});
