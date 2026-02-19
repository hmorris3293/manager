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
exports.sortGroups = exports.groupByGroup = exports.groupByTags = exports.NONE = void 0;
/** The key on which we will store entities without tags. */
exports.NONE = "No Tags";
/** Safely push onto an array. */
var addTo = function (list, i) {
    if (list === void 0) { list = []; }
    return __spreadArray(__spreadArray([], list, true), [i], false);
};
/**
 * If an entity has no tags, push it onto the none record, otherwise iterate over its
 * tags pushing the entity onto the appropriate record.
 */
var reduceEntitiesToTags = function (obj, entity) {
    var _a;
    var _b = entity.tags, tags = _b === void 0 ? [] : _b;
    return tags.length === 0
        ? __assign(__assign({}, obj), (_a = {}, _a[exports.NONE] = addTo(obj[exports.NONE], entity), _a)) : entity.tags.reduce(addToArrayAtKey(entity), obj);
};
/** Literally push a value on an array at a specificed key of an array. */
var addToArrayAtKey = function (value) {
    return function (obj, key) {
        var _a;
        return __assign(__assign({}, obj), (_a = {}, _a[key] = addTo(obj[key], value), _a));
    };
};
/** Create a group map based on tags. */
var groupByTags = function (arr) {
    var map = arr.reduce(reduceEntitiesToTags, {});
    return Object.entries(map);
};
exports.groupByTags = groupByTags;
/** Just in case... */
var reduceEntitiesToGroup = function (obj, entity) {
    var _a, _b;
    var group = entity.group;
    return !group || group === ''
        ? __assign(__assign({}, obj), (_a = {}, _a[exports.NONE] = addTo(obj[exports.NONE], entity), _a)) : __assign(__assign({}, obj), (_b = {}, _b[group] = addTo(obj[group], entity), _b));
};
var groupByGroup = function (arr) {
    var map = arr.reduce(reduceEntitiesToGroup, {});
    return Object.entries(map);
};
exports.groupByGroup = groupByGroup;
/**
 * Moves the NONE to the bottom, and alphabetically sorts the remainder.
 */
var sortGroups = function (groups) {
    var foundUntaggedIndex;
    var idx = 0;
    var len = groups.length;
    for (; idx < len; idx++) {
        var tag = groups[idx][0];
        if (tag === exports.NONE) {
            foundUntaggedIndex = idx;
            break;
        }
    }
    if (typeof foundUntaggedIndex === 'undefined') {
        return groups.sort(function (_a, _b) {
            var firstTag = _a[0];
            var secondTag = _b[0];
            return firstTag > secondTag ? 0 : -1;
        });
    }
    return __spreadArray(__spreadArray([], groups
        .filter(function (_a) {
        var tag = _a[0];
        return tag !== exports.NONE;
    })
        .sort(function (_a, _b) {
        var firstTag = _a[0];
        var secondTag = _b[0];
        return (firstTag > secondTag ? 0 : -1);
    }), true), [
        groups[foundUntaggedIndex],
    ], false);
};
exports.sortGroups = sortGroups;
