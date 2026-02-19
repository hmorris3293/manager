"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var factories_1 = require("../factories");
var grants_1 = require("./grants");
var grants = factories_1.grantsFactory.build({
    linode: [
        { id: 0, permissions: 'read_only' },
        { id: 1, permissions: 'read_write' },
        { id: 2, permissions: 'read_only' },
        { id: 3, permissions: null },
    ],
});
(0, vitest_1.describe)('getEntityIdsByPermission', function () {
    (0, vitest_1.it)('should return an empty array when there is no grant data', function () {
        (0, vitest_1.expect)((0, grants_1.getEntityIdsByPermission)(undefined, 'linode', 'read_write')).toEqual([]);
    });
    (0, vitest_1.it)('should return read-only entity ids with read_only permission', function () {
        (0, vitest_1.expect)((0, grants_1.getEntityIdsByPermission)(grants, 'linode', 'read_only')).toEqual([
            0, 2,
        ]);
    });
    (0, vitest_1.it)('should return all entity ids if a permission level is omitted', function () {
        (0, vitest_1.expect)((0, grants_1.getEntityIdsByPermission)(grants, 'linode')).toEqual([0, 1, 2, 3]);
    });
});
