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
exports.getAll = void 0;
var constants_1 = require("../constants");
/**
 * getAll
 *
 * HOF that takes any paginated get function from the services library and returns a Promise
 * that resolves to an array of the passed object. The function makes an initial request
 * using the getter, then uses the response to determine the number of remaining pages.
 * Subsequent requests are then made and the results combined into a single array. This
 * procedure is necessary when retrieving all entities whenever the possible number of
 * entities is greater than the max number of results the API will return in a single page).
 *
 * @param getter { Function } one of the Get functions from the API services library. Accepts
 * pagination or filter parameters.
 *
 * @param pageSize Will default to the API_MAX_PAGE_SIZE.
 * @cb This is a weird one. Since getAll can in theory trigger a very long series of requests,
 * we need a hatch after the first request (at which point we know what's required).
 * The callback was originally added to allow us to mark an account as "large", since extremely large
 * accounts were bombing before the getAll method completed execution.
 *
 * @example const getAllLinodes = getAll(getLinodes)
 * @example getAllLinodes(params, filter)
 *
 */
var getAll = function (getter, pageSize, cb) {
    if (pageSize === void 0) { pageSize = constants_1.API_MAX_PAGE_SIZE; }
    return function (params, filter) {
        var pagination = __assign(__assign({}, params), { page_size: pageSize });
        return getter(pagination, filter).then(function (_a) {
            var firstPageData = _a.data, page = _a.page, pages = _a.pages, results = _a.results;
            // If we only have one page, return it.
            if (page === pages) {
                return {
                    data: firstPageData,
                    results: results,
                };
            }
            // If the number of results is over the threshold, use the callback
            // to mark the account as large
            if (cb) {
                cb(results);
            }
            var promises = [];
            // For all remaining pages, build a promise for each page that will be resolved in parallel.
            for (var i = page + 1; i < pages + 1; i++) {
                var promise = getter(__assign(__assign({}, pagination), { page: i }), filter).then(function (response) { return response.data; });
                promises.push(promise);
            }
            return (Promise.all(promises)
                /** We're given data[][], so we flatten that, and append the first page response. */
                .then(function (resultPages) {
                var combinedData = resultPages.reduce(function (result, nextPage) {
                    return __spreadArray(__spreadArray([], result, true), nextPage, true);
                }, firstPageData);
                return {
                    data: combinedData,
                    results: results,
                };
            }));
        });
    };
};
exports.getAll = getAll;
