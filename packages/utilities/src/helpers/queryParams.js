"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryParamFromQueryString = exports.getQueryParamsFromQueryString = void 0;
/**
 * Parses a query string (aka search string) and returns its values
 * as key value pairs.
 *
 * A leading '?', if present, is ignored.
 *
 * @param queryString The search string aka the query string to parse. This must ONLY be the query string and not the entire URL.
 * @returns An object of the parsed key/value pairs
 *
 * @example
 * getQueryParamsFromQueryString('?query=false&this=that')
 * // { query: 'false', this: 'that' }
 */
var getQueryParamsFromQueryString = function (queryString) { return Object.fromEntries(new URLSearchParams(queryString)); };
exports.getQueryParamsFromQueryString = getQueryParamsFromQueryString;
/**
 * Gets the value of a single query parameter by its name
 * @param queryString The search string aka the query string to parse. This must ONLY be the query string and not the entire URL.
 * @param paramName The name or key of the parameter you want the value of
 * @param defaultValue an optional default to fallback to if the query param is not found
 * @returns the value of the query parameter you requested
 *
 * @example
 * getQueryParamFromQueryString('?query=false&this=that', 'this')
 * // "that"
 */
var getQueryParamFromQueryString = function (queryString, paramName, defaultValue) {
    var _a;
    if (defaultValue === void 0) { defaultValue = ''; }
    var params = new URLSearchParams(queryString);
    return (_a = params.get(paramName)) !== null && _a !== void 0 ? _a : defaultValue;
};
exports.getQueryParamFromQueryString = getQueryParamFromQueryString;
