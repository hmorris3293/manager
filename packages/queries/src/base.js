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
exports.doesItemExistInPaginatedStore = exports.getItemInPaginatedStore = exports.updateInPaginatedStore = exports.itemInListDeletionHandler = exports.itemInListCreationHandler = exports.itemInListMutationHandler = exports.deletionHandlers = exports.creationHandlers = exports.simpleMutationHandlers = exports.mutationHandlers = exports.listToItemsByID = exports.queryClientFactory = exports.queryPresets = void 0;
var request_1 = require("@linode/api-v4/lib/request");
var react_query_1 = require("@tanstack/react-query");
// =============================================================================
// Config
// =============================================================================
exports.queryPresets = {
    longLived: {
        cacheTime: 10 * 60 * 1000,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        staleTime: 5 * 60 * 1000,
    },
    noRetry: {
        retry: false,
    },
    oneTimeFetch: {
        cacheTime: Infinity,
        staleTime: Infinity,
    },
    shortLived: {
        cacheTime: 5 * 60 * 1000,
        refetchOnMount: true,
        refetchOnWindowFocus: true,
        staleTime: 0,
    },
};
/**
 * A list of API v4 error reasons for which we should *not* retry the API request.
 */
var reasonsToNotRety = ['Unauthorized', 'Not found'];
/**
 * Number of times a query is retried by default.
 */
var DEFAULT_RETRIES = 3;
/**
 * Creates and returns a new TanStack Query query client instance.
 *
 * Allows the query client behavior to be configured by specifying a preset. The
 * 'longLived' preset is most suitable for production use, while 'oneTimeFetch' is
 * preferred for tests.
 *
 * @param preset - Optional query preset for client. Either 'longLived' or 'oneTimeFetch'.
 *
 * @returns New `QueryClient` instance.
 */
var queryClientFactory = function (preset) {
    if (preset === void 0) { preset = 'oneTimeFetch'; }
    return new react_query_1.QueryClient({
        defaultOptions: {
            queries: __assign({ retry: function (failureCount, error) {
                    if (getIsAPIErrorArray(error)) {
                        // For some API errors, we don't want to retry.
                        // Ideally, we'd do this conditionally based on the HTTP status code,
                        // but the creators of the `APIError[]` type didn't think to surface
                        // the status code, so we do it based on the `reason`.
                        if (error.some(function (e) { return reasonsToNotRety.includes(e.reason); })) {
                            return false;
                        }
                    }
                    return failureCount < DEFAULT_RETRIES;
                } }, exports.queryPresets[preset]),
        },
    });
};
exports.queryClientFactory = queryClientFactory;
// =============================================================================
// Utility Functions
// =============================================================================
/**
 * getIsAPIErrorArray
 * @param error an unknown error
 * @returns If the error is a APIError[]
 */
function getIsAPIErrorArray(error) {
    var _a;
    if (!Array.isArray(error)) {
        return false;
    }
    if (error.length === 0) {
        // an empty array counts as a APIError[]
        return true;
    }
    // If the first element in the array contains a `reason` property,
    // we'll assume this is an APIError[]
    return Boolean((_a = error[0]) === null || _a === void 0 ? void 0 : _a.reason);
}
/**
 * "Indexers" for the following methods are included to handle
 * the case where an entity's primary key isn't "id." By
 * default, these methods will try to map Entity.id: Entity,
 * but consumers can override this to map over whatever value
 * is unique to that entity type. One example of this is Entity Transfers,
 * which have a unique primary key of "token."
 *
 */
