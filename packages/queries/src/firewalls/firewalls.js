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
exports.firewallEventsHandler = exports.useUpdateFirewallRulesMutation = exports.useDeleteFirewall = exports.useCreateFirewall = exports.useMutateFirewall = exports.useMutateFirewallSettings = exports.useAllFirewallsQuery = exports.useFirewallQuery = exports.useFirewallTemplatesQuery = exports.useFirewallSettingsQuery = exports.useFirewallsQuery = exports.useRemoveFirewallDeviceMutation = exports.useAddFirewallDeviceMutation = exports.useFirewallsInfiniteQuery = exports.useAllFirewallDevicesQuery = exports.firewallQueries = void 0;
var firewalls_1 = require("@linode/api-v4/lib/firewalls");
var utilities_1 = require("@linode/utilities");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var linodes_1 = require("../linodes");
var nodebalancers_1 = require("../nodebalancers");
var profile_1 = require("../profile");
var getAllFirewallDevices = function (id, passedParams, passedFilter) {
    if (passedParams === void 0) { passedParams = {}; }
    if (passedFilter === void 0) { passedFilter = {}; }
    return (0, utilities_1.getAll)(function (params, filter) {
        return (0, firewalls_1.getFirewallDevices)(id, __assign(__assign({}, params), passedParams), __assign(__assign({}, filter), passedFilter));
    })().then(function (data) { return data.data; });
};
var getAllFirewallTemplates = function () {
    return (0, utilities_1.getAll)(firewalls_1.getTemplates)().then(function (data) { return data.data; });
};
var getAllFirewallsRequest = function () {
    return (0, utilities_1.getAll)(function (passedParams, passedFilter) {
        return (0, firewalls_1.getFirewalls)(passedParams, passedFilter);
    })().then(function (data) { return data.data; });
};
exports.firewallQueries = (0, query_key_factory_1.createQueryKeys)('firewalls', {
    firewall: function (id) { return ({
        contextQueries: {
            devices: {
                queryFn: function () { return getAllFirewallDevices(id); },
                queryKey: null,
            },
        },
        queryFn: function () { return (0, firewalls_1.getFirewall)(id); },
        queryKey: [id],
    }); },
    firewalls: {
        contextQueries: {
            all: {
                queryFn: getAllFirewallsRequest,
                queryKey: null,
            },
            infinite: function (filter) {
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function (_a) {
                        var pageParam = _a.pageParam;
                        return (0, firewalls_1.getFirewalls)({ page: pageParam }, filter);
                    },
                    queryKey: [filter],
                });
            },
            paginated: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, firewalls_1.getFirewalls)(params, filter); },
                    queryKey: [params, filter],
                });
            },
        },
        queryKey: null,
    },
    settings: {
        queryFn: firewalls_1.getFirewallSettings,
        queryKey: null,
    },
    template: function (slug) { return ({
        queryFn: function () { return (0, firewalls_1.getTemplate)(slug); },
        queryKey: [slug],
    }); },
    templates: {
        queryFn: getAllFirewallTemplates,
        queryKey: null,
    },
});
var useAllFirewallDevicesQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.firewallQueries.firewall(id)._ctx.devices), { enabled: enabled }));
};
exports.useAllFirewallDevicesQuery = useAllFirewallDevicesQuery;
var useFirewallsInfiniteQuery = function (filter, enabled) {
    return (0, react_query_1.useInfiniteQuery)(__assign(__assign({}, exports.firewallQueries.firewalls._ctx.infinite(filter)), { enabled: enabled, getNextPageParam: function (_a) {
            var page = _a.page, pages = _a.pages;
            if (page === pages) {
                return undefined;
            }
            return page + 1;
        }, initialPageParam: 1, retry: false }));
};
exports.useFirewallsInfiniteQuery = useFirewallsInfiniteQuery;
var useAddFirewallDeviceMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var firewallId = _a.firewallId, data = __rest(_a, ["firewallId"]);
            return (0, firewalls_1.addFirewallDevice)(firewallId, data);
        },
        onSuccess: function (firewallDevice, vars) {
            var id = vars.firewallId;
            // Append the new entity to the Firewall object in the paginated store
            queryClient.setQueriesData({ queryKey: exports.firewallQueries.firewalls._ctx.paginated._def }, function (page) {
                if (!page) {
                    return undefined;
                }
                var indexOfFirewall = page.data.findIndex(function (firewall) { return firewall.id === id; });
                // If the firewall does not exist on this page, don't change anything
                if (indexOfFirewall === -1) {
                    return page;
                }
                var firewall = page.data[indexOfFirewall];
                var newData = __spreadArray([], page.data, true);
                newData[indexOfFirewall] = __assign(__assign({}, firewall), { entities: __spreadArray(__spreadArray([], firewall.entities, true), [firewallDevice.entity], false) });
                return __assign(__assign({}, page), { data: newData });
            });
            // Append the new entity to the Firewall object in the "all firewalls" store
            queryClient.setQueryData(exports.firewallQueries.firewalls._ctx.all.queryKey, function (firewalls) {
                if (!firewalls) {
                    return undefined;
                }
                var indexOfFirewall = firewalls.findIndex(function (firewall) { return firewall.id === id; });
                // If the firewall does not exist in the list, don't do anything
                if (indexOfFirewall === -1) {
                    return firewalls;
                }
                var newFirewalls = __spreadArray([], firewalls, true);
                var firewall = firewalls[indexOfFirewall];
                newFirewalls[indexOfFirewall] = __assign(__assign({}, firewall), { entities: __spreadArray(__spreadArray([], firewall.entities, true), [firewallDevice.entity], false) });
                return newFirewalls;
            });
            // Append the new entity to the Firewall object
            queryClient.setQueryData(exports.firewallQueries.firewall(id).queryKey, function (oldFirewall) {
                if (!oldFirewall) {
                    return undefined;
                }
                return __assign(__assign({}, oldFirewall), { entities: __spreadArray(__spreadArray([], oldFirewall.entities, true), [firewallDevice.entity], false) });
            });
            // Add device to the dedicated devices store
            queryClient.setQueryData(exports.firewallQueries.firewall(id)._ctx.devices.queryKey, function (existingFirewallDevices) {
                if (!existingFirewallDevices) {
                    return [firewallDevice];
                }
                return __spreadArray(__spreadArray([], existingFirewallDevices, true), [firewallDevice], false);
            });
            // Refresh the cached result of the linode-specific firewalls query
            if (firewallDevice.entity.type === 'linode') {
                queryClient.invalidateQueries({
                    queryKey: linodes_1.linodeQueries.linode(firewallDevice.entity.id)._ctx
                        .firewalls.queryKey,
                });
            }
            // Refresh the cached result of the nodebalancer-specific firewalls query
            if (firewallDevice.entity.type === 'nodebalancer') {
                queryClient.invalidateQueries({
                    queryKey: nodebalancers_1.nodebalancerQueries.nodebalancer(firewallDevice.entity.id)
                        ._ctx.firewalls.queryKey,
                });
            }
        },
    });
};
exports.useAddFirewallDeviceMutation = useAddFirewallDeviceMutation;
var useRemoveFirewallDeviceMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var firewallId = _a.firewallId, deviceId = _a.deviceId;
            return (0, firewalls_1.deleteFirewallDevice)(firewallId, deviceId);
        },
        onSuccess: function (data, _a) {
            var firewallId = _a.firewallId, deviceId = _a.deviceId;
            // Invalidate firewall lists because GET /v4/firewalls returns all entities for each firewall
            queryClient.invalidateQueries({
                queryKey: exports.firewallQueries.firewalls.queryKey,
            });
            // Invalidate the firewall because the firewall objects has all entities and we want them to be in sync
            queryClient.invalidateQueries({
                exact: true,
                queryKey: exports.firewallQueries.firewall(firewallId).queryKey,
            });
            // Remove device from the firewall's dedicaed devices store
            queryClient.setQueryData(exports.firewallQueries.firewall(firewallId)._ctx.devices.queryKey, function (oldData) {
                var _a;
                return (_a = oldData === null || oldData === void 0 ? void 0 : oldData.filter(function (device) { return device.id !== deviceId; })) !== null && _a !== void 0 ? _a : [];
            });
        },
    });
};
exports.useRemoveFirewallDeviceMutation = useRemoveFirewallDeviceMutation;
var useFirewallsQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.firewallQueries.firewalls._ctx.paginated(params, filter)), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useFirewallsQuery = useFirewallsQuery;
var useFirewallSettingsQuery = function (options) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.firewallQueries.settings), options));
};
exports.useFirewallSettingsQuery = useFirewallSettingsQuery;
var useFirewallTemplatesQuery = function () {
    return (0, react_query_1.useQuery)(__assign({}, exports.firewallQueries.templates));
};
exports.useFirewallTemplatesQuery = useFirewallTemplatesQuery;
var useFirewallQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.firewallQueries.firewall(id)), { enabled: enabled }));
};
exports.useFirewallQuery = useFirewallQuery;
var useAllFirewallsQuery = function (enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.firewallQueries.firewalls._ctx.all), { enabled: enabled }));
};
exports.useAllFirewallsQuery = useAllFirewallsQuery;
var useMutateFirewallSettings = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, firewalls_1.updateFirewallSettings)(data); },
        onSuccess: function (firewallSettings) {
            queryClient.setQueryData(exports.firewallQueries.settings.queryKey, firewallSettings);
        },
    });
};
exports.useMutateFirewallSettings = useMutateFirewallSettings;
var useMutateFirewall = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, firewalls_1.updateFirewall)(id, data); },
        onSuccess: function (firewall) {
            // Update the firewall in the store
            queryClient.setQueryData(exports.firewallQueries.firewall(firewall.id).queryKey, firewall);
            // Invalidate firewall lists
            queryClient.invalidateQueries({
                queryKey: exports.firewallQueries.firewalls.queryKey,
            });
        },
    });
};
exports.useMutateFirewall = useMutateFirewall;
var useCreateFirewall = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: firewalls_1.createFirewall,
        onSuccess: function (firewall) {
            // Invalidate firewall lists
            queryClient.invalidateQueries({
                queryKey: exports.firewallQueries.firewalls.queryKey,
            });
            // Set the firewall in the store
            queryClient.setQueryData(exports.firewallQueries.firewall(firewall.id).queryKey, firewall);
            // If a restricted user creates an entity, we must make sure grants are up to date.
            queryClient.invalidateQueries({
                queryKey: profile_1.profileQueries.grants.queryKey,
            });
            // For each entity attached to the firewall upon creation, invalidate
            // the entity's firewall query so that firewalls are up to date
            // on the entity's details/settings page.
            for (var _i = 0, _a = firewall.entities; _i < _a.length; _i++) {
                var entity = _a[_i];
                if (entity.type === 'linode') {
                    queryClient.invalidateQueries({
                        queryKey: linodes_1.linodeQueries.linode(entity.id)._ctx.firewalls.queryKey,
                    });
                }
                if (entity.type === 'nodebalancer') {
                    queryClient.invalidateQueries({
                        queryKey: nodebalancers_1.nodebalancerQueries.nodebalancer(entity.id)._ctx.firewalls
                            .queryKey,
                    });
                }
            }
        },
    });
};
exports.useCreateFirewall = useCreateFirewall;
var useDeleteFirewall = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, firewalls_1.deleteFirewall)(id); },
        onSuccess: function () {
            // Remove firewall and its subqueries from the cache
            queryClient.removeQueries({
                queryKey: exports.firewallQueries.firewall(id).queryKey,
            });
            // Invalidate firewall lists
            queryClient.invalidateQueries({
                queryKey: exports.firewallQueries.firewalls.queryKey,
            });
        },
    });
};
exports.useDeleteFirewall = useDeleteFirewall;
var useUpdateFirewallRulesMutation = function (firewallId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, firewalls_1.updateFirewallRules)(firewallId, data); },
        onSuccess: function (updatedRules) {
            // Update rules on specific firewall
            queryClient.setQueryData(exports.firewallQueries.firewall(firewallId).queryKey, function (oldData) {
                if (!oldData) {
                    return undefined;
                }
                return __assign(__assign({}, oldData), { rules: updatedRules });
            });
            // Update the Firewall object in the paginated store
            queryClient.setQueriesData({ queryKey: exports.firewallQueries.firewalls._ctx.paginated._def }, function (page) {
                if (!page) {
                    return undefined;
                }
                var indexOfFirewall = page.data.findIndex(function (firewall) { return firewall.id === firewallId; });
                // If the firewall does not exist on this page, don't change anything
                if (indexOfFirewall === -1) {
                    return page;
                }
                var firewall = page.data[indexOfFirewall];
                var newData = __spreadArray([], page.data, true);
                newData[indexOfFirewall] = __assign(__assign({}, firewall), { rules: updatedRules });
                return __assign(__assign({}, page), { data: newData });
            });
            // Update the the Firewall object in the "all firewalls" store
            queryClient.setQueryData(exports.firewallQueries.firewalls._ctx.all.queryKey, function (firewalls) {
                if (!firewalls) {
                    return undefined;
                }
                var indexOfFirewall = firewalls.findIndex(function (firewall) { return firewall.id === firewallId; });
                // If the firewall does not exist in the list, don't do anything
                if (indexOfFirewall === -1) {
                    return firewalls;
                }
                var newFirewalls = __spreadArray([], firewalls, true);
                var firewall = firewalls[indexOfFirewall];
                newFirewalls[indexOfFirewall] = __assign(__assign({}, firewall), { rules: updatedRules });
                return newFirewalls;
            });
        },
    });
};
exports.useUpdateFirewallRulesMutation = useUpdateFirewallRulesMutation;
var firewallEventsHandler = function (_a) {
    var event = _a.event, invalidateQueries = _a.invalidateQueries, queryClient = _a.queryClient;
    if (!event.entity) {
        // Ignore any events that don't have an associated entity
        return;
    }
    switch (event.action) {
        case 'firewall_create':
            // Invalidate firewall lists
            invalidateQueries({
                queryKey: exports.firewallQueries.firewalls.queryKey,
            });
            break;
        case 'firewall_delete':
            // Invalidate firewall lists
            invalidateQueries({
                queryKey: exports.firewallQueries.firewalls.queryKey,
            });
            // Remove firewall from the cache
            queryClient.removeQueries({
                queryKey: exports.firewallQueries.firewall(event.entity.id).queryKey,
            });
            break;
        case 'firewall_device_add':
            break;
        case 'firewall_device_remove':
            // For a firewall device event, the primary entity is the fireall and
            // the secondary entity is the device that is added/removed
            // If a Linode is added or removed as a firewall device, invalidate it's firewalls
            if (event.secondary_entity && event.secondary_entity.type === 'linode') {
                invalidateQueries({
                    queryKey: linodes_1.linodeQueries.linode(event.secondary_entity.id)._ctx
                        .firewalls.queryKey,
                });
            }
            // If a NodeBalancer is added or removed as a firewall device, invalidate it's firewalls
            if (event.secondary_entity &&
                event.secondary_entity.type === 'nodebalancer') {
                invalidateQueries({
                    queryKey: nodebalancers_1.nodebalancerQueries.nodebalancer(event.secondary_entity.id)
                        ._ctx.firewalls.queryKey,
                });
            }
            // Invalidate the firewall
            invalidateQueries({
                queryKey: exports.firewallQueries.firewall(event.entity.id).queryKey,
            });
            // Invalidate firewall lists
            invalidateQueries({
                queryKey: exports.firewallQueries.firewalls.queryKey,
            });
            break;
        case 'firewall_disable':
        case 'firewall_enable':
        case 'firewall_rules_update':
        case 'firewall_update':
            // invalidate the firewall
            invalidateQueries({
                queryKey: exports.firewallQueries.firewall(event.entity.id).queryKey,
            });
            // Invalidate firewall lists
            invalidateQueries({
                queryKey: exports.firewallQueries.firewalls.queryKey,
            });
    }
};
exports.firewallEventsHandler = firewallEventsHandler;
