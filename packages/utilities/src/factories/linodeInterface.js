"use strict";
// Factories for the new Linode Interfaces type
Object.defineProperty(exports, "__esModule", { value: true });
exports.linodeInterfaceFactoryPublic = exports.linodeInterfaceFactoryVPC = exports.linodeInterfaceFactoryVlan = exports.upgradeLinodeInterfaceFactory = exports.linodeInterfaceSettingsFactory = void 0;
var factoryProxy_1 = require("./factoryProxy");
exports.linodeInterfaceSettingsFactory = factoryProxy_1.Factory.Sync.makeFactory({
    network_helper: false,
    default_route: {
        ipv4_interface_id: 1,
        ipv4_eligible_interface_ids: [],
        ipv6_interface_id: 1,
        ipv6_eligible_interface_ids: [],
    },
});
exports.upgradeLinodeInterfaceFactory = factoryProxy_1.Factory.Sync.makeFactory({
    config_id: factoryProxy_1.Factory.each(function (i) { return i; }),
    dry_run: true,
    interfaces: [],
});
exports.linodeInterfaceFactoryVlan = factoryProxy_1.Factory.Sync.makeFactory({
    created: '2025-03-19T03:58:04',
    default_route: {
        ipv4: true,
    },
    id: factoryProxy_1.Factory.each(function (i) { return i; }),
    mac_address: 'a4:ac:39:b7:6e:42',
    public: null,
    updated: '2025-03-19T03:58:04',
    version: 1,
    vlan: {
        ipam_address: '192.168.0.1',
        vlan_label: 'vlan-interface',
    },
    vpc: null,
});
exports.linodeInterfaceFactoryVPC = factoryProxy_1.Factory.Sync.makeFactory({
    created: '2025-03-19T03:58:04',
    default_route: {
        ipv4: true,
    },
    id: factoryProxy_1.Factory.each(function (i) { return i; }),
    mac_address: 'a4:ac:39:b7:6e:42',
    public: null,
    updated: '2025-03-19T03:58:04',
    version: 1,
    vlan: null,
    vpc: {
        ipv4: {
            addresses: [
                {
                    address: '10.0.0.0',
                    primary: true,
                },
                {
                    address: '10.0.1.0',
                    primary: false,
                },
            ],
            ranges: [{ range: '10.0.0.1' }],
        },
        subnet_id: 1,
        vpc_id: 1,
    },
});
exports.linodeInterfaceFactoryPublic = factoryProxy_1.Factory.Sync.makeFactory({
    created: '2025-03-19T03:58:04',
    default_route: {
        ipv4: true,
    },
    id: factoryProxy_1.Factory.each(function (i) { return i; }),
    mac_address: 'a4:ac:39:b7:6e:42',
    public: {
        ipv4: {
            addresses: [
                {
                    address: '10.0.0.0',
                    primary: true,
                },
            ],
            shared: [],
        },
        ipv6: {
            ranges: [],
            shared: [],
            slaac: [],
        },
    },
    updated: '2025-03-19T03:58:04',
    version: 1,
    vlan: null,
    vpc: null,
});