var listToItemsByID = function (entityList, indexer) {
    if (indexer === void 0) { indexer = 'id'; }
    return entityList.reduce(function (map, item) {
        var _a;
        return (__assign(__assign({}, map), (_a = {}, _a[item[indexer]] = item, _a)));
    }, {});
};
exports.listToItemsByID = listToItemsByID;
var mutationHandlers = function (queryKey, indexer, queryClient) {
    if (indexer === void 0) { indexer = 'id'; }
    return {
        onSuccess: function (updatedEntity, variables) {
            // Update the query data to include the newly updated Entity.
            queryClient.setQueryData(queryKey, function (oldData) {
                var _a;
                return (__assign(__assign({}, oldData), (_a = {}, _a[variables[indexer]] = updatedEntity, _a)));
            });
        },
    };
};
exports.mutationHandlers = mutationHandlers;
var simpleMutationHandlers = function (queryKey, queryClient) {
    return {
        onSuccess: function (updatedEntity, variables) {
            queryClient.setQueryData(queryKey, function (oldData) { return (__assign(__assign({}, oldData), ((0, request_1.isEmpty)(updatedEntity) ? variables : updatedEntity))); });
        },
    };
};
exports.simpleMutationHandlers = simpleMutationHandlers;
var creationHandlers = function (queryKey, indexer, queryClient) {
    if (indexer === void 0) { indexer = 'id'; }
    return {
        onSuccess: function (updatedEntity) {
            // Add the new Entity to the existing data.
            queryClient.setQueryData(queryKey, function (oldData) {
                var _a;
                return (__assign(__assign({}, oldData), (_a = {}, _a[updatedEntity[indexer]] = updatedEntity, _a)));
            });
        },
    };
};
exports.creationHandlers = creationHandlers;
var deletionHandlers = function (queryKey, indexer, queryClient) {
    if (indexer === void 0) { indexer = 'id'; }
    return {
        onSuccess: function (_, variables) {
            // Remove the Entity from the existing data.
            queryClient.setQueryData(queryKey, function (oldData) {
                var oldDataCopy = __assign({}, oldData);
                delete oldDataCopy[variables[indexer]];
                return oldDataCopy;
            });
        },
    };
};
exports.deletionHandlers = deletionHandlers;
var itemInListMutationHandler = function (queryKey, queryClient) {
    return {
        onSuccess: function (updatedEntity, variables) {
            queryClient.setQueryData(queryKey, function (oldData) {
                if (!oldData) {
                    return [];
                }
                var index = oldData === null || oldData === void 0 ? void 0 : oldData.findIndex(function (item) { return item.id === updatedEntity.id; });
                if (index === -1) {
                    return oldData;
                }
                var copy = __spreadArray([], oldData, true);
                copy[index] = updatedEntity;
                return copy;
            });
        },
    };
};
exports.itemInListMutationHandler = itemInListMutationHandler;
var itemInListCreationHandler = function (queryKey, queryClient) {
    return {
        onSuccess: function (createdEntity) {
            queryClient.setQueryData(queryKey, function (oldData) {
                if (!oldData) {
                    return [];
                }
                oldData = __spreadArray(__spreadArray([], oldData, true), [createdEntity], false);
                return oldData;
            });
        },
    };
};
exports.itemInListCreationHandler = itemInListCreationHandler;
var itemInListDeletionHandler = function (queryKey, queryClient) {
    return {
        onSuccess: function (_, variables) {
            queryClient.setQueryData(queryKey, function (oldData) {
                if (!oldData) {
                    return [];
                }
                var index = oldData === null || oldData === void 0 ? void 0 : oldData.findIndex(function (item) { return item.id === variables.id; });
                if (index === -1) {
                    return oldData;
                }
                var copy = __spreadArray([], oldData, true);
                copy.splice(index, 1);
                return copy;
            });
        },
    };
};
exports.itemInListDeletionHandler = itemInListDeletionHandler;
/**
 * Use this function when you wish to update one entity within paginated React Query data
 * @param queryKey The React Query queryKey prefix of paginated data (without the filters and page)
 * @param id the id of the entity of you want to update within this paginated data
 * @param newData the new data for the entity
 */
var updateInPaginatedStore = function (queryKey, id, newData, queryClient) {
    queryClient.setQueriesData({ queryKey: queryKey }, function (oldData) {
        if (oldData === undefined) {
            return undefined;
        }
        var toUpdateIndex = oldData.data.findIndex(function (entity) { return entity.id === id; });
        var isEntityOnPage = toUpdateIndex !== -1;
        if (!isEntityOnPage) {
            return oldData;
        }
        var updatedPaginatedData = __spreadArray([], oldData.data, true);
        updatedPaginatedData[toUpdateIndex] = __assign(__assign({}, oldData.data[toUpdateIndex]), newData);
        return __assign(__assign({}, oldData), { data: updatedPaginatedData });
    });
};
exports.updateInPaginatedStore = updateInPaginatedStore;
var getItemInPaginatedStore = function (queryKey, id, queryClient) {
    var _a;
    var stores = queryClient.getQueriesData({
        queryKey: queryKey,
    });
    for (var _i = 0, stores_1 = stores; _i < stores_1.length; _i++) {
        var store = stores_1[_i];
        var data = (_a = store[1]) === null || _a === void 0 ? void 0 : _a.data;
        var item = data === null || data === void 0 ? void 0 : data.find(function (item) { return item.id === id; });
        if (item) {
            return item;
        }
    }
    return null;
};
exports.getItemInPaginatedStore = getItemInPaginatedStore;
var doesItemExistInPaginatedStore = function (queryKey, id, queryClient) {
    var item = (0, exports.getItemInPaginatedStore)(queryKey, id, queryClient);
    return item !== null;
};
exports.doesItemExistInPaginatedStore = doesItemExistInPaginatedStore;
