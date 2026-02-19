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
exports.useUpgradeToLinodeInterfacesMutation = exports.useDeleteLinodeInterfaceMutation = exports.useUpdateLinodeInterfaceMutation = exports.useCreateLinodeInterfaceMutation = exports.useLinodeInterfaceFirewallsQuery = exports.useLinodeInterfaceSettingsMutation = exports.useLinodeInterfaceSettingsQuery = exports.useLinodeInterfaceQuery = exports.useLinodeInterfacesQuery = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var firewalls_1 = require("../firewalls");
var networking_1 = require("../networking");
var vpcs_1 = require("../vpcs");
var linodes_1 = require("./linodes");
var useLinodeInterfacesQuery = function (linodeId, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, linodes_1.linodeQueries.linode(linodeId)._ctx.interfaces._ctx.interfaces), { enabled: enabled }));
};
exports.useLinodeInterfacesQuery = useLinodeInterfacesQuery;
var useLinodeInterfaceQuery = function (linodeId, interfaceId, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, linodes_1.linodeQueries
        .linode(linodeId)
        ._ctx.interfaces._ctx.interface(interfaceId !== null && interfaceId !== void 0 ? interfaceId : -1)), { enabled: enabled && interfaceId !== undefined }));
};
exports.useLinodeInterfaceQuery = useLinodeInterfaceQuery;
var useLinodeInterfaceSettingsQuery = function (linodeId) {
    return (0, react_query_1.useQuery)(linodes_1.linodeQueries.linode(linodeId)._ctx.interfaces._ctx.settings);
};
exports.useLinodeInterfaceSettingsQuery = useLinodeInterfaceSettingsQuery;
var useLinodeInterfaceSettingsMutation = function (linodeId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updateLinodeInterfacesSettings)(linodeId, data); },
        onSuccess: function (settings) {
            queryClient.setQueryData(linodes_1.linodeQueries.linode(linodeId)._ctx.interfaces._ctx.settings.queryKey, settings);
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.interfaces._ctx.interfaces
                    .queryKey,
            });
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.interfaces._ctx.interface._def,
            });
        },
    });
};
exports.useLinodeInterfaceSettingsMutation = useLinodeInterfaceSettingsMutation;
var useLinodeInterfaceFirewallsQuery = function (linodeId, interfaceId, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, linodes_1.linodeQueries
        .linode(linodeId)
        ._ctx.interfaces._ctx.interface(interfaceId)._ctx.firewalls), { enabled: enabled }));
};
exports.useLinodeInterfaceFirewallsQuery = useLinodeInterfaceFirewallsQuery;
var useCreateLinodeInterfaceMutation = function (linodeId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.createLinodeInterface)(linodeId, data); },
        onSuccess: function (linodeInterface, variables) {
            // Invalidate the list of interfaces
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.interfaces.queryKey,
            });
            // Invalidate the Linode's IPs because adding a new interface likely adds IPs to the Linode
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.ips.queryKey,
            });
            // Invaliate networking queries because IPs likely changed
            queryClient.invalidateQueries({
                queryKey: networking_1.networkingQueries._def,
            });
            // Invalidate the Linode itself in case IPs changed
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId).queryKey,
                exact: true,
            });
            // If a Firewall is attached at the time of creation...
            if (variables.firewall_id) {
                // Invalidate all Firewall lists
                queryClient.invalidateQueries({
                    queryKey: firewalls_1.firewallQueries.firewalls.queryKey,
                });
                // Invalidate the specific firewall
                queryClient.invalidateQueries({
                    queryKey: firewalls_1.firewallQueries.firewall(variables.firewall_id).queryKey,
                });
            }
        },
    });
};
exports.useCreateLinodeInterfaceMutation = useCreateLinodeInterfaceMutation;
var useUpdateLinodeInterfaceMutation = function (linodeId, interfaceId, options) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)(__assign(__assign({ mutationFn: function (data) { return (0, api_v4_1.updateLinodeInterface)(linodeId, interfaceId, data); } }, options), { onSuccess: function (linodeInterface, variables, context) {
            var _a;
            (_a = options === null || options === void 0 ? void 0 : options.onSuccess) === null || _a === void 0 ? void 0 : _a.call(options, linodeInterface, variables, context);
            // Set the specific interface in the cache
            queryClient.setQueryData(linodes_1.linodeQueries
                .linode(linodeId)
                ._ctx.interfaces._ctx.interface(linodeInterface.id).queryKey, linodeInterface);
            // Invalidate this Linode's interface queries
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.interfaces._ctx.interfaces
                    .queryKey,
            });
            // Invalidate a Linode's IPs because this edit action can change a Linode's IPs
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.ips.queryKey,
            });
            // Invaliate networking queries because IPs likely changed
            queryClient.invalidateQueries({
                queryKey: networking_1.networkingQueries._def,
            });
            // Invalidate the Linode itself
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId).queryKey,
                exact: true,
            });
        } }));
};
exports.useUpdateLinodeInterfaceMutation = useUpdateLinodeInterfaceMutation;
var useDeleteLinodeInterfaceMutation = function (linodeId, options) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)(__assign(__assign({ mutationFn: function (interfaceId) { return (0, api_v4_1.deleteLinodeInterface)(linodeId, interfaceId); } }, options), { onSuccess: function () {
            var _a;
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            (_a = options === null || options === void 0 ? void 0 : options.onSuccess) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([options], params, false));
            // remove the cached interface
            queryClient.removeQueries({
                queryKey: linodes_1.linodeQueries
                    .linode(linodeId)
                    ._ctx.interfaces._ctx.interface(params[1]).queryKey,
            });
            // Invalidate the interfaces list
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.interfaces.queryKey,
            });
            // Invalidate a Linode's IPs because this edit action can change a Linode's IPs
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.ips.queryKey,
            });
            // Because we don't easily know the interface's Firewall here,
            // we'll just invalidate all firewall queries.
            // If this ever needs to be optimized, we can fetch the interface's firewalls before deletion,
            // and do a more granular invalidation knowing the firewall ID.
            queryClient.invalidateQueries({
                queryKey: firewalls_1.firewallQueries.firewall._def,
            });
            queryClient.invalidateQueries({
                queryKey: firewalls_1.firewallQueries.firewalls.queryKey,
            });
        } }));
};
exports.useDeleteLinodeInterfaceMutation = useDeleteLinodeInterfaceMutation;
var useUpgradeToLinodeInterfacesMutation = function (linodeId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.upgradeToLinodeInterface)(linodeId, data); },
        onSuccess: function (upgradeData) {
            // only invalidate queries if this is an actual upgrade, not a dry run
            if (upgradeData.dry_run === false) {
                queryClient.invalidateQueries({
                    queryKey: linodes_1.linodeQueries.linode(linodeId).queryKey,
                });
                // Simlar to deleting the interface - because we don't easily know the interface's Firewall here,
                // we'll just invalidate all firewall queries.
                queryClient.invalidateQueries({
                    queryKey: firewalls_1.firewallQueries.firewall._def,
                });
                queryClient.invalidateQueries({
                    queryKey: firewalls_1.firewallQueries.firewalls.queryKey,
                });
                for (var _i = 0, _a = upgradeData.interfaces; _i < _a.length; _i++) {
                    var iface = _a[_i];
                    if (iface.vpc) {
                        queryClient.invalidateQueries({
                            queryKey: vpcs_1.vpcQueries.vpc(iface.vpc.vpc_id).queryKey,
                        });
                    }
                }
            }
        },
    });
};
exports.useUpgradeToLinodeInterfacesMutation = useUpgradeToLinodeInterfacesMutation;
