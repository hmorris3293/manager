"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var regions_1 = require("./regions");
(0, vitest_1.describe)('getRegionsByRegionId', function () {
    (0, vitest_1.it)('converts an array of regions to a lookup object', function () {
        var mockRegions = [
            {
                capabilities: ['Object Storage'],
                country: 'us',
                id: 'us-east',
                label: 'Newark, NJ',
                placement_group_limits: {
                    maximum_linodes_per_pg: 10,
                    maximum_pgs_per_customer: 5,
                },
                resolvers: { ipv4: '', ipv6: '' },
                site_type: 'core',
                status: 'ok',
            },
            {
                capabilities: ['Object Storage'],
                country: 'us',
                id: 'us-southeast',
                label: 'Atlanta, GA',
                placement_group_limits: {
                    maximum_linodes_per_pg: 10,
                    maximum_pgs_per_customer: 5,
                },
                resolvers: { ipv4: '', ipv6: '' },
                site_type: 'core',
                status: 'ok',
            },
        ];
        var expectedOutput = {
            'us-east': {
                capabilities: ['Object Storage'],
                country: 'us',
                id: 'us-east',
                label: 'Newark, NJ',
                placement_group_limits: {
                    maximum_linodes_per_pg: 10,
                    maximum_pgs_per_customer: 5,
                },
                resolvers: { ipv4: '', ipv6: '' },
                site_type: 'core',
                status: 'ok',
            },
            'us-southeast': {
                capabilities: ['Object Storage'],
                country: 'us',
                id: 'us-southeast',
                label: 'Atlanta, GA',
                placement_group_limits: {
                    maximum_linodes_per_pg: 10,
                    maximum_pgs_per_customer: 5,
                },
                resolvers: { ipv4: '', ipv6: '' },
                site_type: 'core',
                status: 'ok',
            },
        };
        (0, vitest_1.expect)((0, regions_1.getRegionsByRegionId)(mockRegions)).toEqual(expectedOutput);
    });
    (0, vitest_1.it)('returns an empty object for an empty array', function () {
        var mockRegions = [];
        var expectedOutput = {};
        (0, vitest_1.expect)((0, regions_1.getRegionsByRegionId)(mockRegions)).toEqual(expectedOutput);
    });
    (0, vitest_1.it)('returns an empty object for undefined input', function () {
        var mockRegions = undefined;
        var expectedOutput = {};
        (0, vitest_1.expect)((0, regions_1.getRegionsByRegionId)(mockRegions)).toEqual(expectedOutput);
    });
});
