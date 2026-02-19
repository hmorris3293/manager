"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var vitest_1 = require("vitest");
var replaceNewlinesWithLineBreaks_1 = require("./replaceNewlinesWithLineBreaks");
(0, vitest_1.describe)('replaceNewlinesWithLineBreaks', function () {
    (0, vitest_1.it)('Replaces newlines with line breaks', function () {
        var noBreaks = 'test string with no line breaks';
        (0, vitest_1.expect)((0, replaceNewlinesWithLineBreaks_1.replaceNewlinesWithLineBreaks)(noBreaks)).toEqual([noBreaks]);
        var oneBreak = 'test string\nwith one break';
        (0, vitest_1.expect)((0, replaceNewlinesWithLineBreaks_1.replaceNewlinesWithLineBreaks)(oneBreak)).toEqual([
            <react_1.default.Fragment key={0}>
        test string
        <br />
      </react_1.default.Fragment>,
            'with one break',
        ]);
        var twoBreaks = 'test string\nwith two\nbreaks';
        (0, vitest_1.expect)((0, replaceNewlinesWithLineBreaks_1.replaceNewlinesWithLineBreaks)(twoBreaks)).toEqual([
            <react_1.default.Fragment key={0}>
        test string
        <br />
      </react_1.default.Fragment>,
            <react_1.default.Fragment key={1}>
        with two
        <br />
      </react_1.default.Fragment>,
            'breaks',
        ]);
    });
});
