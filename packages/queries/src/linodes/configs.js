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
exports.useLinodeConfigUpdateMutation = exports.useLinodeConfigCreateMutation = exports.useLinodeConfigDeleteMutation = exports.useLinodeConfigInterfaceQuery = exports.useLinodeConfigQuery = exports.useAllLinodeConfigsQuery = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var linodes_1 = require("./linodes");
var useAllLinodeConfigsQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, linodes_1.linodeQueries.linode(id)._ctx.configs._ctx.configs), { enabled: enabled }));
};
exports.useAllLinodeConfigsQuery = useAllLinodeConfigsQuery;
var useLinodeConfigQuery = function (options) {
    var configId = options.configId, enabled = options.enabled, linodeId = options.linodeId;
    return (0, react_query_1.useQuery)(__assign(__assign({}, linodes_1.linodeQueries.linode(linodeId)._ctx.configs._ctx.config(configId)), { enabled: enabled }));
};
exports.useLinodeConfigQuery = useLinodeConfigQuery;
var useLinodeConfigInterfaceQuery = function (options) {
    var configId = options.configId, enabled = options.enabled, interfaceId = options.interfaceId, linodeId = options.linodeId;
    return (0, react_query_1.useQuery)(__assign(__assign({}, linodes_1.linodeQueries
        .linode(linodeId)
        ._ctx.configs._ctx.config(configId)
        ._ctx.interface(interfaceId)), { enabled: enabled }));
};
exports.useLinodeConfigInterfaceQuery = useLinodeConfigInterfaceQuery;
var useLinodeConfigDeleteMutation = function (linodeId, configId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteLinodeConfig)(linodeId, configId); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.configs.queryKey,
            });
        },
    });
};
exports.useLinodeConfigDeleteMutation = useLinodeConfigDeleteMutation;
var useLinodeConfigCreateMutation = function (linodeId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.createLinodeConfig)(linodeId, data); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.configs.queryKey,
            });
        },
    });
};
exports.useLinodeConfigCreateMutation = useLinodeConfigCreateMutation;
var useLinodeConfigUpdateMutation = function (linodeId, configId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updateLinodeConfig)(linodeId, configId, data); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.configs.queryKey,
            });
        },
    });
};
exports.useLinodeConfigUpdateMutation = useLinodeConfigUpdateMutation;
