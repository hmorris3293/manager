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
exports.useLinodeBackupRestoreMutation = exports.useLinodeBackupSnapshotMutation = exports.useLinodeBackupsCancelMutation = exports.useLinodeBackupsEnableMutation = exports.useLinodeBackupsQuery = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var linodes_1 = require("./linodes");
var useLinodeBackupsQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, linodes_1.linodeQueries.linode(id)._ctx.backups), { enabled: enabled }));
};
exports.useLinodeBackupsQuery = useLinodeBackupsQuery;
var useLinodeBackupsEnableMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.enableBackups)(id); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linodes.queryKey,
            });
            queryClient.invalidateQueries({
                exact: true,
                queryKey: linodes_1.linodeQueries.linode(id).queryKey,
            });
        },
    });
};
exports.useLinodeBackupsEnableMutation = useLinodeBackupsEnableMutation;
var useLinodeBackupsCancelMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.cancelBackups)(id); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linodes.queryKey,
            });
            queryClient.invalidateQueries({
                exact: true,
                queryKey: linodes_1.linodeQueries.linode(id).queryKey,
            });
        },
    });
};
exports.useLinodeBackupsCancelMutation = useLinodeBackupsCancelMutation;
var useLinodeBackupSnapshotMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var label = _a.label;
            return (0, api_v4_1.takeSnapshot)(id, label);
        },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linodes.queryKey,
            });
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(id)._ctx.backups.queryKey,
            });
            queryClient.invalidateQueries({
                exact: true,
                queryKey: linodes_1.linodeQueries.linode(id).queryKey,
            });
        },
    });
};
exports.useLinodeBackupSnapshotMutation = useLinodeBackupSnapshotMutation;
var useLinodeBackupRestoreMutation = function () {
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var backupId = _a.backupId, linodeId = _a.linodeId, overwrite = _a.overwrite, targetLinodeId = _a.targetLinodeId;
            return (0, api_v4_1.restoreBackup)(linodeId, backupId, targetLinodeId, overwrite);
        },
    });
};
exports.useLinodeBackupRestoreMutation = useLinodeBackupRestoreMutation;
