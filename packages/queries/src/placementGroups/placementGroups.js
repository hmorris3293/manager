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
exports.placementGroupEventHandler = exports.useUnassignLinodesFromPlacementGroup = exports.useAssignLinodesToPlacementGroup = exports.useDeletePlacementGroup = exports.useMutatePlacementGroup = exports.useCreatePlacementGroup = exports.usePlacementGroupQuery = exports.usePlacementGroupsQuery = exports.useAllPlacementGroupsQuery = exports.placementGroupQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var utilities_1 = require("@linode/utilities");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var linodes_1 = require("../linodes");
var profile_1 = require("../profile");
var getAllPlacementGroupsRequest = function (_params, _filter) {
    if (_params === void 0) { _params = {}; }
    if (_filter === void 0) { _filter = {}; }
    return (0, utilities_1.getAll)(function (params, filter) {
        return (0, api_v4_1.getPlacementGroups)(__assign(__assign({}, params), _params), __assign(__assign({}, filter), _filter));
    })().then(function (data) { return data.data; });
};
exports.placementGroupQueries = (0, query_key_factory_1.createQueryKeys)('placement-groups', {
    all: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return getAllPlacementGroupsRequest(params, filter); },
            queryKey: [params, filter],
        });
    },
    paginated: function (params, filter) { return ({
        queryFn: function () { return (0, api_v4_1.getPlacementGroups)(params, filter); },
        queryKey: [params, filter],
    }); },
    placementGroup: function (placementGroupId) { return ({
        queryFn: function () { return (0, api_v4_1.getPlacementGroup)(placementGroupId); },
        queryKey: [placementGroupId],
    }); },
});
var useAllPlacementGroupsQuery = function (_a) {
    var _b = _a.enabled, enabled = _b === void 0 ? true : _b, _c = _a.filter, filter = _c === void 0 ? {} : _c, _d = _a.params, params = _d === void 0 ? {} : _d;
    return (0, react_query_1.useQuery)(__assign({ enabled: enabled }, exports.placementGroupQueries.all(params, filter)));
};
exports.useAllPlacementGroupsQuery = useAllPlacementGroupsQuery;
var usePlacementGroupsQuery = function (params, filter, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign({ enabled: enabled, placeholderData: react_query_1.keepPreviousData }, exports.placementGroupQueries.paginated(params, filter)));
};
exports.usePlacementGroupsQuery = usePlacementGroupsQuery;
var usePlacementGroupQuery = function (placementGroupId, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign({ enabled: enabled }, exports.placementGroupQueries.placementGroup(placementGroupId)));
};
exports.usePlacementGroupQuery = usePlacementGroupQuery;
var useCreatePlacementGroup = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createPlacementGroup,
        onSuccess: function (placementGroup) {
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.paginated._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.all._def,
            });
            queryClient.setQueryData(exports.placementGroupQueries.placementGroup(placementGroup.id).queryKey, placementGroup);
            // If a restricted user creates an entity, we must make sure grants are up to date.
            queryClient.invalidateQueries({
                queryKey: profile_1.profileQueries.grants.queryKey,
            });
        },
    });
};
exports.useCreatePlacementGroup = useCreatePlacementGroup;
var useMutatePlacementGroup = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updatePlacementGroup)(id, data); },
        onSuccess: function (placementGroup) {
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.paginated._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.all._def,
            });
            queryClient.setQueryData(exports.placementGroupQueries.placementGroup(id).queryKey, placementGroup);
        },
    });
};
exports.useMutatePlacementGroup = useMutatePlacementGroup;
var useDeletePlacementGroup = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.deletePlacementGroup)(id); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.paginated._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.all._def,
            });
            queryClient.removeQueries({
                queryKey: exports.placementGroupQueries.placementGroup(id).queryKey,
            });
        },
    });
};
exports.useDeletePlacementGroup = useDeletePlacementGroup;
var useAssignLinodesToPlacementGroup = function (placementGroupId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (req) { return (0, api_v4_1.assignLinodesToPlacementGroup)(placementGroupId, req); },
        onSuccess: function (_, variables) {
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.paginated._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.all._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.placementGroup(placementGroupId).queryKey,
            });
            queryClient.invalidateQueries(linodes_1.linodeQueries.linodes);
            for (var _i = 0, _a = variables.linodes; _i < _a.length; _i++) {
                var linodeId = _a[_i];
                queryClient.invalidateQueries({
                    exact: true,
                    queryKey: linodes_1.linodeQueries.linode(linodeId).queryKey,
                });
            }
        },
    });
};
exports.useAssignLinodesToPlacementGroup = useAssignLinodesToPlacementGroup;
var useUnassignLinodesFromPlacementGroup = function (placementGroupId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (req) {
            return (0, api_v4_1.unassignLinodesFromPlacementGroup)(placementGroupId, req);
        },
        onSuccess: function (_, variables) {
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.paginated._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.all._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.placementGroupQueries.placementGroup(placementGroupId).queryKey,
            });
            queryClient.invalidateQueries(linodes_1.linodeQueries.linodes);
            for (var _i = 0, _a = variables.linodes; _i < _a.length; _i++) {
                var linodeId = _a[_i];
                queryClient.invalidateQueries({
                    exact: true,
                    queryKey: linodes_1.linodeQueries.linode(linodeId).queryKey,
                });
            }
        },
    });
};
exports.useUnassignLinodesFromPlacementGroup = useUnassignLinodesFromPlacementGroup;
var placementGroupEventHandler = function (_a) {
    var event = _a.event, invalidateQueries = _a.invalidateQueries;
    var action = event.action, entity = event.entity, secondary_entity = event.secondary_entity;
    // for assignment/unassignment events
    // in the case of a migration, the assignment/unassignment events are happening asynchronously,
    // without using the hook. We need to invalidate the placement group queries here.
    // invalidateQueries({ queryKey: placementGroupQueries._def });
    // event looks as follow:
    // {
    //   "id": {id},
    //   "created": {created},
    //   "seen": false,
    //   "read": false,
    //   "percent_complete": null,
    //   "time_remaining": null,
    //   "rate": null,
    //   "duration": null,
    //   "action": "placement_group_unassign",
    //   "username": {username},
    //   "entity": {
    //       "label": {label},
    //       "id": {id},
    //       "type": "placement_group",
    //       "url": "/v4/placement/groups/{id}"
    //   },
    //   "status": "notification",
    //   "secondary_entity": {
    //       "id": {id},
    //       "type": "linode",
    //       "label": {label},
    //       "url": "/v4/linode/instances/{id}"
    //   },
    //   "message": ""
    // }
    if (action !== 'placement_group_unassign' &&
        action !== 'placement_group_assign') {
        return;
    }
    if (entity && secondary_entity) {
        invalidateQueries({
            queryKey: exports.placementGroupQueries.placementGroup(entity.id).queryKey,
        });
        invalidateQueries({
            queryKey: linodes_1.linodeQueries.linode(secondary_entity.id).queryKey,
        });
    }
    invalidateQueries({
        queryKey: exports.placementGroupQueries.paginated._def,
    });
    invalidateQueries({
        queryKey: linodes_1.linodeQueries.linodes._ctx.all._def,
    });
};
exports.placementGroupEventHandler = placementGroupEventHandler;
