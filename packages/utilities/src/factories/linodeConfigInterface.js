"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linodeConfigInterfaceFactoryWithVPC = exports.linodeConfigInterfaceFactory = void 0;
var factoryProxy_1 = require("./factoryProxy");
exports.linodeConfigInterfaceFactory = factoryProxy_1.Factory.Sync.makeFactory({
    active: false,
    id: factoryProxy_1.Factory.each(function (i) { return i; }),
    ipam_address: '10.0.0.1/24',
    label: factoryProxy_1.Factory.each(function (i) { return "interface-".concat(i); }),
    purpose: 'vlan',
});
exports.linodeConfigInterfaceFactoryWithVPC = factoryProxy_1.Factory.Sync.makeFactory({
    active: false,
    id: factoryProxy_1.Factory.each(function (i) { return i; }),
    ip_ranges: ['192.0.2.0/24', '192.0.3.0/24'],
    ipam_address: '10.0.0.1/24',
    ipv4: {
        nat_1_1: 'some nat',
        vpc: '10.0.0.0',
    },
    ipv6: {
        is_public: false,
        ranges: [],
        slaac: [],
    },
    label: factoryProxy_1.Factory.each(function (i) { return "interface-".concat(i); }),
    purpose: 'vpc',
    subnet_id: factoryProxy_1.Factory.each(function (i) { return i; }),
    vpc_id: factoryProxy_1.Factory.each(function (i) { return i + 1; }),
});
