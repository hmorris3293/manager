"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.betaQueries = void 0;
var betas_1 = require("@linode/api-v4/lib/betas");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
exports.betaQueries = (0, query_key_factory_1.createQueryKeys)('betas', {
    beta: function (id) { return ({
        queryFn: function () { return (0, betas_1.getBeta)(id); },
        queryKey: [id],
    }); },
    paginated: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, betas_1.getBetas)(params, filter); },
            queryKey: [params, filter],
        });
    },
});
