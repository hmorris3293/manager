"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var factories_1 = require("../factories");
var mapIdsToDevices_1 = require("./mapIdsToDevices");
(0, vitest_1.describe)('mapIdsToDevices', function () {
    var linodes = factories_1.linodeFactory.buildList(5);
    var nodebalancers = factories_1.nodeBalancerFactory.buildList(5);
    (0, vitest_1.it)('works with a single Linode ID', function () {
        (0, vitest_1.expect)((0, mapIdsToDevices_1.mapIdsToDevices)(1, linodes)).toBe(linodes[0]);
    });
    (0, vitest_1.it)('works with a single NodeBalancer ID', function () {
        (0, vitest_1.expect)((0, mapIdsToDevices_1.mapIdsToDevices)(1, nodebalancers)).toBe(nodebalancers[0]);
    });
    (0, vitest_1.it)('works with a multiple Linode IDs', function () {
        (0, vitest_1.expect)((0, mapIdsToDevices_1.mapIdsToDevices)([1, 2, 3], linodes)).toEqual([
            linodes[0],
            linodes[1],
            linodes[2],
        ]);
    });
    (0, vitest_1.it)('works with a multiple NodeBalancer IDs', function () {
        (0, vitest_1.expect)((0, mapIdsToDevices_1.mapIdsToDevices)([1, 2, 3], nodebalancers)).toEqual([
            nodebalancers[0],
            nodebalancers[1],
            nodebalancers[2],
        ]);
    });
    (0, vitest_1.it)('omits missing IDs', function () {
        (0, vitest_1.expect)((0, mapIdsToDevices_1.mapIdsToDevices)(99, linodes)).toBe(null);
        (0, vitest_1.expect)((0, mapIdsToDevices_1.mapIdsToDevices)(99, nodebalancers)).toBe(null);
        (0, vitest_1.expect)((0, mapIdsToDevices_1.mapIdsToDevices)([1, 99, 2], linodes)).toEqual([
            linodes[0],
            linodes[1],
        ]);
        (0, vitest_1.expect)((0, mapIdsToDevices_1.mapIdsToDevices)([1, 99, 2], nodebalancers)).toEqual([
            nodebalancers[0],
            nodebalancers[1],
        ]);
    });
});
