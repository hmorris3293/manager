"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateDomainMutation = exports.useDeleteDomainMutation = exports.useImportZoneMutation = exports.useCloneDomainMutation = exports.useCreateDomainMutation = exports.useDomainRecordsQuery = exports.useDomainQuery = exports.useDomainsInfiniteQuery = exports.useAllDomainsQuery = exports.useDomainsQuery = void 0;
var api_v4_1 = require("@linode/api-v4");
var queries_1 = require("@linode/queries");
var react_query_1 = require("@tanstack/react-query");
var keys_1 = require("./keys");
var useDomainsQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.domainQueries.domains._ctx.paginated(params, filter)), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useDomainsQuery = useDomainsQuery;
var useAllDomainsQuery = function (enabled) {
    if (enabled === void 0) { enabled = false; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.domainQueries.domains._ctx.all), { enabled: enabled }));
};
exports.useAllDomainsQuery = useAllDomainsQuery;
var useDomainsInfiniteQuery = function (filter, enabled) {
    return (0, react_query_1.useInfiniteQuery)(__assign(__assign({}, keys_1.domainQueries.domains._ctx.infinite(filter)), { enabled: enabled, getNextPageParam: function (_a) {
            var page = _a.page, pages = _a.pages;
            if (page === pages) {
                return undefined;
            }
            return page + 1;
        }, initialPageParam: 1, retry: false }));
};
exports.useDomainsInfiniteQuery = useDomainsInfiniteQuery;
var useDomainQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.domainQueries.domain(id)), { enabled: enabled }));
};
exports.useDomainQuery = useDomainQuery;
var useDomainRecordsQuery = function (id) {
    return (0, react_query_1.useQuery)(keys_1.domainQueries.domain(id)._ctx.records);
};
exports.useDomainRecordsQuery = useDomainRecordsQuery;
var useCreateDomainMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createDomain,
        onSuccess: function (domain) {
            // Invalidate paginated lists
            queryClient.invalidateQueries({
                queryKey: keys_1.domainQueries.domains.queryKey,
            });
            // Set Domain in cache
            queryClient.setQueryData(keys_1.domainQueries.domain(domain.id).queryKey, domain);
            // If a restricted user creates an entity, we must make sure grants are up to date.
            queryClient.invalidateQueries({
                queryKey: queries_1.profileQueries.grants.queryKey,
            });
        },
    });
};
exports.useCreateDomainMutation = useCreateDomainMutation;
var useCloneDomainMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.cloneDomain)(id, data); },
        onSuccess: function (domain) {
            // Invalidate paginated lists
            queryClient.invalidateQueries({
                queryKey: keys_1.domainQueries.domains.queryKey,
            });
            // Set Domain in cache
            queryClient.setQueryData(keys_1.domainQueries.domain(domain.id).queryKey, domain);
        },
    });
};
exports.useCloneDomainMutation = useCloneDomainMutation;
var useImportZoneMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.importZone,
        onSuccess: function (domain) {
            // Invalidate paginated lists
            queryClient.invalidateQueries({
                queryKey: keys_1.domainQueries.domains.queryKey,
            });
            // Set Domain in cache
            queryClient.setQueryData(keys_1.domainQueries.domain(domain.id).queryKey, domain);
        },
    });
};
exports.useImportZoneMutation = useImportZoneMutation;
var useDeleteDomainMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteDomain)(id); },
        onSuccess: function () {
            // Invalidate paginated lists
            queryClient.invalidateQueries({
                queryKey: keys_1.domainQueries.domains.queryKey,
            });
            // Remove domain (and its sub-queries) from the cache
            queryClient.removeQueries({
                queryKey: keys_1.domainQueries.domain(id).queryKey,
            });
        },
    });
};
exports.useDeleteDomainMutation = useDeleteDomainMutation;
var useUpdateDomainMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var id = _a.id, data = __rest(_a, ["id"]);
            return (0, api_v4_1.updateDomain)(id, data);
        },
        onSuccess: function (domain) {
            // Invalidate paginated lists
            queryClient.invalidateQueries({
                queryKey: keys_1.domainQueries.domains.queryKey,
            });
            // Update domain in cache
            queryClient.setQueryData(keys_1.domainQueries.domain(domain.id).queryKey, domain);
        },
    });
};
exports.useUpdateDomainMutation = useUpdateDomainMutation;
