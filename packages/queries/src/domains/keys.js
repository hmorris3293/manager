"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var requests_1 = require("./requests");
exports.domainQueries = (0, query_key_factory_1.createQueryKeys)('domains', {
    domain: function (id) { return ({
        contextQueries: {
            records: {
                queryFn: function () { return (0, requests_1.getAllDomainRecords)(id); },
                queryKey: null,
            },
        },
        queryFn: function () { return (0, api_v4_1.getDomain)(id); },
        queryKey: [id],
    }); },
    domains: {
        contextQueries: {
            all: {
                queryFn: requests_1.getAllDomains,
                queryKey: null,
            },
            infinite: function (filter) { return ({
                queryFn: function (_a) {
                    var pageParam = _a.pageParam;
                    return (0, api_v4_1.getDomains)({ page: pageParam }, filter);
                },
                queryKey: [filter],
            }); },
            paginated: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, api_v4_1.getDomains)(params, filter); },
                    queryKey: [params, filter],
                });
            },
        },
        queryKey: null,
    },
});
