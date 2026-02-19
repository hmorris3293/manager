"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configFactory = void 0;
var factoryProxy_1 = require("./factoryProxy");
exports.configFactory = factoryProxy_1.Factory.Sync.makeFactory({
    comments: '',
    created: '2020-01-01',
    devices: {
        sda: null,
        sdb: null,
        sdc: null,
        sdd: null,
        sde: null,
        sdf: null,
        sdg: null,
        sdh: null,
    },
    helpers: {
        devtmpfs_automount: true,
        distro: true,
        modules_dep: true,
        network: true,
        updatedb_disabled: true,
    },
    id: factoryProxy_1.Factory.each(function (id) { return id; }),
    initrd: null,
    interfaces: [],
    kernel: 'linode/grub2',
    label: factoryProxy_1.Factory.each(function (id) { return "disk-".concat(id); }),
    memory_limit: 0,
    root_device: 'sda',
    run_level: 'default',
    updated: '2020-01-01',
    virt_mode: 'paravirt',
});
