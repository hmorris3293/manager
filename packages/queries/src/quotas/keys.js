"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotaQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var requests_1 = require("./requests");
exports.quotaQueries = (0, query_key_factory_1.createQueryKeys)('quotas', {
    service: function (type) { return ({
        contextQueries: {
            all: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, requests_1.getAllQuotas)(type, params, filter); },
                    queryKey: [params, filter],
                });
            },
            paginated: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, api_v4_1.getQuotas)(type, params, filter); },
                    queryKey: [params, filter],
                });
            },
            quota: function (id) { return ({
                queryFn: function () { return (0, api_v4_1.getQuota)(type, id); },
                queryKey: [id],
            }); },
            usage: function (id) { return ({
                queryFn: function () { return (0, api_v4_1.getQuotaUsage)(type, id); },
                queryKey: [id],
            }); },
        },
        queryKey: [type],
    }); },
});
