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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.useRebuildLinodeMutation = exports.useLinodeRescueMutation = exports.useLinodeResizeMutation = exports.useLinodeMigrateMutation = exports.useLinodeChangePasswordMutation = exports.useShutdownLinodeMutation = exports.useRebootLinodeMutation = exports.useBootLinodeMutation = exports.useCloneLinodeMutation = exports.useCreateLinodeMutation = exports.useDeleteLinodeMutation = exports.useLinodeLishQuery = exports.useLinodeKernelQuery = exports.useAllLinodeKernelsQuery = exports.useLinodeUpdateMutation = exports.useLinodeQuery = exports.useInfiniteLinodesQuery = exports.useAllLinodesQuery = exports.useLinodesQuery = exports.linodeQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var utilities_1 = require("@linode/utilities");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var account_1 = require("../account");
var base_1 = require("../base");
var firewalls_1 = require("../firewalls");
var placementGroups_1 = require("../placementGroups");
var profile_1 = require("../profile/profile");
var vlans_1 = require("../vlans");
var vpcs_1 = require("../vpcs/vpcs");
var requests_1 = require("./requests");
exports.linodeQueries = (0, query_key_factory_1.createQueryKeys)('linodes', {
    kernel: function (id) { return ({
        queryFn: function () { return (0, api_v4_1.getLinodeKernel)(id); },
        queryKey: [id],
    }); },
    kernels: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, requests_1.getAllLinodeKernelsRequest)(params, filter); },
            queryKey: [params, filter],
        });
    },
    linode: function (id) { return ({
        contextQueries: {
            backups: {
                queryFn: function () { return (0, api_v4_1.getLinodeBackups)(id); },
                queryKey: null,
            },
            configs: {
                contextQueries: {
                    config: function (configId) { return ({
                        contextQueries: {
                            interface: function (interfaceId) { return ({
                                queryFn: function () { return (0, api_v4_1.getConfigInterface)(id, configId, interfaceId); },
                                queryKey: [interfaceId],
                            }); },
                            interfaces: {
                                queryFn: function () { return (0, api_v4_1.getConfigInterfaces)(id, configId); },
                                queryKey: null,
                            },
                            queryKey: null,
                        },
                        queryFn: function () { return (0, api_v4_1.getLinodeConfig)(id, configId); },
                        queryKey: [configId],
                    }); },
                    configs: {
                        queryFn: function () { return (0, requests_1.getAllLinodeConfigs)(id); },
                        queryKey: null,
                    },
                },
                queryKey: null,
            },
            disks: {
                queryFn: function () { return (0, requests_1.getAllLinodeDisks)(id); },
                queryKey: null,
            },
            firewalls: {
                queryFn: function () { return (0, api_v4_1.getLinodeFirewalls)(id); },
                queryKey: null,
            },
            interfaces: {
                contextQueries: {
                    interface: function (interfaceId) { return ({
                        contextQueries: {
                            firewalls: {
                                queryFn: function () { return (0, api_v4_1.getLinodeInterfaceFirewalls)(id, interfaceId); },
                                queryKey: null,
                            },
                            queryKey: null,
                        },
                        queryFn: function () { return (0, api_v4_1.getLinodeInterface)(id, interfaceId); },
                        queryKey: [interfaceId],
                    }); },
                    interfaces: {
                        queryFn: function () { return (0, api_v4_1.getLinodeInterfaces)(id); },
                        queryKey: null,
                    },
                    settings: {
                        queryFn: function () { return (0, api_v4_1.getLinodeInterfacesSettings)(id); },
                        queryKey: null,
                    },
                },
                queryKey: null,
            },
            ips: {
                queryFn: function () { return (0, api_v4_1.getLinodeIPs)(id); },
                queryKey: null,
            },
            lish: {
                queryFn: function () { return (0, api_v4_1.getLinodeLish)(id); },
                queryKey: null,
            },
            stats: {
                queryFn: function () { return (0, api_v4_1.getLinodeStats)(id); },
                queryKey: null,
            },
            statsByDate: function (year, month) { return ({
                queryFn: function () { return (0, api_v4_1.getLinodeStatsByDate)(id, year, month); },
                queryKey: [year, month],
            }); },
            transfer: {
                queryFn: function () { return (0, api_v4_1.getLinodeTransfer)(id); },
                queryKey: null,
            },
            transferByDate: function (year, month) { return ({
                queryFn: function () { return (0, api_v4_1.getLinodeTransferByDate)(id, year, month); },
                queryKey: [year, month],
            }); },
        },
        queryFn: function () { return (0, api_v4_1.getLinode)(id); },
        queryKey: [id],
    }); },
    linodes: {
        contextQueries: {
            all: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, requests_1.getAllLinodesRequest)(params, filter); },
                    queryKey: [params, filter],
                });
            },
            infinite: function (filter) {
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function (_a) {
                        var pageParam = _a.pageParam;
                        return (0, api_v4_1.getLinodes)({ page: pageParam, page_size: 25 }, filter);
                    },
                    queryKey: [filter],
                });
            },
            paginated: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, api_v4_1.getLinodes)(params, filter); },
                    queryKey: [params, filter],
                });
            },
        },
        queryKey: null,
    },
    types: {
        contextQueries: {
            all: {
                queryFn: requests_1.getAllLinodeTypes,
                queryKey: null,
            },
            type: function (id) { return ({
                queryFn: function () { return (0, api_v4_1.getType)(id); },
                queryKey: [id],
            }); },
        },
        queryKey: null,
    },
});
var useLinodesQuery = function (params, filter, enabled) {
    if (params === void 0) { params = {}; }
    if (filter === void 0) { filter = {}; }
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, exports.linodeQueries.linodes._ctx.paginated(params, filter)), base_1.queryPresets.longLived), { enabled: enabled, placeholderData: react_query_1.keepPreviousData }));
};
exports.useLinodesQuery = useLinodesQuery;
var useAllLinodesQuery = function (params, filter, enabled) {
    if (params === void 0) { params = {}; }
    if (filter === void 0) { filter = {}; }
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, exports.linodeQueries.linodes._ctx.all(params, filter)), base_1.queryPresets.longLived), { enabled: enabled }));
};
exports.useAllLinodesQuery = useAllLinodesQuery;
var useInfiniteLinodesQuery = function (filter, enabled) {
    if (filter === void 0) { filter = {}; }
    return (0, react_query_1.useInfiniteQuery)(__assign(__assign({}, exports.linodeQueries.linodes._ctx.infinite(filter)), { enabled: enabled, getNextPageParam: function (_a) {
            var page = _a.page, pages = _a.pages;
            if (page === pages) {
                return undefined;
            }
            return page + 1;
        }, initialPageParam: 1, retry: false }));
};
exports.useInfiniteLinodesQuery = useInfiniteLinodesQuery;
var useLinodeQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.linodeQueries.linode(id)), { enabled: enabled }));
};
exports.useLinodeQuery = useLinodeQuery;
var useLinodeUpdateMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updateLinode)(id, data); },
        onSuccess: function (linode) {
            queryClient.invalidateQueries({
                queryKey: exports.linodeQueries.linodes.queryKey,
            });
            queryClient.setQueryData(exports.linodeQueries.linode(id).queryKey, linode);
        },
    });
};
exports.useLinodeUpdateMutation = useLinodeUpdateMutation;
var useAllLinodeKernelsQuery = function (params, filter, enabled) {
    if (params === void 0) { params = {}; }
    if (filter === void 0) { filter = {}; }
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.linodeQueries.kernels(params, filter)), { enabled: enabled }));
};
exports.useAllLinodeKernelsQuery = useAllLinodeKernelsQuery;
var useLinodeKernelQuery = function (kernel) {
    return (0, react_query_1.useQuery)(exports.linodeQueries.kernel(kernel));
};
exports.useLinodeKernelQuery = useLinodeKernelQuery;
var useLinodeLishQuery = function (id) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.linodeQueries.linode(id)._ctx.lish), { staleTime: Infinity }));
};
exports.useLinodeLishQuery = useLinodeLishQuery;
var useDeleteLinodeMutation = function (id) {
    var _a;
    var queryClient = (0, react_query_1.useQueryClient)();
    var linode = queryClient.getQueryData(exports.linodeQueries.linode(id).queryKey);
    var placementGroupId = (_a = linode === null || linode === void 0 ? void 0 : linode.placement_group) === null || _a === void 0 ? void 0 : _a.id;
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteLinode)(id); },
        onSuccess: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    queryClient.removeQueries(exports.linodeQueries.linode(id));
                    queryClient.invalidateQueries(exports.linodeQueries.linodes);
                    // If the linode is assigned to a placement group,
                    // we need to invalidate the placement group queries
                    if (placementGroupId) {
                        queryClient.invalidateQueries({
                            queryKey: placementGroups_1.placementGroupQueries.placementGroup(placementGroupId).queryKey,
                        });
                        queryClient.invalidateQueries({
                            queryKey: placementGroups_1.placementGroupQueries.all._def,
                        });
                        queryClient.invalidateQueries({
                            queryKey: placementGroups_1.placementGroupQueries.paginated._def,
                        });
                    }
                    return [2 /*return*/];
                });
            });
        },
    });
};
exports.useDeleteLinodeMutation = useDeleteLinodeMutation;
var useCreateLinodeMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createLinode,
        onSuccess: function (linode, variables) {
            var _a, _b, _c, _d, _e, _f;
            queryClient.invalidateQueries(exports.linodeQueries.linodes);
            queryClient.setQueryData(exports.linodeQueries.linode(linode.id).queryKey, linode);
            // If a restricted user creates an entity, we must make sure grants are up to date.
            queryClient.invalidateQueries(profile_1.profileQueries.grants);
            // @TODO Linode Interfaces - need to handle case if interface is not legacy
            if ((0, utilities_1.getIsLegacyInterfaceArray)(variables.interfaces)) {
                if ((_a = variables.interfaces) === null || _a === void 0 ? void 0 : _a.some(function (i) { return i.purpose === 'vlan'; })) {
                    // If a Linode is created with a VLAN, invalidate vlans because
                    // they are derived from Linode configs.
                    queryClient.invalidateQueries({ queryKey: vlans_1.vlanQueries._def });
                }
                var vpcId = (_c = (_b = variables.interfaces) === null || _b === void 0 ? void 0 : _b.find(function (i) { return i.purpose === 'vpc'; })) === null || _c === void 0 ? void 0 : _c.vpc_id;
                if (vpcId) {
                    // If a Linode is created with a VPC, invalidate the related VPC queries.
                    queryClient.invalidateQueries({ queryKey: vpcs_1.vpcQueries.all._def });
                    queryClient.invalidateQueries({
                        queryKey: vpcs_1.vpcQueries.paginated._def,
                    });
                    queryClient.invalidateQueries({
                        queryKey: vpcs_1.vpcQueries.vpc(vpcId).queryKey,
                    });
                }
            }
            else {
                // invalidate firewall queries if a new Linode interface is assigned to a firewall
                if ((_d = variables.interfaces) === null || _d === void 0 ? void 0 : _d.some(function (iface) { return iface.firewall_id; })) {
                    queryClient.invalidateQueries({
                        queryKey: firewalls_1.firewallQueries.firewalls.queryKey,
                    });
                }
                for (var _i = 0, _g = (_e = variables.interfaces) !== null && _e !== void 0 ? _e : []; _i < _g.length; _i++) {
                    var iface = _g[_i];
                    if (iface.firewall_id) {
                        queryClient.invalidateQueries({
                            queryKey: firewalls_1.firewallQueries.firewall(iface.firewall_id).queryKey,
                        });
                    }
                }
            }
            // If the Linode is assigned to a placement group on creation,
            // we need to invalidate the placement group queries
            if ((_f = variables.placement_group) === null || _f === void 0 ? void 0 : _f.id) {
                queryClient.invalidateQueries({
                    queryKey: placementGroups_1.placementGroupQueries.placementGroup(variables.placement_group.id).queryKey,
                });
                queryClient.invalidateQueries({
                    queryKey: placementGroups_1.placementGroupQueries.all._def,
                });
                queryClient.invalidateQueries({
                    queryKey: placementGroups_1.placementGroupQueries.paginated._def,
                });
            }
            // If the Linode is attached to a firewall on creation, invalidate the firewall
            // so that the new device is reflected.
            if (variables.firewall_id) {
                queryClient.invalidateQueries({
                    queryKey: firewalls_1.firewallQueries.firewalls.queryKey,
                });
                queryClient.invalidateQueries({
                    queryKey: firewalls_1.firewallQueries.firewall(variables.firewall_id).queryKey,
                });
            }
        },
    });
};
exports.useCreateLinodeMutation = useCreateLinodeMutation;
var useCloneLinodeMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var sourceLinodeId = _a.sourceLinodeId, data = __rest(_a, ["sourceLinodeId"]);
            return (0, api_v4_1.cloneLinode)(sourceLinodeId, data);
        },
        onSuccess: function (linode) {
            queryClient.invalidateQueries(exports.linodeQueries.linodes);
            queryClient.setQueryData(exports.linodeQueries.linode(linode.id).queryKey, linode);
            /**
             * For restricted users, we need to invalidate grants when a Linode is cloned
             * so that Cloud Manager reflects the correct permissions for the newly created Linode.
             */
            queryClient.invalidateQueries(profile_1.profileQueries.grants);
        },
    });
};
exports.useCloneLinodeMutation = useCloneLinodeMutation;
var useBootLinodeMutation = function (id, configsToUpdate) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var config_id = _a.config_id;
            return (0, api_v4_1.linodeBoot)(id, config_id);
        },
        onSuccess: function () {
            queryClient.invalidateQueries(exports.linodeQueries.linodes);
            queryClient.invalidateQueries({
                exact: true,
                queryKey: exports.linodeQueries.linode(id).queryKey,
            });
            if (configsToUpdate) {
                /**
                 * PR #9893: If booting is successful, we manually set the query config data to have its vpc interfaces as
                 * active in order to remove the flickering 'Reboot Needed' status issue. This makes sure the Linode's status
                 * shows up as 'Running' right after being booting. Note that the configs query eventually gets invalidated
                 * and refetched after the Linode's status changes, ensuring that the actual data will be up to date.
                 */
                var updatedConfigs = (0, utilities_1.manuallySetVPCConfigInterfacesToActive)(configsToUpdate);
                queryClient.setQueryData(exports.linodeQueries.linode(id)._ctx.configs.queryKey, updatedConfigs);
            }
        },
    });
};
exports.useBootLinodeMutation = useBootLinodeMutation;
var useRebootLinodeMutation = function (id, configsToUpdate) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var config_id = _a.config_id;
            return (0, api_v4_1.linodeReboot)(id, config_id);
        },
        onSuccess: function () {
            queryClient.invalidateQueries(exports.linodeQueries.linodes);
            queryClient.invalidateQueries({
                exact: true,
                queryKey: exports.linodeQueries.linode(id).queryKey,
            });
            /**
             * PR #9893: If rebooting is successful, we manually set the query config data to have its vpc interfaces as
             * active in order to remove the flickering 'Reboot Needed' status issue. This makes sure the Linode's status
             * shows up as 'Running' right after being rebooting. Note that the configs query eventually gets invalidated
             * and refetched after the Linode's status changes, ensuring that the actual data will be up to date.
             */
            if (configsToUpdate) {
                var updatedConfigs = (0, utilities_1.manuallySetVPCConfigInterfacesToActive)(configsToUpdate);
                queryClient.setQueryData(exports.linodeQueries.linode(id)._ctx.configs.queryKey, updatedConfigs);
            }
        },
    });
};
exports.useRebootLinodeMutation = useRebootLinodeMutation;
var useShutdownLinodeMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.linodeShutdown)(id); },
        onSuccess: function () {
            queryClient.invalidateQueries(exports.linodeQueries.linodes);
            queryClient.invalidateQueries({
                exact: true,
                queryKey: exports.linodeQueries.linode(id).queryKey,
            });
        },
    });
};
exports.useShutdownLinodeMutation = useShutdownLinodeMutation;
var useLinodeChangePasswordMutation = function (id) {
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var root_pass = _a.root_pass;
            return (0, api_v4_1.changeLinodePassword)(id, root_pass);
        },
    });
};
exports.useLinodeChangePasswordMutation = useLinodeChangePasswordMutation;
var useLinodeMigrateMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.scheduleOrQueueMigration)(id, data); },
        onSuccess: function (response, variables) {
            var _a;
            queryClient.invalidateQueries(exports.linodeQueries.linodes);
            queryClient.invalidateQueries({
                exact: true,
                queryKey: exports.linodeQueries.linode(id).queryKey,
            });
            if ((_a = variables.placement_group) === null || _a === void 0 ? void 0 : _a.id) {
                queryClient.invalidateQueries({
                    queryKey: placementGroups_1.placementGroupQueries.placementGroup(variables.placement_group.id).queryKey,
                });
                queryClient.invalidateQueries({
                    queryKey: placementGroups_1.placementGroupQueries.all._def,
                });
                queryClient.invalidateQueries({
                    queryKey: placementGroups_1.placementGroupQueries.paginated._def,
                });
            }
        },
    });
};
exports.useLinodeMigrateMutation = useLinodeMigrateMutation;
var useLinodeResizeMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.resizeLinode)(id, data); },
        onSuccess: function () {
            queryClient.invalidateQueries(exports.linodeQueries.linodes);
            queryClient.invalidateQueries({
                exact: true,
                queryKey: exports.linodeQueries.linode(id).queryKey,
            });
            // Refetch notifications to dismiss any migration notifications
            queryClient.invalidateQueries(account_1.accountQueries.notifications);
        },
    });
};
exports.useLinodeResizeMutation = useLinodeResizeMutation;
var useLinodeRescueMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.rescueLinode)(id, data); },
        onSuccess: function () {
            queryClient.invalidateQueries(exports.linodeQueries.linodes);
            queryClient.invalidateQueries({
                exact: true,
                queryKey: exports.linodeQueries.linode(id).queryKey,
            });
        },
    });
};
exports.useLinodeRescueMutation = useLinodeRescueMutation;
var useRebuildLinodeMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.rebuildLinode)(id, data); },
        onSuccess: function (linode) {
            queryClient.setQueryData(exports.linodeQueries.linode(linode.id).queryKey, linode);
            queryClient.invalidateQueries(exports.linodeQueries.linodes);
            queryClient.invalidateQueries({
                exact: true,
                queryKey: exports.linodeQueries.linode(id).queryKey,
            });
        },
    });
};
exports.useRebuildLinodeMutation = useRebuildLinodeMutation;
