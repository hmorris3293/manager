"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backupFactory = exports.createLinodeRequestFactory = exports.linodeFactory = exports.linodePlacementGroupPayloadFactory = exports.proDedicatedTypeFactory = exports.dedicatedTypeFactory = exports.linodeTypeFactory = exports.linodeTransferFactory = exports.linodeBackupsFactory = exports.linodeBackupFactory = exports.linodeIPFactory = exports.linodeStatsFactory = exports.statsDataFactory = exports.linodeNetStatsFactory = exports.generateLinodeStatSeries = exports.linodeSpecsFactory = exports.linodeAlertsFactory = void 0;
var factoryProxy_1 = require("./factoryProxy");
exports.linodeAlertsFactory = factoryProxy_1.Factory.Sync.makeFactory({
    cpu: 10,
    io: 10000,
    network_in: 0,
    network_out: 0,
    transfer_quota: 80,
});
exports.linodeSpecsFactory = factoryProxy_1.Factory.Sync.makeFactory({
    accelerated_devices: 1,
    disk: 51200,
    gpus: 0,
    memory: 2048,
    transfer: 2000,
    vcpus: 1,
});
var generateLinodeStatSeries = function () {
    var stat = [];
    var i = 0;
    for (i; i < 300; i++) {
        stat.push([Date.now() - i * 1000, Math.floor(Math.random() * 50)]);
    }
    return stat;
};
exports.generateLinodeStatSeries = generateLinodeStatSeries;
exports.linodeNetStatsFactory = factoryProxy_1.Factory.Sync.makeFactory({
    in: (0, exports.generateLinodeStatSeries)(),
    out: (0, exports.generateLinodeStatSeries)(),
    private_in: (0, exports.generateLinodeStatSeries)(),
    private_out: (0, exports.generateLinodeStatSeries)(),
});
exports.statsDataFactory = factoryProxy_1.Factory.Sync.makeFactory({
    cpu: (0, exports.generateLinodeStatSeries)(),
    io: {
        io: (0, exports.generateLinodeStatSeries)(),
        swap: (0, exports.generateLinodeStatSeries)(),
    },
    netv4: exports.linodeNetStatsFactory.build(),
    netv6: exports.linodeNetStatsFactory.build(),
});
exports.linodeStatsFactory = factoryProxy_1.Factory.Sync.makeFactory({
    data: exports.statsDataFactory.build(),
    title: 'Some fake stats',
});
exports.linodeIPFactory = factoryProxy_1.Factory.Sync.makeFactory({
    ipv4: {
        private: [],
        public: [
            {
                address: '10.11.12.13',
                gateway: '10.11.12.13',
                interface_id: null,
                linode_id: 1,
                prefix: 24,
                public: true,
                rdns: 'lixxx-xxxxxx.members.linode.com',
                region: 'us-southeast',
                subnet_mask: '255.255.255.0',
                type: 'ipv4',
            },
        ],
        reserved: [],
        shared: [],
        vpc: [],
    },
    ipv6: {
        global: [
            {
                prefix: 64,
                range: '2600:3c02:e000:0201::',
                region: 'us-southeast',
                route_target: '2600:3c02::f03c:92ff:fe9d:0f25',
            },
        ],
        link_local: {
            address: '2001:DB8::0000',
            gateway: 'fe80::1',
            interface_id: null,
            linode_id: 1,
            prefix: 64,
            public: false,
            rdns: null,
            region: 'us-southeast',
            subnet_mask: 'ffff:ffff:ffff:ffff::',
            type: 'ipv6',
        },
        slaac: {
            address: '2001:DB8::0000',
            gateway: 'fe80::1',
            interface_id: null,
            linode_id: 1,
            prefix: 64,
            public: true,
            rdns: null,
            region: 'us-southeast',
            subnet_mask: 'ffff:ffff:ffff:ffff::',
            type: 'ipv6',
        },
    },
});
exports.linodeBackupFactory = factoryProxy_1.Factory.Sync.makeFactory({
    available: true,
    configs: ['My Alpine 3.17 Disk Profile'],
    created: '2020-01-01',
    disks: [],
    finished: '2020-01-01',
    id: factoryProxy_1.Factory.each(function (i) { return i; }),
    label: factoryProxy_1.Factory.each(function (i) { return "Backup ".concat(i); }),
    region: 'us-east',
    status: 'successful',
    type: 'auto',
    updated: '2020-01-01',
});
exports.linodeBackupsFactory = factoryProxy_1.Factory.Sync.makeFactory({
    enabled: true,
    last_successful: '2020-01-01',
    schedule: {
        day: 'Scheduling',
        window: 'Scheduling',
    },
});
exports.linodeTransferFactory = factoryProxy_1.Factory.Sync.makeFactory({
    billable: 0,
    quota: 1950, // GB
    region_transfers: [
        {
            billable: 0,
            id: 'id-cgk',
            quota: 1200, // GB
            used: 1120000000000, // Bytes
        },
        {
            billable: 0,
            id: 'br-gru',
            quota: 1500, // GB
            used: 90000000000, // Bytes
        },
    ],
    used: 13956637, // Bytes
});
exports.linodeTypeFactory = factoryProxy_1.Factory.Sync.makeFactory({
    accelerated_devices: 0,
    addons: {
        backups: {
            price: {
                hourly: 0.004,
                monthly: 2.5,
            },
            region_prices: [
                {
                    hourly: 0.0048,
                    id: 'id-cgk',
                    monthly: 3.57,
                },
                {
                    hourly: 0.0056,
                    id: 'br-gru',
                    monthly: 4.17,
                },
            ],
        },
    },
    class: 'standard',
    disk: 51200,
    gpus: 0,
    id: factoryProxy_1.Factory.each(function (i) { return "g6-standard-".concat(i); }),
    label: factoryProxy_1.Factory.each(function (i) { return "Linode ".concat(i, "GB"); }),
    memory: 2048,
    network_out: 2000,
    price: {
        hourly: 0.015,
        monthly: 10.0,
    },
    region_prices: [
        {
            hourly: 0.021,
            id: 'br-gru',
            monthly: 14,
        },
        {
            hourly: 0.018,
            id: 'id-cgk',
            monthly: 12,
        },
    ],
    successor: null,
    transfer: 2000,
    vcpus: 1,
});
exports.dedicatedTypeFactory = exports.linodeTypeFactory.extend({
    class: 'dedicated',
    id: factoryProxy_1.Factory.each(function (i) { return "g6-dedicated-".concat(i); }),
    label: factoryProxy_1.Factory.each(function (i) { return "Dedicated 2".concat(i, "GB"); }),
});
exports.proDedicatedTypeFactory = factoryProxy_1.Factory.Sync.makeFactory({
    accelerated_devices: 0,
    addons: {
        backups: {
            price: {
                hourly: null,
                monthly: null,
            },
            region_prices: [
                {
                    hourly: null,
                    id: 'id-cgk',
                    monthly: null,
                },
                {
                    hourly: null,
                    id: 'br-gru',
                    monthly: null,
                },
            ],
        },
    },
    class: 'prodedicated',
    disk: 5120000,
    gpus: 0,
    id: factoryProxy_1.Factory.each(function (i) { return "g6-prodedicated-".concat(i); }),
    label: factoryProxy_1.Factory.each(function (i) { return "Pro Dedicated 2".concat(i, "GB"); }),
    memory: 262144,
    network_out: 11000,
    price: {
        hourly: 2.88,
        monthly: 1920.0,
    },
    region_prices: [
        {
            hourly: 4.032,
            id: 'br-gru',
            monthly: 2688,
        },
        {
            hourly: 3.436,
            id: 'id-cgk',
            monthly: 2304,
        },
    ],
    successor: null,
    transfer: 11000,
    vcpus: 56,
});
exports.linodePlacementGroupPayloadFactory = factoryProxy_1.Factory.Sync.makeFactory({
    id: factoryProxy_1.Factory.each(function (i) { return i; }),
    label: factoryProxy_1.Factory.each(function (i) { return "pg-".concat(i); }),
    migrating_to: null,
    placement_group_policy: 'strict',
    placement_group_type: 'anti_affinity:local',
});
exports.linodeFactory = factoryProxy_1.Factory.Sync.makeFactory({
    alerts: exports.linodeAlertsFactory.build(),
    backups: exports.linodeBackupsFactory.build(),
    capabilities: [],
    created: '2020-01-01',
    disk_encryption: 'enabled',
    group: '',
    hypervisor: 'kvm',
    id: factoryProxy_1.Factory.each(function (i) { return i; }),
    image: 'linode/debian12',
    interface_generation: 'legacy_config',
    ipv4: ['50.116.6.212', '192.168.203.1'],
    ipv6: '2600:3c00::f03c:92ff:fee2:6c40/64',
    label: factoryProxy_1.Factory.each(function (i) { return "linode-".concat(i); }),
    lke_cluster_id: null,
    placement_group: exports.linodePlacementGroupPayloadFactory.build({
        id: 1,
        label: 'pg-1',
    }),
    region: 'us-east',
    site_type: 'core',
    specs: exports.linodeSpecsFactory.build(),
    status: 'running',
    tags: [],
    type: 'g6-standard-1',
    updated: '2020-01-01',
    watchdog_enabled: true,
    has_user_data: false,
});
exports.createLinodeRequestFactory = factoryProxy_1.Factory.Sync.makeFactory({
    booted: true,
    image: 'linode/debian12',
    label: factoryProxy_1.Factory.each(function (i) { return "linode-".concat(i); }),
    region: 'us-southeast',
    root_pass: 'linode-root-password',
    type: 'g6-standard-1',
});
exports.backupFactory = factoryProxy_1.Factory.Sync.makeFactory({
    available: true,
    configs: ['Restore 319718 - My Alpine 3.17 Disk Profile'],
    created: '2023-05-03T04:00:47',
    disks: [
        {
            filesystem: 'ext4',
            label: 'Restore 319718 - Alpine 3.17 Disk',
            size: 25088,
        },
        {
            filesystem: 'swap',
            label: 'Restore 319718 - 512 MB Swap Image',
            size: 512,
        },
    ],
    finished: '2023-05-03T04:02:11',
    id: factoryProxy_1.Factory.each(function (i) { return i; }),
    label: null,
    region: 'us-central',
    status: 'successful',
    type: 'auto',
    updated: '2023-05-03T04:04:07',
});
