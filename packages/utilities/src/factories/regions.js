"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionAvailabilityFactory = exports.regionWithDynamicPricingFactory = exports.regionFactory = exports.resolverFactory = void 0;
var factoryProxy_1 = require("./factoryProxy");
exports.resolverFactory = factoryProxy_1.Factory.Sync.makeFactory({
    ipv4: '1.1.1.1',
    ipv6: '2600:3c03::',
});
exports.regionFactory = factoryProxy_1.Factory.Sync.makeFactory({
    capabilities: ['Block Storage'],
    country: 'us',
    id: factoryProxy_1.Factory.each(function (id) { return "us-".concat(id); }),
    label: factoryProxy_1.Factory.each(function (id) { return "".concat(id, ", NJ"); }),
    placement_group_limits: {
        maximum_linodes_per_pg: 10,
        maximum_pgs_per_customer: 5,
    },
    resolvers: exports.resolverFactory.build(),
    site_type: 'core',
    status: 'ok',
});
exports.regionWithDynamicPricingFactory = factoryProxy_1.Factory.Sync.makeFactory({
    capabilities: [
        'Linodes',
        'NodeBalancers',
        'Block Storage',
        'Object Storage',
        'Kubernetes',
        'Cloud Firewall',
        'Placement Group',
        'Vlans',
        'Premium Plans',
    ],
    country: 'id',
    id: 'id-cgk',
    label: 'Jakarta, ID',
    placement_group_limits: {
        maximum_linodes_per_pg: 10,
        maximum_pgs_per_customer: 5,
    },
    resolvers: exports.resolverFactory.build(),
    site_type: 'core',
    status: 'ok',
});
exports.regionAvailabilityFactory = factoryProxy_1.Factory.Sync.makeFactory({
    available: false,
    plan: 'g6-standard-7',
    region: 'us-east',
});
