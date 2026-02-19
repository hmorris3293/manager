"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntityIdsByPermission = void 0;
/**
 * Gets entity ids for a specified permission level given a user's grants
 * @param grants user grants (probably from React Query)
 * @param entity the entity type you want grants for
 * @param permission the level of permission you want ids for. Omit this for all entity ids.
 * @returns a list of entity ids that match given paramaters
 */
var getEntityIdsByPermission = function (grants, entity, permission) {
    if (!grants) {
        return [];
    }
    if (permission === undefined) {
        return grants[entity].map(function (grant) { return grant.id; });
    }
    return grants[entity]
        .filter(function (grant) { return grant.permissions === permission; })
        .map(function (grant) { return grant.id; });
};
exports.getEntityIdsByPermission = getEntityIdsByPermission;
