"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var queryParams_1 = require("./queryParams");
(0, vitest_1.describe)('Url/query parsing utilities', function () {
    (0, vitest_1.describe)('parseQueryParams function', function () {
        (0, vitest_1.it)('should parse a url', function () {
            (0, vitest_1.expect)((0, queryParams_1.getQueryParamsFromQueryString)('?query=false')).toEqual({
                query: 'false',
            });
        });
        (0, vitest_1.it)('should handle multiple key/value pairs', function () {
            (0, vitest_1.expect)((0, queryParams_1.getQueryParamsFromQueryString)('?query=false&this=that')).toEqual({
                query: 'false',
                this: 'that',
            });
        });
        (0, vitest_1.it)('should handle escaped whitespace', function () {
            (0, vitest_1.expect)((0, queryParams_1.getQueryParamsFromQueryString)('?query=this%20that')).toEqual({
                query: 'this that',
            });
        });
        (0, vitest_1.it)('should handle blank input', function () {
            (0, vitest_1.expect)((0, queryParams_1.getQueryParamsFromQueryString)('')).toEqual({});
        });
    });
    (0, vitest_1.describe)('getQueryParam method', function () {
        (0, vitest_1.it)('should get the value of a query parameter', function () {
            (0, vitest_1.expect)((0, queryParams_1.getQueryParamFromQueryString)('?query=false', 'query')).toEqual('false');
        });
        (0, vitest_1.it)('should return the default value if no value is present', function () {
            (0, vitest_1.expect)((0, queryParams_1.getQueryParamFromQueryString)('?query=', 'notaquery', 'defaultQuery')).toEqual('defaultQuery');
        });
        (0, vitest_1.it)('should handle a blank param value', function () {
            (0, vitest_1.expect)((0, queryParams_1.getQueryParamFromQueryString)('?query=', 'query', 'defaultQuery')).toEqual('');
        });
        (0, vitest_1.it)('should not care about the initial ?', function () {
            (0, vitest_1.expect)((0, queryParams_1.getQueryParamFromQueryString)('query=blue', 'query')).toEqual('blue');
        });
        (0, vitest_1.it)('should return a single query param from a URL string', function () {
            (0, vitest_1.expect)((0, queryParams_1.getQueryParamFromQueryString)('https://example.com/?query=false&this=that', 'this')).toBe('that');
        });
        (0, vitest_1.it)('should return the default value if no value is present', function () {
            (0, vitest_1.expect)((0, queryParams_1.getQueryParamFromQueryString)('https://example.com/?query=', 'notaquery', 'defaultQuery')).toEqual('defaultQuery');
        });
    });
});
