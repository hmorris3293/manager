"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodebalancerQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var requests_1 = require("./requests");
exports.nodebalancerQueries = (0, query_key_factory_1.createQueryKeys)('nodebalancers', {
    nodebalancer: function (id) { return ({
        contextQueries: {
            configurations: {
                queryFn: function () { return (0, requests_1.getAllNodeBalancerConfigs)(id); },
                queryKey: null,
            },
            firewalls: {
                queryFn: function () { return (0, api_v4_1.getNodeBalancerFirewalls)(id); },
                queryKey: null,
            },
            stats: {
                queryFn: function () { return (0, api_v4_1.getNodeBalancerStats)(id); },
                queryKey: null,
            },
            vpcsBeta: {
                queryFn: function () { return (0, api_v4_1.getNodeBalancerVPCConfigsBeta)(id); },
                queryKey: null,
            },
        },
        queryFn: function () { return (0, api_v4_1.getNodeBalancer)(id); },
        queryKey: [id],
    }); },
    nodebalancers: {
        contextQueries: {
            all: {
                queryFn: requests_1.getAllNodeBalancers,
                queryKey: null,
            },
            infinite: function (filter) {
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function (_a) {
                        var pageParam = _a.pageParam;
                        return (0, api_v4_1.getNodeBalancers)({ page: pageParam, page_size: 25 }, filter);
                    },
                    queryKey: [filter],
                });
            },
            paginated: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, api_v4_1.getNodeBalancers)(params, filter); },
                    queryKey: [params, filter],
                });
            },
        },
        queryKey: null,
    },
    types: {
        queryFn: requests_1.getAllNodeBalancerTypes,
        queryKey: null,
    },
});
