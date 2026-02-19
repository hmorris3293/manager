"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var __data__1 = require("../__data__");
var doesRegionSupportFeature_1 = require("./doesRegionSupportFeature");
var blockStorage = 'Block Storage';
(0, vitest_1.describe)('does region support Block Storage', function () {
    (0, vitest_1.it)('returns true if the region supports Block Storage', function () {
        (0, vitest_1.expect)((0, doesRegionSupportFeature_1.doesRegionSupportFeature)('us-central', __data__1.regions, blockStorage)).toBe(true);
    });
    (0, vitest_1.it)('returns false if the region does not support Block Storage', function () {
        (0, vitest_1.expect)((0, doesRegionSupportFeature_1.doesRegionSupportFeature)('ap-northeast-1a', __data__1.regions, blockStorage)).toBe(false);
    });
});
