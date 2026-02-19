"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeBalancerStatsFactory = exports.nodeBalancerConfigVPCFactory = exports.nodeBalancerConfigNodeFactory = exports.nodeBalancerConfigFactory = exports.nodeBalancerFactory = void 0;
var factoryProxy_1 = require("./factoryProxy");
var linodes_1 = require("./linodes");
exports.nodeBalancerFactory = factoryProxy_1.Factory.Sync.makeFactory({
    client_conn_throttle: 0,
    created: '2019-12-12T00:00:00',
    hostname: 'example.com',
    id: factoryProxy_1.Factory.each(function (id) { return id; }),
    ipv4: '0.0.0.0',
    ipv6: null,
    label: factoryProxy_1.Factory.each(function (i) { return "nodebalancer-id-".concat(i); }),
    region: 'us-east',
    tags: [],
    transfer: {
        in: 0,
        out: 0,
        total: 0,
    },
    updated: '2019-12-13T00:00:00',
    lke_cluster: null,
    type: 'common',
});
exports.nodeBalancerConfigFactory = factoryProxy_1.Factory.Sync.makeFactory({
    algorithm: 'roundrobin',
    check: 'connection',
    check_attempts: 2,
    check_body: '',
    check_interval: 5,
    check_passive: true,
    check_path: '/ping_me',
    check_timeout: 3,
    cipher_suite: 'recommended',
    id: factoryProxy_1.Factory.each(function (id) { return id; }),
    nodebalancer_id: factoryProxy_1.Factory.each(function (id) { return id; }),
    nodes: [],
    nodes_status: { down: 1, up: 0 },
    port: 80,
    protocol: 'http',
    proxy_protocol: 'none',
    ssl_cert: '',
    ssl_commonname: '',
    ssl_fingerprint: '',
    ssl_key: '',
    stickiness: 'table',
});
exports.nodeBalancerConfigNodeFactory = factoryProxy_1.Factory.Sync.makeFactory({
    address: '192.168.0.1:80',
    config_id: factoryProxy_1.Factory.each(function (id) { return id; }),
    id: factoryProxy_1.Factory.each(function (id) { return id; }),
    label: 'test',
    mode: 'accept',
    nodebalancer_id: factoryProxy_1.Factory.each(function (id) { return id; }),
    status: 'DOWN',
    weight: 100,
    vpc_config_id: null,
});
exports.nodeBalancerConfigVPCFactory = factoryProxy_1.Factory.Sync.makeFactory({
    id: factoryProxy_1.Factory.each(function (i) { return i; }),
    ipv4_range: factoryProxy_1.Factory.each(function (i) { return "192.168.".concat(i, ".0/30"); }),
    ipv6_range: null,
    nodebalancer_id: factoryProxy_1.Factory.each(function (i) { return 1000 + i; }),
    subnet_id: factoryProxy_1.Factory.each(function (i) { return 2000 + i; }),
    vpc_id: factoryProxy_1.Factory.each(function (i) { return 3000 + i; }),
});
exports.nodeBalancerStatsFactory = factoryProxy_1.Factory.Sync.makeFactory({
    data: {
        connections: (0, linodes_1.generateLinodeStatSeries)(),
        traffic: {
            out: (0, linodes_1.generateLinodeStatSeries)(),
            in: (0, linodes_1.generateLinodeStatSeries)(),
        },
    },
    title: 'Some fake stats',
});
