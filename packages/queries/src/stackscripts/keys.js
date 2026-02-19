"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stackscriptQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var requests_1 = require("./requests");
exports.stackscriptQueries = (0, query_key_factory_1.createQueryKeys)('stackscripts', {
    all: {
        queryFn: function () { return (0, requests_1.getAllAccountStackScripts)(); },
        queryKey: null,
    },
    infinite: function (filter) {
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function (_a) {
                var pageParam = _a.pageParam;
                return (0, api_v4_1.getStackScripts)({ page: pageParam, page_size: 25 }, filter);
            },
            queryKey: [filter],
        });
    },
    marketplace: {
        queryFn: function () { return (0, requests_1.getAllOCAsRequest)(); },
        queryKey: null,
    },
    stackscript: function (id) { return ({
        queryFn: function () { return (0, api_v4_1.getStackScript)(id); },
        queryKey: [id],
    }); },
});
