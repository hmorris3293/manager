"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var groupByTags_1 = require("./groupByTags");
/**
 * [Tag, Linode[]]s
 */
(0, vitest_1.describe)('groupByTags', function () {
    (0, vitest_1.it)('return return a tuple[0] _ for entities without tags', function () {
        var values = [
            { id: 1, tags: [] },
            { id: 2, tags: [] },
            { id: 3, tags: [] },
        ];
        var expected = [[groupByTags_1.NONE, values]];
        var result = (0, groupByTags_1.groupByTags)(values);
        (0, vitest_1.expect)(result).toEqual(expected);
    });
    (0, vitest_1.it)('should create a Record for reach tag.', function () {
        var a = { id: 1, tags: ['ccc'] };
        var b = { id: 2, tags: ['aaa'] };
        var c = { id: 3, tags: ['bbb'] };
        var values = [a, b, c];
        var result = (0, groupByTags_1.groupByTags)(values);
        var expected = [
            ['ccc', [a]],
            ['aaa', [b]],
            ['bbb', [c]],
        ];
        (0, vitest_1.expect)(result).toEqual(expected);
    });
    (0, vitest_1.it)('should append to the entities list', function () {
        var a = { id: 1, tags: ['aaa'] };
        var b = { id: 2, tags: ['bbb'] };
        var c = { id: 3, tags: ['bbb'] };
        var values = [a, b, c];
        var result = (0, groupByTags_1.groupByTags)(values);
        var expected = [
            ['aaa', [a]],
            ['bbb', [b, c]],
        ];
        (0, vitest_1.expect)(result).toEqual(expected);
    });
    (0, vitest_1.it)('entities can appear in multiple entity lists.', function () {
        var a = { id: 1, tags: ['aaa'] };
        var b = { id: 2, tags: ['bbb', 'aaa'] };
        var c = { id: 3, tags: ['bbb'] };
        var values = [a, b, c];
        var result = (0, groupByTags_1.groupByTags)(values);
        var expected = [
            ['aaa', [a, b]],
            ['bbb', [b, c]],
        ];
        (0, vitest_1.expect)(result).toEqual(expected);
    });
});
