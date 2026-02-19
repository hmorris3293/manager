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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteSubnetMutation = exports.useUpdateSubnetMutation = exports.useCreateSubnetMutation = exports.useSubnetQuery = exports.useSubnetsQuery = exports.useDeleteVPCMutation = exports.useUpdateVPCMutation = exports.useCreateVPCMutation = exports.useVPCIPsQuery = exports.useVPCsIPsQuery = exports.useVPCQuery = exports.useVPCsQuery = exports.useAllVPCsQuery = exports.vpcQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var requests_1 = require("./requests");
// VPC queries
exports.vpcQueries = (0, query_key_factory_1.createQueryKeys)('vpcs', {
    all: function (filter) {
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, requests_1.getAllVPCsRequest)(filter); },
            queryKey: [filter],
        });
    },
    paginated: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, api_v4_1.getVPCs)(params, filter); },
            queryKey: [params, filter],
        });
    },
    vpc: function (vpcId) { return ({
        contextQueries: {
            subnets: {
                contextQueries: {
                    paginated: function (params, filter) {
                        if (params === void 0) { params = {}; }
                        if (filter === void 0) { filter = {}; }
                        return ({
                            queryFn: function () { return (0, api_v4_1.getSubnets)(vpcId, params, filter); },
                            queryKey: [params, filter],
                        });
                    },
                    subnet: function (subnetId) { return ({
                        queryFn: function () { return (0, api_v4_1.getSubnet)(vpcId, subnetId); },
                        queryKey: [subnetId],
                    }); },
                },
                queryKey: null,
            },
            vpcIps: function (vpcId, filter) {
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, requests_1.getAllVPCIPsRequest)(vpcId, filter); },
                    queryKey: [filter],
                });
            },
        },
        queryFn: function () { return (0, api_v4_1.getVPC)(vpcId); },
        queryKey: [vpcId],
    }); },
    vpcsIps: function (filter) {
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, requests_1.getAllVPCsIPsRequest)(filter); },
            queryKey: [filter],
        });
    },
});
var useAllVPCsQuery = function (options) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.vpcQueries.all(options.filter)), { enabled: options.enabled }));
};
exports.useAllVPCsQuery = useAllVPCsQuery;
var useVPCsQuery = function (params, filter, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.vpcQueries.paginated(params, filter)), { enabled: enabled, placeholderData: react_query_1.keepPreviousData }));
};
exports.useVPCsQuery = useVPCsQuery;
var useVPCQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.vpcQueries.vpc(id)), { enabled: enabled }));
};
exports.useVPCQuery = useVPCQuery;
var useVPCsIPsQuery = function (filter, enabled) {
    if (enabled === void 0) { enabled = false; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.vpcQueries.vpcsIps(filter)), { enabled: enabled }));
};
exports.useVPCsIPsQuery = useVPCsIPsQuery;
var useVPCIPsQuery = function (id, filter, enabled) {
    if (enabled === void 0) { enabled = false; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.vpcQueries.vpc(id)._ctx.vpcIps(id, filter)), { enabled: enabled }));
};
exports.useVPCIPsQuery = useVPCIPsQuery;
var useCreateVPCMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createVPC,
        onSuccess: function (vpc) {
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.all._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.paginated._def,
            });
            queryClient.setQueryData(exports.vpcQueries.vpc(vpc.id).queryKey, vpc);
        },
    });
};
exports.useCreateVPCMutation = useCreateVPCMutation;
var useUpdateVPCMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updateVPC)(id, data); },
        onSuccess: function (vpc) {
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.paginated._def,
            });
            queryClient.setQueryData(exports.vpcQueries.vpc(vpc.id).queryKey, vpc);
        },
    });
};
exports.useUpdateVPCMutation = useUpdateVPCMutation;
var useDeleteVPCMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteVPC)(id); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.all._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.paginated._def,
            });
            queryClient.removeQueries({
                queryKey: exports.vpcQueries.vpc(id).queryKey,
            });
        },
    });
};
exports.useDeleteVPCMutation = useDeleteVPCMutation;
// Subnet queries
var useSubnetsQuery = function (vpcId, params, filter, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.vpcQueries.vpc(vpcId)._ctx.subnets._ctx.paginated(params, filter)), { enabled: enabled, placeholderData: react_query_1.keepPreviousData }));
};
exports.useSubnetsQuery = useSubnetsQuery;
var useSubnetQuery = function (vpcId, subnetId, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.vpcQueries.vpc(vpcId)._ctx.subnets._ctx.subnet(subnetId)), { enabled: enabled }));
};
exports.useSubnetQuery = useSubnetQuery;
var useCreateSubnetMutation = function (vpcId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.createSubnet)(vpcId, data); },
        onSuccess: function () {
            // New subnet created --> refresh the VPC queries (all, paginated, & individual), plus the /subnets VPC query
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.all._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.paginated._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.vpc(vpcId).queryKey,
            });
        },
    });
};
exports.useCreateSubnetMutation = useCreateSubnetMutation;
var useUpdateSubnetMutation = function (vpcId, subnetId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.modifySubnet)(vpcId, subnetId, data); },
        onSuccess: function () {
            // Subnet updated --> refresh the VPC queries (all, paginated, & individual), plus the /subnets VPC query
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.all._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.paginated._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.vpc(vpcId).queryKey,
            });
        },
    });
};
exports.useUpdateSubnetMutation = useUpdateSubnetMutation;
var useDeleteSubnetMutation = function (vpcId, subnetId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteSubnet)(vpcId, subnetId); },
        onSuccess: function () {
            // Subnet deleted --> refresh the VPC queries (all, paginated, & individual), plus the /subnets VPC query
            // Remove the specific subnet deleted from the cache
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.all._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.paginated._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.vpcQueries.vpc(vpcId).queryKey,
            });
            queryClient.removeQueries({
                queryKey: exports.vpcQueries.vpc(vpcId)._ctx.subnets._ctx.subnet(subnetId)
                    .queryKey,
            });
        },
    });
};
exports.useDeleteSubnetMutation = useDeleteSubnetMutation;
