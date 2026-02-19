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
exports.useLinodeDiskResizeMutation = exports.useLinodeDiskUpdateMutation = exports.useLinodeDiskCreateMutation = exports.useLinodeDeleteDiskMutation = exports.useLinodeDiskChangePasswordMutation = exports.useAllLinodeDisksQuery = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var linodes_1 = require("./linodes");
var useAllLinodeDisksQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, linodes_1.linodeQueries.linode(id)._ctx.disks), { enabled: enabled }));
};
exports.useAllLinodeDisksQuery = useAllLinodeDisksQuery;
var useLinodeDiskChangePasswordMutation = function (linodeId, diskId) {
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var password = _a.password;
            return (0, api_v4_1.changeLinodeDiskPassword)(linodeId, diskId, password);
        },
    });
};
exports.useLinodeDiskChangePasswordMutation = useLinodeDiskChangePasswordMutation;
var useLinodeDeleteDiskMutation = function (linodeId, diskId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deleteLinodeDisk)(linodeId, diskId); },
        onSuccess: function () {
            queryClient.invalidateQueries(linodes_1.linodeQueries.linode(linodeId)._ctx.disks);
        },
    });
};
exports.useLinodeDeleteDiskMutation = useLinodeDeleteDiskMutation;
var useLinodeDiskCreateMutation = function (linodeId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.createLinodeDisk)(linodeId, data); },
        onSuccess: function () {
            queryClient.invalidateQueries(linodes_1.linodeQueries.linode(linodeId)._ctx.disks);
        },
    });
};
exports.useLinodeDiskCreateMutation = useLinodeDiskCreateMutation;
var useLinodeDiskUpdateMutation = function (linodeId, diskId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updateLinodeDisk)(linodeId, diskId, data); },
        onSuccess: function () {
            queryClient.invalidateQueries(linodes_1.linodeQueries.linode(linodeId)._ctx.disks);
        },
    });
};
exports.useLinodeDiskUpdateMutation = useLinodeDiskUpdateMutation;
var useLinodeDiskResizeMutation = function (linodeId, diskId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var size = _a.size;
            return (0, api_v4_1.resizeLinodeDisk)(linodeId, diskId, size);
        },
        onSuccess: function () {
            queryClient.invalidateQueries(linodes_1.linodeQueries.linode(linodeId)._ctx.disks);
        },
    });
};
exports.useLinodeDiskResizeMutation = useLinodeDiskResizeMutation;
