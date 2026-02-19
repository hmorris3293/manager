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
exports.useDetachVolumeMutation = exports.useAttachVolumeMutation = exports.useUpdateVolumeMutation = exports.useVolumesMigrateMutation = exports.useCreateVolumeMutation = exports.useDeleteVolumeMutation = exports.useCloneVolumeMutation = exports.useResizeVolumeMutation = exports.useLinodeVolumesQuery = exports.useAllVolumesQuery = exports.useInfiniteVolumesQuery = exports.useVolumeTypesQuery = exports.useVolumesQuery = exports.useVolumeQuery = exports.volumeQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var account_1 = require("../account");
var base_1 = require("../base");
var profile_1 = require("../profile");
var requests_1 = require("./requests");
exports.volumeQueries = (0, query_key_factory_1.createQueryKeys)('volumes', {
    linode: function (linodeId) { return ({
        contextQueries: {
            volumes: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, api_v4_1.getLinodeVolumes)(linodeId, params, filter); },
                    queryKey: [params, filter],
                });
            },
        },
        queryKey: [linodeId],
    }); },
    lists: {
        contextQueries: {
            all: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, requests_1.getAllVolumes)(params, filter); },
                    queryKey: [params, filter],
                });
            },
            infinite: function (filter) {
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function (_a) {
                        var pageParam = _a.pageParam;
                        return (0, api_v4_1.getVolumes)({ page: pageParam, page_size: 25 }, filter);
                    },
                    queryKey: [filter],
                });
            },
            paginated: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, api_v4_1.getVolumes)(params, filter); },
                    queryKey: [params, filter],
                });
            },
        },
        queryKey: null,
    },
    types: {
        queryFn: requests_1.getAllVolumeTypes,
        queryKey: null,
    },
    volume: function (id) { return ({
        queryFn: function () { return (0, api_v4_1.getVolume)(id); },
        queryKey: [id],
    }); },
});
var useVolumeQuery = function (id, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.volumeQueries.volume(id)), { enabled: enabled }));
};
exports.useVolumeQuery = useVolumeQuery;
var useVolumesQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.volumeQueries.lists._ctx.paginated(params, filter)), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useVolumesQuery = useVolumesQuery;
var useVolumeTypesQuery = function () {
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.volumeQueries.types), base_1.queryPresets.oneTimeFetch));
};
exports.useVolumeTypesQuery = useVolumeTypesQuery;
var useInfiniteVolumesQuery = function (filter, enabled) {
    return (0, react_query_1.useInfiniteQuery)(__assign(__assign({}, exports.volumeQueries.lists._ctx.infinite(filter)), { enabled: enabled, getNextPageParam: function (_a) {
            var page = _a.page, pages = _a.pages;
            if (page === pages) {
                return undefined;
            }
            return page + 1;
        }, initialPageParam: 1, retry: false }));
};
exports.useInfiniteVolumesQuery = useInfiniteVolumesQuery;
var useAllVolumesQuery = function (params, filter, enabled) {
    if (params === void 0) { params = {}; }
    if (filter === void 0) { filter = {}; }
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.volumeQueries.lists._ctx.all(params, filter)), { enabled: enabled }));
};
exports.useAllVolumesQuery = useAllVolumesQuery;
var useLinodeVolumesQuery = function (linodeId, params, filter, enabled) {
    if (params === void 0) { params = {}; }
    if (filter === void 0) { filter = {}; }
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.volumeQueries.linode(linodeId)._ctx.volumes(params, filter)), { enabled: enabled, placeholderData: react_query_1.keepPreviousData }));
};
exports.useLinodeVolumesQuery = useLinodeVolumesQuery;
var useResizeVolumeMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var volumeId = _a.volumeId, data = __rest(_a, ["volumeId"]);
            return (0, api_v4_1.resizeVolume)(volumeId, data);
        },
        onSuccess: function (volume) {
            // Update the specific volume
            queryClient.setQueryData(exports.volumeQueries.volume(volume.id).queryKey, volume);
            // Invalidate all lists
            queryClient.invalidateQueries({
                queryKey: exports.volumeQueries.lists.queryKey,
            });
            // If the volume is assigned to a Linode, invalidate that Linode's list
            if (volume.linode_id) {
                queryClient.invalidateQueries({
                    queryKey: exports.volumeQueries.linode(volume.linode_id)._ctx.volumes._def,
                });
            }
        },
    });
};
exports.useResizeVolumeMutation = useResizeVolumeMutation;
var useCloneVolumeMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var volumeId = _a.volumeId, data = __rest(_a, ["volumeId"]);
            return (0, api_v4_1.cloneVolume)(volumeId, data);
        },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: exports.volumeQueries.lists.queryKey,
            });
        },
    });
};
exports.useCloneVolumeMutation = useCloneVolumeMutation;
var useDeleteVolumeMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var id = _a.id;
            return (0, api_v4_1.deleteVolume)(id);
        },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: exports.volumeQueries.lists.queryKey,
            });
        },
    });
};
exports.useDeleteVolumeMutation = useDeleteVolumeMutation;
var useCreateVolumeMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createVolume,
        onSuccess: function (volume) {
            queryClient.invalidateQueries({
                queryKey: exports.volumeQueries.lists.queryKey,
            });
            if (volume.linode_id) {
                queryClient.invalidateQueries({
                    queryKey: exports.volumeQueries.linode(volume.linode_id)._ctx.volumes._def,
                });
            }
            // If a restricted user creates an entity, we must make sure grants are up to date.
            queryClient.invalidateQueries({
                queryKey: profile_1.profileQueries.grants.queryKey,
            });
        },
    });
};
exports.useCreateVolumeMutation = useCreateVolumeMutation;
var useVolumesMigrateMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.migrateVolumes,
        onSuccess: function () {
            // If a customer "force" migrates they will then see a
            // `volume_migration_imminent` notification instead of
            // the `volume_migration_scheduled` notification.
            setTimeout(function () {
                // Refetch notifications after 1.5 seconds. The API needs some time to process.
                queryClient.invalidateQueries({
                    queryKey: account_1.accountQueries.notifications.queryKey,
                });
            }, 1500);
        },
    });
};
exports.useVolumesMigrateMutation = useVolumesMigrateMutation;
var useUpdateVolumeMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var volumeId = _a.volumeId, data = __rest(_a, ["volumeId"]);
            return (0, api_v4_1.updateVolume)(volumeId, data);
        },
        onSuccess: function (volume) {
            // Update the specific volume
            queryClient.setQueryData(exports.volumeQueries.volume(volume.id).queryKey, volume);
            // Invalidate all lists
            queryClient.invalidateQueries({
                queryKey: exports.volumeQueries.lists.queryKey,
            });
            // If the volume is assigned to a Linode, invalidate that Linodes's list
            if (volume.linode_id) {
                queryClient.invalidateQueries({
                    queryKey: exports.volumeQueries.linode(volume.linode_id)._ctx.volumes._def,
                });
            }
        },
    });
};
exports.useUpdateVolumeMutation = useUpdateVolumeMutation;
var useAttachVolumeMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var volumeId = _a.volumeId, data = __rest(_a, ["volumeId"]);
            return (0, api_v4_1.attachVolume)(volumeId, data);
        },
        onSuccess: function (volume) {
            // Update the specific volume
            queryClient.setQueryData(exports.volumeQueries.volume(volume.id).queryKey, volume);
            // Invalidate all lists
            queryClient.invalidateQueries({
                queryKey: exports.volumeQueries.lists.queryKey,
            });
            // If the volume is assigned to a Linode, invalidate that Linode's list
            if (volume.linode_id) {
                queryClient.invalidateQueries({
                    queryKey: exports.volumeQueries.linode(volume.linode_id)._ctx.volumes._def,
                });
            }
        },
    });
};
exports.useAttachVolumeMutation = useAttachVolumeMutation;
var useDetachVolumeMutation = function () {
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var id = _a.id;
            return (0, api_v4_1.detachVolume)(id);
        },
    });
};
exports.useDetachVolumeMutation = useDetachVolumeMutation;
