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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNodeBalancerVPCConfigsBetaQuery = exports.nodebalancerEventHandler = exports.useNodeBalancerTypesQuery = exports.useNodeBalancersFirewallsQuery = exports.useInfiniteNodebalancersQuery = exports.useAllNodeBalancersQuery = exports.useAllNodeBalancerConfigsQuery = exports.useNodebalancerConfigDeleteMutation = exports.useNodebalancerConfigUpdateMutation = exports.useNodebalancerConfigCreateMutation = exports.useNodebalancerCreateBetaMutation = exports.useNodebalancerCreateMutation = exports.useNodebalancerDeleteMutation = exports.useNodebalancerUpdateMutation = exports.useNodeBalancerQuery = exports.useNodeBalancersQuery = exports.useNodeBalancerStatsQuery = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var base_1 = require("../base");
var firewalls_1 = require("../firewalls");
var profile_1 = require("../profile");
var vpcs_1 = require("../vpcs");
var keys_1 = require("./keys");
var useNodeBalancerStatsQuery = function (id) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.nodebalancerQueries.nodebalancer(id)._ctx.stats), { refetchInterval: 20000, retry: false }));
};
exports.useNodeBalancerStatsQuery = useNodeBalancerStatsQuery;
var useNodeBalancersQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.nodebalancerQueries.nodebalancers._ctx.paginated(params, filter)), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useNodeBalancersQuery = useNodeBalancersQuery;
var useNodeBalancerQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.nodebalancerQueries.nodebalancer(id)), { enabled: enabled }));
};
exports.useNodeBalancerQuery = useNodeBalancerQuery;
var useNodebalancerUpdateMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updateNodeBalancer)(id, data); },
        onSuccess: function (nodebalancer) {
            // Invalidate paginated stores
            queryClient.invalidateQueries({
                queryKey: keys_1.nodebalancerQueries.nodebalancers.queryKey,
            });
            // Update the NodeBalancer store
            queryClient.setQueryData(keys_1.nodebalancerQueries.nodebalancer(id).queryKey, nodebalancer);
        },
    });
};
exports.useNodebalancerUpdateMutation = useNodebalancerUpdateMutation;
var useNodebalancerDeleteMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteNodeBalancer)(id); },
        onSuccess: function () {
            // Remove NodeBalancer queries for this specific NodeBalancer
            queryClient.removeQueries({
                queryKey: keys_1.nodebalancerQueries.nodebalancer(id).queryKey,
            });
            // Invalidate paginated stores
            queryClient.invalidateQueries({
                queryKey: keys_1.nodebalancerQueries.nodebalancers.queryKey,
            });
        },
    });
};
exports.useNodebalancerDeleteMutation = useNodebalancerDeleteMutation;
var useNodebalancerCreateMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createNodeBalancer,
        onSuccess: function (nodebalancer, variables) {
            // Invalidate paginated stores
            queryClient.invalidateQueries({
                queryKey: keys_1.nodebalancerQueries.nodebalancers.queryKey,
            });
            // Prime the cache for this specific NodeBalancer
            queryClient.setQueryData(keys_1.nodebalancerQueries.nodebalancer(nodebalancer.id).queryKey, nodebalancer);
            // If a restricted user creates an entity, we must make sure grants are up to date.
            queryClient.invalidateQueries({
                queryKey: profile_1.profileQueries.grants.queryKey,
            });
            // If a NodeBalancer is assigned to a firewall upon creation, make sure we invalidate that firewall
            // so it reflects the new entity.
            if (variables.firewall_id) {
                // Invalidate the paginated list of firewalls because GET /v4/networking/firewalls returns all firewall entities
                queryClient.invalidateQueries({
                    queryKey: firewalls_1.firewallQueries.firewalls.queryKey,
                });
                // Invalidate the affected firewall
                queryClient.invalidateQueries({
                    queryKey: firewalls_1.firewallQueries.firewall(variables.firewall_id).queryKey,
                });
            }
        },
    });
};
exports.useNodebalancerCreateMutation = useNodebalancerCreateMutation;
/**
 * duplicated function of useNodebalancerCreateMutation
 */
var useNodebalancerCreateBetaMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createNodeBalancerBeta,
        onSuccess: function (nodebalancer, variables) {
            var _a;
            // Invalidate paginated stores
            queryClient.invalidateQueries({
                queryKey: keys_1.nodebalancerQueries.nodebalancers.queryKey,
            });
            // Prime the cache for this specific NodeBalancer
            queryClient.setQueryData(keys_1.nodebalancerQueries.nodebalancer(nodebalancer.id).queryKey, nodebalancer);
            // If a restricted user creates an entity, we must make sure grants are up to date.
            queryClient.invalidateQueries({
                queryKey: profile_1.profileQueries.grants.queryKey,
            });
            // If a NodeBalancer is assigned to a firewall upon creation, make sure we invalidate that firewall
            // so it reflects the new entity.
            if (variables.firewall_id) {
                // Invalidate the paginated list of firewalls because GET /v4/networking/firewalls returns all firewall entities
                queryClient.invalidateQueries({
                    queryKey: firewalls_1.firewallQueries.firewalls.queryKey,
                });
                // Invalidate the affected firewall
                queryClient.invalidateQueries({
                    queryKey: firewalls_1.firewallQueries.firewall(variables.firewall_id).queryKey,
                });
            }
            // If a Nodebalancer is created with a VPC, invalidate the related VPC queries
            // so it reflects the new entity.
            if ((_a = variables.vpcs) === null || _a === void 0 ? void 0 : _a.length) {
                // Invalidating all vpc related queries since we don't have the specific vpc_id
                queryClient.invalidateQueries({ queryKey: vpcs_1.vpcQueries._def });
            }
        },
    });
};
exports.useNodebalancerCreateBetaMutation = useNodebalancerCreateBetaMutation;
var useNodebalancerConfigCreateMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.createNodeBalancerConfig)(id, data); },
        onSuccess: function (config) {
            // Append new config to the configurations list
            queryClient.setQueryData(keys_1.nodebalancerQueries.nodebalancer(id)._ctx.configurations.queryKey, function (previousData) {
                if (!previousData) {
                    return [config];
                }
                return __spreadArray(__spreadArray([], previousData, true), [config], false);
            });
        },
    });
};
exports.useNodebalancerConfigCreateMutation = useNodebalancerConfigCreateMutation;
var useNodebalancerConfigUpdateMutation = function (nodebalancerId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var configId = _a.configId, data = __rest(_a, ["configId"]);
            return (0, api_v4_1.updateNodeBalancerConfig)(nodebalancerId, configId, data);
        },
        onSuccess: function (config) {
            // Update the config within the configs list
            queryClient.setQueryData(keys_1.nodebalancerQueries.nodebalancer(nodebalancerId)._ctx.configurations
                .queryKey, function (previousData) {
                if (!previousData) {
                    return [config];
                }
                var indexOfConfig = previousData.findIndex(function (c) { return c.id === config.id; });
                if (indexOfConfig === -1) {
                    return __spreadArray(__spreadArray([], previousData, true), [config], false);
                }
                var newConfigs = __spreadArray([], previousData, true);
                newConfigs[indexOfConfig] = config;
                return newConfigs;
            });
        },
    });
};
exports.useNodebalancerConfigUpdateMutation = useNodebalancerConfigUpdateMutation;
var useNodebalancerConfigDeleteMutation = function (nodebalancerId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var configId = _a.configId;
            return (0, api_v4_1.deleteNodeBalancerConfig)(nodebalancerId, configId);
        },
        onSuccess: function (_, vars) {
            queryClient.setQueryData(keys_1.nodebalancerQueries.nodebalancer(nodebalancerId)._ctx.configurations
                .queryKey, function (oldData) {
                return (oldData !== null && oldData !== void 0 ? oldData : []).filter(function (config) { return config.id !== vars.configId; });
            });
        },
    });
};
exports.useNodebalancerConfigDeleteMutation = useNodebalancerConfigDeleteMutation;
var useAllNodeBalancerConfigsQuery = function (id) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.nodebalancerQueries.nodebalancer(id)._ctx.configurations), { refetchInterval: 20000 }));
};
exports.useAllNodeBalancerConfigsQuery = useAllNodeBalancerConfigsQuery;
// Please don't use
var useAllNodeBalancersQuery = function (enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.nodebalancerQueries.nodebalancers._ctx.all), { enabled: enabled }));
};
exports.useAllNodeBalancersQuery = useAllNodeBalancersQuery;
var useInfiniteNodebalancersQuery = function (filter, enabled) {
    return (0, react_query_1.useInfiniteQuery)(__assign(__assign({}, keys_1.nodebalancerQueries.nodebalancers._ctx.infinite(filter)), { enabled: enabled, getNextPageParam: function (_a) {
            var page = _a.page, pages = _a.pages;
            if (page === pages) {
                return undefined;
            }
            return page + 1;
        }, initialPageParam: 1, retry: false }));
};
exports.useInfiniteNodebalancersQuery = useInfiniteNodebalancersQuery;
var useNodeBalancersFirewallsQuery = function (nodebalancerId) {
    return (0, react_query_1.useQuery)(keys_1.nodebalancerQueries.nodebalancer(nodebalancerId)._ctx.firewalls);
};
exports.useNodeBalancersFirewallsQuery = useNodeBalancersFirewallsQuery;
var useNodeBalancerTypesQuery = function () {
    return (0, react_query_1.useQuery)(__assign(__assign({}, base_1.queryPresets.oneTimeFetch), keys_1.nodebalancerQueries.types));
};
exports.useNodeBalancerTypesQuery = useNodeBalancerTypesQuery;
var nodebalancerEventHandler = function (_a) {
    var _b;
    var event = _a.event, invalidateQueries = _a.invalidateQueries;
    var nodebalancerId = (_b = event.entity) === null || _b === void 0 ? void 0 : _b.id;
    if (event.action.startsWith('nodebalancer_node')) {
        // We don't store NodeBalancer nodes is React Query currently, so just skip these events
        return;
    }
    if (nodebalancerId === undefined) {
        // Ignore events that don't have an associated NodeBalancer
        return;
    }
    if (event.action.startsWith('nodebalancer_config')) {
        // If the event is about a NodeBalancer's configs, just invalidate the configs
        invalidateQueries({
            queryKey: keys_1.nodebalancerQueries.nodebalancer(nodebalancerId)._ctx.configurations
                .queryKey,
        });
    }
    else {
        // If we've made it here, the event is about a NodeBalancer
        // Invalidate the specific NodeBalancer
        invalidateQueries({
            exact: true,
            queryKey: keys_1.nodebalancerQueries.nodebalancer(nodebalancerId).queryKey,
        });
        // Invalidate all paginated lists
        invalidateQueries({
            queryKey: keys_1.nodebalancerQueries.nodebalancers.queryKey,
        });
    }
};
exports.nodebalancerEventHandler = nodebalancerEventHandler;
var useNodeBalancerVPCConfigsBetaQuery = function (nodebalancerId, enabled) {
    if (enabled === void 0) { enabled = false; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, keys_1.nodebalancerQueries.nodebalancer(nodebalancerId)._ctx.vpcsBeta), { enabled: enabled }));
};
exports.useNodeBalancerVPCConfigsBetaQuery = useNodeBalancerVPCConfigsBetaQuery;
